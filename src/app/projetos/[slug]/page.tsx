import { use } from 'react';

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { portfolioData } from '@/data/portfolioData';
import { ProjectDetailContent } from '@/components/projects/ProjectDetailContent';
import type { Project } from '@/types/portfolio';

type CasePageProps = Readonly<{
  params: Promise<{ slug: string }>;
}>;

export const dynamicParams = false;

export function generateStaticParams(): Array<{ slug: string }> {
  return portfolioData.projects.map(({ slug }) => ({ slug }));
}

function findProject(slug: string): Project | undefined {
  return portfolioData.projects.find(
    (item) => item.slug === slug,
  );
}

export function generateMetadata({
  params,
}: CasePageProps): Promise<Metadata> {
  return params.then(({ slug }) => {
    const project = findProject(slug);
    if (!project) {
    return {
      title: 'Projeto não encontrado',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: project.title,
    description: project.summary,

    alternates: {
      canonical: `/projetos/${project.slug}`,
    },

    openGraph: {
      type: 'article',
      title: project.title,
      description: project.summary,
      url: `/projetos/${project.slug}`,

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
  });
}

export default function ProjectDetailPage({
  params,
}: CasePageProps) {
  const { slug } = use(params);
  const project = findProject(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = portfolioData.projects
    .filter((item) => item.slug !== project.slug)
    .map(
      ({
        slug: relatedSlug,
        shortTitle,
        category,
        year,
        accent,
      }) => ({
        slug: relatedSlug,
        shortTitle,
        category,
        year,
        accent,
      }),
    );

  return (
    <ProjectDetailContent
      project={project}
      relatedProjects={relatedProjects}
    />
  );
}
