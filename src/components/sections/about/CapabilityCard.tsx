import {
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import { CapabilityCardProps } from '@/types/sections-types/about/about.types';
import { aboutStyles } from '@/styles/sections-styles/about.styles';
export function CapabilityCard({
  capability,
}: CapabilityCardProps) {
  return (
    <Paper
      component="article"
      elevation={0}
      sx={aboutStyles.capabilityCard}
    >
      <Stack spacing={2}>
        <Typography
          variant="overline"
          sx={{
            fontSize: '0.8rem',
            color: 'primary.main',
            fontWeight: 800,
            letterSpacing: '0.14em',
          }}
        >
          {capability.index}
        </Typography>

        <Typography
          component="h3"
          sx={{
            fontSize: '1.25rem',
            fontWeight: 800,
            letterSpacing: '-0.025em',
            color: 'text.primary',
          }}
        >
          {capability.title}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            lineHeight: 1.8,
            pr: 2,
          }}
        >
          {capability.description}
        </Typography>
      </Stack>

      <ArrowOutwardRoundedIcon
        className="capability-arrow"
        aria-hidden="true"
        sx={aboutStyles.capabilityArrow}
      />
    </Paper>
  );
}