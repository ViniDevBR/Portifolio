import * as THREE from 'three';

// Nome do rodapé: o nome vira textura e um shader distorce ao redor do ponteiro.
const host = document.getElementById('footer-name-3d');
const fallback = document.getElementById('footer-name-text');
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

async function init() {
  await document.fonts.load('400 400px "Bebas Neue"');

  // texto -> canvas 2D -> textura
  const size = 400, pad = 60, text = 'VINICIUS CELESTINO';
  const c2d = document.createElement('canvas');
  const ctx = c2d.getContext('2d');
  ctx.font = `${size}px "Bebas Neue"`;
  const w = Math.ceil(ctx.measureText(text).width) + pad * 2;
  const h = Math.ceil(size * 0.9) + pad * 2;
  c2d.width = w; c2d.height = h;
  ctx.font = `${size}px "Bebas Neue"`;
  ctx.fillStyle = '#fff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, w / 2, h / 2 + size * 0.04);

  const tex = new THREE.CanvasTexture(c2d);
  tex.generateMipmaps = false;
  tex.minFilter = THREE.LinearFilter;

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  host.appendChild(renderer.domElement);

  const uniforms = {
    tex: { value: tex },
    mouse: { value: new THREE.Vector2(0.5, 0.5) },
    strength: { value: 0 },
    aspect: { value: w / h },
    time: { value: 0 },
  };
  const material = new THREE.ShaderMaterial({
    uniforms,
    transparent: true,
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }',
    fragmentShader: `
      uniform sampler2D tex; uniform vec2 mouse; uniform float strength, aspect, time;
      varying vec2 vUv;
      void main(){
        vec2 d = vUv - mouse; d.x *= aspect;
        float f = exp(-dot(d, d) * 28.0) * strength;
        vec2 dir = (vUv - mouse);
        vec2 uv = vUv - dir * f * 0.55;                      // lente que estica o texto
        uv.y += sin(vUv.x * 40.0 + time * 4.0) * f * 0.03;   // ondulação
        vec2 o = dir * f * 0.2;                            // separação de canais
        float r = texture2D(tex, uv + o).a;
        float g = texture2D(tex, uv).a;
        float b = texture2D(tex, uv - o).a;
        gl_FragColor = vec4(r, g, b, max(r, max(g, b)));
      }`,
  });
  const scene = new THREE.Scene();
  scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material));
  const camera = new THREE.Camera();

  const resize = () => {
    const cw = host.clientWidth;
    renderer.setSize(cw, Math.round(cw * h / w));
    renderer.render(scene, camera);
  };

  fallback.classList.add('sr-only');
  host.hidden = false;
  resize();
  new ResizeObserver(resize).observe(host.parentElement);
  if (reduceMotion) return;

  const target = new THREE.Vector2(0.5, 0.5);
  let hover = false, running = false;
  const tick = (t) => {
    uniforms.time.value = t / 1000;
    uniforms.mouse.value.lerp(target, 0.15);
    uniforms.strength.value += ((hover ? 1 : 0) - uniforms.strength.value) * 0.1;
    renderer.render(scene, camera);
    // para o loop quando o efeito já se desfez
    if (hover || uniforms.strength.value > 0.002) requestAnimationFrame(tick);
    else running = false;
  };
  const start = () => { if (!running) { running = true; requestAnimationFrame(tick); } };

  host.addEventListener('pointermove', (e) => {
    const r = host.getBoundingClientRect();
    target.set((e.clientX - r.left) / r.width, 1 - (e.clientY - r.top) / r.height);
    if (!hover) uniforms.mouse.value.copy(target);
    hover = true;
    start();
  }, { passive: true });
  host.addEventListener('pointerleave', () => { hover = false; start(); });
}

if (host && fallback) {
  init().catch((err) => console.warn('footer-3d: WebGL indisponível, mantendo texto.', err));
}
