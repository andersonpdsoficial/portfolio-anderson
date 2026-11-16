import {
  Box,
  Stack,
  Typography,
} from '@mui/material';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Reveal } from '@/components/ui/Reveal';
import { featuredProjectsStyles } from '@/styles/sections-styles/eaturedProjects.styles';
import { FEATURED_PROJECTS_CONFIG } from '@/constants/featuredProjects.constants';

export function FeaturedProjectsFooter() {
  return (
    <Reveal delay={0.15}>
      <Box sx={featuredProjectsStyles.footer}>
        <Stack
          direction={{
            xs: 'column',
            sm: 'row',
          }}
          alignItems={{
            xs: 'flex-start',
            sm: 'center',
          }}
          justifyContent="space-between"
          gap={2.5}
        >
          <Stack
            direction="row"
            spacing={1.5}
            alignItems="flex-start"
            sx={{
              minWidth: 0,
              maxWidth: 850,
            }}
          >
            <InfoOutlinedIcon
              aria-hidden="true"
              sx={{
                fontSize: 21,
                color: 'primary.main',
                flexShrink: 0,
                mt: 0.25,
              }}
            />

            <Typography
              variant="body2"
              sx={featuredProjectsStyles.footerDescription}
            >
              {FEATURED_PROJECTS_CONFIG.disclaimer}
            </Typography>
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            sx={{ flexShrink: 0 }}
          >
            <Typography
              variant="caption"
              sx={featuredProjectsStyles.footerLabel}
            >
              EXPLORE OS CASES
            </Typography>

            <ArrowOutwardRoundedIcon
              aria-hidden="true"
              sx={{
                color: 'primary.main',
                fontSize: 19,
              }}
            />
          </Stack>
        </Stack>
      </Box>
    </Reveal>
  );
}