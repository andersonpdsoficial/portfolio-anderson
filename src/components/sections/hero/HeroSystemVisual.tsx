import {
  Box,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import { SystemNode } from './SystemNode';
import { SystemVisualHeader } from './SystemVisualHeader';
import { heroStyles } from '@/styles/sections-styles/hero.styles';
import { HERO_SYSTEMS } from '@/constants/hero.constants';

export function HeroSystemVisual() {
  return (
    <Box sx={heroStyles.visualContainer}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 2, px: 1 }}
      >
        <Typography
          variant="overline"
          sx={{
            color: 'text.secondary',
            fontSize: '0.68rem',
            letterSpacing: '0.15em',
            fontWeight: 800,
          }}
        >
          / ARQUITETURA EM CAMADAS
        </Typography>

        <AutoAwesomeRoundedIcon
          aria-hidden="true"
          sx={{
            fontSize: 19,
            color: 'primary.main',
          }}
        />
      </Stack>

      <Box
        aria-hidden="true"
        sx={heroStyles.visualGlow}
      />

      <Paper
        component="aside"
        aria-label="Diagrama ilustrativo de arquitetura web conectando interface, API e dados"
        elevation={0}
        sx={heroStyles.visualPaper}
      >
        <Box
          aria-hidden="true"
          sx={heroStyles.visualGrid}
        />

        <SystemVisualHeader />

        <Box
          role="list"
          aria-label="Camadas do sistema"
          sx={{
            position: 'relative',
            px: { xs: 2.5, sm: 3.5 },
            py: 2,
          }}
        >
          <Box
            aria-hidden="true"
            sx={heroStyles.systemLine}
          />

          <Stack spacing={1.5}>
            {HERO_SYSTEMS.map((system) => (
              <SystemNode
                key={system.id}
                system={system}
              />
            ))}
          </Stack>
        </Box>

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
          gap={1.5}
          sx={heroStyles.systemFooter}
        >
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
          >
            <AutoAwesomeRoundedIcon
              aria-hidden="true"
              sx={{
                color: 'primary.main',
                fontSize: 18,
              }}
            />

            <Typography
              variant="caption"
              sx={{
                fontWeight: 700,
                color: 'text.secondary',
              }}
            >
              Pensamento sistêmico
            </Typography>
          </Stack>

          <Stack
            direction="row"
            spacing={0.7}
            alignItems="center"
          >
            <Typography
              variant="caption"
              sx={{
                fontSize: '0.66rem',
                fontWeight: 800,
                color: 'primary.main',
                letterSpacing: '0.09em',
              }}
            >
              BUILD WITH PURPOSE
            </Typography>

            <ArrowOutwardRoundedIcon
              aria-hidden="true"
              sx={{
                color: 'primary.main',
                fontSize: 17,
              }}
            />
          </Stack>
        </Stack>
      </Paper>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mt: 1, px: 1 }}
      >
        <Typography
          variant="caption"
          sx={{
            color: 'text.secondary',
            fontSize: '0.67rem',
            fontWeight: 800,
            letterSpacing: '0.13em',
          }}
        >
          DESIGN. BUILD. EVOLVE.
        </Typography>

        <Typography
          variant="caption"
          sx={{
            color: 'primary.main',
            fontWeight: 800,
            letterSpacing: '0.12em',
          }}
        >
          ↗ 001
        </Typography>
      </Stack>
    </Box>
  );
}