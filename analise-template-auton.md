# Análise do Template de Portfólio: AUTON

> **Referência:** [AUTON - Personal Portfolio Template (Framer)](https://auton.framer.media/)  
> **Data da Análise:** Outubro de 2026  
> **Finalidade:** Documentação de referência técnica, visual e estrutural para criação de portfólio profissional.

---

## 1. Visão Geral & Proposta Visual

O template **AUTON** é projetado principalmente para freelancers, designers de produto, diretores de arte e desenvolvedores criativos que buscam uma presença online moderna, premium e com alto índice de conversão.

* **Paleta & Tema:** Dark mode sofisticado e minimalista, com fundos escuros/cinzas profundos, tipografia contrastante e detalhes sutis de borda/iluminação.
* **Componentização:** Padrão **Bento Grid** (cartões modulares com cantos arredondados, preenchimentos translúcidos/vidro e micro-interações suaves ao passar o mouse).
* **Tipografia:**
  * **Títulos e corpo:** Fontes sem serifa limpas e altamente legíveis (`Inter`, `Roboto`, `Open Sans`).
  * **Assinatura / Destaques humanos:** Uso pontual de fonte cursiva/caligráfica (`Satisfy`) para humanizar a marca pessoal.
* **Experiência do Usuário (UX):** Transições suaves de scroll, espaçamento amplo (*whitespace*) e hierarquia visual bem definida.

---

## 2. Arquitetura de Informação & Estrutura de Seções

O fluxo de conteúdo foi arquitetado para conduzir o visitante por um funil de credibilidade: **Apresentação $\rightarrow$ Proposta de Valor $\rightarrow$ Serviços $\rightarrow$ Portfólio $\rightarrow$ Prova Social $\rightarrow$ Ação de Contato**.

### 2.1. Header / Navbar Fixa
* **Branding:** Nome ou logotipo pessoal no canto superior esquerdo.
* **Links de Âncora:** Acesso direto às seções:
  * `About` (Sobre)
  * `Services` (Serviços)
  * `Projects` (Projetos)
  * `My Skill` (Habilidades)
  * `Testimonials` (Depoimentos)
  * `Contact` (Contato)
* **Call to Action (CTA):** Botão em destaque (*"Book a Quick call"* / *"Entre em contato"*).

---

### 2.2. Hero Section (Primeira Dobra)
A dobra principal tem o papel crítico de reter a atenção em até 5 segundos.
* **Headline de Impacto:** Frase marcante sobre o objetivo do profissional (ex: *"Designing Digital Experiences That Inspire"*).
* **Tagline / Mini-Bio:** Apresentação clara de especialização e atuação geográfica (ex: *"Art director & designer focusing on branding and expressive digital products"*).
* **Métricas / Destaques Chave:** Indicadores numéricos de autoridade (ex: anos de experiência, projetos entregues, clientes satisfeitos).
* **Botões de Ação Duplos:**
  1. *CTA Primário:* Agendar conversa / Contato.
  2. *CTA Secundário:* Ver projetos selecionados.

---

### 2.3. About Me (Sobre Mim)
* Foco não apenas na biografia pessoal, mas na **proposta de valor para o cliente**:
  > *"Designer e desenvolvedor focado em criar experiências digitais centradas no usuário. Da construção de marcas sólidas ao desenvolvimento de websites e aplicações intuitivas, ajudo negócios a transformarem ideias em produtos digitais de impacto."*

---

### 2.4. Services (Serviços Oferecidos)
Apresentados em cartões modulares e diretos:
1. **Brand Identity:** Criação de logos, tipografia, paletas de cores e guias de estilo.
2. **Web Development:** Desenvolvimento de sites rápidos, responsivos, com código limpo e otimizados para SEO.
3. **UI/UX Design:** Design de interfaces para web, mobile, SaaS e dashboards intuitivos.
4. **Marketing & Graphic Design:** Criação de peças visuais, apresentações, mídias sociais e materiais digitais de suporte.

---

### 2.5. Crafted With Purpose / Projects (Portfólio de Trabalhos)
* **Layout:** Grid de cards com foco visual na imagem/mockup do projeto.
* **Detalhes por Projeto:**
  * Título do projeto (ex: *VisionAI*, *The Watch*, *Crown Low*, *Harbor*).
  * Tags de categorias (ex: UI/UX, Web Design, Branding).
  * Hover interativo revelando mais detalhes ou link para o case study.

---

### 2.6. Skills (Habilidades & Ferramentas)
* Exibição em formato de badges / pills ou ícones categorizados:
  * Ferramentas de Design (Figma, Framer, Adobe Suite).
  * Tecnologias de Desenvolvimento (HTML5, CSS3, Tailwind CSS, JavaScript, React/Next.js).
  * Metodologias (Design System, Prototipagem, SEO).

---

### 2.7. Testimonials (Prova Social & Depoimentos)
* Cartões com depoimentos reais de clientes e parceiros:
  * Citação sobre o processo de trabalho e resultados obtidos.
  * Foto de perfil do cliente, nome completo, cargo e empresa (ex: *Sarah Johnson - Founder, NovaTech*).

---

### 2.8. Contact & CTA Final (Fechamento)
* Chamada convidativa e sem atrito para início de projeto:
  > *"Have a project in mind? I'd love to hear about your ideas and help bring them to life."*
* Canais diretos de comunicação:
  * **E-mail:** Link direto `mailto:` com endereço visível.
  * **Telefone / WhatsApp:** Link direto com código do país.
  * **Localização / Fuso Horário:** Indicação de disponibilidade geográfica.
  * **Links Sociais:** GitHub, LinkedIn, Dribbble, Twitter/X, Behance.

---

### 2.9. Footer
* Navegação secundária replicada.
* Informações de copyright e créditos.

---

## 3. Diretrizes Técnicas para Implementação

Caso decida recriar este layout no projeto local (`landing-pages/portifolio`), recomenda-se:

| Área | Recomendação Técnica |
| :--- | :--- |
| **Framework / Estrutura** | React / Next.js ou HTML5 semântico com Vite |
| **Estilização** | Tailwind CSS (ideal para criar classes utilitárias e bento grids rapidamente) |
| **Animações** | Framer Motion (para React) ou CSS transitions nativas com `IntersectionObserver` |
| **Fontes** | Google Fonts: `Inter` (Sans) e `Satisfy` ou `Caveat` (Handwriting) |
| **Ícones** | Lucide Icons ou Phosphor Icons |
| **Performance** | Imagens no formato WebP/AVIF com `loading="lazy"` e dimensões explícitas |
