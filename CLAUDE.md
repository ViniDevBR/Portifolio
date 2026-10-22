# CLAUDE.md

Portfólio one-page de Vinicius Celestino (Fullstack Developer & UI Engineer), em **HTML + Tailwind (CDN) + JS puro**. Sem bundler, sem `package.json`, sem testes, sem lint. O repo já foi um projeto React/Vite; foi reestruturado e esse stack não existe mais.

## Rodar

Não há build. Sirva a pasta como estática (abrir via `file://` funciona, mas prefira HTTP):

```bash
python -m http.server 8000   # ou: npx serve .
```

Deploy previsto na Vercel (`og:url` aponta para `viniciuscelestino-dev.vercel.app`).

## Arquivos

| Arquivo | Papel |
| :-- | :-- |
| `index.html` | Todo o markup (~1200 linhas). Tailwind via `cdn.tailwindcss.com` + `tailwind.config` inline no `<head>`. |
| `style.css` | Tokens (`:root`), fontes (`@import` Google Fonts), componentes que o Tailwind não cobre, `prefers-reduced-motion`. |
| `i18n.js` | i18n EN/PT: dicionário `PT` + troca de idioma. Carregado **antes** do `script.js`. |
| `script.js` | Todo o comportamento, num único `DOMContentLoaded`, em 9 blocos numerados. |
| `assets/img/profile.jpg` | Foto do hero (~1.9 MB, sem otimização). |
| `analise-*.md`, `extracao-estilo-*.md` | Material de referência, não faz parte do site. |

Os três `.md` documentam a estratégia: **visual do template AUTON** (dark, bento grid, um único acento verde) + **estrutura de conteúdo do portfólio Josias Broch** (posicionamento de engenharia, skills por domínio, formulário que envia para WhatsApp). Consulte-os antes de mudar tom, hierarquia de seções ou estilo.

## Estrutura da página (ordem em `index.html`)

`#home` (hero com foto + nome gigante + ano empilhado) → dock de navegação flutuante (`<aside>` fixo embaixo) → faixa de métricas (4 cards) → `#about` (texto + trajetória + 3 pilares) → `#services` (8) → `#projects` (filtro; 2 projetos profissionais em destaque + 3 demos) → `#skills` (12 categorias) → `#experience` (6 diferenciais, fora do nav) → `#contact` (só cards de contato direto: e-mail, WhatsApp, GitHub; o formulário foi removido) → modal de CV → botão voltar ao topo → footer.

**Fonte do conteúdo:** `Markdown_atualizado.md` (posicionamento: Fullstack com React/React Native + NodeJS; evitar vender como Front-End/UI Engineer/Design Systems/Vue/Micro Frontends). Mudou o texto do site? Atualize o MD também.

A navegação é só a **dock inferior** (`.desktop-nav-link`, em todos os tamanhos); não há menu hambúrguer.

## Design system

- Base `#0f0f10` (nunca preto puro), texto branco, **um único acento verde `#32d74b`**, usado com moderação.
- Raios: 16px cards, 12px internos, pill para badges. Cards usam `.bento-card`.
- Fontes: `Bebas Neue` (`.font-heading`), `Plus Jakarta Sans` (UI/base), `Satisfy` (`.font-handwriting`, assinatura), `JetBrains Mono` (`.font-mono`), Roboto/Inter (corpo).
- Os tokens existem em **dois lugares**: `:root` em `style.css` e `tailwind.config` em `index.html`. Mudou cor/fonte, mude nos dois.
- `brand.violet/emerald/amber` são aliases do mesmo verde de propósito (acento único). Não reintroduza outras cores de destaque.
- O markup usa `green-400` do Tailwind (`#4ade80`) em hovers/focos, que não é exatamente `#32d74b`. Já está assim; não "corrija" parcialmente.
- Textura de ruído (`.noise-overlay`, `z-index: 999`) e barra de progresso (`#scroll-progress`) são fixas por cima de tudo.

## Convenções que importam

