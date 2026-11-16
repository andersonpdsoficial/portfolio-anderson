import {
  Box,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { ExperienceMetadata } from './ExperienceMetadata';
import { ExperienceHighlights } from './ExperienceHighlights';
import { ExperienceTechnologies } from './ExperienceTechnologies';
import { ExperienceCardProps } from '@/types/sections-types/about/experience.types';
import { experienceStyles } from '@/styles/sections-styles/experience.styles';


export function ExperienceCard({
  experience,
  isLast,
}: ExperienceCardProps) {
  return (
    <Box sx={experienceStyles.timelineItem(isLast)}>
      <Paper
        component="article"
        elevation={0}
        sx={experienceStyles.experiencePaper}
      >
        <Stack spacing={2.5}>
          <ExperienceMetadata
            period={experience.period}
            location={experience.location}
          />

          <Stack spacing={0.8}>
            <Typography
              component="h3"
              sx={experienceStyles.experienceRole}
            >
              {experience.role}
            </Typography>

            <Typography
              component="h4"
              sx={experienceStyles.experienceOrganization}
            >
              {experience.organization}
            </Typography>
          </Stack>

          <Typography
            variant="body2"
            sx={experienceStyles.experienceDescription}
          >
            {experience.description}
          </Typography>

          <ExperienceHighlights
            highlights={experience.highlights}
          />

          <ExperienceTechnologies
            technologies={experience.technologies}
          />
        </Stack>
      </Paper>
    </Box>
  );
}