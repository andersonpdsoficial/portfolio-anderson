'use client';

import {
  Box,
  Container,
} from '@mui/material';
import { portfolioData } from '@/data/portfolioData';
import { Reveal } from '@/components/ui/Reveal';
import { ExperienceIntro } from './ExperienceTrag/ExperienceIntro';
import { ExperienceEducation } from './EducationCourses/ExperienceEducation';
import { FreeCoursesPanel } from './CoursosFree/FreeCoursesPanel';
import { ExperienceList } from './ExperienceTrag/ExperienceList';
import { experienceStyles } from '@/styles/sections-styles/experience.styles';

export function ExperienceTimeline() {
  const {
    experiences,
    education,
    freeCourses,
  } = portfolioData;

  return (
    <Box
      component="section"
      id="experiencia"
      aria-labelledby="experience-title"
      sx={experienceStyles.section}
    >
      <Box
        aria-hidden="true"
        sx={experienceStyles.decorativeGlow}
      />

      <Container maxWidth="lg">
        <Box sx={experienceStyles.layout}>
          <Box sx={experienceStyles.leftColumn}>
            <Reveal>
              <ExperienceIntro />
            </Reveal>

            <Reveal delay={0.12}>
              <ExperienceEducation
                education={education}
              />
            </Reveal>

            <FreeCoursesPanel
              courses={freeCourses}
            />
          </Box>

          <ExperienceList
            experiences={experiences}
          />
        </Box>
      </Container>
    </Box>
  );
}