import {
  Box,
  Container,
} from '@mui/material';
import { portfolioData } from '@/data/portfolioData';
import { Reveal } from '@/components/ui/Reveal';
import { FeaturedProjectsBackground } from './FeaturedProjectsBackground';
import { FeaturedProjectsHeader } from './FeaturedProjectsHeader';
import { FeaturedProjectsGrid } from './FeaturedProjectsGrid';
import { FeaturedProjectsFooter } from './FeaturedProjectsFooter';
import { FEATURED_PROJECTS_CONFIG } from '@/constants/featuredProjects.constants';
import { featuredProjectsStyles } from '@/styles/sections-styles/eaturedProjects.styles';

export function FeaturedProjects() {
  const projects = portfolioData.projects.filter(
    (project) => project.featured,
  );

  return (
    <Box
      component="section"
      id={FEATURED_PROJECTS_CONFIG.sectionId}
      aria-labelledby={FEATURED_PROJECTS_CONFIG.headingId}
      sx={featuredProjectsStyles.section}
    >
      <FeaturedProjectsBackground />

      <Container
        maxWidth="lg"
        sx={featuredProjectsStyles.container}
      >
        <Reveal>
          <FeaturedProjectsHeader
            total={projects.length}
          />
        </Reveal>

        <FeaturedProjectsGrid
          projects={projects}
        />

        <FeaturedProjectsFooter />
      </Container>
    </Box>
  );
}