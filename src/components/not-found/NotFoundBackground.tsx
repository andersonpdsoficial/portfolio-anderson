import { notFoundStyles } from '@/styles/notFoundStyles/notFound.styles';
import { Box } from '@mui/material';

export function NotFoundBackground() {
  return (
    <>
      <Box
        aria-hidden="true"
        sx={notFoundStyles.backgroundGrid}
      />

      <Box
        aria-hidden="true"
        sx={notFoundStyles.topGlow}
      />

      <Box
        aria-hidden="true"
        sx={notFoundStyles.bottomGlow}
      />
    </>
  );
}