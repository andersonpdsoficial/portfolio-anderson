import type { Theme } from '@mui/material/styles';
import type { SystemStyleObject } from '@mui/system';

export const homePageStyles = {
  main: {
    position: 'relative',
    display: 'block',

    width: '100%',
    minWidth: 0,
    minHeight: '100vh',

    overflowX: 'clip',

    bgcolor: 'background.default',

    /**
     * Compensa a altura do Header sticky
     * durante navegação por âncoras.
     */
    '& > section[id]': {
      scrollMarginTop: {
        xs: '72px',
        sm: '78px',
        md: '86px',
      },
    },
  } satisfies SystemStyleObject<Theme>,
} as const;