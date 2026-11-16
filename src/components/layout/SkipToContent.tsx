
import Box from '@mui/material/Box';

import type { Theme } from '@mui/material/styles';
import type { SystemStyleObject } from '@mui/system';

const skipLinkStyles = {
  position: 'fixed',

  top: 16,
  left: 16,

  zIndex: 2000,

  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',

  minHeight: 48,

  px: 2.5,
  py: 1.25,

  borderRadius: '12px',

  bgcolor: 'primary.main',
  color: 'primary.contrastText',

  fontWeight: 800,
  fontSize: '0.875rem',

  textDecoration: 'none',

  boxShadow: '0 12px 35px rgba(0,0,0,0.20)',

  transform: 'translateY(-180%)',

  transition: 'transform 200ms ease',

  '&:focus': {
    transform: 'translateY(0)',
  },

  '&:focus-visible': {
    transform: 'translateY(0)',

    outline: '3px solid',
    outlineColor: 'primary.main',
    outlineOffset: 3,
  },

  '@media (prefers-reduced-motion: reduce)': {
    transition: 'none',
  },
} satisfies SystemStyleObject<Theme>;

export function SkipToContent() {
  return (
    <Box
      component="a"
      href="#conteudo"
      sx={skipLinkStyles}
    >
      Pular para o conteúdo
    </Box>
  );
}
