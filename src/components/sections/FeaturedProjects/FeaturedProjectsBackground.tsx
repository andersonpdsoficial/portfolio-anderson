import { featuredProjectsStyles } from '@/styles/sections-styles/eaturedProjects.styles';
import { Box } from '@mui/material';


export function FeaturedProjectsBackground() {
  return (
    <>
      <Box
        aria-hidden="true"
        sx={featuredProjectsStyles.topGlow}
      />

      <Box
        aria-hidden="true"
        sx={featuredProjectsStyles.bottomGlow}
      />

      <Box
        aria-hidden="true"
        sx={featuredProjectsStyles.backgroundGrid}
      />
    </>
  );
}