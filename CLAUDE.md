# CLAUDE.md

Portfólio one-page de Vinicius Celestino (Fullstack Developer & UI Engineer), em **HTML + Tailwind (CDN) + JS puro**. Sem bundler, sem `package.json`, sem testes, sem lint. O repo já foi um projeto React/Vite; foi reestruturado e esse stack não existe mais.

## Rodar

Não há build. Sirva a pasta como estática (abrir via `file://` funciona, mas prefira HTTP):

```bash
python -m http.server 8000   # ou: npx serve .
```

Deploy previsto na Cloudflare Pages (`canonical`, `og:url`, `og:image`, `twitter:image` e JSON-LD apontam para `https://www.vinidevbr.com/`).

## Arquivos

| Arquivo | Papel |
| :-- | :-- |
| `index.html` | Todo o markup (~1200 linhas). Tailwind via `cdn.tailwindcss.com` + `tailwind.config` inline no `<head>`. |
| `src/style.css` | Tokens (`:root`), fontes (`@import` Google Fonts), componentes que o Tailwind não cobre, `prefers-reduced-motion`. |
| `src/i18n.js` | i18n EN/PT: dicionário `PT` + troca de idioma. Carregado **antes** do `src/script.js`. |
| `src/script.js` | Todo o comportamento, num único `DOMContentLoaded`, em 9 blocos numerados. |
| `src/footer-3d.js` | Nome do rodapé em Three.js (módulo ES, import map no fim do `index.html`, three@0.170.0 via jsdelivr): texto vira textura e um shader distorce no hover. Sem WebGL ou com `prefers-reduced-motion`, o texto HTML fica. |
| `src/journey-test.js`, `src/journey-h.js` | Timeline "My journey" (v2, rolagem acende os anos) e "How I work" (v3, rolagem vertical vira horizontal em 3D). Ambas ainda com ids/CSS de teste (`#journey-test`, `#journey-h`, `.jt-*`, `.jh-*`). |
| `assets/img/profile.jpg` | Foto do hero (~1.9 MB, sem otimização). |
| `analise-*.md`, `extracao-estilo-*.md` | Material de referência, não faz parte do site. |

Os três `.md` documentam a estratégia: **visual do template AUTON** (dark, bento grid, um único acento verde) + **estrutura de conteúdo do portfólio Josias Broch** (posicionamento de engenharia, skills por domínio, formulário que envia para WhatsApp). Consulte-os antes de mudar tom, hierarquia de seções ou estilo.

## Estrutura da página (ordem em `index.html`)

`#home` (hero com foto + nome gigante + ano empilhado) → dock de navegação flutuante (`<aside>` fixo embaixo) → faixa de métricas (4 cards) → `#about` (texto + trajetória + 3 pilares) → `#services` (8) → `#projects` (filtro; 7 projetos profissionais: IntraPay, Growzone e BeXpenso em destaque + ERP Suporte, BVendas, HelpGuincho, Mercosistem) → `#skills` (12 categorias) → `#experience` (6 diferenciais, fora do nav) → `#contact` (só cards de contato direto: e-mail, WhatsApp, GitHub; o formulário foi removido) → modal de CV → botão voltar ao topo → footer.

**Fonte do conteúdo:** `Markdown_atualizado.md` (posicionamento: Fullstack com React/React Native + NodeJS; evitar vender como Front-End/UI Engineer/Design Systems/Vue/Micro Frontends). Mudou o texto do site? Atualize o MD também.

A navegação é só a **dock inferior** (`.desktop-nav-link`, em todos os tamanhos); não há menu hambúrguer.

## Design system

- Base `#0f0f10` (nunca preto puro), texto branco, **um único acento verde `#32d74b`**, usado com moderação.
- Raios: 16px cards, 12px internos, pill para badges. Cards usam `.bento-card`.
- Fontes: `Bebas Neue` (`.font-heading`), `Plus Jakarta Sans` (UI/base), `Satisfy` (`.font-handwriting`, assinatura), `JetBrains Mono` (`.font-mono`), Roboto/Inter (corpo).
- Os tokens existem em **dois lugares**: `:root` em `src/style.css` e `tailwind.config` em `index.html`. Mudou cor/fonte, mude nos dois.
- `brand.violet/emerald/amber` são aliases do mesmo verde de propósito (acento único). Não reintroduza outras cores de destaque.
- O markup usa `green-400` do Tailwind (`#4ade80`) em hovers/focos, que não é exatamente `#32d74b`. Já está assim; não "corrija" parcialmente.
- Textura de ruído (`.noise-overlay`, `z-index: 999`) e barra de progresso (`#scroll-progress`) são fixas por cima de tudo.

## Convenções que importam

