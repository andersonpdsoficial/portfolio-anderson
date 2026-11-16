'use client';

import {
  Box,
  Container,
} from '@mui/material';
import { portfolioData } from '@/data/portfolioData';
import { Reveal } from '@/components/ui/Reveal';
import { HeroBackground } from './HeroBackground';
import { HeroIntro } from './HeroIntro';
import { HeroSystemVisual } from './HeroSystemVisual';
import { HeroFooter } from './HeroFooter';
import { heroStyles } from '@/styles/sections-styles/hero.styles';

export function Hero() {
  const { identity } = portfolioData;

  return (
    <Box
      component="section"
      id="inicio"
      aria-labelledby="hero-title"
      sx={heroStyles.section}
    >
      <HeroBackground />

      <Container
        maxWidth="lg"
        sx={heroStyles.container}
      >
        <Box sx={heroStyles.layout}>
          <Reveal>
            <HeroIntro identity={identity} />
          </Reveal>

          <Reveal delay={0.14}>
            <HeroSystemVisual />
          </Reveal>
        </Box>
      </Container>

      <HeroFooter />
    </Box>
  );
}