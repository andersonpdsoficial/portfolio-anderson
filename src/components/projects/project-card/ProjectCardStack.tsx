import {
  Chip,
  Stack,
} from '@mui/material';
import type { ProjectCardStackProps } from '../../../types/projectsTypes/projectCard.types';
import { projectCardStyles } from '../../../styles/projects/project-cardStyles/projectCard.styles';

const MAX_VISIBLE_TECHNOLOGIES = 4;

export function ProjectCardStack({
  technologies,
  accentColor,
}: ProjectCardStackProps) {
  const visibleTechnologies = technologies.slice(
    0,
    MAX_VISIBLE_TECHNOLOGIES,
  );

  if (visibleTechnologies.length === 0) {
    return null;
  }

  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      useFlexGap
      gap={0.8}
      aria-label="Tecnologias utilizadas"
      sx={projectCardStyles.stack}
    >
      {visibleTechnologies.map((technology, index) => (
        <Chip
          key={`${technology}-${index}`}
          label={technology}
          size="small"
          variant="outlined"
          sx={projectCardStyles.stackChip(accentColor)}
        />
      ))}
    </Stack>
  );
}