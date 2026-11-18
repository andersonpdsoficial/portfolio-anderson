import type {
  PortfolioData,
  ProfessionalLink,
} from '@/types/portfolio';

import { contactData } from '@/data/contactData';

/** Curso livre com certificado apresentado no portfólio. */
export interface FreeCourse {
  id: string;
  title: string;
  /** Data exibida no formato brasileiro. */
  date: string;
  totalHours: number;
  /** Caminho público da imagem, relativo a public/. */
  certificateImage: string;
  /** URL de verificação; manter vazia quando não houver link confiável. */
  certificateUrl: string;
}

/** Mantido por compatibilidade com eventuais importações existentes. */
export interface CursoEdu {
  id: string;
  title: string;
  totalHours: string;
  certificateImage: string;
  certificateUrl: string;
  date_inicio_fim: string;
}

type PortfolioWithCourses = PortfolioData & {
  freeCourses: readonly FreeCourse[];
};

/**
 * Fonte única de conteúdo público do portfólio.
 *
 * Diretrizes editoriais:
 * - Diferenciar projetos concluídos, estudos técnicos e trabalhos em andamento.
 * - Não divulgar indicadores, clientes ou resultados não comprovados.
 * - Não cadastrar links de repositório sem URL real do código-fonte.
 * - Preservar slugs e caminhos de imagens existentes para não quebrar rotas.
 * - As features de projetos em andamento descrevem escopo, não um aceite de produção.
 */

const email =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() ||
  contactData.recipientEmail;

const github = process.env.NEXT_PUBLIC_GITHUB_URL?.trim() || '';
const linkedin = process.env.NEXT_PUBLIC_LINKEDIN_URL?.trim() || '';

const links: ProfessionalLink[] = [
  ...(github
    ? [{ label: 'GitHub', href: github, type: 'github' as const }]
    : []),
  ...(linkedin
    ? [{ label: 'LinkedIn', href: linkedin, type: 'linkedin' as const }]
    : []),
  ...(email
    ? [{ label: 'E-mail', href: `mailto:${email}`, type: 'email' as const }]
    : []),
];

