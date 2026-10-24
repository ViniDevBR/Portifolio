/**
 * i18n — English (default, lives in index.html) + Portuguese (dictionary below).
 * - data-i18n="key"                      -> element innerHTML
 * - data-i18n-attr="attr:key;attr2:key"  -> attribute values (aria-label, meta content, ...)
 * Terms like "Backend — Strong" or "Clean Architecture" are intentionally NOT translated: they have no key.
 */
(() => {
  const PT = {
    "aria.footerNav": "Navegação do rodapé",
    "skills.methodologies": "Metodologias",
    "skills.techDocs": "Documentação Técnica",
    "skills.solutionDesign": "Definição de Soluções",
    "skills.languages": "Linguagens",
    "skills.security": "Segurança",
    "footer.rights": "Todos os direitos reservados.",
    "a11y.skip": "Pular para o conteúdo principal",
    "nav.about": "Sobre",
    "nav.services": "Serviços",
    "nav.projects": "Projetos",
    "nav.contact": "Contato",
    "nav.downloadPrefix": "Baixar ",
    "stat.years": "Anos de experiência",
    "stat.apps": "Apps publicados",
    "stat.appsNote": "Nas lojas e ainda com usuários ativos",
    "stat.ecosystem": "Ecossistema principal",
    "stat.backend": "Backend forte",
    "about.eyebrow": "SOBRE MIM",
    "about.title": "Construindo Produtos com Engenharia, Arquitetura e Propósito",
    "about.p1": "Desenvolvedor Fullstack com mais de 4 anos de experiência no desenvolvimento de aplicações web, mobile e APIs. Atuo desde a compreensão das necessidades do negócio e definição da solução técnica até a implementação, testes e entrega em produção, com foco em arquitetura escalável, segurança e qualidade de código.",
    "about.p2": "Meu ecossistema backend mais forte hoje é NodeJS, especialmente com TypeScript e NestJS; no lado do cliente, trabalho bastante com React, React Native, NextJS e Expo. Tenho experiência com arquitetura em camadas, Clean Architecture, SOLID, integração com bancos de dados e GraphQL, APIs REST, CI/CD, automação de testes, cache com Redis e mensageria com RabbitMQ. Também atuo com C#/.NET e Python/FastAPI no desenvolvimento de funcionalidades backend e tenho experiência em aplicações mobile com offline-first, atualizações OTA e feature flags.",
    "about.p3": "Minha atuação inclui arquitetura de software e liderança técnica, conduzindo a concepção das soluções desde o levantamento de requisitos até a documentação técnica de front-end, back-end e mobile para discussão e validação da equipe antes do desenvolvimento. Defino contratos de API, entidades, interfaces, regras de negócio e formulários, responsabilidades das telas e estratégias de gerenciamento de estado e persistência, alinhando as decisões técnicas às necessidades do produto e do negócio com a equipe.",
    "about.p4": "Ao longo da minha carreira, trabalhei com sistemas ERP, produtos financeiros e aplicações mobile, incluindo produtos publicados na App Store e no Google Play.",
    "journey.title": "Minha trajetória",
    "journey.2015": "Primeiro contato com lógica de programação e linguagens como C, C++, C# e Ladder. No projeto de conclusão de curso, atuei diretamente na programação de CLP/PIC utilizando Ladder.",
    "journey.2021": "Primeiro contato com HTML e CSS através da Rocketseat. Participei como voluntário do projeto Sou Junior.",
    "journey.2022": "Através de uma indicação do projeto Sou Junior, tive minha primeira oportunidade profissional na área de desenvolvimento, atuando no ERP Suporte.",
    "journey.2023": "Início da graduação em Engenharia de Software pela Wyden.",
    "journey.2026": "Graduação finalizada em Engenharia de Software.",
    "pillar.fullstack.t": "Engenharia Fullstack",
    "pillar.fullstack.d": "Desenvolvimento de aplicações Web, Mobile e Backend, trabalhando do frontend à API e às regras de negócio.",
    "common.softwareArchitecture": "Arquitetura de Software",
    "pillar.arch.d": "Clean Architecture, SOLID, separação de responsabilidades, modularidade, padrões de projeto e decisões técnicas orientadas ao contexto.",
    "pillar.lead.t": "Produto &amp; Liderança Técnica",
    "pillar.lead.d": "Transformo necessidades de negócio em requisitos, contratos, regras técnicas e soluções implementáveis, além de liderar decisões e processos técnicos quando necessário.",
    "svc.eyebrow": "SERVIÇOS",
    "svc.title": "O Que Eu Construo &amp; Entrego",
    "svc.sub": "Produtos de software pensados para manutenibilidade, escalabilidade, performance e necessidades reais de negócio.",
    "svc.web.t": "Aplicações Web",
    "svc.web.d": "Aplicações modernas com React, NextJS e TypeScript, com foco em experiência, arquitetura e manutenção.",
    "svc.mobile.t": "Aplicações Mobile",
    "svc.mobile.d": "Aplicativos React Native e Expo preparados para produção e publicação em App Store e Google Play.",
    "svc.backend.d": "APIs e serviços backend com NodeJS, TypeScript e NestJS, com integração a bancos, autenticação e regras de negócio.",
    "svc.fullstack.t": "Desenvolvimento Fullstack",
    "svc.fullstack.d": "Desenvolvimento ponta a ponta, conectando interface, estado, APIs, persistência e regras de negócio.",
    "svc.arch.d": "Estruturação e evolução de projetos com Clean Architecture, SOLID, modularidade e separação de responsabilidades.",
    "svc.testing.t": "Testes Automatizados",
    "svc.testing.d": "Testes unitários, de integração e E2E com Jest, Testing Library e Detox, conforme a necessidade do produto.",
    "svc.cicd.d": "Pipelines e automações para build, testes, publicação e entrega contínua, incluindo EAS Workflows, GitHub Actions e OTA Updates.",
    "svc.lead.t": "Liderança Técnica",
    "svc.lead.d": "Organização de sprints, Kanban, reuniões com PO, code review, aprovação de PRs e acompanhamento da qualidade técnica.",
    "proj.eyebrow": "PORTFÓLIO",
    "proj.title": "Projetos em Destaque",
    "proj.sub": "Projetos que representam minha experiência em arquitetura de software, desenvolvimento Fullstack, Mobile e entrega de produto.",
    "proj.details": "Ver detalhes",
    "aria.closeProject": "Fechar detalhes do projeto",
    "aria.screens": "Capturas de tela",
    "proj.type.social": "Rede social",
    "proj.type.expenses": "Gestão de despesas",
    "proj.type.ondemand": "Serviço sob demanda",
    "proj.intrapay.d": "App e website de fintech para realizar transações PIX e de outros métodos. Segurança elevada em toda entrada do usuário.",
    "proj.bexpenso.d": "Aplicativo para prestação de contas dos funcionários. Eles solicitam adiantamentos, lançam despesas e realizam fechamentos.",
    "proj.erp.d": "Aplicativo integrado ao ERP Benner, usado pelos funcionários das empresas que contratam o serviço. Reúne 15 módulos do ERP e executa todas as regras de negócio.",
    "proj.bvendas.d": "Aplicativo para compras, com modo visitante. Os dados do cartão trafegavam criptografados e somente o ID era salvo.",
    "proj.help.d": "App de serviço em complemento com o site. Os usuários contratavam o guincho, a notificação chegava ao motorista com todas as informações do item a ser guinchado, a rota e mais, e o usuário acompanhava o guincho se movendo em tempo real.",
    "proj.merco.d": "ERP web com diversos módulos para empresas, incluindo geração de PDFs para download.",
    "common.architecture": "Arquitetura",
    "common.architectureH": "Arquitetura",
    "proj.hl12": "Destaques (12)",
    "proj.intrapay.h1": "Atuação desde a primeira conversa com o cliente até a publicação do produto nas lojas.",
    "proj.intrapay.h2": "Levantamento de necessidades, documentação para aprovação e definição técnica.",
    "proj.intrapay.h3": "Elaboração de documentação técnica com telas do Figma, rotas do backend, interfaces TypeScript, regras de negócio e RBAC da interface.",
    "proj.intrapay.h4": "Definição de biblioteca de UI, gerenciamento de estado e arquitetura do projeto.",
    "proj.intrapay.h5": "Liderança de equipe de desenvolvedores freelancers.",
    "proj.intrapay.h6": "Organização de sprints, Kanban, reuniões semanais com PO, code reviews e aprovação de PRs.",
    "proj.intrapay.h7": "Implementação de AES e recursos de biometria / Face ID voltados à segurança do aplicativo.",
    "proj.intrapay.h8": "CI/CD com EAS Workflows e GitHub Actions.",
    "proj.intrapay.h11": "Jest, React Testing Library e Detox.",
    "proj.intrapay.h12": "Testes unitários, de integração e E2E executados também no CI.",
    "proj.growzone.d": "App de rede social canábica, onde os usuários interagem entre si por chat e posts.",
    "proj.hl7": "Destaques (7)",
    "proj.growzone.h1": "Refatoração de uma base antiga e desorganizada.",
    "proj.growzone.h2": "Atualização para uma versão mais recente do React Native.",
    "proj.growzone.h3": "Reestruturação da organização do projeto e separação de responsabilidades.",
    "proj.growzone.h4": "Aplicação de princípios SOLID.",
    "proj.growzone.h5": "Implementação de CI/CD e OTA Updates.",
    "proj.growzone.h6": "Criação de testes em uma base que anteriormente não possuía cobertura de testes suficiente para sustentar a refatoração.",
    "proj.growzone.h7": "Atuação também na definição técnica e organização da solução junto ao produto.",
    "proj.empty": "Nenhum projeto nesta categoria ainda.",
    "skills.title": "Tecnologias Com as Quais Trabalho",
    "skills.sub": "Uma stack prática construída no desenvolvimento real de produtos em Web, Mobile e Backend.",
    "skills.testing": "Testes",
    "skills.restApis": "APIs REST",
    "skills.maestro": "Maestro (aprendendo)",
    "skills.errorHandling": "Tratamento de Erros",
    "skills.maintainability": "Manutenibilidade",
    "skills.observability": "Observabilidade",
    "skills.traceability": "Rastreabilidade",
    "exp.title": "Experiência &amp; Diferenciais",
    "exp.adapt.t": "Adaptabilidade",
    "exp.adapt.d": "Aprendo novas tecnologias e me adapto rapidamente a diferentes projetos, contextos e necessidades de negócio.",
    "exp.arch.t": "Arquitetura &amp; Liderança Técnica",
    "exp.arch.d1": "Atuo como arquiteto de software: conduzo a concepção das soluções, do levantamento de requisitos à documentação técnica de front-end, back-end e mobile, validada com a equipe antes do desenvolvimento. Defino contratos de API, entidades, interfaces, regras de negócio, responsabilidades das telas e estratégias de estado e persistência.",
    "exp.arch.d2": "Coordeno o desenvolvimento técnico por meio de:",
    "exp.chip.po": "Reuniões com PO",
    "exp.chip.pr": "Aprovação de PRs",
    "exp.chip.quality": "Qualidade Técnica",
    "exp.biz.t": "Negócio + Tecnologia",
    "exp.biz.d": "Transformo necessidades de negócio em requisitos, regras, contratos, decisões arquiteturais e soluções técnicas claras.",
    "exp.product.t": "Visão de Produto",
    "exp.product.d": "Não penso apenas na implementação. Procuro entender o problema, identificar oportunidades, avaliar impactos e propor soluções que façam sentido para o produto.",
    "exp.eng.t": "Engenharia de Software",
    "exp.eng.d": "Busco equilíbrio entre velocidade de entrega e qualidade técnica, evitando complexidade desnecessária e aplicando abstrações, padrões e princípios arquiteturais de forma pragmática.",
    "exp.prod.t": "Entrega em Produção",
    "exp.prod.d": "Experiência acompanhando produtos desde a definição inicial até build, CI/CD, publicação e evolução em produção.",
    "ct.eyebrow": "CONTATO",
    "ct.title": "Vamos Construir Algo Incrível",
    "ct.text": "Procurando um Desenvolvedor Fullstack que entenda o negócio, tome boas decisões técnicas e leve um produto da ideia à produção? Vamos conversar.",
    "ct.email": "E-mail Direto",
    "ct.wa": "WhatsApp Direto",
    "ct.gh": "Código no GitHub",
    "cv.title": "Baixar Currículo",
    "cv.text": "Escolha a versão do currículo de Vinicius Celestino no idioma de sua preferência:",
    "cv.en": "Currículo (Inglês)",
    "cv.pt": "Currículo (Português)",
    "cv.github": "Ou veja o perfil técnico completo no GitHub &rarr;",
    "meta.desc": "Desenvolvedor Fullstack especializado em React, React Native, NextJS, TypeScript e NodeJS, com experiência em arquitetura de software, Clean Architecture, SOLID, testes automatizados e CI/CD.",
    "meta.ogDesc": "Desenvolvedor Fullstack com atuação em Web, Mobile e Backend, unindo engenharia de software, arquitetura, performance e visão de produto.",
    "aria.hero": "Apresentação Inicial",
    "aria.dock": "Navegação Flutuante",
    "aria.nav": "Navegação Principal",
    "aria.download": "Baixar CV",
    "aria.stats": "Indicadores Rápidos",
    "aria.about": "Sobre o Desenvolvedor",
    "aria.services": "Serviços Prestados",
    "aria.projects": "Projetos Selecionados",
    "aria.skills": "Habilidades e Tecnologias",
    "aria.strengths": "Diferenciais Profissionais",
    "aria.leadFlow": "Fluxo de coordenação técnica",
    "aria.contact": "Seção de Contato e Conversão",
    "aria.mail": "Enviar e-mail para vinideveloper386@gmail.com",
    "aria.wa": "Falar no WhatsApp pelo número +55 19 98310-0871",
    "aria.gh": "Visitar perfil no GitHub: github.com/ViniDevBR",
    "aria.closeModal": "Fechar Modal",
    "aria.backTop": "Voltar ao Topo",
    "aria.footer": "Rodapé do Site",
    "aria.home": "Voltar ao início",
  };

  const STORAGE_KEY = 'vc_lang';
  const HTML_LANG = { en: 'en', pt: 'pt-BR' };

  const detect = () => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'en' || saved === 'pt') return saved;
    } catch {
      // storage blocked (private mode): fall through to browser language
    }
    return navigator.language?.toLowerCase().startsWith('pt') ? 'pt' : 'en';
  };

  // Original (English) values are cached on first run so switching back restores them.
  const translated = (lang, key, original) => (lang === 'pt' && PT[key] !== undefined ? PT[key] : original);

  const apply = (lang) => {
    document.documentElement.lang = HTML_LANG[lang];

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      el._en ??= el.innerHTML;
      el.innerHTML = translated(lang, el.dataset.i18n, el._en);
    });

    document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
      el._enAttrs ??= {};
      el.dataset.i18nAttr.split(';').forEach((pair) => {
        const [attr, key] = pair.split(':');
        el._enAttrs[attr] ??= el.getAttribute(attr);
        el.setAttribute(attr, translated(lang, key, el._enAttrs[attr]));
      });
    });

    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
    });
  };

  const setLanguage = (lang) => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // storage blocked: language still switches for this visit
    }
    apply(lang);
  };

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  apply(detect());
})();
