import {
  Chip,
  Stack,
} from '@mui/material';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import { SkillsIndicatorsProps } from '@/types/sections-types/about/skills.types';
import { skillsStyles } from '@/styles/sections-styles/skills.styles';

export function SkillsIndicators({
  totalGroups,
  totalSkills,
}: SkillsIndicatorsProps) {
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      useFlexGap
      gap={1.2}
      sx={{ pt: 0.5 }}
    >
      <Chip
        icon={<LayersOutlinedIcon />}
        label={`${totalGroups} áreas de conhecimento`}
        variant="outlined"
        sx={skillsStyles.indicator('primary')}
      />

      <Chip
        icon={<AutoAwesomeRoundedIcon />}
        label={`${totalSkills} tecnologias e competências`}
        variant="outlined"
        sx={skillsStyles.indicator('info')}
      />
    </Stack>
  );
}