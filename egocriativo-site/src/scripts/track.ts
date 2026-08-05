// Instrumentação declarativa: um único listener delegado lê os atributos data-track
// do markup. Nada de handler espalhado por componente.
//
//   <a href="#contato" data-track="cta_click" data-track-id="hero-primario" data-track-section="hero">
//
// Enquanto o Umami não tiver ID em site.ts, track() é no-op silencioso — plugar o
// analytics no fim faz todos estes eventos começarem a registrar de uma vez.
import { track } from '../lib/analytics';

const payload = (el: HTMLElement) => {
  const d: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(el.dataset)) {
    if (k.startsWith('track') && k !== 'track') d[k.slice(5).toLowerCase()] = v;
  }
  return d;
};

document.addEventListener(
  'click',
  (e) => {
    const el = (e.target as HTMLElement | null)?.closest<HTMLElement>('[data-track]');
    if (!el) return;

    track(el.dataset.track!, payload(el));

    const href = el.getAttribute('href') ?? '';
    if (href.includes('wa.me')) {
      track('whatsapp_click', { origem: el.dataset.trackId });
    } else if (/^https?:/.test(href) && !href.includes(location.host)) {
      track('outbound_click', { host: new URL(href).host, ...payload(el) });
    }
  },
  { passive: true }
);

// View de seção: um único observer para a página inteira.
const secoes = document.querySelectorAll<HTMLElement>('[data-section]');
if (secoes.length) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        track('section_view', { section: (e.target as HTMLElement).dataset.section });
        io.unobserve(e.target);
      }
    },
    { threshold: 0.4 }
  );
  secoes.forEach((s) => io.observe(s));
}

// Profundidade de scroll: marcos únicos, sem trabalho por evento.
const marcos = [25, 50, 75, 90];
let idx = 0;
addEventListener(
  'scroll',
  () => {
    if (idx >= marcos.length) return;
    const pct = ((scrollY + innerHeight) / document.body.scrollHeight) * 100;
    while (idx < marcos.length && pct >= marcos[idx]) track('scroll_depth', { pct: marcos[idx++] });
  },
  { passive: true }
);

// FAQ: o <details> nativo já dispara 'toggle'.
document.querySelectorAll<HTMLDetailsElement>('details[data-faq]').forEach((d) => {
  d.addEventListener('toggle', () => {
    if (d.open) track('faq_open', { q: d.dataset.faq });
  });
});
