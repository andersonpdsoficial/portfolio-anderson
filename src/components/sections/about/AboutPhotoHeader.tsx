import { aboutStyles } from '@/styles/sections-styles/about.styles';
import { AboutPhotoHeaderProps } from '@/types/sections-types/about/about.types';
import {
  Box,
  Stack,
  Typography,
} from '@mui/material';

export function AboutPhotoHeader({
  year = '2026',
}: AboutPhotoHeaderProps) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={aboutStyles.photoHeader}
    >
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
      >
        <Box
          aria-hidden="true"
          sx={aboutStyles.statusDot}
        />

        <Typography
          variant="caption"
          sx={{
            fontWeight: 800,
            letterSpacing: '0.12em',
            color: 'text.secondary',
          }}
        >
          EM CONTEXTO
        </Typography>
      </Stack>

      <Typography
        variant="caption"
        sx={{
          color: 'text.secondary',
          letterSpacing: '0.1em',
        }}
      >
        DEV / {year}
      </Typography>
    </Stack>
  );
}