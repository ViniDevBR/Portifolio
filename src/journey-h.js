// Journey TEST v3: rolagem vertical vira deslocamento horizontal; os painéis giram em 3D conforme a distância do centro.
(() => {
  const root = document.getElementById('journey-h');
  if (!root || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const scroller = root.querySelector('[data-jh-scroll]');
  const stage = root.querySelector('.jh-stage');
  const track = root.querySelector('[data-jh-track]');
  const panels = [...root.querySelectorAll('[data-jh-panel]')];
  const count = root.querySelector('[data-jh-count]');
  const bar = root.querySelector('[data-jh-bar]');
  root.classList.add('jh-on');

  // tudo medido aqui, fora do handler de scroll
  let top = 0, range = 1, travel = 0, vw = 0, centers = [], ticking = false, current = -1;
  const measure = () => {
    vw = stage.clientWidth;
    travel = Math.max(0, track.scrollWidth - vw);
    const stageH = stage.offsetHeight;
    scroller.style.height = `${travel + stageH}px`;
    // a rolagem horizontal começa quando o palco cola, centrado na tela
    top = scroller.getBoundingClientRect().top + scrollY - parseFloat(getComputedStyle(stage).top);
    range = Math.max(1, travel);
    centers = panels.map((p) => p.offsetLeft + p.offsetWidth / 2);
  };

  const update = () => {
    ticking = false;
    const p = Math.min(1, Math.max(0, (scrollY - top) / range));
    const x = p * travel;
    track.style.transform = `translate3d(${-x}px,0,0)`;
    bar.style.transform = `scaleX(${p})`;
    const mid = x + vw / 2;
    let best = 0, bestA = -1;
    panels.forEach((el, i) => {
      const d = centers[i] - mid;
      const a = Math.max(0, 1 - Math.abs(d) / (vw * 0.65));
      el.style.setProperty('--a', a.toFixed(3));
      el.style.setProperty('--s', d < 0 ? 1 : -1);
      if (a > bestA) { bestA = a; best = i; }
    });
    if (best !== current) {
      current = best;
      panels.forEach((el, i) => el.classList.toggle('is-active', i === best));
      count.textContent = `${String(best + 1).padStart(2, '0')} / ${String(panels.length).padStart(2, '0')}`;
    }
  };

  const refresh = () => { measure(); update(); };
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  addEventListener('resize', refresh);
  addEventListener('load', refresh);
  document.fonts?.ready.then(refresh);
  refresh();
})();
