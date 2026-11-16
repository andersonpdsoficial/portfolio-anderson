import { footerStyles } from '@/styles/layoutStyles/footerStyles/footer.styles';
import { Box } from '@mui/material';

export function FooterBackground() {
  return (
    <>
      <Box
        aria-hidden="true"
        sx={footerStyles.topGlowLine}
      />

      <Box
        aria-hidden="true"
        sx={footerStyles.leftGlow}
      />

      <Box
        aria-hidden="true"
        sx={footerStyles.rightGlow}
      />

      <Box
        aria-hidden="true"
        sx={footerStyles.backgroundGrid}
      />
    </>
  );
}