export const portfolioData: PortfolioWithCourses = {
  identity: {
    name: 'Anderson Pereira da Silva',
    shortName: 'Anderson Pereira',
    monogram: 'AP',
    role: 'Engenheiro de Software Full Stack',
    location: 'Porto Velho, Rondônia · Brasil',
    headline: 'Do problema à solução: software com arquitetura, propósito e qualidade.',
    intro:
      'Atuo no desenvolvimento de aplicações web e APIs, conectando requisitos de negócio, modelagem de dados, segurança e experiência do usuário. Trabalho com Python, Django, Next.js, React e TypeScript, com atenção à manutenção e à evolução dos sistemas.',
    about: [
      'Sou graduado em Engenharia de Software e pós-graduado em Inteligência Artificial e Machine Learning. Minha experiência combina desenvolvimento de soluções digitais institucionais, integração de sistemas e projetos próprios que exploram diferentes desafios de arquitetura e produto.',
      'No backend, concentro esforços na organização de domínios, contratos de API, persistência, autenticação e autorização. No frontend, desenvolvo interfaces responsivas e acessíveis, com componentes reutilizáveis, tipagem consistente e estados de interação claros.',
      'Valorizo decisões técnicas justificadas, rastreabilidade das mudanças e comunicação objetiva. Busco evoluir como engenheiro de software em equipes que priorizam revisão de código, testes, colaboração e entrega de valor real.',
    ].join('\n\n'),
    focus: [
      'Desenvolvimento Full Stack',
      'APIs e Arquitetura de Software',
      'Qualidade e Segurança de Aplicações',
      'Inteligência Artificial e Automação',
    ],
    ...(email ? { email } : {}),
    links,
  },

  navigation: [
    { label: 'Sobre', href: '/#sobre' },
    { label: 'Projetos', href: '/#projetos' },
    { label: 'Experiência', href: '/#experiencia' },
    { label: 'Stack', href: '/#stack' },
    { label: 'Contato', href: '/#contato' },
  ],

  capabilities: [
    {
      index: '01',
      title: 'Engenharia orientada ao problema',
      description:
        'Traduzo necessidades em fluxos, modelos de domínio e interfaces, buscando equilibrar experiência do usuário, regras de negócio e viabilidade técnica.',
    },
    {
      index: '02',
      title: 'Backend, integrações e segurança',
      description:
        'Estruturo APIs e integrações considerando limites de responsabilidade, consistência dos dados, autenticação, autorização e tratamento explícito de erros.',
    },
    {
      index: '03',
      title: 'Código preparado para evoluir',
      description:
        'Priorizo tipagem, componentização, testes, versionamento e documentação de decisões para reduzir acoplamento e tornar mudanças mais previsíveis.',
    },
  ],

  projects: [
    // 01 — VYRTRA: produto SaaS multi-tenant em evolução.
    {
      slug: 'vyrtra',
      eyebrow: '01 / SaaS B2B · Arquitetura multi-tenant',
      title: 'VYRTRA — Plataforma SaaS para eventos, reservas e operações comerciais',
      shortTitle: 'VYRTRA',
      summary:
        'Ecossistema multi-tenant em desenvolvimento, estruturado em monólito modular Django para integrar eventos, ingressos, reservas, pedidos e operações de diferentes organizações.',
      description:
        'O VYRTRA reúne desafios de arquitetura SaaS, controle de acesso e coordenação de fluxos comerciais em um único ecossistema. O backend adota domínios separados em um monólito modular Django, com PostgreSQL, tarefas assíncronas e políticas de acesso contextualizadas por organização. O escopo evolui para pedidos mistos, produtos físicos, operação de portaria e rotinas financeiras; essas frentes não devem ser interpretadas como funcionalidades integralmente concluídas.',
      category: 'SaaS e plataformas',
      status: 'Em desenvolvimento',
      year: '2026',
      thumbnail: '/projects/vyrtra.png',
      thumbnailAlt:
        'Visão geral da plataforma VYRTRA para gestão de eventos e operações comerciais.',
      gallery: [
        {
          src: '/projects/vyrtra/vyrtra.png',
          alt: 'Painel principal do ecossistema VYRTRA.',
          caption: 'Visão geral do painel administrativo',
        },
        {
          src: '/projects/vyrtra/login-vyrtra.png',
          alt: 'Interface de autenticação da plataforma VYRTRA.',
          caption: 'Autenticação e acesso à plataforma',
        },
        {
          src: '/projects/vyrtra/adm-muilt-tenant-vyrtra.png',
          alt: 'Tela de seleção de organização no ambiente multi-tenant.',
          caption: 'Seleção do contexto organizacional',
        },
        {
          src: '/projects/vyrtra/page-ingressos-vyrtra-home.png',
          alt: 'Página de descoberta de eventos e ingressos.',
          caption: 'Vitrine de eventos e ingressos',
        },
        {
          src: '/projects/vyrtra/page-ingressos-vyrtra.png',
          alt: 'Área do comprador para visualizar ingressos vinculados à conta.',
          caption: 'Área do comprador e seus ingressos',
        },
        {
          src: '/projects/vyrtra/page-ingressos-vyrtra-2.png',
          alt: 'Interface do fluxo de seleção e venda de ingressos.',
          caption: 'Experiência de compra de ingressos',
        },
        {
          src: '/projects/vyrtra/page-validator-vyrtra.png',
          alt: 'Tela de acesso ao módulo de validação de ingressos na portaria.',
          caption: 'Acesso à operação de portaria',
        },
        {
          src: '/projects/vyrtra/assencibilidade-vyrtra.png',
          alt: 'Recursos de acessibilidade apresentados na interface VYRTRA.',
          caption: 'Recursos de acessibilidade',
        },
      ],
      stack: [
        'Python', 'Django', 'Django REST Framework', 'PostgreSQL',
        'Next.js', 'React', 'TypeScript', 'Material UI',
        'Docker', 'Redis', 'Celery',
      ],
      featured: true,
      challenge:
        'Permitir que organizações distintas operem no mesmo produto sem misturar dados ou permissões, preservando regras consistentes entre catálogo, pedido, pagamento e validação de ingressos.',
      solution:
        'Estruturar a aplicação por domínios de negócio, explicitando o contexto da organização e separando decisões de autorização, processamento assíncrono, regras transacionais e apresentação. A evolução do checkout e dos módulos financeiros é tratada como parte do roadmap do produto.',
      engineeringDecisions: [
        'Monólito modular Django para manter coesão transacional sem antecipar a complexidade operacional de microsserviços.',
        'Contexto multi-tenant aplicado às consultas e operações, reduzindo o risco de acesso entre organizações.',
        'RBAC, ABAC e feature flags para distinguir papéis, condições de acesso e funcionalidades contratadas.',
        'PostgreSQL como base relacional para cadastros, vínculos e operações de negócio.',
        'Redis e Celery para atividades assíncronas e processamento desacoplado do ciclo HTTP.',
        'Separação entre APIs, serviços de aplicação, regras de domínio e interface Next.js.',
        'Auditoria e tratamento de operações sensíveis como requisitos explícitos de arquitetura.',
        'Docker para padronização dos serviços e do ambiente de desenvolvimento.',
      ],
      features: [
        'Gestão de organizações e contexto multi-tenant',
        'Autenticação e autorização contextual',
        'Catálogo de eventos e ingressos',
        'Área de ingressos do comprador',
        'Fluxos de validação na portaria',
        'Produtos, kits e checkout misto (em evolução)',
        'Reservas e pedidos integrados (em evolução)',
        'Operação financeira e conciliação (escopo de evolução)',
      ],
      accent: 'lime',
    },

    // 02 — OUVIDORIA DIGITAL: interface institucional.
    {
      slug: 'ouvidoria-digital',
      eyebrow: '02 / Produto público · Experiência digital',
      title: 'Ouvidoria Digital — Defensoria Pública do Estado de Rondônia',
      shortTitle: 'Ouvidoria Digital',
      summary:
        'Interface institucional voltada à manifestação do cidadão, ao acesso a informações e à coleta estruturada de solicitações e feedback.',
      description:
        'Projeto de experiência digital para o contexto de atendimento público. A solução organiza conteúdo institucional, formulários e notícias em jornadas compreensíveis, com atenção à acessibilidade, responsividade e clareza das mensagens. O trabalho contempla componentes reutilizáveis, validação de campos e integração com serviços necessários aos fluxos de atendimento.',
      category: 'Serviços digitais públicos',
      status: 'Concluído',
      year: '2025–2026',
      thumbnail: '/projects/ouvidoria.png',
      thumbnailAlt:
        'Interface da Ouvidoria Digital com navegação e serviços ao cidadão.',
      gallery: [
        {
          src: '/projects/ouvidoria/ouvidoria.png',
          alt: 'Página inicial da Ouvidoria Digital da Defensoria Pública de Rondônia.',
          caption: 'Página inicial e navegação institucional',
        },
        {
          src: '/projects/ouvidoria/ouvidoria-not.png',
          alt: 'Seção de notícias e comunicados da Ouvidoria Digital.',
          caption: 'Destaque de notícias institucionais',
        },
        {
          src: '/projects/ouvidoria/ouvidoria-not-2.png',
          alt: 'Lista de notícias e publicações da Ouvidoria Digital.',
          caption: 'Listagem de publicações',
        },
        {
          src: '/projects/ouvidoria/ouvidoria-for.png',
          alt: 'Formulários digitais para interação com a Ouvidoria.',
          caption: 'Formulários e entrada de solicitações',
        },
        {
          src: '/projects/ouvidoria/ouvidoria-est.png',
          alt: 'Página institucional com informações sobre a estrutura da equipe.',
          caption: 'Estrutura e informações da equipe',
        },
      ],
      links: {
        website: 'https://www.defensoria.ro.def.br/ouvidoriageral',
      },
      stack: [
        'Next.js', 'React', 'TypeScript', 'Material UI',
        'WordPress', 'Zod', 'REST API',
      ],
      featured: true,
      challenge:
        'Apresentar serviços institucionais e canais de manifestação de forma intuitiva, sem exigir do cidadão conhecimento prévio sobre a estrutura administrativa.',
      solution:
        'Organizar jornadas em páginas e componentes reutilizáveis, com formulários validados, estados claros de interação e conteúdo hierarquizado para facilitar localização e compreensão.',
      engineeringDecisions: [
        'Separação de componentes de interface, lógica de formulários e comunicação com serviços.',
        'Validação tipada para reduzir dados inconsistentes enviados pelos formulários.',
        'Estados explícitos de carregamento, sucesso e erro para orientar a interação.',
        'Estruturação de notícias e informações institucionais para leitura e navegação consistentes.',
        'Layouts responsivos e atenção à semântica e acessibilidade dos controles.',
        'Tipagem TypeScript para apoiar manutenção e evolução do frontend.',
      ],
      features: [
        'Informações da Ouvidoria',
        'Canal de manifestação do cidadão',
        'Formulários com validação',
        'Pesquisas de satisfação',
        'Notícias e comunicados',
        'Informações sobre a equipe',
        'Navegação responsiva e acessível',
      ],
      accent: 'blue',
    },

    // 03 — INTRANET: estudo de arquitetura, não sistema entregue.
    {
      slug: 'intranet-institucional',
      eyebrow: '03 / Sistemas internos · Arquitetura de informação',
      title: 'Intranet Institucional — Organização de conhecimento e serviços internos',
      shortTitle: 'Intranet Institucional',
      summary:
        'Estudo técnico de portal corporativo para consolidar documentos, comunicados e ferramentas de trabalho em uma navegação orientada ao colaborador.',
      description:
        'Estudo de organização de uma intranet institucional, com foco em arquitetura de informação, gestão de conteúdo e acesso a recursos internos. A proposta considera categorias por área, navegação consistente e possíveis integrações entre um CMS e interfaces web. As alternativas tecnológicas descritas representam decisões em avaliação, não comprovação de implantação em produção.',
      category: 'Arquitetura de informação',
      status: 'Estudo técnico',
      year: '2026',
      thumbnail: '/projects/intranet.png',
      thumbnailAlt:
        'Estudo visual de portal interno com atalhos, documentos e comunicados.',
      gallery: [
        {
          src: '/projects/intranet.png',
          alt: 'Proposta de painel de intranet para recursos corporativos.',
          caption: 'Visão conceitual do portal interno',
        },
      ],
      links: {
        website: 'https://www.defensoria.ro.def.br/intranet',
      },
      stack: [
        'WordPress', 'PHP', 'GraphQL', 'Next.js',
        'JavaScript', 'Modelagem de dados',
      ],
      featured: false,
      challenge:
        'Reduzir a dispersão de documentos e ferramentas institucionais, criando uma estrutura que permita encontrar recursos por atividade e contexto de uso.',
      solution:
        'Propor uma arquitetura de conteúdo com áreas, categorias e pontos de entrada consistentes, prevendo integração com mecanismos de publicação e observando as restrições de acesso de conteúdos internos.',
      engineeringDecisions: [
        'Organização do conteúdo a partir das tarefas e áreas dos usuários internos.',
        'Separação conceitual entre gestão de conteúdo e camada de apresentação.',
        'Avaliação do WordPress como CMS para publicações e páginas institucionais.',
        'Avaliação de GraphQL como alternativa de consulta estruturada aos conteúdos.',
        'Modelagem de componentes de navegação que possam ser reutilizados.',
        'Consideração de políticas de acesso antes da exposição de recursos internos.',
      ],
      features: [
        'Arquitetura de informação por categorias',
        'Acesso centralizado a documentos',
        'Diretório de ferramentas e serviços',
        'Comunicados internos',
        'Gestão de conteúdo (proposta)',
        'Integrações de dados (em avaliação)',
      ],
      accent: 'violet',
    },

    // 04 — LU ESTILO: API de negócio, sem URL de repositório confirmada.
    {
      slug: 'lu-estilo-api',
      eyebrow: '04 / Backend · API e regras de negócio',
      title: 'Lu Estilo — API para catálogo, estoque e ciclo de pedidos',
      shortTitle: 'Lu Estilo API',
      summary:
        'API REST em desenvolvimento com FastAPI para conectar cadastro de clientes, produtos, estoque e pedidos sob regras de autenticação e autorização.',
      description:
        'Projeto backend para centralizar operações de uma loja em contratos de API e entidades de domínio. A estrutura utiliza FastAPI, SQLAlchemy e Alembic, com autenticação JWT e regras de acesso por perfil. O escopo abrange cadastro de clientes, catálogo, movimentação de estoque, fluxo de pedidos e comunicação por WhatsApp, ainda em evolução.',
      category: 'Backend e APIs',
      status: 'Em desenvolvimento',
      year: '2026',
      thumbnail: '/projects/luestilo.png',
      thumbnailAlt:
        'Representação da API comercial Lu Estilo e de seus módulos de gestão.',
      gallery: [
        {
          src: '/projects/luestilo.png',
          alt: 'Visão ilustrativa das operações comerciais da API Lu Estilo.',
          caption: 'Domínios de catálogo, clientes e pedidos',
        },
      ],
      stack: [
        'Python', 'FastAPI', 'SQLAlchemy', 'Alembic',
        'Docker', 'Pytest', 'Sentry', 'JWT', 'REST API',
      ],
      featured: true,
      challenge:
        'Manter consistentes as relações entre clientes, produtos, disponibilidade e pedidos, evitando que a API se torne apenas um conjunto de operações CRUD desconectadas.',
      solution:
        'Estruturar modelos e serviços por responsabilidade, documentar contratos REST, versionar o esquema de dados e separar autenticação, autorização e regras do ciclo de pedidos.',
      engineeringDecisions: [
        'FastAPI para exposição de contratos HTTP e validação da entrada de dados.',
        'SQLAlchemy para mapeamento das entidades e Alembic para migrações rastreáveis.',
        'JWT para autenticação, com distinção entre credenciais de acesso e renovação.',
        'RBAC para diferenciar operações administrativas e ações de usuários comuns.',
        'Separação de fluxos de pedido, controle de estoque e cadastro de clientes.',
        'Pytest como ferramenta de verificação das regras e contratos da aplicação.',
        'Sentry como ferramenta prevista no stack para observabilidade de falhas.',
        'Integração com WhatsApp tratada como fronteira externa da aplicação.',
      ],
      features: [
        'API REST e contratos de entrada',
        'Autenticação JWT e RBAC',
        'Cadastro de clientes e validação de CPF',
        'Catálogo, categorias e imagens de produtos',
        'Controle de estoque',
        'Criação e acompanhamento de pedidos',
        'Histórico de pedidos',
        'Mensagens e notificações via WhatsApp (em evolução)',
      ],
      accent: 'lime',
    },

    // 05 — ALMOXARIFADO: rastreabilidade institucional.
    {
      slug: 'gestao-almoxarifado',
      eyebrow: '05 / Sistemas internos · Rastreabilidade de estoque',
      title: 'Gestão de Almoxarifado — Materiais e movimentações institucionais',
      shortTitle: 'Gestão de Almoxarifado',
      summary:
        'Sistema em desenvolvimento para organizar inventário, entradas, saídas e histórico de materiais em ambiente institucional.',
      description:
        'A proposta concentra os registros de materiais e movimentações em um fluxo rastreável. O sistema considera cadastro por categorias, atualização de saldos, consulta do histórico e informações de apoio à gestão. O frontend utiliza Next.js e React; o backend é estruturado com Django e PostgreSQL.',
      category: 'Sistemas institucionais',
      status: 'Em desenvolvimento',
      year: '2025–2026',
      thumbnail: '/projects/almoxarifado.png',
      thumbnailAlt:
        'Painel de controle de materiais, saldos e movimentações de almoxarifado.',
      gallery: [
        {
          src: '/projects/almoxarifado.png',
          alt: 'Interface de acompanhamento de materiais e estoque.',
          caption: 'Painel de inventário e movimentações',
        },
      ],
      stack: [
        'Next.js', 'React', 'TypeScript', 'Material UI',
        'Zod', 'Django', 'PostgreSQL', 'REST API',
      ],
      featured: true,
      challenge:
        'Oferecer rastreabilidade sobre o que foi cadastrado, recebido e retirado, com informações consistentes para consulta e prestação de contas.',
      solution:
        'Modelar materiais, categorias e eventos de movimentação, com interfaces próprias para cadastro, consulta e acompanhamento de saldos, observando regras de acesso e validação de dados.',
      engineeringDecisions: [
        'Separação entre cadastro de materiais e registros de movimentação.',
        'PostgreSQL para persistência relacional de entidades e histórico operacional.',
        'Django para regras de negócio e exposição de serviços REST.',
        'Next.js e TypeScript para interfaces tipadas e manutenção dos formulários.',
        'Validações de entrada para reduzir inconsistências de quantidades e cadastros.',
        'Consideração de perfis de acesso para operações que alteram o estoque.',
        'Organização de consultas e relatórios para acompanhar entradas e saídas.',
      ],
      features: [
        'Cadastro e categorização de materiais',
        'Registro de entradas e saídas',
        'Consulta de saldos e disponibilidade',
        'Histórico de movimentações',
        'Controle de acesso',
        'Relatórios de apoio à gestão',
      ],
      accent: 'blue',
    },

    // 06 — TRIBO: comunicação em tempo real.
    {
      slug: 'tribo',
      eyebrow: '06 / Tempo real · Comunicação orientada a eventos',
      title: 'Tribo — Aplicação de conversas em tempo real com Socket.IO',
      shortTitle: 'Tribo',
      summary:
        'Aplicação de mensagens instantâneas construída para explorar comunicação bidirecional, eventos, salas e sincronização da interface.',
      description:
        'O Tribo explora o ciclo de comunicação entre clientes React e um servidor Node.js por meio do Socket.IO. A aplicação organiza participantes em salas de conversa e trata eventos de mensagens e notificações, oferecendo um estudo aplicado dos desafios de estado e atualização em tempo real.',
      category: 'Comunicação em tempo real',
      status: 'Concluído',
      year: '2025',
      thumbnail: '/projects/tribo.png',
      thumbnailAlt:
        'Representação de salas de conversa e mensagens na aplicação Tribo.',
      gallery: [
        {
          src: '/projects/tribo.png',
          alt: 'Interface do sistema Tribo com conversas e participantes.',
          caption: 'Salas e mensagens em tempo real',
        },
      ],
      stack: [
        'Node.js', 'React', 'TypeScript',
        'Socket.IO', 'socket.io-client',
      ],
      featured: true,
      challenge:
        'Manter a interface sincronizada com os eventos do servidor enquanto usuários participam de diferentes salas e interagem em tempo real.',
      solution:
        'Definir eventos de comunicação e responsabilidades entre cliente e servidor, com organização de salas, gerenciamento de participantes e atualização dos estados de conversa.',
      engineeringDecisions: [
        'Socket.IO para comunicação bidirecional baseada em eventos.',
        'Separação entre os eventos do servidor e a apresentação no React.',
        'Modelagem de salas, participantes e mensagens como conceitos distintos.',
        'Sincronização do estado da interface com os eventos recebidos.',
        'Organização de notificações e atualização de conversas por contexto.',
        'Consideração de persistência e recuperação para o histórico de mensagens.',
      ],
      features: [
        'Mensagens instantâneas',
        'Salas de conversa',
        'Gerenciamento de participantes',
        'Atualizações em tempo real',
        'Histórico de mensagens',
        'Notificações',
      ],
      accent: 'violet',
    },

    // 07 — ANYBANK: estudo de autenticação e dados financeiros.
    {
      slug: 'anybanck',
      eyebrow: '07 / Projeto de estudo · Next.js e Supabase',
      title: 'AnyBank — Experimento de organização financeira com Supabase',
      shortTitle: 'AnyBank',
      summary:
        'Projeto educacional de finanças pessoais com foco na integração entre interface React, acesso autenticado e persistência de dados com Supabase.',
      description:
        'Desenvolvido como exercício prático a partir de conteúdos da Alura, o AnyBank permite explorar a construção de uma aplicação web com autenticação, navegação e dados financeiros. O foco do estudo é compreender o fluxo entre frontend Next.js, sessões de usuário e serviços do Supabase, sem apresentar o projeto como produto bancário real.',
      category: 'Projetos de estudo',
      status: 'Em desenvolvimento',
      year: '2025',
      thumbnail: '/projects/anybanck.png',
      thumbnailAlt:
        'Tela de login do projeto educacional AnyBank.',
      gallery: [
        {
          src: '/projects/anybanck.png',
          alt: 'Página de autenticação da aplicação financeira AnyBank.',
          caption: 'Experiência de autenticação do usuário',
        },
      ],
      links: {
        website: 'https://anybank-main.vercel.app/auth/login',
      },
      stack: [
        'Supabase', 'Next.js', 'React', 'JavaScript', 'Modelagem de dados',
      ],
      featured: false,
      challenge:
        'Integrar autenticação e dados de uma aplicação financeira de estudo sem concentrar toda a lógica nos componentes de interface.',
      solution:
        'Explorar organização de telas e fluxos de acesso em React, utilizando o Supabase como serviço externo para autenticação e persistência e documentando as responsabilidades de cada camada.',
      engineeringDecisions: [
        'Next.js e React para estruturação de páginas e componentes.',
        'Supabase como serviço gerenciado para dados e autenticação no contexto do estudo.',
        'Separação entre apresentação, lógica de acesso e comunicação com o backend.',
        'Modelagem das informações financeiras relevantes para o exercício.',
        'Tratamento de estados de carregamento, erro e acesso às telas como preocupação de interface.',
      ],
      features: [
        'Tela de autenticação',
        'Fluxo de acesso do usuário',
        'Organização financeira pessoal',
        'Integração com Supabase',
        'Exercício de modelagem de dados',
      ],
      accent: 'yellow',
    },

    // 08 — GRANAZEN: lançamentos e visualização financeira.
    {
      slug: 'granzen',
      eyebrow: '08 / Projeto de estudo · Lançamentos e visualização de dados',
      title: 'GranaZen — Experimento de controle e visualização financeira',
      shortTitle: 'GranaZen',
      summary:
        'Aplicação educacional de finanças pessoais voltada ao registro de movimentações e à apresentação visual de informações financeiras.',
      description:
        'Projeto de aprendizagem com interface para acompanhar a vida financeira e registrar itens de movimentação, conforme ilustrado nas telas do portfólio. O exercício explora a organização dos dados, a experiência de inclusão de registros e sua representação visual, utilizando React, Next.js e Supabase conforme o stack informado no projeto.',
      category: 'Projetos de estudo',
      status: 'Em desenvolvimento',
      year: '2025',
      thumbnail: '/projects/granzen.png',
      thumbnailAlt:
        'Painel inicial da aplicação educacional de finanças GranaZen.',
      gallery: [
        {
          src: '/projects/granzen.png',
          alt: 'Tela inicial do projeto GranaZen com visão de informações financeiras.',
          caption: 'Visão geral das finanças pessoais',
        },
        {
          src: '/projects/granzen1.png',
          alt: 'Interface de inclusão de um registro financeiro no GranaZen.',
          caption: 'Fluxo de cadastro de movimentações',
        },
      ],
      links: {
        website: 'https://grana-zen-main.vercel.app/index.html',
      },
      stack: [
        'Supabase', 'Next.js', 'React', 'JavaScript', 'Modelagem de dados',
      ],
      featured: false,
      challenge:
        'Transformar lançamentos isolados em informações compreensíveis, com uma navegação simples para registrar e consultar movimentações.',
      solution:
        'Organizar a interação entre formulário, dados persistidos e visualização, distinguindo o cadastro das movimentações da apresentação dos resultados.',
      engineeringDecisions: [
        'Organização dos dados financeiros em registros consultáveis.',
        'Componentes voltados a entrada, listagem e apresentação das informações.',
        'Separação entre fluxo de cadastro e indicadores exibidos na interface.',
        'Integração com Supabase como exercício de persistência em serviço gerenciado.',
        'Tratamento do feedback visual após ações de inclusão de dados.',
      ],
      features: [
        'Visão geral das informações financeiras',
        'Inclusão de registros de movimentação',
        'Listagem e acompanhamento de lançamentos',
        'Visualização de gráficos e indicadores',
        'Integração com Supabase',
      ],
      accent: 'lime',
    },
  ],

  experiences: [
    {
      id: 'dpe-ro-pos-graduacao',
      role: 'Desenvolvimento de Software e Inteligência Artificial · Estágio de Pós-graduação',
      organization: 'Defensoria Pública do Estado de Rondônia',
      period: 'Jan 2026 — Atual',
      location: 'Porto Velho · RO',
      description:
        'Atuação no desenvolvimento e na evolução de aplicações digitais institucionais, aproximando necessidades das áreas usuárias, interfaces web e serviços de backend.',
      highlights: [
        'Desenvolvimento e manutenção de funcionalidades web com atenção à legibilidade e à reutilização de componentes.',
        'Integração entre interfaces, APIs e regras de negócio de sistemas institucionais.',
        'Organização de código e apoio à evolução de aplicações existentes.',
        'Aplicação de versionamento e práticas de manutenção em ambiente colaborativo.',
      ],
      technologies: ['Python', 'Django', 'Next.js', 'React', 'TypeScript', 'Git'],
    },
    {
      id: 'dpe-ro-graduacao',
      role: 'Desenvolvimento de Software · Estágio de Graduação',
      organization: 'Defensoria Pública do Estado de Rondônia',
      period: 'Jun 2024 — Dez 2025',
      location: 'Porto Velho · RO',
      description:
        'Experiência prática no desenvolvimento de interfaces, formulários e integrações para soluções digitais de uso institucional.',
      highlights: [
        'Implementação de interfaces e funcionalidades voltadas a demandas internas e atendimento digital.',
        'Manutenção corretiva e evolutiva de sistemas e componentes web.',
        'Integração de páginas e formulários com APIs e serviços existentes.',
        'Participação na organização das entregas e no controle de versão do código.',
      ],
      technologies: ['Python', 'Django', 'Next.js', 'React', 'JavaScript', 'Git'],
    },
    {
      id: 'provider-energisa',
      role: 'Atendimento e Suporte Técnico',
      organization: 'Grupo Provider / Energisa',
      period: 'Jun 2023 — Mai 2024',
      location: 'Ariquemes · RO',
      description:
        'Atendimento operacional e suporte a usuários, com investigação de ocorrências, orientação sobre sistemas internos e capacitação de equipes em unidades de Rondônia.',
      highlights: [
        'Análise de processos de atendimento para identificar oportunidades de melhoria operacional.',
        'Capacitação de colaboradores de diferentes regionais no uso de sistemas e ferramentas internas.',
        'Reconhecimento como colaborador destaque na regional de Ariquemes, conforme histórico profissional informado.',
      ],
    },
    {
      id: 'max-informatica',
      role: 'Instrutor de Informática',
      organization: 'R.T.L.N Centro Integrado Max Informática',
      period: 'Mar 2023 — Mai 2024',
      location: 'Jaru · RO',
      description:
        'Ensino de informática para públicos com diferentes níveis de familiaridade tecnológica, incluindo atividades práticas, avaliação e suporte ao ambiente de aprendizagem.',
      highlights: [
        'Planejamento e condução de aulas, atividades práticas e avaliações de aprendizagem.',
        'Orientação individual e mediação de dúvidas para apoiar o progresso dos alunos.',
        'Apoio a processos administrativos e à emissão de certificados.',
        'Manutenção e suporte aos equipamentos utilizados nas atividades educacionais.',
      ],
      technologies: [
        'Microsoft Office', 'Windows', 'Linux', 'Google Workspace',
        'Ferramentas de apresentação', 'Plataformas educacionais',
      ],
    },
  ],

  education: [
    {
      title: 'Engenharia de Software',
      type: 'Graduação',
      status: 'Concluída',
      date_inicio_fim: '02/02/2021 - 15/12/2025',
      totalHours: '4.000 horas',
      certificateImage: '/courses/25-graducao.png',
      certificateUrl: '',
    },
    {
      title: 'Inteligência Artificial e Machine Learning',
      type: 'Pós-graduação lato sensu',
      status: 'Concluída',
      date_inicio_fim: '17/12/2025 - 30/10/2026',
      totalHours: '400 horas',
      certificateImage: '/courses/24-POS.png',
      certificateUrl: 'validador.vitru.com.br',
    },
  ],

  // Cursos e certificados: preservados do cadastro original; títulos revisados.
  // Certificados com URL não confiável ficam sem link até validação.
  freeCourses: [
    {
      id: '00-fm2s',
      title: 'INTELIGÊNCIA ARTIFICIAL GENERATIVA',
      date: '04/05/2026',
      totalHours: 16,
      certificateImage: '/courses/fm2s-inteligencia.png',
      certificateUrl: 'https://ead.fm2s.com.br/verify/175fd51da258f096ebdb053e4ebc1e713515f9ca',
    },
    {
      id: '000-fm2s',
      title: 'METODOLOGIAS ÁGEIS NA PRÁTICA',
      date: '10/04/2026',
      totalHours: 12,
      certificateImage: '/courses/fm2s-inteligencia.png',
      certificateUrl: 'https://ead.fm2s.com.br/verify/4d03c558e7ab24fd99fae7a8579931891fbe9179',
    },
    {
      id: '01-T-I-E-C-E-P-D',
      title: 'TECNOLOGIA DA INFORMAÇÃO E COMUNICAÇÃO EM PLATAFORMAS DIGITAIS',
      date: '11/11/2026',
      totalHours: 40,
      certificateImage: '/courses/01-T-I-E-C-E-P-D.png',
      certificateUrl: 'http://www.unicesumar.edu.br/documentos',
    },
    {
      id: '02-P-P-M-L.png',
      title: 'PROGRAMAÇÃO EM PYTHON PARA MACHINE LEARNING',
      date: '11/09/2026',
      totalHours: 40,
      certificateImage: '/courses/02-P-P-M-L.png',
      certificateUrl: 'http://www.unicesumar.edu.br/documentos',
    },
    {
      id: '10-A-R-N-A.png',
      title: 'ARQUITETURA DE REDES NEURAIS ARTIFICIAIS',
      date: '11/09/2026',
      totalHours: 40,
      certificateImage: '/courses/10-A-R-N-A.png',
      certificateUrl: 'http://www.unicesumar.edu.br/documentos',
    },
    {
      id: '04-INDI.png',
      title: 'INTRODUÇÃO A NEGÓCIOS DIGITAIS E INOVAÇÃO',
      date: '11/09/2026',
      totalHours: 40,
      certificateImage: '/courses/04-I-N-D-I.png',
      certificateUrl: 'http://www.unicesumar.edu.br/documentos',
    },
    {
      id: '05-I-A-S-I.png',
      title: 'INTELIGÊNCIA ARTIFICIAL E SISTEMAS INTELIGENTES',
      date: '11/09/2026',
      totalHours: 40,
      certificateImage: '/courses/05-I-A-S-I.png',
      certificateUrl: 'http://www.unicesumar.edu.br/documentos',
    },
    {
      id: '06-F-T-M-L.png',
      title: 'FUNDAMENTOS E TÉCNICAS DE MACHINE LEARNING',
      date: '11/09/2026',
      totalHours: 40,
      certificateImage: '/courses/06-F-T-M-L.png',
      certificateUrl: 'http://www.unicesumar.edu.br/documentos',
    },
    {
      id: '07-F-A-P-I.png',
      title: 'FERRAMENTAS E APLICAÇÕES PRÁTICAS DE INTELIGÊNCIA ARTIFICIAL',
      date: '11/09/2026',
      totalHours: 40,
      certificateImage: '/courses/07-F-A-P-I.png',
      certificateUrl: 'http://www.unicesumar.edu.br/documentos',
    },
    {
      id: '08-B-D-A-T-D.png',
      title: 'BIG DATA ANALYTIC E A TOMADA DE DECISÕES',
      date: '11/09/2026',
      totalHours: 40,
      certificateImage: '/courses/08-B-D-A-T-D.png',
      certificateUrl: 'http://www.unicesumar.edu.br/documentos',
    },
    {
      id: '03-P.png',
      title: 'PORTFÓLIO',
      date: '11/09/2026',
      totalHours: 40,
      certificateImage: '/courses/03-P.png',
      certificateUrl: 'http://www.unicesumar.edu.br/documentos',
    },
    {
      id: '09-A-V-I-C.png',
      title: 'ASSISTENTES VIRTUAIS E CHATBOTS',
      date: '11/09/2026',
      totalHours: 40,
      certificateImage: '/courses/09-A-V-I-C.png',
      certificateUrl: '',
    },
    {
      id: '11-alura-postgres.png',
      title: 'POSTGRESQL: COMANDOS DML E DDL',
      date: '12/05/2026',
      totalHours: 8,
      certificateImage: '/courses/11-alura-postgres.png',
      certificateUrl: 'https://cursos.alura.com.br/certificate/74ccbdf7-c7cf-4670-8d02-a843fa6f1714',
    },
    {
      id: '12-alura-PostgreSQL-views.png',
      title: 'POSTGRESQL: VIEWS, SUB-CONSULTAS E FUNÇÕES',
      date: '12/05/2026',
      totalHours: 8,
      certificateImage: '/courses/12-alura-PostgreSQL-views.png',
      certificateUrl: '',
    },
    {
      id: '13-alura-postgrees.png',
      title: 'POSTGRESQL',
      date: '17/05/2026',
      totalHours: 8,
      certificateImage: '/courses/13-alura-postgrees.png',
      certificateUrl: 'https://cursos.alura.com.br/certificate/a8c4d221-a8c7-48f0-971e-6ebb6e85e911',
    },
    {
      id: '14-alura-Python-criar.png',
      title: 'PYTHON: CRIE A SUA PRIMEIRA APLICAÇÃO',
      date: '04/08/2024',
      totalHours: 8,
      certificateImage: '/courses/14-alura-Python-criar.png',
      certificateUrl: 'https://cursos.alura.com.br/certificate/7fca7700-573c-49dd-95bc-149f2d5a4f87',
    },
    {
      id: '15-React-implementando-arquitetura-event-driven-Socket-io.png',
      title: 'REACT: IMPLEMENTANDO ARQUITETURA EVENT-DRIVEN COM SOCKET.IO',
      date: '20/04/2026',
      totalHours: 8,
      certificateImage: '/courses/15-React-implementando-arquitetura-event-driven-Socket-io.png',
      certificateUrl: 'https://cursos.alura.com.br/certificate/27ac4d7d-88b8-49e3-a708-5b2a2ff09c6c',
    },
    {
      id: '16-SOLID-aplicado-ao-React.png',
      title: 'SOLID APLICANDO AO REACT: MELHORANDO A MODULARIDADE E FLEXIBILIDADE DO CÓDIGO',
      date: '09/04/2025',
      totalHours: 8,
      certificateImage: '/courses/16-SOLID-aplicado-ao-React.png',
      certificateUrl: 'https://cursos.alura.com.br/certificate/a3054c47-1342-4710-9beb-5d04f29c5ade',
    },
    {
      id: '22-REACT-NEST.png',
      title: 'REACT E NEST: IMPLEMENTANDO UM BACKEND FOR FRONT-END',
      date: '15/04/2025',
      totalHours: 8,
      certificateImage: '/courses/22-REACT-NEST.png',
      certificateUrl: 'https://cursos.alura.com.br/certificate/87fb978f-7326-4b5b-9d36-0d031bbb4c75',
    },
    {
      id: '23-REACT-ARQUITETURA.png',
      title: 'REACT: INTEGRAÇÃO COM SUPABASE E CONCEITOS DE ARQUITETURA LIMPA NA PRÁTICA',
      date: '15/04/2025',
      totalHours: 8,
      certificateImage: '/courses/23-REACT-ARQUITETURA.png',
      certificateUrl: 'https://cursos.alura.com.br/certificate/249d0965-5e87-4113-8c79-2fa1a30b155b',
    },
    {
      id: '17-API-com-Django3-Validacoes-buscas-filtros-e-deploy.png',
      title: 'API COM DJANGO 3: VALIDAÇÕES, BUSCAS, FILTROS E DEPLOY',
      date: '22/07/2024',
      totalHours: 8,
      certificateImage: '/courses/17-API-com-Django3-Validacoes-buscas-filtros-e-deploy.png',
      certificateUrl: 'https://cursos.alura.com.br/certificate/28d48af2-5f59-4a1d-995e-eac098a8532f',
    },
    {
      id: '18-API-com-Django3-Django-Rest-Framework.png',
      title: 'API COM DJANGO 3: DJANGO REST FRAMEWORK',
      date: '18/07/2024',
      totalHours: 8,
      certificateImage: '/courses/18-API-com-Django3-Django-Rest-Framework.png',
      certificateUrl: 'https://cursos.alura.com.br/certificate/f72e48d3-1896-473c-b4e9-e8e81462bc3e',
    },
    {
      id: '19-Comecando-em-Programacao-carreira-e-primeiros-passos.png',
      title: 'COMEÇANDO EM PROGRAMAÇÃO: CARREIRA E PRIMEIROS PASSOS',
      date: '28/01/2025',
      totalHours: 8,
      certificateImage: '/courses/19-Comecando-em-Programacao-carreira-e-primeiros-passos.png',
      certificateUrl: 'https://cursos.alura.com.br/certificate/a9c7d2a3-0b3f-4a69-8ca8-ccb9d235a3e5',
    },
    {
      id: '20-React-comece-seu-projeto-full-stack.png',
      title: 'REACT: COMECE SEU PROJETO FULL STACK',
      date: '03/07/2024',
      totalHours: 12,
      certificateImage: '/courses/20-React-comece-seu-projeto-full-stack.png',
      certificateUrl: 'https://cursos.alura.com.br/certificate/f14a55de-903e-4e75-91be-735217540aaa',
    },
    {
      id: '21-conclusoes.png',
      title: 'CONCLUSÕES DE TRILHAS E CURSOS',
      date: '01/07/2024 - 12/05/2026',
      totalHours: 91,
      certificateImage: '/courses/21-conclusoes.png',
      certificateUrl: 'https://cursos.alura.com.br/user/andersonengsoft/fullCertificate/908ac35092f96a2944b45e1561d2f27d',
    },
  ],

  skillGroups: [
    {
      id: 'frontend',
      label: 'Frontend & Experiência do Usuário',
      description:
        'Construção de interfaces responsivas e acessíveis, com atenção à consistência visual, tipagem das interações e reutilização de componentes.',
      skills: [
        'React', 'Next.js', 'TypeScript', 'JavaScript', 'Material UI',
        'HTML5', 'CSS3', 'Responsive Design', 'WordPress',
      ],
    },
    {
      id: 'backend',
      label: 'Backend & Persistência de Dados',
      description:
        'Desenho e integração de APIs, regras de negócio, autenticação, autorização e persistência relacional, considerando manutenção e consistência operacional.',
      skills: [
        'Python', 'Django', 'Django REST Framework', 'FastAPI',
        'Node.js', 'PHP', 'PostgreSQL', 'Alembic', 'REST API',
        'GraphQL', 'JWT', 'RBAC', 'ABAC', 'Socket.IO',
      ],
    },
    {
      id: 'engineering',
      label: 'Engenharia, Qualidade & Operações',
      description:
        'Práticas de engenharia aplicadas a evolução de sistemas: versionamento, testes, automação, conteinerização, observabilidade e organização de ambientes.',
      skills: [
        'Git', 'GitLab', 'Docker', 'CI/CD', 'Redis', 'Celery',
        'Pytest', 'Sentry', 'n8n', 'Testes automatizados',
        'Arquitetura modular', 'Modelagem de dados', 'Integração de sistemas',
      ],
    },
    {
      id: 'ai',
      label: 'Inteligência Artificial & Automação',
      description:
        'Estudos e integrações de recursos de IA em aplicações, com ênfase em validação de dados, limites de responsabilidade e automação de fluxos.',
      skills: [
        'Gemini API', 'Integração de LLMs', 'Machine Learning',
        'Pydantic', 'Extração estruturada de dados',
        'Automação de processos', 'Integração com APIs',
        'Validação de dados',
      ],
    },
  ],
};

export type PortfolioContent = typeof portfolioData;
