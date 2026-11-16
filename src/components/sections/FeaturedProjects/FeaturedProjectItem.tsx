import { Box } from '@mui/material';
import { Reveal } from '@/components/ui/Reveal';
import { FeaturedProjectItemProps } from '@/types/sections-types/featuredProjects.types';
import { FEATURED_PROJECTS_CONFIG } from '@/constants/featuredProjects.constants';
import { featuredProjectsStyles } from '@/styles/sections-styles/eaturedProjects.styles';
import { ProjectCard } from '@/components/projects/project-card';

export function FeaturedProjectItem({
  project,
  index,
}: FeaturedProjectItemProps) {
  const revealDelay = Math.min(
    index * FEATURED_PROJECTS_CONFIG.revealStep,
    FEATURED_PROJECTS_CONFIG.maxRevealDelay,
  );

  return (
    <Box
      component="li"
      sx={featuredProjectsStyles.projectItem}
    >
      <Reveal delay={revealDelay}>
        <Box sx={featuredProjectsStyles.projectWrapper}>
          <ProjectCard
            project={project}
            index={index}
          />
        </Box>
      </Reveal>
    </Box>
  );
}