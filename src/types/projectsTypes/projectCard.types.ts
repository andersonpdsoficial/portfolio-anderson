import type { Project } from '@/types/portfolio';

export interface ProjectCardProps {
  readonly project: Project;
  readonly index: number;
}

export interface ProjectCardPreviewProps {
  readonly project: Project;
  readonly projectNumber: string;
  readonly accentColor: string;
}

export interface ProjectBrowserFrameProps {
  readonly thumbnail: Project['thumbnail'];
  readonly thumbnailAlt: Project['thumbnailAlt'];
  readonly projectNumber: string;
  readonly accentColor: string;
}

export interface ProjectCardContentProps {
  readonly project: Project;
  readonly accentColor: string;
}

export interface ProjectCardMetaProps {
  readonly category: Project['category'];
  readonly year: Project['year'];
  readonly accentColor: string;
}

export interface ProjectCardStackProps {
  readonly technologies: Project['stack'];
  readonly accentColor: string;
}

export interface ProjectCardFooterProps {
  readonly accentColor: string;
}