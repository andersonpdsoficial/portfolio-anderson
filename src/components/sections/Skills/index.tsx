'use client';

import {
  Box,
  Container,
} from '@mui/material';

import { portfolioData } from '@/data/portfolioData';
import { Reveal } from '@/components/ui/Reveal';
import { SkillsBackground } from './SkillsBackground';
import { SkillsHeader } from './SkillsHeader';
import { SkillsGrid } from './SkillsGrid';
import { SkillsFooter } from './SkillsFooter';
import { SKILLS_CONFIG } from '@/constants/skills.constants';
import { skillsStyles } from '@/styles/sections-styles/skills.styles';

export function Skills() {
  const { skillGroups } = portfolioData;

  const totalSkills = new Set(
    skillGroups.flatMap((group) => group.skills),
  ).size;

  return (
    <Box
      component="section"
      id={SKILLS_CONFIG.sectionId}
      aria-labelledby={SKILLS_CONFIG.headingId}
      sx={skillsStyles.section}
    >
      <SkillsBackground />

      <Container
        maxWidth="lg"
        sx={skillsStyles.container}
      >
        <Reveal>
          <SkillsHeader
            totalGroups={skillGroups.length}
            totalSkills={totalSkills}
          />
        </Reveal>

        <SkillsGrid groups={skillGroups} />

        <SkillsFooter />
      </Container>
    </Box>
  );
}