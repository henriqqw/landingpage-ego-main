// Configuração central do site. Nada hardcoded espalhado — tudo vem daqui.
// ⚠️ Itens marcados com TODO são inputs de negócio a confirmar antes de publicar.

export interface NavItem {
  label: string;
  href: string;
}

export const site = {
  name: 'Ego Criativo',
  legalName: 'EGO CRIATIVO LTDA',
  cnpj: '11.648.734/0001-06',
  tagline: 'Transformamos ideias viáveis em produtos rentáveis.',
  url: 'https://egocriativo.com.br',
  description:
    'Agência de publicidade, tecnologia e eventos. Há mais de 15 anos transformando ideias viáveis em produtos rentáveis — com estratégia, dados e execução.',

  contact: {
    whatsapp: 'https://wa.me/5500000000000', // TODO: WhatsApp comercial real
    phone: '(11) 4587-5829', // consta no cadastro (Receita Federal)
    email: 'contato@egocriativo.com.br', // TODO: confirmar e-mail de contato
  },

  social: {
    instagram: '', // TODO
    linkedin: 'https://www.linkedin.com/company/grupo-ego-criativo/',
  },

  // Analytics: Umami Cloud (cookieless) — preencher após criar a conta.
  analytics: {
    umamiSrc: '', // TODO: ex. https://cloud.umami.is/script.js
    umamiWebsiteId: '', // TODO
  },

  // Hero background — PLACEHOLDER (imagem do componente de referência).
  // TODO: substituir por render próprio/licenciado nas cores da marca antes de publicar.
  heroBg:
    'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0e2dbea0-c0a9-413f-a57b-af279633c0df_3840w.jpg',

  nav: [
    { label: 'Serviços', href: '#servicos' },
    { label: 'Método', href: '#metodo' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
  ] satisfies NavItem[],

  // Barra de estatísticas. `alvo` alimenta o contador animado; `fonteUrl` liga o número
  // à consulta pública (hoje só o de 2010 é conferível por terceiro).
  stats: [
    {
      value: '2010',
      alvo: 2010,
      label: 'CNPJ ativo desde 08/03/2010',
      fonte: 'Receita Federal',
      fonteUrl: 'https://open.cnpja.com/office/11648734000106',
      destaque: true,
    },
    { value: '+15', alvo: 15, prefixo: '+', label: 'anos de experiência' },
    { value: '+50', alvo: 50, prefixo: '+', label: 'campanhas realizadas' },
    { value: '5', alvo: 5, label: 'países de atuação' },
  ],
};

/**
 * Link de WhatsApp com mensagem pré-preenchida.
 * O número vem de site.contact.whatsapp — trocar lá vale para a página inteira.
 */
export function waLink(texto?: string) {
  const base = site.contact.whatsapp;
  if (!texto) return base;
  const sep = base.includes('?') ? '&' : '?';
  return `${base}${sep}text=${encodeURIComponent(texto)}`;
}

export type Site = typeof site;
