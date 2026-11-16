import type { Project } from '@/types/portfolio';

export interface ProjectRouteParams {
  readonly slug: string;
}

export interface ProjectPageProps {
  readonly params: Promise<ProjectRouteParams>;
}

export type RelatedProject = Pick<
  Project,
  | 'slug'
  | 'shortTitle'
  | 'category'
  | 'year'
  | 'accent'
>;