import type { Project } from '@/types/portfolio';

export interface FeaturedProjectsHeaderProps {
  readonly total: number;
}

export interface FeaturedProjectsGridProps {
  readonly projects: readonly Project[];
}

export interface FeaturedProjectItemProps {
  readonly project: Project;
  readonly index: number;
}