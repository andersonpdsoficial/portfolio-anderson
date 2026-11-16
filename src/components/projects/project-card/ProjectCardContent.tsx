import {
  Stack,
  Typography,
} from '@mui/material';
import { ProjectCardMeta } from './ProjectCardMeta';
import { ProjectCardStack } from './ProjectCardStack';
import { ProjectCardFooter } from './ProjectCardFooter';
import type { ProjectCardContentProps } from '../../../types/projectsTypes/projectCard.types';
import { projectCardStyles } from '../../../styles/projects/project-cardStyles/projectCard.styles';

export function ProjectCardContent({
  project,
  accentColor,
}: ProjectCardContentProps) {
  return (
    <Stack
      spacing={2}
      sx={projectCardStyles.content}
    >
      <ProjectCardMeta
        category={project.category}
        year={project.year}
        accentColor={accentColor}
      />
      <Typography
        component="h3"
        sx={projectCardStyles.title(accentColor)}
      >
        {project.shortTitle}
      </Typography>
      <Typography
        variant="body2"
        sx={projectCardStyles.summary}
      >
        {project.summary}
      </Typography>
      <ProjectCardStack
        technologies={project.stack}
        accentColor={accentColor}
      />
      <ProjectCardFooter accentColor={accentColor} />
    </Stack>
  );
}