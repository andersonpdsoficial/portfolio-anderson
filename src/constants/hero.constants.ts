import { SystemNodeData } from '@/types/sections-types/about/hero.types';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import LanOutlinedIcon from '@mui/icons-material/LanOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';

export const HERO_SYSTEMS = [
  {
    id: 'frontend',
    index: '01',
    icon: CodeRoundedIcon,
    label: 'Interface',
    meta: 'React · Next.js',
    description: 'Experiência e apresentação',
    accent: 'primary',
  },
  {
    id: 'backend',
    index: '02',
    icon: LanOutlinedIcon,
    label: 'API / Domínio',
    meta: 'Django · REST',
    description: 'Regras e integrações',
    accent: 'info',
  },
  {
    id: 'database',
    index: '03',
    icon: ShieldOutlinedIcon,
    label: 'Acesso & Dados',
    meta: 'Auth · PostgreSQL',
    description: 'Segurança e persistência',
    accent: 'secondary',
  },
] as const satisfies readonly SystemNodeData[];

export const HERO_LINKS = {
  projects: '/#projetos',
  about: '/#sobre',
} as const;

export const HERO_LABELS = {
  location: 'ENGENHARIA DE SOFTWARE · PORTO VELHO, BR',
  diagramEyebrow: '/ ARQUITETURA EM CAMADAS',
  diagramTitle: 'Conectando as camadas.',
  systemVersion: 'V 1.0',
} as const;