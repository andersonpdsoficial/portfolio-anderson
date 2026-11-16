import {
  Box,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import { Reveal } from '@/components/ui/Reveal';
import { CapabilityCard } from './CapabilityCard';
import { AboutCapabilitiesProps } from '@/types/sections-types/about/about.types';
import { aboutStyles } from '@/styles/sections-styles/about.styles';

export function AboutCapabilities({
  capabilities,
}: AboutCapabilitiesProps) {
  if (capabilities.length === 0) {
    return null;
  }

  return (
    <Box sx={aboutStyles.capabilitiesSection}>
      <Reveal>
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
          spacing={2}
          sx={{ mb: 4 }}
        >
          <Typography
            variant="overline"
            sx={aboutStyles.capabilitiesEyebrow}
          >
            O QUE ME MOVE / COMPETÊNCIAS
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              maxWidth: 400,
              lineHeight: 1.75,
            }}
          >
            Do problema ao produto — decisões técnicas
            que geram valor.
          </Typography>
        </Stack>
      </Reveal>

      <Grid
        container
        spacing={2.5}
        alignItems="stretch"
      >
        {capabilities.map((capability, index) => (
          <Grid
            item
            xs={12}
            md={4}
            key={capability.index}
          >
            <Reveal delay={index * 0.08}>
              <CapabilityCard capability={capability} />
            </Reveal>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}