import {
  Box,
  Chip,
  Stack,
  Typography,
} from '@mui/material';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import { FeaturedProjectCategories } from './FeaturedProjectCategories';
import { FeaturedProjectsHeaderProps } from '@/types/sections-types/featuredProjects.types';
import { featuredProjectsStyles } from '@/styles/sections-styles/eaturedProjects.styles';
import { FEATURED_PROJECTS_CONFIG } from '@/constants/featuredProjects.constants';

export function FeaturedProjectsHeader({
  total,
}: FeaturedProjectsHeaderProps) {
  return (
    <Stack
      spacing={3}
      sx={featuredProjectsStyles.header}
    >
      <Stack
        direction="row"
        alignItems="center"
        spacing={1.5}
      >
        <Box sx={featuredProjectsStyles.headerIcon}>
          <CodeRoundedIcon sx={{ fontSize: 22 }} />
        </Box>

        <Typography
          variant="overline"
          sx={featuredProjectsStyles.eyebrow}
        >
          {FEATURED_PROJECTS_CONFIG.eyebrow}
        </Typography>
      </Stack>

      <Stack
        direction={{
          xs: 'column',
          md: 'row',
        }}
        justifyContent="space-between"
        alignItems={{
          xs: 'flex-start',
          md: 'flex-end',
        }}
        gap={3}
      >
        <Box sx={{ maxWidth: 760 }}>
          <Typography
            id={FEATURED_PROJECTS_CONFIG.headingId}
            component="h2"
            sx={featuredProjectsStyles.heading}
          >
            Ideias que viram{' '}

            <Box
              component="span"
              sx={featuredProjectsStyles.headingGradient}
            >
              sistemas.
            </Box>
          </Typography>
        </Box>

        <Chip
          icon={<AutoAwesomeRoundedIcon />}
          label={`${total} projetos em destaque`}
          variant="outlined"
          sx={featuredProjectsStyles.projectCount}
        />
      </Stack>

      <Typography
        variant="body1"
        sx={featuredProjectsStyles.description}
      >
        {FEATURED_PROJECTS_CONFIG.description}
      </Typography>

      <FeaturedProjectCategories />
    </Stack>
  );
}