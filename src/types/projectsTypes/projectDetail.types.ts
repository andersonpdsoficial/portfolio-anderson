import type { ReactNode } from 'react';
import type { Project, ProjectImage } from '@/types/portfolio';

export type RelatedProject = Pick<
  Project,
  'slug' | 'shortTitle' | 'category' | 'year' | 'accent'
>;

export interface ProjectDetailContentProps {
  readonly project: Project;
  readonly relatedProjects: readonly RelatedProject[];
}

export interface ProjectAccentProps {
  readonly accent: string;
}

export interface ProjectDetailHeaderProps
  extends ProjectAccentProps {
  readonly project: Project;
}

export interface ProjectDetailCoverProps
  extends ProjectAccentProps {
  readonly project: Project;
}

export interface ProjectDetailSectionProps {
  readonly index: string;
  readonly eyebrow: string;
  readonly title: string;
  readonly children: ReactNode;
}

export interface ProjectDetailBodyProps
  extends ProjectAccentProps {
  readonly project: Project;
}

export interface ProjectDetailSidebarProps
  extends ProjectAccentProps {
  readonly project: Project;
  readonly links: readonly ProjectExternalLink[];
}

export interface ProjectExternalLink {
  readonly label: string;
  readonly href: string;
}

export interface ProjectExternalLinksProps
  extends ProjectAccentProps {
  readonly links: readonly ProjectExternalLink[];
}

export interface ProjectEngineeringDecisionsProps
  extends ProjectAccentProps {
  readonly decisions: Project['engineeringDecisions'];
}

export interface ProjectFeaturesProps
  extends ProjectAccentProps {
  readonly features: Project['features'];
}

export interface RelatedProjectsProps {
  readonly projects: readonly RelatedProject[];
}

export interface RelatedProjectCardProps {
  readonly project: RelatedProject;
}

export interface ProjectDetailData {
  readonly gallery: readonly ProjectImage[];
  readonly links: readonly ProjectExternalLink[];
}