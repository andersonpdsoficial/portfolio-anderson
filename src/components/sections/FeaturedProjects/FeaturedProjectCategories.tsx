import { FEATURED_PROJECT_CATEGORIES } from '@/constants/featuredProjects.constants';
import { featuredProjectsStyles } from '@/styles/sections-styles/eaturedProjects.styles';
import {
  Box,
  Stack,
  Typography,
} from '@mui/material';


export function FeaturedProjectCategories() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      flexWrap="wrap"
      useFlexGap
      gap={1.5}
      sx={{ pt: 0.5 }}
    >
      {FEATURED_PROJECT_CATEGORIES.map((category) => (
        <Box
          key={category}
          sx={featuredProjectsStyles.category}
        >
          <Box
            aria-hidden="true"
            sx={featuredProjectsStyles.categoryDot}
          />

          <Typography
            variant="caption"
            sx={featuredProjectsStyles.categoryText}
          >
            {category}
          </Typography>
        </Box>
      ))}
    </Stack>
  );
}