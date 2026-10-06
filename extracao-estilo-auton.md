# Extração de Estilo: AUTON (auton.framer.media)

> Valores extraídos diretamente do DOM renderizado (computed styles), via inspeção ao vivo da página.

---

## 1. Estrutura do Site (Seções, em Ordem)

### 1.1 Header / Nav (fixo, flutuante sobre o conteúdo)

- **Logo**: imagem, link para `#hero`.
- **Badge de status**: "Available for work" + dot verde pulsante ("Live").
- **Nav central (pill de vidro)**: `About` · `Services` · `Project` · `Contact`.
- **CTA extra**: "Get Now" → link externo de compra do template (Polar.sh).
- **CTA direita**: "Book a Quick call" → `#contact`.

### 1.2 Hero (`#hero`)

- **Headline** (h2, `Bebas Neue` 158px, maiúsculo/condensado): _"Designing Digital Experiences That Inspire"_.
- **Assinatura cursiva** (`Satisfy`): _"Auton Foster"_.
- **Marca d'água gigante no fundo**: _"2026"_ (ano, estilo decorativo).

### 1.3 About Me (`#about`)

- **Título**: "About Me".
- **Texto**: _"I'm a passionate designer and developer dedicated to creating modern, user-focused digital experiences. From building strong brand identities to designing intuitive interfaces and developing responsive websites, I help businesses transform ideas into impactful digital products."_

### 1.4 Services (`#service`)

- **Eyebrow**: "Services".
- **Título**: "Services that drive brands".
- **5 cards de serviço**: Brand Identity · Marketing · Web Development · UI UX Design · Graphics Design.

### 1.5 My Work / Projetos (`#work`)

- **Eyebrow**: "My Work".
- **Título**: "Crafted With Purpose".
- **5 cards de projeto** (imagem + nome): VisionAI · the watch · Crown low · Harbor · latee.

### 1.6 My Skill

- **Eyebrow**: "My Skill".
- **Título**: "Skills That Drive Results".
- **Marquee infinito de logos** (ciclo de ferramentas, repetido 3x para loop contínuo): Tailwind CSS · JavaScript · Framer · Webflow · Figma · Adobe · Illustrator (Ai).

### 1.7 Testimonials

- **Eyebrow**: "Testimonials".
- **Título**: "Trusted by Clients".
- **Card de depoimento** (carrossel — apenas 1 visível por vez no DOM):
  - Citação: _"Working with Milan was a fantastic experience. The website design was modern, intuitive, and exceeded our expectations. Communication was smooth, and every detail was thoughtfully crafted."_
  - Autor: **Sarah Johnson** — Founder, NovaTech.

### 1.8 Contact (`#contact`)

- **Eyebrow**: "Contact".
- **Título**: "Start a Conversation".
- **Texto**: _"Have a project in mind? I'd love to hear about your ideas and help bring them to life."_
- **Email**: `hello@autonfoster.com` (link `mailto:`).
- **Telefone**: `+1 (415) 555-2847` (link `tel:`).
- **Localização**: San Francisco, California, USA (link para Google Maps).
- **Redes sociais** (somente ícones, sem texto): LinkedIn · Behance · GitHub · Instagram.

### 1.9 Footer

- Nav secundária replicada: About · services · project · my skill · testimonials · contact.

### 1.10 Copyright (rodapé final)

- _"© 2026 Auton. Powered by Framer. Created By Shreetech"_.

---

## 2. Paleta de Cores

| Token                   | Valor                                                        | Uso                                                                                                   |
| :---------------------- | :----------------------------------------------------------- | :---------------------------------------------------------------------------------------------------- |
| `--bg-base`             | `rgb(15, 15, 16)` (`#0F0F10`)                                | Fundo principal de todas as seções (`<main>`, `<section>`)                                            |
| `--text-primary`        | `rgb(255, 255, 255)` (`#FFFFFF`)                             | Títulos e textos de alto contraste                                                                    |
| `--text-muted`          | `rgba(255, 255, 255, 0.5)`                                   | Textos secundários (ex: e-mail no footer, legendas)                                                   |
| `--text-secondary-soft` | `rgba(255, 255, 255, 0.2)`                                   | Linhas divisórias (`Line`) entre seções                                                               |
| `--accent-success`      | `rgb(50, 215, 75)` (`#32D74B`)                               | Dot de status "disponível" / indicador ativo                                                          |
| `--accent-success-bg`   | `rgba(50, 215, 75, 0.15)`                                    | Fundo do badge/pill ao redor do dot de status                                                         |
| `--glass-bg`            | `rgba(255, 255, 255, 0.15)`                                  | Fundo do header fixo (efeito vidro)                                                                   |
| `--link-default`        | `rgb(0, 0, 238)`                                             | Cor padrão de `<a>` sem estilo custom aplicado (raramente visível — a maioria dos links herda branco) |
| Gradiente de transição  | `linear-gradient(rgba(15,15,16,0) 0%, rgba(15,15,16,1) 50%)` | Fade de imagem/cor para o fundo escuro entre seções                                                   |

