import Link from 'next/link';
import {
  Box,
  Paper,
  Typography,
} from '@mui/material';
import NorthEastRoundedIcon from '@mui/icons-material/NorthEastRounded';
import { getProjectAccentColor } from '@/functions/projectVisuals';
import { projectDetailStyles } from '../../../styles/projects/project-detailStyles/ProjectDetail.styles';
import { RelatedProjectCardProps } from '@/types/projectsTypes/projectDetail.types';

export function RelatedProjectCard({
  project,
}: RelatedProjectCardProps) {
  const accent = getProjectAccentColor(project.accent);

  const href = `/projetos/${encodeURIComponent(project.slug)}`;

  return (
    <Paper
      component={Link}
      href={href}
      elevation={0}
      aria-label={`Ver projeto: ${project.shortTitle}`}
      sx={projectDetailStyles.relatedCard(accent)}
    >
      <Box sx={{ minWidth: 0 }}>
        <Typography
          variant="caption"
          color="text.secondary"
        >
          {project.category} · {project.year}
        </Typography>

        <Typography
          sx={{
            fontWeight: 800,
            mt: 0.75,
            lineHeight: 1.4,
            overflowWrap: 'anywhere',
          }}
        >
          {project.shortTitle}
        </Typography>
      </Box>

      <NorthEastRoundedIcon
        aria-hidden="true"
        sx={{
          color: accent,
          flexShrink: 0,
        }}
      />
    </Paper>
  );
}