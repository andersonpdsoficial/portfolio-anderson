import {
  Box,
  Stack,
  Typography,
} from '@mui/material';
import WorkOutlineRoundedIcon from '@mui/icons-material/WorkOutlineRounded';
import { experienceStyles } from '@/styles/sections-styles/experience.styles';

export function ExperienceIntro() {
  return (
    <Stack spacing={3}>
      <Stack
        direction="row"
        alignItems="center"
        spacing={1.5}
      >
        <Box sx={experienceStyles.introIcon}>
          <WorkOutlineRoundedIcon
            sx={{ fontSize: 20 }}
          />
        </Box>

        <Typography
          variant="overline"
          sx={experienceStyles.introEyebrow}
        >
          03 / TRAJETÓRIA
        </Typography>
      </Stack>

      <Typography
        id="experience-title"
        component="h2"
        sx={experienceStyles.introTitle}
      >
        Experiência que{' '}
        <Box
          component="span"
          sx={experienceStyles.titleGradient}
        >
          constrói repertório.
        </Box>
      </Typography>

      <Typography
        variant="body1"
        sx={experienceStyles.introDescription}
      >
        Cada etapa acrescenta uma perspectiva:
        tecnologia, colaboração e entendimento
        das necessidades reais dos usuários.
      </Typography>
    </Stack>
  );
}