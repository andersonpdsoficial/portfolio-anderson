import {
  Box,
  Stack,
  Typography,
} from '@mui/material';

import { HeroActions } from './HeroActions';
import { HeroFocus } from './HeroFocus';
import { HeroIntroProps } from '@/types/sections-types/about/hero.types';
import { heroStyles } from '@/styles/sections-styles/hero.styles';
import { HERO_LABELS } from '@/constants/hero.constants';

export function HeroIntro({
  identity,
}: HeroIntroProps) {
  return (
    <Stack
      spacing={{ xs: 3, md: 3.5 }}
      sx={heroStyles.intro}
    >
      <Stack
        direction="row"
        alignItems="center"
        spacing={1.2}
        sx={heroStyles.locationBadge}
      >
        <Box
          aria-hidden="true"
          sx={heroStyles.locationDot}
        />

        <Typography
          variant="caption"
          sx={{
            color: 'text.primary',
            fontSize: {
              xs: '0.62rem',
              sm: '0.7rem',
            },
            fontWeight: 800,
            letterSpacing: '0.1em',
            lineHeight: 1.5,
          }}
        >
          {HERO_LABELS.location}
        </Typography>
      </Stack>

      <Typography
        id="hero-title"
        component="h1"
        sx={heroStyles.title}
      >
        Tecnologia

        <Box
          component="span"
          sx={{ display: 'block' }}
        >
          com{' '}

          <Box
            component="span"
            sx={heroStyles.titleGradient}
          >
            propósito.
          </Box>

          <Box
            component="span"
            aria-hidden="true"
            sx={heroStyles.titleCursor}
          >
            _
          </Box>
        </Box>
      </Typography>

      <Typography
        component="p"
        sx={heroStyles.role}
      >
        Olá, sou{' '}

        <Box
          component="strong"
          sx={{
            fontWeight: 800,
            color: 'primary.main',
          }}
        >
          {identity.shortName}.
        </Box>{' '}

        {identity.role}.
      </Typography>

      <Typography
        component="p"
        variant="body1"
        sx={heroStyles.description}
      >
        {identity.intro}
      </Typography>

      <HeroActions />

      <HeroFocus focus={identity.focus} />
    </Stack>
  );
}