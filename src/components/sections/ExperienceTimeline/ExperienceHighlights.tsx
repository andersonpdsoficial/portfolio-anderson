import {
  Box,
  Typography,
} from '@mui/material';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import { ExperienceHighlightsProps } from '@/types/sections-types/about/experience.types';
import { experienceStyles } from '@/styles/sections-styles/experience.styles';

export function ExperienceHighlights({
  highlights,
}: ExperienceHighlightsProps) {
  if (highlights.length === 0) {
    return null;
  }

  return (
    <Box
      component="ul"
      aria-label="Atividades e responsabilidades"
      sx={experienceStyles.highlightsList}
    >
      {highlights.map((highlight, index) => (
        <Box
          component="li"
          key={`${index}-${highlight}`}
          sx={experienceStyles.highlightsItem}
        >
          <CheckCircleOutlineRoundedIcon
            aria-hidden="true"
            sx={{
              color: 'primary.main',
              fontSize: 18,
              flexShrink: 0,
              mt: '3px',
            }}
          />

          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              lineHeight: 1.7,
              fontSize: '0.87rem',
            }}
          >
            {highlight}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}