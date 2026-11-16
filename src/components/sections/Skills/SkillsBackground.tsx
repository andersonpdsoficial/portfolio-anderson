import { skillsStyles } from '@/styles/sections-styles/skills.styles';
import { Box } from '@mui/material';


export function SkillsBackground() {
  return (
    <>
      <Box
        aria-hidden="true"
        sx={skillsStyles.topGlow}
      />

      <Box
        aria-hidden="true"
        sx={skillsStyles.bottomGlow}
      />

      <Box
        aria-hidden="true"
        sx={skillsStyles.backgroundGrid}
      />
    </>
  );
}