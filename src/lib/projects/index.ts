export {
  findProjectBySlug,
  getProjectStaticParams,
  getRelatedProjects,
} from './project.queries';

export {
  getNotFoundProjectMetadata,
  getProjectMetadata,
} from './project.metadata';

export type {
  ProjectRouteParams,
  ProjectPageProps,
  RelatedProject,
} from './project.types';