'use client';

import Link from 'next/link';
import {
  Box,
  Paper,
} from '@mui/material';
import {
  formatProjectIndex,
  getProjectAccentColor,
} from '@/functions/projectVisuals';
import { ProjectCardPreview } from './ProjectCardPreview';
import { ProjectCardContent } from './ProjectCardContent';
import type { ProjectCardProps } from '../../../types/projectsTypes/projectCard.types';
import { projectCardStyles } from '../../../styles/projects/project-cardStyles/projectCard.styles';

export function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  const accentColor = getProjectAccentColor(
    project.accent,
  );

  const projectNumber = formatProjectIndex(
    index + 1,
  );

  const projectUrl = `/projetos/${encodeURIComponent(project.slug)}`;

  return (
    <Box
      component="article"
      sx={projectCardStyles.article}
    >
      <Paper
        component={Link}
        href={projectUrl}
        elevation={0}
        aria-label={`Ver estudo de caso: ${project.title}`}
        sx={projectCardStyles.paper(accentColor)}
      >
        <ProjectCardPreview
          project={project}
          projectNumber={projectNumber}
          accentColor={accentColor}
        />

        <ProjectCardContent
          project={project}
          accentColor={accentColor}
        />
      </Paper>
    </Box>
  );
}