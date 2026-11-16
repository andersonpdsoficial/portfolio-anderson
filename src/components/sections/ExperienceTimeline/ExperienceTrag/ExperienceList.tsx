import { Box } from '@mui/material';
import { Reveal } from '@/components/ui/Reveal';
import { ExperienceCard } from './ExperienceCard';
import { ExperienceListProps } from '@/types/sections-types/about/experience.types';
import { experienceStyles } from '@/styles/sections-styles/experience.styles';

export function ExperienceList({
  experiences,
}: ExperienceListProps) {
  if (experiences.length === 0) {
    return null;
  }

  return (
    <Box
      aria-label="Linha do tempo profissional"
      sx={experienceStyles.timeline}
    >
      {experiences.map((experience, index) => (
        <Reveal
          key={experience.id}
          delay={Math.min(index * 0.09, 0.36)}
        >
          <ExperienceCard
            experience={experience}
            isLast={index === experiences.length - 1}
          />
        </Reveal>
      ))}
    </Box>
  );
}