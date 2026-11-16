import type { Project, ProjectImage } from '@/types/portfolio';
import { isPublicUrl } from '@/functions/isPublicUrl';
import { ProjectDetailData, ProjectExternalLink } from '@/types/projectsTypes/projectDetail.types';


export function getProjectGallery(
  project: Project,
): readonly ProjectImage[] {
  if (project.gallery?.length) {
    return project.gallery;
  }

  return [
    {
      src: project.thumbnail,
      alt: project.thumbnailAlt,
      caption: 'Visão geral do projeto',
    },
  ];
}

export function getProjectExternalLinks(
  project: Project,
): readonly ProjectExternalLink[] {
  const candidates = [
    {
      label: 'Visitar projeto real',
      href: project.links?.website,
    },
    {
      label: 'Ver demonstração',
      href: project.links?.demo,
    },
    {
      label: 'Código no GitHub',
      href: project.links?.repository,
    },
  ];

  return candidates.filter(
    (link): link is ProjectExternalLink =>
      isPublicUrl(link.href),
  );
}

export function getProjectDetailData(
  project: Project,
): ProjectDetailData {
  return {
    gallery: getProjectGallery(project),
    links: getProjectExternalLinks(project),
  };
}