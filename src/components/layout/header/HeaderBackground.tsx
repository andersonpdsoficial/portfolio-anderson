import { headerStyles } from '@/styles/layoutStyles/headerStyles/header.styles';
import { Box } from '@mui/material';

export function HeaderBackground() {
  return (
    <>
      <Box
        aria-hidden="true"
        sx={headerStyles.topLine}
      />

      <Box
        aria-hidden="true"
        sx={headerStyles.glow}
      />
    </>
  );
}