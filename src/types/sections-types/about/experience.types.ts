import { portfolioData } from '@/data/portfolioData';

import type { FreeCourse } from '@/data/portfolioData';

export type Experience =
  (typeof portfolioData.experiences)[number];

export type Education =
  (typeof portfolioData.education)[number];

export interface ExperienceEducationProps {
  readonly education: readonly Education[];
}

export interface EducationItemProps {
  readonly education: Education;
}

export interface FreeCoursesPanelProps {
  readonly courses: readonly FreeCourse[];
}

export interface ExperienceListProps {
  readonly experiences: readonly Experience[];
}

export interface ExperienceCardProps {
  readonly experience: Experience;
  readonly isLast: boolean;
}

export interface ExperienceMetadataProps {
  readonly period: Experience['period'];
  readonly location: Experience['location'];
}

export interface ExperienceHighlightsProps {
  readonly highlights: Experience['highlights'];
}

export interface ExperienceTechnologiesProps {
  readonly technologies: Experience['technologies'];
}