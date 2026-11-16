import {
  Box,
  Chip,
  Stack,
  Typography,
} from '@mui/material';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import { EducationItemProps } from '@/types/sections-types/about/experience.types';
import { experienceStyles } from '@/styles/sections-styles/experience.styles';

export function EducationItem({
  education,
}: EducationItemProps) {
  return (
    <Box sx={experienceStyles.educationItem}>
      <Typography
        component="h4"
        sx={experienceStyles.educationTitle}
      >
        {education.title}
      </Typography>

      <Stack
        direction="row"
        alignItems="center"
        flexWrap="wrap"
        useFlexGap
        spacing={1}
        sx={{ mt: 1 }}
      >
        <Typography
          variant="body2"
          sx={{ color: 'text.secondary' }}
        >
          {education.type}
        </Typography>

        <Chip
          size="small"
          label={education.status}
          icon={
            <CheckCircleOutlineRoundedIcon
              sx={{ fontSize: 15 }}
            />
          }
          sx={experienceStyles.educationStatus}
        />
      </Stack>
    </Box>
  );
}