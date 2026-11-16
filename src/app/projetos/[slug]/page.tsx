import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  findProjectBySlug,
  getProjectStaticParams,
  getRelatedProjects,
  getNotFoundProjectMetadata,
  getProjectMetadata,
} from '@/lib/projects';
import type {
  ProjectPageProps,
  ProjectRouteParams,
} from '@/lib/projects';
import { ProjectDetailContent } from '@/components/projects/project-detail/Index';

export const dynamicParams = false;

export function generateStaticParams():
  ProjectRouteParams[] {
  return getProjectStaticParams();
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = findProjectBySlug(slug);

  if (!project) {
    return getNotFoundProjectMetadata();
  }

  return getProjectMetadata(project);
}

export default async function ProjectDetailPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = findProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = getRelatedProjects(
    project.slug,
  );

  return (
    <ProjectDetailContent
      project={project}
      relatedProjects={relatedProjects}
    />
  );
}