import type {
  PortfolioData,
  ProfessionalLink,
} from '@/types/portfolio';

import { contactData } from '@/data/contactData';

/** Curso livre com imagem pública do certificado em public/courses/. */
export interface FreeCourse {
  id: string;
  title: string;
  /** Data exibida ao visitante, no formato brasileiro (DD/MM/AAAA). */
  date: string;
  /** Carga horária total, em horas. */
  totalHours: number;
  /** Caminho público da imagem: /courses/nome-do-arquivo.webp */
  certificateImage: string;

  /** URL do certificado */
  certificateUrl: string;
}

type PortfolioWithCourses = PortfolioData & {
  freeCourses: readonly FreeCourse[];
};

export interface CursoEdu {
  id: string;
  title: string;
  totalHours: string,
  certificateImage: string,
  certificateUrl: string
  date_inicio_fim: string,
}

/**
 * Portfólio profissional — Anderson Pereira da Silva
 *
 * Arquivo: src/data/portfolioData.ts
 *
 * Centraliza:
 * - Identidade profissional
 * - Navegação
 * - Competências
 * - Projetos
 * - Experiências profissionais
 * - Formação acadêmica
 * - Cursos livres e certificados
 * - Habilidades técnicas
 *
 * Os dados são separados dos componentes de interface.
 * Não incluir links, resultados ou métricas não verificados.
 *
 * As imagens dos projetos devem existir em:
 * public/projects/
 */

// ============================================================
// 1. CONFIGURAÇÕES DE CONTATO
// ============================================================

const email =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() ||
  contactData.recipientEmail;

const github =
  process.env.NEXT_PUBLIC_GITHUB_URL?.trim() || '';

const linkedin =
  process.env.NEXT_PUBLIC_LINKEDIN_URL?.trim() || '';

const links: ProfessionalLink[] = [
  ...(github
    ? [
      {
        label: 'GitHub',
        href: github,
        type: 'github' as const,
      },
    ]
    : []),

  ...(linkedin
    ? [
      {
        label: 'LinkedIn',
        href: linkedin,
        type: 'linkedin' as const,
      },
    ]
    : []),

  ...(email
    ? [
      {
        label: 'E-mail',
        href: `mailto:${email}`,
        type: 'email' as const,
      },
    ]
    : []),
];

// ============================================================
// 2. DADOS PRINCIPAIS DO PORTFÓLIO
// ============================================================

