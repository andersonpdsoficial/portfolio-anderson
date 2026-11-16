import { skillsStyles } from '@/styles/sections-styles/skills.styles';
import { SkillTagsProps } from '@/types/sections-types/about/skills.types';
import {
  Box,
  Chip,
} from '@mui/material';

export function SkillTags({
  skills,
  accent,
  groupLabel,
}: SkillTagsProps) {
  return (
    <Box
      component="ul"
      aria-label={`Tecnologias de ${groupLabel}`}
      sx={skillsStyles.tagsList}
    >
      {skills.map((skill, index) => (
        <Box
          component="li"
          key={`${skill}-${index}`}
          sx={{
            display: 'inline-flex',
            maxWidth: '100%',
          }}
        >
          <Chip
            label={skill}
            size="small"
            variant="outlined"
            sx={skillsStyles.tag(accent)}
          />
        </Box>
      ))}
    </Box>
  );
}