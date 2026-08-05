// Um único IntersectionObserver para todos os contadores da página.
// Cada um anima uma vez e se desobserva.
// Nota: reduced-motion não é respeitado (decisão do projeto) — anima sempre.
const nodes = document.querySelectorAll<HTMLElement>('[data-counter]');

if (nodes.length) {
  // Sem separador de milhar: ano é 2010, não 2.010.
  const render = (el: HTMLElement, v: number) => {
    el.textContent = `${el.dataset.prefixo ?? ''}${Math.round(v)}${el.dataset.sufixo ?? ''}`;
  };

  const run = (el: HTMLElement) => {
    const alvo = Number(el.dataset.counter);
    if (!Number.isFinite(alvo)) return;

    // Anos contam a partir de um ponto próximo; quantidades, do zero.
    const inicio = alvo > 1900 ? alvo - 24 : 0;
    const dur = 900;
    const t0 = performance.now();

    const step = (t: number) => {
      const p = Math.min((t - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      render(el, inicio + (alvo - inicio) * eased);
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        run(e.target as HTMLElement);
        io.unobserve(e.target);
      }
    },
    { threshold: 0.5 }
  );

  nodes.forEach((n) => io.observe(n));
}