**Resumo:** tema dark quase-preto (`#0F0F10`), texto branco puro, único acento de cor vivo é o **verde** (`#32D74B`) usado com moderação (status "disponível"), sem uso de gradientes coloridos — só preto→transparente para transições suaves.

---

## 3. Tipografia

| Elemento                   | Font-family                     | Tamanho   | Peso    | Line-height              | Observação                                                  |
| :------------------------- | :------------------------------ | :-------- | :------ | :----------------------- | :---------------------------------------------------------- |
| `h1` (assinatura)          | `Satisfy, sans-serif`           | 24px      | 400     | 28.8px                   | Fonte cursiva/caligráfica, uso pontual e humano             |
| `h2` (hero headline)       | `Bebas Neue, sans-serif`        | **158px** | 400     | 158px (sem espaço extra) | Condensada, maiúscula, impacto visual máximo                |
| `h3` (títulos de seção)    | `Bebas Neue, sans-serif`        | 60px      | 400     | 72px                     | Mesmo padrão condensado, escala menor                       |
| `p` (corpo/texto geral)    | `Roboto, sans-serif`            | 14px      | 400     | 16.8px                   | Texto de parágrafo padrão                                   |
| texto de corpo alternativo | `Inter, sans-serif`             | 16px      | 400     | normal                   | Usado em contatos (ex: e-mail), cor `rgba(255,255,255,0.5)` |
| Links de navegação         | `Plus Jakarta Sans, sans-serif` | 16px      | **500** | 16px                     | Nav items (About, Services, Project, Contact)               |

**Pilha de fontes usada no site:** `Bebas Neue` (display/condensada), `Roboto` (corpo), `Inter` (corpo alternativo/contato), `Plus Jakarta Sans` (navegação/UI), `Satisfy` (assinatura cursiva).

---

## 4. Espaçamento & Layout

- **Padding de seção:** `100px 50px 0px` (topo 100px, laterais 50px, sem padding inferior — seções se encostam via fade/gradiente).
- **Header:** `padding: 0px 50px` (fixo, altura compacta).
- **Gap entre cards/grids:** `40px` (ex: grid de testimonials).
- **Gap interno do header (pill de navegação):** `10px`.
- **Viewport de referência observado:** desktop ~1280px de largura.

---

## 5. Componentes

### 4.1 Header / Navbar (efeito vidro flutuante)

```css
background: rgba(255, 255, 255, 0.15);
backdrop-filter: blur(30px);
border-radius: 16px;
box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.2);
padding: 10px 20px;
gap: 10px;
```

Nav fixa "flutuante" (não colada no topo da viewport), com glassmorphism real (blur 30px) — cria sensação premium.

### 4.2 Badge/Pill de Status ("disponível para chamada")

```css
/* container do pill */
background: rgba(50, 215, 75, 0.15);
border-radius: 50px; /* pill total */

/* dot interno */
background: rgb(50, 215, 75);
border-radius: 50px;
opacity: 0.815; /* leve transparência, sugere animação de pulso */
```

Não existe um "botão" tradicional com fundo sólido para o CTA "Book a Quick call" — é texto simples (`Roboto 14px branco`) ao lado do dot verde pulsante. O destaque vem do dot colorido, não de um botão pill cheio.

### 4.3 Cards de Projeto (My Work)

```css
border-radius: 16px; /* ou 12px em variações menores */
object-fit: cover;
overflow: visible; /* no container pai, a imagem define o próprio raio */
```

### 4.4 Divisores

```css
background: rgba(255, 255, 255, 0.2);
/* linhas finas horizontais/verticais separando sub-blocos dentro das seções */
```

### 4.5 Transição de seção (fade para o fundo)

```css
background-image: linear-gradient(rgba(15, 15, 16, 0) 0%, rgb(15, 15, 16) 50%);
```

Usado para dissolver uma imagem/cor de destaque suavemente no fundo escuro antes da próxima seção.

---

## 6. Princípios de Estilo (Resumo para Implementação)

1. **Base quase-preta (`#0F0F10`)** em todas as seções — nunca preto puro (`#000`), o que dá um tom mais "tech/premium" e menos "chapado".
2. **Hierarquia tipográfica extrema**: títulos de hero em `Bebas Neue` a **158px** condensada/maiúscula criam impacto imediato; corpo de texto pequeno (14–16px) em `Roboto`/`Inter` para contraste de escala.
3. **Um único acento de cor** (verde `#32D74B`) usado com extrema moderação — só em indicadores de status/disponibilidade, nunca em botões ou grandes blocos.
4. **Glassmorphism real** apenas no header (blur 30px + fundo translúcido branco 15% + sombra suave) — não aplicado em outros componentes.
5. **Ausência de botões "cheios"** tradicionais — CTAs usam texto + ícone/dot, reforçando a estética minimalista e "menos é mais".
6. **Raios de borda consistentes**: `16px` para cards/imagens grandes, `12px` para elementos menores, `50px` (pill) para badges/dots.
7. **Divisores sutis** em `rgba(255,255,255,0.2)` — nunca bordas sólidas de alto contraste.
8. **Espaçamento generoso**: seções com `100px` de respiro no topo e `50px` nas laterais, criando bastante _whitespace_ vertical.
