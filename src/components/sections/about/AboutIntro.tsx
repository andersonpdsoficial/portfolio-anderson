import {
  Box,
  Stack,
  Typography,
} from '@mui/material';
import { AboutValues } from './AboutValues';
import { AboutIntroProps } from '@/types/sections-types/about/about.types';
import { aboutStyles } from '@/styles/sections-styles/about.styles';

export function AboutIntro({
  about,
}: AboutIntroProps) {
  const paragraphs = about
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return (
    <Stack spacing={2.5}>
      <Typography
        variant="overline"
        sx={aboutStyles.introEyebrow}
      >
        01 / QUEM SOU EU
      </Typography>

      <Typography
        id="about-title"
        component="h2"
        sx={aboutStyles.introTitle}
      >
        Construindo com lógica.{' '}

        <Box
          component="span"
          sx={aboutStyles.gradientText}
        >
          Pensando em pessoas.
        </Box>
      </Typography>

      <Stack
        spacing={1.8}
        sx={{ maxWidth: 590 }}
      >
        {paragraphs.map((paragraph, index) => (
          <Typography
            key={`${index}-${paragraph.slice(0, 20)}`}
            component="p"
            variant="body1"
            sx={aboutStyles.aboutParagraph}
          >
            {paragraph}
          </Typography>
        ))}
      </Stack>

      <AboutValues />
    </Stack>
  );
}