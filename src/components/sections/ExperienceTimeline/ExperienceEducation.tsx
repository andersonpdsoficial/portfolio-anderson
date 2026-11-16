import {
  Box,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import { EducationItem } from './EducationItem';
import { ExperienceEducationProps } from '@/types/sections-types/about/experience.types';
import { experienceStyles } from '@/styles/sections-styles/experience.styles';

export function ExperienceEducation({
  education,
}: ExperienceEducationProps) {
  return (
    <Paper
      component="aside"
      aria-labelledby="education-title"
      elevation={0}
      sx={experienceStyles.educationPaper}
    >
      <Stack
        direction="row"
        alignItems="center"
        spacing={1.5}
        sx={{ mb: 3 }}
      >
        <Box sx={experienceStyles.panelIcon}>
          <SchoolOutlinedIcon />
        </Box>

        <Box>
          <Typography
            id="education-title"
            component="h3"
            sx={experienceStyles.panelTitle}
          >
            FORMAÇÃO ACADÊMICA
          </Typography>

          <Typography
            variant="caption"
            color="text.secondary"
          >
            Educação e especialização
          </Typography>
        </Box>
      </Stack>

      {education.length > 0 ? (
        <Stack spacing={2}>
          {education.map((item, index) => (
            <EducationItem
              key={`${item.title}-${index}`}
              education={item}
            />
          ))}
        </Stack>
      ) : (
        <Typography
          variant="body2"
          color="text.secondary"
        >
          Informações acadêmicas em atualização.
        </Typography>
      )}
    </Paper>
  );
}