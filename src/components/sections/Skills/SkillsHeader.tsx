import {
  Box,
  Stack,
  Typography,
} from '@mui/material';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import { SkillsIndicators } from './SkillsIndicators';
import { SkillsHeaderProps } from '@/types/sections-types/about/skills.types';
import { skillsStyles } from '@/styles/sections-styles/skills.styles';
import { SKILLS_CONFIG } from '@/constants/skills.constants';

export function SkillsHeader({
  totalGroups,
  totalSkills,
}: SkillsHeaderProps) {
  return (
    <Stack
      spacing={3}
      sx={skillsStyles.header}
    >
      <Stack
        direction="row"
        alignItems="center"
        spacing={1.5}
      >
        <Box sx={skillsStyles.headerIcon}>
          <LayersOutlinedIcon sx={{ fontSize: 23 }} />
        </Box>

        <Typography
          variant="overline"
          sx={skillsStyles.eyebrow}
        >
          {SKILLS_CONFIG.eyebrow}
        </Typography>
      </Stack>

      <Typography
        id={SKILLS_CONFIG.headingId}
        component="h2"
        sx={skillsStyles.title}
      >
        Ferramentas são meios.{' '}

        <Box
          component="span"
          sx={skillsStyles.gradientText}
        >
          Resultado é o foco.
        </Box>
      </Typography>

      <Typography
        variant="body1"
        sx={skillsStyles.description}
      >
        {SKILLS_CONFIG.description}
      </Typography>

      <SkillsIndicators
        totalGroups={totalGroups}
        totalSkills={totalSkills}
      />
    </Stack>
  );
}