import {
  Box,
  Stack,
  Typography,
} from '@mui/material';
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';
import { heroStyles } from '@/styles/sections-styles/hero.styles';
import { HERO_LABELS } from '@/constants/hero.constants';

export function SystemVisualHeader() {
  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          px: { xs: 2.5, sm: 3 },
          py: 2,
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          spacing={1.1}
        >
          <Box
            aria-hidden="true"
            sx={heroStyles.systemStatus}
          />

          <Typography
            variant="overline"
            sx={{
              fontSize: '0.7rem',
              fontWeight: 800,
              letterSpacing: '0.15em',
              color: 'text.secondary',
            }}
          >
            SYSTEM DESIGN
          </Typography>
        </Stack>

        <Typography
          variant="caption"
          sx={{
            fontWeight: 700,
            color: 'text.disabled',
            letterSpacing: '0.12em',
          }}
        >
          {HERO_LABELS.systemVersion}
        </Typography>
      </Stack>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        sx={{
          px: { xs: 2.5, sm: 3.5 },
          pt: 3.5,
          pb: 2.5,
        }}
      >
        <Stack spacing={0.8}>
          <Typography
            variant="overline"
            sx={{
              color: 'primary.main',
              fontWeight: 800,
              letterSpacing: '0.17em',
              fontSize: '0.68rem',
            }}
          >
            FULL STACK
          </Typography>

          <Typography
            component="h2"
            sx={{
              fontSize: {
                xs: '1.28rem',
                sm: '1.55rem',
              },
              color: 'text.primary',
              fontWeight: 800,
              letterSpacing: '-0.035em',
            }}
          >
            {HERO_LABELS.diagramTitle}
          </Typography>
        </Stack>

        <Box
          aria-hidden="true"
          sx={heroStyles.systemTitleIcon}
        >
          <HubOutlinedIcon sx={{ fontSize: 29 }} />
        </Box>
      </Stack>
    </>
  );
}