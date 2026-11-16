import {
  Box,
  Stack,
  Typography,
} from '@mui/material';
import { ProjectDetailSectionProps } from '@/types/projectsTypes/projectDetail.types';
import { projectDetailStyles } from '../../../styles/projects/project-detailStyles/ProjectDetail.styles';

export function ProjectDetailSection({
  index,
  eyebrow,
  title,
  children,
}: ProjectDetailSectionProps) {
  const headingId = `case-detail-${index}`;

  return (
    <Box
      component="section"
      aria-labelledby={headingId}
      sx={projectDetailStyles.detailSection}
    >
      <Stack spacing={2}>
        <Typography
          variant="overline"
          sx={projectDetailStyles.detailEyebrow}
        >
          {index} / {eyebrow}
        </Typography>

        <Typography
          id={headingId}
          component="h2"
          sx={projectDetailStyles.detailTitle}
        >
          {title}
        </Typography>

        {children}
      </Stack>
    </Box>
  );
}