import { portfolioData } from '@/data/portfolioData';

import type { Project } from '@/types/portfolio';

import type {
  ProjectRouteParams,
  RelatedProject,
} from './project.types';

/**
 * Retorna todos os parâmetros de projeto
 * utilizados pela geração estática do Next.js.
 */
export function getProjectStaticParams():
  ProjectRouteParams[] {
  return portfolioData.projects.map((project) => ({
    slug: project.slug,
  }));
}

/**
 * Encontra um projeto pelo slug.
 */
export function findProjectBySlug(
  slug: string,
): Project | undefined {
  return portfolioData.projects.find(
    (project) => project.slug === slug,
  );
}

/**
 * Lista os demais projetos, excluindo
 * o projeto atualmente visualizado.
 */
export function getRelatedProjects(
  currentSlug: string,
): RelatedProject[] {
  return portfolioData.projects
    .filter((project) => project.slug !== currentSlug)
    .map((project) => ({
      slug: project.slug,
      shortTitle: project.shortTitle,
      category: project.category,
      year: project.year,
      accent: project.accent,
    }));
}