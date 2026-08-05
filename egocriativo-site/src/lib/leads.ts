import { track } from './analytics';
import { waLink } from '../content/site';

export interface Lead {
  nome: string;
  whatsapp: string;
  empresa?: string;
  gargalo?: string;
  verba?: string;
}

export interface LeadResult {
  ok: boolean;
  /** Quando o envio falha, devolve um link de WhatsApp já preenchido — o lead não se perde. */
  fallbackWa?: string;
}

/** Resumo legível do lead, usado na mensagem de WhatsApp do fallback. */
function resumo(lead: Lead) {
  const linhas = [
    'Olá! Pedi um diagnóstico pelo site.',
    `Nome: ${lead.nome}`,
    lead.empresa && `Empresa: ${lead.empresa}`,
    lead.gargalo && `Maior gargalo: ${lead.gargalo}`,
    lead.verba && `Investimento hoje: ${lead.verba}`,
  ].filter(Boolean);
  return linhas.join('\n');
}

/**
 * Envia o lead para /api/lead.
 *
 * ⚠️ O endpoint ainda não existe — falta plugar o backend (ver checklist de conexão).
 * Até lá, toda submissão cai no fallback: o lead é guardado no navegador e o visitante
 * recebe um botão de WhatsApp com a mensagem já montada. Nenhum contato é descartado
 * em silêncio, e nada de "modo demonstração" aparece na tela de quem visita.
 */
export async function submitLead(lead: Lead): Promise<LeadResult> {
  track('form_submit', { gargalo: lead.gargalo ?? 'nao-informado' });

  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 8000);

  try {
    const r = await fetch('/api/lead', {
      method: 'POST',
      signal: ctrl.signal,
      headers: { 'content-type': 'application/json', accept: 'application/json' },
      body: JSON.stringify(lead),
    });
    if (!r.ok) throw new Error(String(r.status));
    track('form_success');
    return { ok: true };
  } catch {
    try {
      localStorage.setItem('lead:pendente', JSON.stringify({ ...lead, ts: Date.now() }));
    } catch {
      /* modo privado / storage cheio: segue para o WhatsApp mesmo assim */
    }
    track('form_fallback');
    return { ok: false, fallbackWa: waLink(resumo(lead)) };
  } finally {
    clearTimeout(timer);
  }
}