- **Estado visual vive em classes Tailwind trocadas pelo JS.** O filtro de projetos, o link ativo do nav e o botão voltar ao topo adicionam/removem strings como `bg-white text-slate-950` direto no `script.js`. Se mudar o visual desses estados, altere o HTML inicial **e** o JS.
- Revelação ao scroll: classe `.fade-in-up` + `IntersectionObserver` que adiciona `.visible`. Novo bloco animado = só adicionar `fade-in-up`.
- Filtro de projetos: botões `.project-filter-btn[data-filter]` comparam com `data-category` de cada `<article class="project-item">` (valores: `fintech`, `mobile`, `web`, `webapp`, `ecommerce`, `elearning`; um projeto pode ter vários, separados por espaço). A comparação é por **substring** (`includes`), então o filtro `web` também pega `webapp`; isso é intencional. **Os botões de filtro estão comentados no HTML** (reaproveitar no futuro: descomentar o bloco "Filter Tabs"); o bloco 5 do `script.js` continua lá, inerte e null-safe. Quando reativar: o filtro **ERP** não tem nenhum projeto, então o JS mostra `#projects-empty`. Projetos profissionais (IntraPay, Growzone) usam `<details class="project-details">` para os destaques; as demos têm overlay "Live Demo".
- Acessibilidade é requisito, não extra: skip link, `aria-label` nas seções, focus trap/ESC/`aria-hidden` no modal, `aria-live` no formulário, `prefers-reduced-motion` respeitado em JS **e** CSS. Mantenha ao mexer.
- Performance: handlers de scroll/mouse passam por `requestAnimationFrame` e `{ passive: true }`. Não leia layout (`getBoundingClientRect`, `scrollHeight`) dentro de handler de scroll sem cache.
- **i18n (EN + PT-BR):** o HTML guarda o texto em **inglês** (padrão, `<html lang="en">`); o português vive em `i18n.js` (objeto `PT`). Marque textos com `data-i18n="chave"` (troca `innerHTML`) e atributos com `data-i18n-attr="aria-label:chave;content:outra"`. **Sem chave = não traduz** (é assim que `Backend — Strong`, `Clean Architecture`, `CI/CD & Delivery` etc. ficam iguais nos dois idiomas, por decisão do dono). Novo texto traduzível: coloque o EN no HTML, a chave no elemento e a entrada PT no dicionário; texto com markup interno precisa de elemento próprio (ex.: o `<span data-i18n="footer.rights">` dentro do copyright, para não destruir `#current-year`). Idioma inicial: `localStorage["vc_lang"]` → senão `navigator.language` começa com `pt` → senão EN. Seletores `.lang-switch` (EN | PT) no header do hero (direita) e no footer; o estado ativo usa `aria-pressed` estilizado em `style.css` (não troca classes Tailwind).

## Placeholders que precisam de dado real

- **Contato real já aplicado:** e-mail `vinideveloper386@gmail.com`, WhatsApp `+55 (19) 98310-0871` (`wa.me/5519983100871`; o DDI 55 foi presumido) e GitHub `github.com/ViniDevBR`. Estão hard-coded em `index.html` (cards de contato, link da seção Projects e modal de CV). O `og:url` ainda aponta para `viniciuscelestino-dev.vercel.app`.
- **CV (modal):** os links vêm de `CV_FILE_IDS` no bloco 6 do `script.js` (IDs de arquivos PDF no Google Drive, compartilhados como "Qualquer pessoa com o link"; o JS monta `drive.google.com/uc?export=download&id=ID` e abre em nova aba). **Para atualizar o CV: Drive > Gerenciar versões > Enviar nova versão** (mantém o ID); apagar e reenviar quebra o link. O `href="#contact"` do HTML é só fallback para ID vazio. Os dois arquivos baixam como "Vinicius Celestino.pdf" (renomeie no Drive para diferenciar PT/EN; o ID não muda).
- As URLs dos 3 projetos demo (Home Book, BurgerBite, InVestor) estão hard-coded no HTML; confirme antes de publicar.
- Os "previews" dos projetos são mockups em HTML/CSS (barra de browser + card), não screenshots.

## Armadilhas conhecidas

- **Código órfão no `script.js`**: o spotlight com mouse (`.spotlight-card`, `--mouse-x/--mouse-y`) e o toggle do menu mobile (`#mobile-menu-btn`, `#mobile-menu`, `.mobile-nav-link`) não têm elementos correspondentes no HTML atual. Não quebram nada (cada bloco faz null-check), mas são inertes. Remova ou reimplemente o markup; não assuma que funcionam.
- `.font-archivo` no CSS na verdade é `Roboto` (nome enganoso).
- `profile.jpg` tem ~1.9 MB e carrega `eager` no hero (LCP). Se for mexer em performance, converta para WebP/AVIF com dimensões explícitas.
- Tailwind CDN é só para protótipo: roda em runtime, gera aviso no console e não faz purge. Se o objetivo mudar para produção otimizada, migre para o CLI do Tailwind.
- Há mudanças não commitadas em `index.html`, `script.js` e `style.css` (único commit: `feat: first commit`). Git avisa sobre conversão LF→CRLF; não há `.gitignore` nem `.gitattributes`.
