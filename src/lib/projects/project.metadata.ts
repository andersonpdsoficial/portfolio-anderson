import type { Metadata } from 'next';

import type { Project } from '@/types/portfolio';

/**
 * Metadados para um projeto inexistente.
 */
export function getNotFoundProjectMetadata():
  Metadata {
  return {
    title: 'Projeto não encontrado',

    robots: {
      index: false,
      follow: false,
    },
  };
}

/**
 * Metadados dinâmicos de um projeto.
 */
export function getProjectMetadata(
  project: Project,
): Metadata {
  const projectUrl = `/projetos/${project.slug}`;

  return {
    title: project.title,

    description: project.summary,

    alternates: {
      canonical: projectUrl,
    },

    openGraph: {
      type: 'article',

      title: project.title,

      description: project.summary,

      url: projectUrl,

      images: [
        {
          url: project.thumbnail,
          alt: project.thumbnailAlt,
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',

      title: project.title,

      description: project.summary,

      images: [project.thumbnail],
    },
  };
}