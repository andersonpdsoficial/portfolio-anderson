export type ProjectStatus = 'Em desenvolvimento' | 'Estudo técnico' | 'Concluído';
export type ProjectCategory = 'Plataformas' | 'Experiência digital' | 'Sistemas de gestão';

export interface ProfessionalLink {
  label: string;
  href: string;
  type: 'github' | 'linkedin' | 'email' | 'external';
}

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProjectLinks {
  /** URL pública do sistema em produção. */
  website?: string;
  /** Prévia ou ambiente de demonstração autorizado. */
  demo?: string;
  /** Repositório público; omitir para projetos privados. */
  repository?: string;
}

export interface Project {
  slug: string;
  eyebrow: string;
  title: string;
  shortTitle: string;
  summary: string;
  description: string;
  category: ProjectCategory;
  status: ProjectStatus;
  year: string;
  thumbnail: string;
  thumbnailAlt: string;
  stack: readonly string[];
  featured: boolean;
  challenge: string;
  solution: string;
  engineeringDecisions: readonly string[];
  features: readonly string[];
  links?: ProjectLinks;
  /** Galeria configurável. Adicione capturas locais em public/projects/. */
  gallery?: readonly ProjectImage[];
  accent: 'lime' | 'violet' | 'blue'| 'green'| 'yellow';
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  description: string;
  highlights: readonly string[];
  technologies?: readonly string[];
}

export interface Education {
  title: string;
  type: string;
  status: string;
  institution?: string;
}

export interface SkillGroup {
  id: string;
  label: string;
  description: string;
  skills: readonly string[];
}

export interface PortfolioData {
  identity: {
    name: string;
    shortName: string;
    monogram: string;
    role: string;
    location: string;
    headline: string;
    intro: string;
    about: string;
    focus: readonly string[];
    email?: string;
    links: readonly ProfessionalLink[];
  };
  navigation: readonly { label: string; href: string }[];
  capabilities: readonly { index: string; title: string; description: string }[];
  projects: readonly Project[];
  experiences: readonly Experience[];
  education: readonly Education[];
  skillGroups: readonly SkillGroup[];
}