export const portfolioData: PortfolioWithCourses = {
  // ==========================================================
  // IDENTIDADE PROFISSIONAL
  // ==========================================================


  identity: {
    name: 'Anderson Pereira da Silva',
    shortName: 'Anderson Pereira',
    monogram: 'AP',
    role: 'Engenheiro de Software Full Stack',
    location: 'Porto Velho, Rondônia · Brasil',
    headline:
      'Engenharia sólida. Experiências que fazem sentido.',
    intro:
      'Desenvolvo soluções web completas, conectando interfaces modernas, APIs bem estruturadas e arquiteturas de software seguras, organizadas e preparadas para evoluir.',
    about: [
      'Sou graduado em Engenharia de Software, com pós-graduação em Inteligência Artificial e Machine Learning. Desenvolvo soluções web completas, do planejamento à implementação de interfaces, APIs e bancos de dados, com foco em qualidade, segurança e organização.',
      'No frontend, priorizo interfaces modernas, responsivas e acessíveis, com componentes reutilizáveis e código bem estruturado. No backend, trabalho com APIs, arquitetura modular, regras de negócio, modelagem de dados, autenticação e testes, buscando soluções escaláveis e de fácil manutenção.',
    ].join('\n\n'),

    focus: [
      'Engenharia de Software',
      'Desenvolvimento Full Stack',
      'Arquitetura de Sistemas',
      'Inteligência Artificial & Automação',
    ],

    ...(email ? { email } : {}),

    links,
  },

  // ==========================================================
  // NAVEGAÇÃO
  // ==========================================================

  navigation: [
    {
      label: 'Sobre',
      href: '/#sobre',
    },
    {
      label: 'Projetos',
      href: '/#projetos',
    },
    {
      label: 'Experiência',
      href: '/#experiencia',
    },
    {
      label: 'Stack',
      href: '/#stack',
    },
    {
      label: 'Contato',
      href: '/#contato',
    },
  ],

  // ==========================================================
  // COMPETÊNCIAS PROFISSIONAIS
  // ==========================================================

  capabilities: [
    {
      index: '01',
      title: 'Da arquitetura à implementação',
      description:
        'Análise de requisitos, modelagem de soluções, desenvolvimento frontend e backend e integração entre diferentes tecnologias.',
    },

    {
      index: '02',
      title: 'Backend robusto e seguro',
      description:
        'Desenvolvimento de APIs, modelagem de dados, autenticação, autorização, regras de negócio e arquiteturas modulares.',
    },

    {
      index: '03',
      title: 'Qualidade e evolução contínua',
      description:
        'Organização de código, testes automatizados, integração contínua, automação de processos e manutenção evolutiva.',
    },
  ],

  // ==========================================================
  // PROJETOS
  // ==========================================================

  projects: [
    // --------------------------------------------------------
    // 01 — VYRTRA
    // --------------------------------------------------------

    {
      slug: 'vyrtra',
      eyebrow: '01 / SaaS · Arquitetura de Software',
      title:
        'VYRTRA — Ecossistema de Gestão de Eventos e Reservas, Plataforma SaaS multi-tenant',
      shortTitle: 'VYRTRA',
      summary:
        'Plataforma SaaS multi-tenant para gerenciamento de eventos, ingressos, reservas, produtos, pedidos, pagamentos e automações.',
      description:
        'Desenvolvimento de um ecossistema empresarial baseado em uma arquitetura de monólito modular com Django. A plataforma foi projetada para atender múltiplas organizações, integrando gerenciamento de eventos, venda de ingressos, reservas, checkout, controle de produtos, autenticação, autorização, auditoria e canais digitais.',
      category: 'Plataformas',
      status: 'Em desenvolvimento',
      year: '2026',
      thumbnail: '/projects/vyrtra.png',
      thumbnailAlt:
        'Representação visual do ecossistema VYRTRA, com módulos de gestão, eventos, ingressos e operações integradas.',
      gallery: [
        {
          src: '/projects/vyrtra/vyrtra.png',
          alt: 'Representação visual do ecossistema VYRTRA, com módulos de gestão, eventos, ingressos e operações integradas.',
          caption: 'Painel principal de gerenciamento'
        },
        {
          src: '/projects/vyrtra/login-vyrtra.png',
          alt: 'Visão da tela de Login do VYRTRA',
          caption: 'Visão da tela login vyrtra',
        },
        {
          src: '/projects/vyrtra/adm-muilt-tenant-vyrtra.png',
          alt: 'Visão da tela de escolha Multi Tenant do VYRTRA. Podendo escolher qual empresa acessar.',
          caption: 'Visão da tela de escolha Multi Tenant do VYRTRA',
        } ,
        {
          src: '/projects/vyrtra/page-ingressos-vyrtra-home.png',
          alt: 'Visão da tela de ingressos do VYRTRA.',
          caption: 'Visão da tela de ingressos do VYRTRA.',
        } ,
        {
          src: '/projects/vyrtra/page-ingressos-vyrtra.png',
          alt: 'Visão da tela de meus ingressos do VYRTRA, após login do cliente.',
          caption: 'Visão da tela de ingressos do VYRTRA.',
        } ,
        {
          src: '/projects/vyrtra/page-ingressos-vyrtra-2.png',
          alt: 'Visão da tela vendas de ingressos do VYRTRA.',
          caption: 'Visão da tela de vendas de ingressos do VYRTRA.',
        } ,
        {
          src: '/projects/vyrtra/page-validator-vyrtra.png',
          alt: 'Visão da tela de login do Validador de ingressos Portaria do VYRTRA.',
          caption: 'Visão da tela do validador de  ingressos do VYRTRA.',
        } ,
        {
          src: '/projects/vyrtra/assencibilidade-vyrtra.png',
          alt: 'Visão da tela de acessibilidade disponivel VYRTRA.',
          caption: 'Visão da tela de acessibilidade disponivel VYRTRA.',
        }
      ],
      // links: { website: 'https://...', repository: 'https://github.com/...' },
      stack: [
        'Python',
        'Django',
        'Django REST Framework',
        'PostgreSQL',
        'Next.js',
        'React',
        'TypeScript',
        'Material UI',
        'Docker',
        'Redis',
        'Celery',
      ],
      featured: true,
      challenge:
        'Projetar uma plataforma capaz de atender diferentes organizações e operações comerciais, garantindo isolamento de dados, segurança, controle de permissões e integração consistente entre módulos.',
      solution:
        'Estruturação do backend como monólito modular, com separação de responsabilidades por domínio, gerenciamento multi-tenant, autenticação centralizada, autorização híbrida e integração entre os módulos de eventos, ingressos, pedidos, pagamentos e automações.',
      engineeringDecisions: [
        'Adoção de arquitetura de monólito modular com Django e organização por domínios de negócio.',
        'Implementação de isolamento multi-tenant com validações de contexto organizacional.',
        'Combinação de RBAC, ABAC e feature flags para controle de permissões e funcionalidades.',
        'Utilização de PostgreSQL para persistência de dados relacionais.',
        'Utilização de Redis e Celery para cache, filas e processamento assíncrono.',
        'Integração entre eventos, ingressos, produtos físicos, pedidos e pagamentos.',
        'Separação entre regras de negócio, serviços, APIs e interfaces de usuário.',
        'Implementação de mecanismos de auditoria, autenticação e validação de operações sensíveis.',
        'Orquestração de serviços e dependências utilizando Docker.',
      ],

      features: [
        'Arquitetura multi-tenant',
        'Gestão de organizações',
        'Eventos e ingressos',
        'Reservas de serviços',
        'Checkout unificado',
        'Produtos físicos e kits',
        'Gestão de pedidos',
        'Integração de pagamentos',
        'Autenticação e MFA',
        'RBAC e ABAC',
        'Auditoria de operações',
        'Automações e integrações',
      ],

      accent: 'lime',
    },

    // --------------------------------------------------------
    // 02 — OUVIDORIA DIGITAL
    // --------------------------------------------------------

    {
      slug: 'ouvidoria-digital',
      eyebrow: '02 / Ouvidoria Digital · Experiência do Usuário',
      title:
        'Ouvidoria Digital — Defensoria Pública de Rondônia',
      shortTitle: 'Ouvidoria Digital',
      summary:
        'Solução digital para manifestações, atendimento ao cidadão, pesquisas de satisfação e organização de informações institucionais.',
      description:
        'Desenvolvimento de interfaces e fluxos digitais voltados ao atendimento institucional da Defensoria Pública do Estado de Rondônia. O projeto contempla formulários estruturados, validação de informações, integração com serviços e mecanismos de feedback para melhorar a experiência dos usuários.',
      category: 'Experiência digital',
      status: 'Concluído',
      year: '2025–2026',
      thumbnail: '/projects/ouvidoria.png',
      thumbnailAlt:
        'Interface ilustrativa da Ouvidoria Digital da Defensoria Pública de Rondônia, com formulários e informações institucionais.',
      gallery: [
        { 
          src: '/projects/ouvidoria/ouvidoria.png', 
          alt: 'Interface ilustrativa da Ouvidoria Digital da Defensoria Pública de Rondônia, com formulários e informações institucionais.', 
          caption: 'Visão geral do projeto' 
        } ,
        {
          src: '/projects/ouvidoria/ouvidoria.png',
          alt: 'Visão da tela Inicial da Ouvidoria.',
          caption: 'Visão da tela Inicial da Ouvidoria',
        },
        {
          src: '/projects/ouvidoria/ouvidoria-not.png',
          alt: 'Visão da tela Inicial de noticias da Ouvidoria.',
          caption: 'Visão da tela Inicial de noticias da Ouvidoria',
        },
        {
          src: '/projects/ouvidoria/ouvidoria-not-2.png',
          alt: 'Visão da tela de listagem de noticias da Ouvidoria.',
          caption: 'Visão da telalistagem de noticias da Ouvidoria',
        },
        {
          src: '/projects/ouvidoria/ouvidoria-for.png',
          alt: 'Visão da tela de formulários da Ouvidoria.',
          caption: 'Visão da tela de formulários da Ouvidoria',
        },
        {
          src: '/projects/ouvidoria/ouvidoria-est.png',
          alt: 'Visão da tela Inicial estrutura equipe da Ouvidoria.',
          caption: 'Visão da tela Inicial estrututa equipe da Ouvidoria',
        }
        ],
      links: { website: 'https://www.defensoria.ro.def.br/ouvidoriageral' },
      stack: [
        'Next.js',
        'React',
        'TypeScript',
        'Material UI',
        'WordPress',
        'Zod',
        'REST API',
      ],
      featured: true,
      challenge:
        'Desenvolver interfaces institucionais claras, acessíveis e organizadas, facilitando o registro de manifestações e a coleta de informações de diferentes perfis de usuários.',
      solution:
        'Organização de componentes reutilizáveis, desenvolvimento de formulários com validação tipada, integração com serviços e implementação de estados de carregamento, sucesso e erro.',
      engineeringDecisions: [
        'Separação entre componentes de apresentação, lógica de formulários e integração com serviços.',
        'Centralização de esquemas de validação para manter consistência dos dados.',
        'Utilização de TypeScript para melhorar a segurança de tipos e a manutenção.',
        'Implementação de feedback visual para operações e respostas do sistema.',
        'Organização de interfaces responsivas para diferentes dispositivos.',
        'Estruturação de conteúdo institucional e seções de notícias.',
      ],

      features: [
        'Ouvidoria digital',
        'Manifestação do cidadão',
        'Pesquisas de satisfação',
        'Formulários inteligentes',
        'Validação de dados',
        'Componentes reutilizáveis',
        'Seção de notícias',
        'Integração com APIs',
        'Interfaces responsivas',
      ],

      accent: 'blue',
    },

    // --------------------------------------------------------
    // 03 — SISTEMA INTRANET
    // --------------------------------------------------------

    {
      slug: 'intranet-institucional',
      eyebrow: '03 / Sistemas Corporativos · Intranet',
      title:
        'Sistema de Intranet — Gestão e Comunicação Interna',
      shortTitle: 'Sistema Intranet',
      summary:
        'Ambiente digital corporativo para centralização de ferramentas, documentos, informações e comunicação interna.',
      description:
        'Projeto de intranet corporativa destinado à organização de recursos institucionais, documentos, informações e ferramentas de trabalho. A solução busca oferecer aos colaboradores um ambiente centralizado, com navegação estruturada e acesso aos recursos conforme as necessidades da organização.',
      category: 'Sistemas de gestão',
      status: 'Estudo técnico',
      year: '2026',
      thumbnail: '/projects/intranet.png',
      thumbnailAlt:
        'Representação de uma intranet corporativa com painel de ferramentas, documentos e comunicação interna.',
      gallery: [{ src: '/projects/intranet.png', alt: 'Representação de uma intranet corporativa com painel de ferramentas, documentos e comunicação interna.', caption: 'Visão geral do projeto' }],
      links: { website: 'https://www.defensoria.ro.def.br/intranet', repository: 'https://www.defensoria.ro.def.br/ouvidoriageral' },
      stack: [
        'WordPress',
        'PHP',
        'GraphQL',
        'Next.js',
        'JavaScript',
        'Modelagem de dados',
      ],
      featured: true,
      challenge:
        'Centralizar informações, documentos e ferramentas corporativas, reduzindo a dispersão de recursos e facilitando o acesso dos colaboradores aos serviços internos.',
      solution:
        'Planejamento de uma arquitetura de intranet com organização de conteúdo, estruturação de recursos institucionais, integração de dados e interfaces de navegação voltadas ao ambiente corporativo.',
      engineeringDecisions: [
        'Estruturação de conteúdo por categorias, áreas e funcionalidades.',
        'Separação entre apresentação de informações e gerenciamento de conteúdo.',
        'Utilização de WordPress como alternativa para administração de conteúdos institucionais.',
        'Avaliação da integração GraphQL para disponibilização estruturada de informações.',
        'Organização de componentes reutilizáveis para navegação e visualização de recursos.',
        'Planejamento de mecanismos de controle de acesso para conteúdos internos.',
      ],
      features: [
        'Portal corporativo',
        'Comunicação interna',
        'Centralização de documentos',
        'Organização de ferramentas',
        'Gerenciamento de conteúdo',
        'Integração GraphQL',
        'Navegação institucional',
      ],

      accent: 'violet',
    },

    // --------------------------------------------------------
    // 04 — LU ESTILO API
    // --------------------------------------------------------

    {
      slug: 'lu-estilo-api',
      eyebrow: '04 / Backend · Gestão Comercial',
      title:
        'Lu Estilo — API de Gestão de Pedidos',
      shortTitle: 'Sistema Lu Estilo',
      summary:
        'API RESTful desenvolvida com FastAPI para gerenciamento de clientes, produtos, estoque, pedidos e integração com WhatsApp.',
      description:
        'Desenvolvimento de uma API backend para o sistema de gestão comercial Lu Estilo. A solução reúne funcionalidades de autenticação, autorização, cadastro de clientes, gerenciamento de produtos, controle de estoque, processamento de pedidos e integração com canais de comunicação.',
      category: 'Sistemas de gestão',
      status: 'Em desenvolvimento',
      year: '2026',
      thumbnail: '/projects/luestilo.png',
      thumbnailAlt:
        'Representação do sistema Lu Estilo, com gestão de pedidos, produtos, clientes e integração comercial.',
      gallery: [{ src: '/projects/luestilo.png', alt: 'Representação do sistema Lu Estilo, com gestão de pedidos, produtos, clientes e integração comercial.', caption: 'Visão geral do projeto' }],
      links: { website: 'https://www.defensoria.ro.def.br/ouvidoriageral', repository: 'https://www.defensoria.ro.def.br/ouvidoriageral' },
      stack: [
        'Python',
        'FastAPI',
        'SQLAlchemy',
        'Alembic',
        'Docker',
        'Pytest',
        'Sentry',
        'JWT',
        'REST API',
      ],

      featured: true,
      challenge:
        'Construir uma API organizada e segura para centralizar operações comerciais, garantindo consistência entre clientes, produtos, estoque e pedidos.',
      solution:
        'Estruturação de uma API RESTful com FastAPI, modelos de dados utilizando SQLAlchemy, versionamento de banco de dados com Alembic e autenticação baseada em tokens JWT. A solução contempla regras de negócio para o gerenciamento comercial e integração com serviços externos.',
      engineeringDecisions: [
        'Implementação de autenticação JWT com suporte a access token e refresh token.',
        'Aplicação de autorização baseada em papéis (RBAC), diferenciando administradores e usuários comuns.',
        'Desenvolvimento de operações CRUD para gerenciamento de clientes.',
        'Validação de CPF e organização do histórico de pedidos dos clientes.',
        'Implementação de gerenciamento de produtos com controle de estoque, imagens e categorias.',
        'Modelagem do ciclo de pedidos, incluindo criação, acompanhamento e entrega.',
        'Integração com WhatsApp para comunicação e notificações relacionadas aos pedidos.',
        'Utilização de SQLAlchemy para mapeamento objeto-relacional.',
        'Versionamento de alterações do banco de dados utilizando Alembic.',
        'Utilização de Pytest para testes automatizados e Sentry para monitoramento de erros.',
      ],

      features: [
        'API RESTful',
        'Autenticação JWT',
        'Autorização RBAC',
        'Gestão de clientes',
        'Validação de CPF',
        'Cadastro de produtos',
        'Controle de estoque',
        'Gestão de pedidos',
        'Histórico de pedidos',
        'Integração WhatsApp',
        'Testes automatizados',
        'Monitoramento de erros',
      ],

      accent: 'lime',
    },

    // --------------------------------------------------------
    // 05 — GESTÃO DE ALMOXARIFADO
    // --------------------------------------------------------

    {
      slug: 'gestao-almoxarifado',
      eyebrow: '05 / Gestão Institucional · Controle de Estoque',
      title:
        'Sistema de Gestão de Almoxarifado — Defensoria Pública de Rondônia',
      shortTitle: 'Gestão de Almoxarifado',
      summary:
        'Sistema institucional para gerenciamento de materiais, controle de estoque, movimentações e relatórios de almoxarifado.',
      description:
        'Desenvolvimento de uma solução para gerenciamento de materiais e equipamentos em almoxarifado, com foco no controle de inventário e na organização das operações de entrada, saída e acompanhamento de estoque.',
      category: 'Sistemas de gestão',
      status: 'Em desenvolvimento',
      year: '2025–2026',
      thumbnail: '/projects/almoxarifado.png',
      thumbnailAlt:
        'Painel ilustrativo de controle de almoxarifado, com indicadores de estoque, materiais e movimentações.',
      gallery: [{ src: '/projects/almoxarifado.png', alt: 'Painel ilustrativo de controle de almoxarifado, com indicadores de estoque, materiais e movimentações.', caption: 'Visão geral do projeto' }],
      // links: { website: 'https://...', repository: 'https://github.com/...' },
      stack: [
        'Next.js',
        'React',
        'TypeScript',
        'Material UI',
        'Zod',
        'Django',
        'PostgreSQL',
        'REST API',
      ],

      featured: true,

      challenge:
        'Organizar o cadastro e a movimentação de materiais institucionais, garantindo rastreabilidade, controle de estoque e acesso adequado às informações.',
      solution:
        'Desenvolvimento de funcionalidades para cadastro de materiais, acompanhamento de quantidades disponíveis, registro de movimentações de entrada e saída e consulta de informações para apoio à gestão.',
      engineeringDecisions: [
        'Modelagem de entidades para materiais, categorias, estoques e movimentações.',
        'Estruturação do banco de dados PostgreSQL para armazenamento das informações.',
        'Implementação de autenticação e autorização conforme diferentes níveis de acesso.',
        'Desenvolvimento de APIs para comunicação entre frontend e backend.',
        'Utilização de TypeScript para tipagem das informações e integração com os serviços.',
        'Construção de interfaces utilizando Next.js, React e Material UI.',
        'Aplicação de validações para reduzir inconsistências no cadastro e movimentação de materiais.',
        'Organização de consultas e relatórios para acompanhamento do estoque.',
      ],

      features: [
        'Cadastro de materiais',
        'Categorias de produtos',
        'Controle de estoque',
        'Registro de entradas',
        'Registro de saídas',
        'Histórico de movimentações',
        'Controle de acesso',
        'Relatórios gerenciais',
      ],

      accent: 'blue',
    },

    // --------------------------------------------------------
    // 06 — SISTEMA TRIBO
    // --------------------------------------------------------

    {
      slug: 'tribo',
      eyebrow: '06 / Comunicação · Tempo Real',
      title:
        'Tribo — Sistema de Conversas Instantâneas',
      shortTitle: 'Sistema Tribo',
      summary:
        'Plataforma de comunicação em tempo real com salas de conversa, mensagens instantâneas, participantes e notificações.',
      description:
        'Desenvolvimento de uma aplicação para comunicação instantânea, utilizando tecnologias web e comunicação bidirecional. O sistema organiza usuários e participantes em salas de conversa, permitindo a troca de mensagens e a integração com recursos de notificação.',
      category: 'Plataformas',
      status: 'Concluído',
      year: '2025',
      thumbnail: '/projects/tribo.png',
      thumbnailAlt:
        'Representação de uma plataforma de mensagens instantâneas, com salas de conversa e notificações em tempo real.',

      gallery: [{ src: '/projects/tribo.png', alt: 'Representação de uma plataforma de mensagens instantâneas, com salas de conversa e notificações em tempo real.', caption: 'Visão geral do projeto' }],
      // links: { website: 'https://...', repository: 'https://github.com/...' },
      stack: [
        'Node.js',
        'React',
        'TypeScript',
        'Socket.IO',
        'socket.io-client',
      ],

      featured: true,
      challenge:
        'Desenvolver uma solução de comunicação instantânea capaz de organizar diferentes usuários e salas, mantendo consistência no fluxo de mensagens e gerenciamento de participantes.',
      solution:
        'Implementação de comunicação em tempo real utilizando Socket.IO, com estruturação de salas, gerenciamento de participantes, eventos de mensagens e integração entre frontend e backend.',

      engineeringDecisions: [
        'Utilização de Socket.IO para comunicação bidirecional entre cliente e servidor.',
        'Organização de salas de conversa e participantes.',
        'Modelagem das entidades relacionadas às conversas e mensagens.',
        'Estruturação de mecanismos de persistência e recuperação de mensagens.',
        'Gerenciamento de permissões e participação em salas de conversa.',
        'Integração entre React e Node.js para atualização das interfaces em tempo real.',
        'Organização de eventos para comunicação, notificações e atualizações.',
      ],

      features: [
        'Mensagens instantâneas',
        'Comunicação em tempo real',
        'Salas de conversa',
        'Gerenciamento de usuários',
        'Participantes por sala',
        'Histórico de mensagens',
        'Notificações',
        'Integração frontend e backend',
      ],

      accent: 'violet',
    },
  ],

  // ==========================================================
  // EXPERIÊNCIA PROFISSIONAL
  // ==========================================================

  experiences: [
    // --------------------------------------------------------
    // ESTÁGIO DE PÓS-GRADUAÇÃO
    // --------------------------------------------------------

    {
      id: 'dpe-ro-pos-graduacao',
      role:
        'Desenvolvimento de Software e Inteligência Artificial · Estágio de Pós-graduação',
      organization:
        'Defensoria Pública do Estado de Rondônia',
      period: 'Jan 2026 — Atual',
      location: 'Porto Velho · RO',
      description:
        'Atuação em desenvolvimento e manutenção de soluções digitais institucionais, envolvendo interfaces web, APIs, integração entre sistemas e aplicações de engenharia de software.',
      highlights: [
        'Desenvolvimento e manutenção de aplicações web institucionais.',
        'Construção e integração de interfaces com serviços de backend.',
        'Participação na implementação de funcionalidades e regras de negócio.',
        'Organização e evolução de componentes reutilizáveis.',
        'Aplicação de boas práticas de desenvolvimento, manutenção e versionamento de código.',
      ],

      technologies: [
        'Python',
        'Django',
        'Next.js',
        'React',
        'TypeScript',
        'Git',
      ],
    },

    // --------------------------------------------------------
    // ESTÁGIO DE GRADUAÇÃO
    // --------------------------------------------------------

    {
      id: 'dpe-ro-graduacao',
      role:
        'Desenvolvimento de Software · Estágio de Graduação',
      organization:
        'Defensoria Pública do Estado de Rondônia',
      period: 'Jun 2024 — Dez 2025',
      location: 'Porto Velho · RO',
      description:
        'Experiência em desenvolvimento e manutenção de soluções digitais, contribuindo para interfaces, formulários, serviços e sistemas utilizados em processos institucionais.',
      highlights: [
        'Desenvolvimento de interfaces e funcionalidades web.',
        'Manutenção evolutiva de sistemas institucionais.',
        'Integração de interfaces com APIs e serviços.',
        'Desenvolvimento e aprimoramento de formulários digitais.',
        'Utilização de controle de versão e organização de código.',
      ],

      technologies: [
        'Python',
        'Django',
        'Next.js',
        'React',
        'JavaScript',
        'Git',
      ],
    },

    // --------------------------------------------------------
    // ATENDIMENTO E SUPORTE
    // --------------------------------------------------------

    {
      id: 'provider-energisa',
      role: 'Atendimento e Suporte técnico',
      organization: 'Grupo Provider / Energisa',
      period: 'Jun 2023 — Mai 2024',
      location: 'Ariquemes/RO · Brasil',
      description:
        'Atuação em atendimento e suporte, com foco em comunicação, investigação de problemas, orientação de usuários, resolução de demandas operacionais e treinamento de equipes em outras cidades de Rondônia no uso dos sistemas internos.',
      highlights: [
        '· Análise e Otimização: Análise de négocios para identificação de oportunidades de melhoria em processos críticos de atendimento.',
        '· Treinamento Técnico Institucional: Capacitação de colaboradores e times locais em multiplas regionais de Rondônia para a utilização eficiente dos sistemas isnternos e ferramentas de gestão da companhoia.',
        '· Colaborador Destaque(Regional Ariquemes): Reconhecimento pela consistência de performace com as melhores entregas consecutivas e por atingir o maior indice de digitalização de processo da regional.',
      ],
    },

    // --------------------------------------------------------
    // INSTRUTOR DE INFORMÁTICA
    // --------------------------------------------------------

    {
      id: 'max-informatica',
      role: 'Instrutor de Informática',
      organization: 'R.T.L.N Centro Integrado Max Informática',
      period: 'Mar 2023 — Mai 2024',
      location: 'Jaru/RO · Brasil',

      description:
        'Atuação como instrutor de informática, ministrando aulas e treinamentos para alunos de diferentes níveis de conhecimento e faixas etárias.',
      highlights: [
        '· Gestão de Aprendizagem: Responsável pela isntrução técnica em informática, aplicação metodologias de ensino para capacitação de novos profissionais.',
        '· Avaliação de Desempenho: Elaboração e aplicação de exames técnicos,  dinâmicas de grupo e projetos acadêmicos para mensurar a evolução técnica dos alunos.',
        '· Gestão Administrativa e Documental: Coordenação da emissão de certificados e suporteem rotinas administrativas do centro profissionalizante, garantindo conformidade com as normas educacionais e regulatórias.',
        '· Manutenção de Infraestrutura: Supervisão e manutenção de equipamentos de informática, garantindo a funcionalidade e segurança dos recursos tecnológicos utilizados no processo de ensino-aprendizagem.',
        '· Lideraça e Comunicação:Desenvolvimento de habilidades  soft skill essenciais através  da mediação de conflitos em sala de aula e apresentações técnicas, promovendo um ambiente de aprendizado colaborativo e eficaz.',
      ],

      technologies: [
        'Microsoft Office',
        'Windows',
        'Linux',
        'Google Workspace',
        'Ferramentas de apresentação',
        'Plataformas educacionais',
      ],
    },
  ],

  // ==========================================================
  // FORMAÇÃO ACADÊMICA
  // ==========================================================

  education: [
    {
      title: 'Engenharia de Software',
      type: 'Graduação',
      status: 'Concluída',
      date_inicio_fim: '02/02/2021 - 15/12/2025',
      totalHours: '4000',
      certificateImage: '/courses/25-graducao.png',
      certificateUrl: ''
    },

    {
      title: 'Inteligência Artificial e Machine Learning',
      type: 'Pós-graduação lato sensu',
      status: 'Concluída',
      date_inicio_fim: '17/12/2025 - 30/10/2026',
      totalHours: '400',
      certificateImage: '/courses/24-POS.png',
      certificateUrl: 'validador.vitru.com.br'
    },
  ],

  // ==========================================================
  // CURSOS LIVRES E CERTIFICADOS
  // ==========================================================

  freeCourses: [
{
      id: '00-fm2s',
      title: 'INTELIGÊNCIA ARTIFICIAL GENERATIVA',
      date: '04/05/2026',
      totalHours: 16,
      certificateImage: '/courses/fm2s-inteligencia.png',
      certificateUrl: 'https://ead.fm2s.com.br/verify/175fd51da258f096ebdb053e4ebc1e713515f9ca'
    },
    {
      id: '000-fm2s',
      title: 'MÉTODOLOGIA ÁGEIS NA PRÁTICA',
      date: '10/04/2026',
      totalHours: 12,
      certificateImage: '/courses/fm2s-inteligencia.png',
      certificateUrl: 'https://ead.fm2s.com.br/verify/4d03c558e7ab24fd99fae7a8579931891fbe9179'
    },
    {
      id: '01-T-I-E-C-E-P-D',
      title: 'TECNOLOGIA DA INFORMAÇÃO E COMUNICAÇÃO EM PLATAFORMAS DIGITAIS',
      date: '11/11/2026',
      totalHours: 40,
      certificateImage: '/courses/01-T-I-E-C-E-P-D.png',
      certificateUrl: 'http://www.unicesumar.edu.br/documentos'
    },
    {
      id: '02-P-P-M-L.png',
      title: 'PROGRAMAÇÃO EM PYTHON PARA MACHINE LEARNING',
      date: '11/09/2026',
      totalHours: 40,
      certificateImage: '/courses/02-P-P-M-L.png',
      certificateUrl: 'http://www.unicesumar.edu.br/documentos'
    },
    {
      id: '02-P-P-M-L.png',
      title: 'PROGRAMAÇÃO EM PYTHON PARA MACHINE LEARNING',
      date: '11/09/2026',
      totalHours: 40,
      certificateImage: '/courses/02-P-P-M-L.png',
      certificateUrl: 'http://www.unicesumar.edu.br/documentos'
    },
    {
      id: '10-A-R-N-A.png',
      title: 'ARQUITETURA DE REDES NEURAIS ARTIFICIAIS',
      date: '11/09/2026',
      totalHours: 40,
      certificateImage: '/courses/10-A-R-N-A.png',
      certificateUrl: 'http://www.unicesumar.edu.br/documentos'
    },

    {
      id: '04-INDI.png',
      title: 'INTRODUÇÃO A NEGÓCIOS DITAIS E INOVAÇÃO',
      date: '11/09/2026',
      totalHours: 40,
      certificateImage: '/courses/04-I-N-D-I.png',
      certificateUrl: 'http://www.unicesumar.edu.br/documentos'
    },
    {
      id: '05-I-A-S-I.png',
      title: 'INTELIGêNCIA ARTIFICIAL E SISTEMAS INTELIGENTES',
      date: '11/09/2026',
      totalHours: 40,
      certificateImage: '/courses/05-I-A-S-I.png',
      certificateUrl: 'http://www.unicesumar.edu.br/documentos'
    },
    {
      id: '06-F-T-M-L.png',
      title: 'FUNDAMENTOS E TÉCNICAS DE MACHINE LEARNING',
      date: '11/09/2026',
      totalHours: 40,
      certificateImage: '/courses/06-F-T-M-L.png',
      certificateUrl: 'http://www.unicesumar.edu.br/documentos'
    },
    {
      id: '07-F-A-P-I.png',
      title: 'FERRAMENTAS E APLICAÇÕES PRÁTICAS DE INTELIGÊNCIA ARTIFICIAL',
      date: '11/09/2026',
      totalHours: 40,
      certificateImage: '/courses/07-F-A-P-I.png',
      certificateUrl: 'http://www.unicesumar.edu.br/documentos'
    },
    {
      id: '08-B-D-A-T-D.png',
      title: 'BIG DATA ANALYTIC E A TOMADA DE DECISÕES',
      date: '11/09/2026',
      totalHours: 40,
      certificateImage: '/courses/08-B-D-A-T-D.png',
      certificateUrl: 'http://www.unicesumar.edu.br/documentos'
    },
    {
      id: '03-P.png',
      title: 'POTIFÓLIO',
      date: '11/09/2026',
      totalHours: 40,
      certificateImage: '/courses/03-P.png',
      certificateUrl: 'http://www.unicesumar.edu.br/documentos'
    },
    {
      id: '09-A-V-I-C.png',
      title: 'ASSISTENTES VIRTUAIS E CHATBOTS',
      date: '11/09/2026',
      totalHours: 40,
      certificateImage: '/courses/09-A-V-I-C.png',
      certificateUrl: 'http://www.unicesumar.AGEN.br/documentos'
    },
    {
      id: '11-alura-postgres.png',
      title: 'POSTGRESQL: COMANDOS DML E DDL',
      date: '12/05/2026',
      totalHours: 8,
      certificateImage: '/courses/11-alura-postgres.png',
      certificateUrl: 'https://cursos.alura.com.br/certificate/74ccbdf7-c7cf-4670-8d02-a843fa6f1714'
    },
    {
      id: '12-alura-PostgreSQL-views.png',
      title: 'POSTGRESQL: VIEWS, SUB-CONSULTAS E FUNÇÕES',
      date: '12/05/2026',
      totalHours: 8,
      certificateImage: '/courses/12-alura-PostgreSQL-views.png',
      certificateUrl: 'https://cursos.alura.com.br/certificate/74ccbdf7-c7cf-4670-8d02-a843fa6f1714'
    },
    {
      id: '13-alura-postgrees.png',
      title: 'POSTGRESQL',
      date: '17/05/2026',
      totalHours: 8,
      certificateImage: '/courses/13-alura-postgrees.png',
      certificateUrl: 'https://cursos.alura.com.br/certificate/a8c4d221-a8c7-48f0-971e-6ebb6e85e911'
    },
    {
      id: '14-alura-Python-criar.png',
      title: 'PYTHON: CRIE A SUA PRIMEIRA APLICAÇÃO',
      date: '04/08/2024',
      totalHours: 8,
      certificateImage: '/courses/14-alura-Python-criar.png',
      certificateUrl: 'https://cursos.alura.com.br/certificate/7fca7700-573c-49dd-95bc-149f2d5a4f87'
    },
    {
      id: '15-React-implementando-arquitetura-event-driven-Socket-io.png',
      title: 'REACT: IMPLEMENTANDO ARQUITETURA EVENT-DRIVEN COM SOCKET.IO',
      date: '20/04/2026',
      totalHours: 8,
      certificateImage: '/courses/15-React-implementando-arquitetura-event-driven-Socket-io.png',
      certificateUrl: 'https://cursos.alura.com.br/certificate/27ac4d7d-88b8-49e3-a708-5b2a2ff09c6c'
    },
    {
      id: '16-SOLID-aplicado-ao-React.png',
      title: 'SOLID APLICANDO AO REACT: MELHORANDO A MODULARIDADE E FLEXIBILIDADE DO CÓDIGO',
      date: '09/04/2025',
      totalHours: 8,
      certificateImage: '/courses/16-SOLID-aplicado-ao-React.png',
      certificateUrl: 'https://cursos.alura.com.br/certificate/a3054c47-1342-4710-9beb-5d04f29c5ade'
    },
    {
      id: '22-REACT-NEST.png',
      title: 'REACT E NEST: IMPLEMENTANDO UM BACKEND FOR FRONT-END',
      date: '15/04/2025',
      totalHours: 8,
      certificateImage: '/courses/22-REACT-NEST.png',
      certificateUrl: 'https://cursos.alura.com.br/certificate/87fb978f-7326-4b5b-9d36-0d031bbb4c75'
    },
    {
      id: '23-REACT-ARQUITETURA.png',
      title: 'REACT: INTEGRAÇÃO COM SUPABASE E CONCEITOS DE ARQUITETURA LIMPA NA PRÁTICA',
      date: '15/04/2025',
      totalHours: 8,
      certificateImage: '/courses/23-REACT-ARQUITETURA.png',
      certificateUrl: 'https://cursos.alura.com.br/certificate/249d0965-5e87-4113-8c79-2fa1a30b155b'
    },
    {
      id: '17-API-com-Django3-Validacoes-buscas-filtros-e-deploy.png',
      title: 'API COM DJANGO 3: VALIDAÇÕES, BUSCAS, FILTROS E DEPLOY',
      date: '22/07/2024',
      totalHours: 8,
      certificateImage: '/courses/17-API-com-Django3-Validacoes-buscas-filtros-e-deploy.png',
      certificateUrl: 'https://cursos.alura.com.br/certificate/28d48af2-5f59-4a1d-995e-eac098a8532f'
    },
    {
      id: '18-API-com-Django3-Django-Rest-Framework.png',
      title: 'API COM DJANGO 3: DJANGO REACT FRAMEWORK',
      date: '18/07/2024',
      totalHours: 8,
      certificateImage: '/courses/18-API-com-Django3-Django-Rest-Framework.png',
      certificateUrl: 'https://cursos.alura.com.br/certificate/f72e48d3-1896-473c-b4e9-e8e81462bc3e'
    },
    {
      id: '19-Comecando-em-Programacao-carreira-e-primeiros-passos.png',
      title: 'COMEÇANDO EM PROGRAMAÇÃO: CARREIRA E PRIMEIROS PASSOS',
      date: '28/01/2025',
      totalHours: 8,
      certificateImage: '/courses/19-Comecando-em-Programacao-carreira-e-primeiros-passos.png',
      certificateUrl: 'https://cursos.alura.com.br/certificate/a9c7d2a3-0b3f-4a69-8ca8-ccb9d235a3e5'
    },
    {
      id: '20-React-comece-seu-projeto-full-stack.png',
      title: 'REACT: COMECE SEU PROJETO FULL STACK',
      date: '03/07/2024',
      totalHours: 12,
      certificateImage: '/courses/20-React-comece-seu-projeto-full-stack.png',
      certificateUrl: 'https://cursos.alura.com.br/certificate/f14a55de-903e-4e75-91be-735217540aaa'
    },
    {
      id: '21-conclusoes.png',
      title: 'CONCLUSÕES DE TRILHAS E CURSOS',
      date: '01/07/2024 - 12/05/2026',
      totalHours: 91,
      certificateImage: '/courses/21-conclusoes.png',
      certificateUrl: 'https://cursos.alura.com.br/user/andersonengsoft/fullCertificate/908ac35092f96a2944b45e1561d2f27d'
    },
  ],

  // ==========================================================
  // HABILIDADES TÉCNICAS
  // ==========================================================

  skillGroups: [
    // --------------------------------------------------------
    // FRONTEND
    // --------------------------------------------------------

    {
      id: 'frontend',

      label: 'Frontend & UX',

      description:
        'Desenvolvimento de interfaces responsivas, acessíveis e reutilizáveis, com foco em experiência do usuário, desempenho e manutenção.',

      skills: [
        'React',
        'Next.js',
        'TypeScript',
        'JavaScript',
        'Material UI',
        'HTML5',
        'CSS3',
        'Responsive Design',
        'WordPress',
      ],
    },

    // --------------------------------------------------------
    // BACKEND E BANCO DE DADOS
    // --------------------------------------------------------

    {
      id: 'backend',
      label: 'Backend & Dados',
      description:
        'Desenvolvimento de APIs, implementação de regras de negócio, autenticação, autorização, persistência de dados e integração de serviços.',
      skills: [
        'Python',
        'Django',
        'Django REST Framework',
        'FastAPI',
        'Node.js',
        'PHP',
        'PostgreSQL',
        'Alembic',
        'REST API',
        'GraphQL',
        'JWT',
        'RBAC',
        'ABAC',
        'Socket.IO',
      ],
    },

    // --------------------------------------------------------
    // ENGENHARIA E FERRAMENTAS
    // --------------------------------------------------------

    {
      id: 'engineering',

      label: 'Engenharia & Ferramentas',

      description:
        'Versionamento, automação de processos, testes, conteinerização, integração contínua, observabilidade e organização de ambientes de desenvolvimento.',

      skills: [
        'Git',
        'GitLab',
        'Docker',
        'CI/CD',
        'Redis',
        'Celery',
        'Pytest',
        'Sentry',
        'n8n',
        'Testes automatizados',
        'Arquitetura modular',
        'Modelagem de dados',
        'Integração de sistemas',
      ],
    },

    // --------------------------------------------------------
    // INTELIGÊNCIA ARTIFICIAL E AUTOMAÇÃO
    // --------------------------------------------------------

    {
      id: 'ai',

      label: 'IA & Automação',

      description:
        'Aplicação de inteligência artificial, integração de modelos de linguagem e desenvolvimento de automações com validação estruturada e controle de segurança.',

      skills: [
        'Gemini API',
        'Integração de LLMs',
        'Machine Learning',
        'Pydantic',
        'Extração estruturada de dados',
        'Automação de processos',
        'Integração com APIs',
        'Validação de dados',
      ],
    },
  ],
};

// ============================================================
// 3. EXPORTAÇÃO DOS TIPOS
// ============================================================

export type PortfolioContent = typeof portfolioData;
