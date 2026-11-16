import {
  Box,
  Stack,
  Typography,
} from '@mui/material';
import type { ProjectCardMetaProps } from '../../../types/projectsTypes/projectCard.types';
import { projectCardStyles } from '../../../styles/projects/project-cardStyles/projectCard.styles';

export function ProjectCardMeta({
  category,
  year,
  accentColor,
}: ProjectCardMetaProps) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      spacing={1.5}
    >
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        sx={{ minWidth: 0 }}
      >
        <Box
          aria-hidden="true"
          sx={projectCardStyles.categoryDot(accentColor)}
        />
        <Typography
          variant="caption"
          sx={projectCardStyles.categoryText}
        >
          {category}
        </Typography>
      </Stack>
      <Typography
        variant="caption"
        sx={projectCardStyles.yearText}
      >
        {year}
      </Typography>
    </Stack>
  );
}