// Journey TEST v2: o item no centro da tela acende; a linha verde e o "head" acompanham o scroll.
(() => {
  const root = document.getElementById('journey-test');
  if (!root) return;
  const items = [...root.querySelectorAll('[data-jt-item]')];
  const track = root.querySelector('[data-jt-track]');
  const fill = root.querySelector('[data-jt-fill]');
  const head = root.querySelector('[data-jt-head]');

  if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
    items.forEach((i) => i.classList.add('is-active'));
    fill.style.transform = 'scaleY(1)';
    head.hidden = true;
    return;
  }

  const spot = new IntersectionObserver((entries) => {
    entries.forEach((e) => e.target.classList.toggle('is-active', e.isIntersecting));
  }, { rootMargin: '-40% 0px -40% 0px' });
  items.forEach((i) => spot.observe(i));

  // geometria em cache: nada de ler layout dentro do handler de scroll
  let top = 0, height = 1, ticking = false;
  const measure = () => {
    const r = track.getBoundingClientRect();
    top = r.top + scrollY;
    height = r.height || 1;
  };
  const update = () => {
    ticking = false;
    const p = Math.min(1, Math.max(0, (scrollY + innerHeight * 0.5 - top) / height));
    fill.style.transform = `scaleY(${p})`;
    head.style.top = `${p * 100}%`;
  };
  const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };

  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', () => { measure(); update(); });
  addEventListener('load', () => { measure(); update(); });
  measure();
  update();
})();
