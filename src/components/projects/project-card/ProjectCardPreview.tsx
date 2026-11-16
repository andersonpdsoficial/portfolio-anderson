import {
  Box,
  Stack,
  Typography,
} from '@mui/material';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import { ProjectBrowserFrame } from './ProjectBrowserFrame';
import type { ProjectCardPreviewProps } from '../../../types/projectsTypes/projectCard.types';
import { projectCardStyles } from '../../../styles/projects/project-cardStyles/projectCard.styles';

export function ProjectCardPreview({
  project,
  projectNumber,
  accentColor,
}: ProjectCardPreviewProps) {
  return (
    <Box sx={projectCardStyles.preview(accentColor)}>
      <Box
        aria-hidden="true"
        sx={projectCardStyles.previewGrid(accentColor)}
      />
      <Box
        aria-hidden="true"
        sx={projectCardStyles.previewGlow(accentColor)}
      />
      <ProjectBrowserFrame
        thumbnail={project.thumbnail}
        thumbnailAlt={project.thumbnailAlt}
        projectNumber={projectNumber}
        accentColor={accentColor}
      />
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={projectCardStyles.previewBottom}
      >
        <Typography
          variant="caption"
          sx={projectCardStyles.previewCaption}
        >
          CASE STUDY / {projectNumber}
        </Typography>

        <Box
          data-project-arrow
          aria-hidden="true"
          sx={projectCardStyles.previewArrow(accentColor)}
        >
          <ArrowOutwardRoundedIcon
            sx={{ fontSize: 19 }}
          />
        </Box>
      </Stack>
    </Box>
  );
}