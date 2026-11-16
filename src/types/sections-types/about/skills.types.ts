import type { SvgIconComponent } from '@mui/icons-material';

import { portfolioData } from '@/data/portfolioData';

export type SkillGroup =
  (typeof portfolioData.skillGroups)[number];

export type SkillAccent =
  | 'primary'
  | 'info'
  | 'secondary'
  | 'warning';

export interface SkillVisual {
  readonly icon: SvgIconComponent;
  readonly accent: SkillAccent;
  readonly number: string;
}

export interface SkillsHeaderProps {
  readonly totalGroups: number;
  readonly totalSkills: number;
}

export interface SkillsIndicatorsProps {
  readonly totalGroups: number;
  readonly totalSkills: number;
}

export interface SkillsGridProps {
  readonly groups: readonly SkillGroup[];
}

export interface SkillCardProps {
  readonly group: SkillGroup;
  readonly visual: SkillVisual;
}

export interface SkillCardHeaderProps {
  readonly visual: SkillVisual;
}

export interface SkillTagsProps {
  readonly skills: SkillGroup['skills'];
  readonly accent: SkillAccent;
  readonly groupLabel: string;
}

export interface SkillCardFooterProps {
  readonly total: number;
  readonly accent: SkillAccent;
}