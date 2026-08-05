// Eventos de funil (Umami). No-op se o Umami não estiver carregado.
declare global {
  interface Window {
    umami?: { track: (event: string, data?: Record<string, unknown>) => void };
  }
}

export function track(event: string, data?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && window.umami) {
    window.umami.track(event, data);
  }
}

export const trackCtaClick = (id: string) => track('cta_click', { id });
export const trackWhatsapp = () => track('whatsapp_click');
export const trackFormSubmit = () => track('form_submit');
