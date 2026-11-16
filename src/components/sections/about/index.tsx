'use client';

import {
  Box,
  Container,
  Grid,
} from '@mui/material';
import { portfolioData } from '@/data/portfolioData';
import { Reveal } from '@/components/ui/Reveal';
import { AboutIntro } from './AboutIntro';
import { AboutPhotoCard } from './AboutPhotoCard';
import { AboutCapabilities } from './AboutCapabilities';
import { aboutStyles } from '@/styles/sections-styles/about.styles';

export function About() {
  const { identity, capabilities } = portfolioData;

  return (
    <Box
      component="section"
      id="sobre"
      aria-labelledby="about-title"
      sx={aboutStyles.section}
    >
      <Box
        aria-hidden="true"
        sx={aboutStyles.sectionGlow}
      />

      <Container maxWidth="lg">
        <Grid
          container
          spacing={{
            xs: 3.5,
            md: 4.5,
          }}
          alignItems="center"
        >
          <Grid item xs={12} md={6}>
            <Reveal>
              <AboutIntro about={identity.about} />
            </Reveal>
          </Grid>

          <Grid item xs={12} md={6}>
            <Reveal delay={0.14}>
              <AboutPhotoCard />
            </Reveal>
          </Grid>
        </Grid>

        <AboutCapabilities
          capabilities={capabilities}
        />
      </Container>
    </Box>
  );
}