- **Estado visual vive em classes Tailwind trocadas pelo JS.** O filtro de projetos, o link ativo do nav e o botão voltar ao topo adicionam/removem strings como `bg-white text-slate-950` direto no `src/script.js`. Se mudar o visual desses estados, altere o HTML inicial **e** o JS.
- Revelação ao scroll: classe `.fade-in-up` + `IntersectionObserver` que adiciona `.visible`. Novo bloco animado = só adicionar `fade-in-up`.
- Filtro de projetos: botões `.project-filter-btn[data-filter]` comparam com `data-category` de cada `<article class="project-item">` (valores: `fintech`, `mobile`, `web`, `webapp`, `ecommerce`, `elearning`; um projeto pode ter vários, separados por espaço). A comparação é por **substring** (`includes`), então o filtro `web` também pega `webapp`; isso é intencional. **Os botões de filtro estão comentados no HTML** (reaproveitar no futuro: descomentar o bloco "Filter Tabs"); o bloco 5 do `src/script.js` continua lá, inerte e null-safe. Categorias novas: `erp` (ERP Suporte, Mercosistem). Cada card tem capa (3 telas de celular, ou 1 print web) e um botão "Ver detalhes" que abre um `<dialog class="project-dialog">` com descrição, stack, highlights (só IntraPay e Growzone; BeXpenso ainda não tem) e galeria de capturas (rolagem horizontal). O comportamento está no bloco 7 do `src/script.js`. Imagens em `assets/img/projects/<pasta>/` (nomes minúsculos, sem acento: o host é case-sensitive); a Growzone está em WebP. Não há projetos demo nem links públicos: todos são profissionais.
- Acessibilidade é requisito, não extra: skip link, `aria-label` nas seções, focus trap/ESC/`aria-hidden` no modal, `aria-live` no formulário, `prefers-reduced-motion` respeitado em JS **e** CSS. Mantenha ao mexer.
- Performance: handlers de scroll/mouse passam por `requestAnimationFrame` e `{ passive: true }`. Não leia layout (`getBoundingClientRect`, `scrollHeight`) dentro de handler de scroll sem cache.
- **i18n (EN + PT-BR):** o HTML guarda o texto em **inglês** (padrão, `<html lang="en">`); o português vive em `src/i18n.js` (objeto `PT`). Marque textos com `data-i18n="chave"` (troca `innerHTML`) e atributos com `data-i18n-attr="aria-label:chave;content:outra"`. **Sem chave = não traduz** (é assim que `Backend — Strong`, `Clean Architecture`, `CI/CD & Delivery` etc. ficam iguais nos dois idiomas, por decisão do dono). Novo texto traduzível: coloque o EN no HTML, a chave no elemento e a entrada PT no dicionário; texto com markup interno precisa de elemento próprio (ex.: o `<span data-i18n="footer.rights">` dentro do copyright, para não destruir `#current-year`). Idioma inicial: `localStorage["vc_lang"]` → senão `navigator.language` começa com `pt` → senão EN. Seletores `.lang-switch` (EN | PT) no header do hero (direita) e no footer; o estado ativo usa `aria-pressed` estilizado em `src/style.css` (não troca classes Tailwind).

## Placeholders que precisam de dado real

- **Contato real já aplicado** (e-mail, WhatsApp, GitHub, LinkedIn): os valores estão hard-coded em `index.html` (cards de contato, ícones do footer, JSON-LD) e em `llms.txt`. Este arquivo não os repete de propósito, porque o repositório inteiro vai para o deploy. Para trocar um contato, busque o valor atual nesses arquivos. O domínio de produção é `www.vinidevbr.com`.
- **CV (modal):** os links vêm de `CV_FILE_IDS` no bloco 6 do `src/script.js` (IDs de arquivos PDF no Google Drive, compartilhados como "Qualquer pessoa com o link"; o JS monta `drive.google.com/uc?export=download&id=ID` e abre em nova aba). **Para atualizar o CV: Drive > Gerenciar versões > Enviar nova versão** (mantém o ID); apagar e reenviar quebra o link. O `href="#contact"` do HTML é só fallback para ID vazio. Os dois arquivos baixam como "Vinicius Celestino.pdf" (renomeie no Drive para diferenciar PT/EN; o ID não muda).
- Mercosistem não tem ícone e BeXpenso não tem highlights. As imagens dos projetos vêm da Play Store (ERP Suporte, BeXpenso, BVendas, Growzone) ou foram enviadas pelo dono.

## Armadilhas conhecidas

- **Código órfão no `src/script.js`**: o spotlight com mouse (`.spotlight-card`, `--mouse-x/--mouse-y`) e o toggle do menu mobile (`#mobile-menu-btn`, `#mobile-menu`, `.mobile-nav-link`) não têm elementos correspondentes no HTML atual. Não quebram nada (cada bloco faz null-check), mas são inertes. Remova ou reimplemente o markup; não assuma que funcionam.
- `.font-archivo` no CSS na verdade é `Roboto` (nome enganoso).
- `profile.jpg` tem ~1.9 MB e carrega `eager` no hero (LCP). Se for mexer em performance, converta para WebP/AVIF com dimensões explícitas.
- Tailwind CDN é só para protótipo: roda em runtime, gera aviso no console e não faz purge. Se o objetivo mudar para produção otimizada, migre para o CLI do Tailwind.
- Há mudanças não commitadas em `index.html`, `src/script.js` e `src/style.css` (único commit: `feat: first commit`). Git avisa sobre conversão LF→CRLF; não há `.gitignore` nem `.gitattributes`.
