import { Box } from '@mui/material';

import { FeaturedProjectItem } from './FeaturedProjectItem';
import { FeaturedProjectsGridProps } from '@/types/sections-types/featuredProjects.types';
import { featuredProjectsStyles } from '@/styles/sections-styles/eaturedProjects.styles';

export function FeaturedProjectsGrid({
  projects,
}: FeaturedProjectsGridProps) {
  if (projects.length === 0) {
    return null;
  }

  return (
    <Box
      component="ul"
      aria-label="Lista de projetos em destaque"
      sx={featuredProjectsStyles.projectsGrid}
    >
      {projects.map((project, index) => (
        <FeaturedProjectItem
          key={project.slug}
          project={project}
          index={index}
        />
      ))}
    </Box>
  );
}