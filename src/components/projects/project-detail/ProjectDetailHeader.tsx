import {
  Chip,
  Stack,
  Typography,
} from '@mui/material';

import { ProjectDetailHeaderProps } from '@/types/projectsTypes/projectDetail.types';
import { projectDetailStyles } from '../../../styles/projects/project-detailStyles/ProjectDetail.styles';

export function ProjectDetailHeader({
  project,
  accent,
}: ProjectDetailHeaderProps) {
  return (
    <Stack
      spacing={3}
      sx={projectDetailStyles.header}
    >
      <Stack
        direction="row"
        flexWrap="wrap"
        useFlexGap
        gap={1.5}
        alignItems="center"
      >
        <Typography
          variant="overline"
          sx={projectDetailStyles.headerEyebrow}
        >
          {project.eyebrow}
        </Typography>

        <Chip
          label={project.status}
          variant="outlined"
          size="small"
          sx={projectDetailStyles.statusChip(accent)}
        />

        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ fontWeight: 700 }}
        >
          {project.year}
        </Typography>
      </Stack>

      <Typography
        component="h1"
        sx={projectDetailStyles.headerTitle(accent)}
      >
        {project.title}
      </Typography>

      <Typography
        variant="body1"
        sx={projectDetailStyles.headerSummary}
      >
        {project.summary}
      </Typography>

      <Stack
        direction="row"
        flexWrap="wrap"
        useFlexGap
        gap={1}
        aria-label="Tecnologias do projeto"
      >
        {project.stack.map((tech, index) => (
          <Chip
            key={`${tech}-${index}`}
            label={tech}
            size="small"
            variant="outlined"
            sx={projectDetailStyles.techChip(accent)}
          />
        ))}
      </Stack>
    </Stack>
  );
}