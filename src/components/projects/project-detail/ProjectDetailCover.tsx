import Image from 'next/image';

import {
  Box,
  Paper,
  Stack,
  Typography,
} from '@mui/material';

import { ProjectDetailCoverProps } from '@/types/projectsTypes/projectDetail.types';
import { projectDetailStyles } from '../../../styles/projects/project-detailStyles/ProjectDetail.styles';

const WINDOW_DOTS = [
  '#F17C77',
  '#F2BF63',
  '#71D59A',
] as const;

export function ProjectDetailCover({
  project,
  accent,
}: ProjectDetailCoverProps) {
  return (
    <Paper
      elevation={0}
      sx={projectDetailStyles.cover(accent)}
    >
      <Box
        aria-hidden="true"
        sx={projectDetailStyles.coverGrid(accent)}
      />

      <Paper
        elevation={0}
        sx={projectDetailStyles.coverFrame(accent)}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={projectDetailStyles.coverToolbar}
        >
          <Stack
            direction="row"
            gap={0.7}
            aria-hidden="true"
          >
            {WINDOW_DOTS.map((color) => (
              <Box
                key={color}
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  bgcolor: color,
                }}
              />
            ))}
          </Stack>

          <Typography
            variant="caption"
            sx={{
              fontSize: '0.66rem',
              letterSpacing: '0.1em',
              color: '#c5d0df',
              overflowWrap: 'anywhere',
              textAlign: 'right',
            }}
          >
            {project.shortTitle.toUpperCase()} / OVERVIEW
          </Typography>
        </Stack>

        <Box sx={projectDetailStyles.coverImage}>
          <Image
            src={project.thumbnail}
            alt={project.thumbnailAlt}
            fill
            priority
            sizes="(max-width: 800px) 92vw, 1000px"
            style={{ objectFit: 'contain' }}
          />
        </Box>
      </Paper>

      <Typography
        variant="caption"
        sx={projectDetailStyles.coverCaption}
      >
        CASE STUDY — {project.year}
      </Typography>
    </Paper>
  );
}