import {
  Box,
  Chip,
  Stack,
  Typography,
} from '@mui/material';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import { ExperienceTechnologiesProps } from '@/types/sections-types/about/experience.types';
import { experienceStyles } from '@/styles/sections-styles/experience.styles';

export function ExperienceTechnologies({
  technologies,
}: ExperienceTechnologiesProps) {
  if (!technologies?.length) {
    return null;
  }

  return (
    <Box sx={experienceStyles.technologiesSection}>
      <Stack
        direction="row"
        alignItems="center"
        spacing={0.8}
        sx={{ mb: 1.5 }}
      >
        <AutoAwesomeRoundedIcon
          sx={{
            fontSize: 15,
            color: 'primary.main',
          }}
        />

        <Typography
          variant="caption"
          sx={{
            color: 'text.secondary',
            fontWeight: 800,
            letterSpacing: '0.1em',
          }}
        >
          TECNOLOGIAS
        </Typography>
      </Stack>

      <Stack
        direction="row"
        useFlexGap
        flexWrap="wrap"
        gap={0.8}
      >
        {technologies.map((tech, index) => (
          <Chip
            key={`${tech}-${index}`}
            label={tech}
            size="small"
            variant="outlined"
            sx={experienceStyles.technologyChip}
          />
        ))}
      </Stack>
    </Box>
  );
}