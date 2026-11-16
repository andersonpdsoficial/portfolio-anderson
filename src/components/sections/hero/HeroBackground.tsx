import { heroStyles } from '@/styles/sections-styles/hero.styles';
import { Box } from '@mui/material';


export function HeroBackground() {
  return (
    <>
      <Box
        aria-hidden="true"
        sx={heroStyles.backgroundGrid}
      />

      <Box
        aria-hidden="true"
        sx={heroStyles.greenOrb}
      />

      <Box
        aria-hidden="true"
        sx={heroStyles.blueOrb}
      />
    </>
  );
}