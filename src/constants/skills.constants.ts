import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import StorageRoundedIcon from '@mui/icons-material/StorageRounded';
import TerminalRoundedIcon from '@mui/icons-material/TerminalRounded';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';
import { SkillVisual } from '@/types/sections-types/about/skills.types';

export const SKILL_VISUALS: Readonly<
  Record<string, SkillVisual>
> = {
  frontend: {
    icon: CodeRoundedIcon,
    accent: 'primary',
    number: '01',
  },

  backend: {
    icon: StorageRoundedIcon,
    accent: 'info',
    number: '02',
  },

  engineering: {
    icon: TerminalRoundedIcon,
    accent: 'secondary',
    number: '03',
  },

  ai: {
    icon: AutoAwesomeRoundedIcon,
    accent: 'warning',
    number: '04',
  },
};

export const FALLBACK_SKILL_VISUAL: SkillVisual = {
  icon: HubOutlinedIcon,
  accent: 'primary',
  number: '05',
};

export const SKILLS_CONFIG = {
  sectionId: 'stack',
  headingId: 'skills-title',

  eyebrow: '04 / STACK & FERRAMENTAS',

  description:
    'Tecnologias com as quais trabalho ou venho construindo projetos. A escolha de cada ferramenta depende do contexto, da arquitetura e das necessidades reais do produto.',

  footer:
    'Mais importante do que dominar uma ferramenta é compreender quando, por que e como utilizá-la. Priorizo soluções sustentáveis, código organizado e decisões técnicas alinhadas aos objetivos de cada projeto.',

  revealStep: 0.08,
  maxRevealDelay: 0.32,
} as const;