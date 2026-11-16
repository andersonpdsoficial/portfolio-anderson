import { heroStyles } from '@/styles/sections-styles/hero.styles';
import { SystemNodeProps } from '@/types/sections-types/about/hero.types';
import {
  Box,
  Stack,
  Typography,
} from '@mui/material';

import { useTheme } from '@mui/material/styles';

export function SystemNode({
  system,
}: SystemNodeProps) {
  const theme = useTheme();

  const accentColor = theme.palette[system.accent].main;
  const IconComponent = system.icon;

  return (
    <Box
      role="listitem"
      sx={heroStyles.systemNode(accentColor)}
    >
      <Box
        aria-hidden="true"
        sx={heroStyles.systemNodeIcon(accentColor)}
      >
        <IconComponent sx={{ fontSize: 24 }} />
      </Box>

      <Stack
        spacing={0.4}
        sx={{ flex: 1, minWidth: 0 }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: '0.91rem',
              sm: '1rem',
            },
            fontWeight: 800,
            color: 'text.primary',
          }}
        >
          {system.label}
        </Typography>

        <Typography
          variant="caption"
          sx={{
            color: 'text.secondary',
            fontWeight: 600,
          }}
        >
          {system.meta}
        </Typography>

        <Typography
          variant="caption"
          sx={{
            color: 'text.disabled',
            fontSize: '0.69rem',
          }}
        >
          {system.description}
        </Typography>
      </Stack>

      <Typography
        variant="caption"
        sx={{
          color: accentColor,
          fontWeight: 800,
          letterSpacing: '0.08em',
          alignSelf: 'flex-start',
        }}
      >
        {system.index}
      </Typography>
    </Box>
  );
}