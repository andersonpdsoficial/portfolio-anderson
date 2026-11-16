import { alpha } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';
import type { SystemStyleObject } from '@mui/system';

export const headerStyles = {
  root: (theme: Theme): SystemStyleObject<Theme> => {
    const dark = theme.palette.mode === 'dark';

    return {
      position: 'sticky',
      top: 0,
      left: 0,
      right: 0,
      width: '100%',
      zIndex: theme.zIndex.appBar,
      isolation: 'isolate',
      bgcolor: alpha(
        theme.palette.background.default,
        dark ? 0.88 : 0.9,
      ),
      backdropFilter: 'blur(22px)',
      WebkitBackdropFilter: 'blur(22px)',
      borderBottom: '1px solid',
      borderColor: 'divider',
      backgroundImage: `linear-gradient(
        115deg,
        ${alpha(theme.palette.primary.main, 0.055)},
        transparent 42%,
        ${alpha(theme.palette.info.main, 0.035)}
      )`,
      boxShadow: dark
        ? '0 8px 35px rgba(0,0,0,0.15)'
        : '0 8px 35px rgba(20,30,45,0.045)',
    };
  },

  topLine: (theme: Theme): SystemStyleObject<Theme> => ({
    position: 'absolute',
    top: 0,
    left: '12%',
    right: '12%',
    height: '1px',
    background: `linear-gradient(
      90deg,
      transparent,
      ${alpha(theme.palette.primary.main, 0.65)},
      ${alpha(theme.palette.info.main, 0.4)},
      transparent
    )`,
    pointerEvents: 'none',
  }),

  glow: (theme: Theme): SystemStyleObject<Theme> => ({
    position: 'absolute',
    inset: 0,
    overflow: 'hidden',
    pointerEvents: 'none',
    zIndex: -1,
    backgroundImage: `radial-gradient(
      ellipse at 15% 0%,
      ${alpha(theme.palette.primary.main, 0.08)},
      transparent 40%
    )`,
  }),

  bar: {
    minHeight: { xs: 72, sm: 78, md: 86 },
  } satisfies SystemStyleObject<Theme>,

  brandLink: (theme: Theme): SystemStyleObject<Theme> => ({
    display: 'inline-flex',
    alignItems: 'center',
    gap: { xs: 1.2, sm: 1.5 },
    minWidth: 0,
    flexShrink: 0,
    textDecoration: 'none',
    color: 'text.primary',
    transition: 'transform 280ms ease',

    '&:hover': {
      transform: 'translateY(-2px)',
    },

    '&:hover .header-brand-mark': {
      transform: 'rotate(-5deg) scale(1.04)',
      borderColor: 'primary.main',
      boxShadow: `0 10px 30px ${alpha(
        theme.palette.primary.main,
        0.2,
      )}`,
    },

    '&:focus-visible': {
      outline: `2px solid ${theme.palette.primary.main}`,
      outlineOffset: 5,
      borderRadius: '10px',
    },

    '@media (prefers-reduced-motion: reduce)': {
      transition: 'none',
      '&:hover': { transform: 'none' },
      '&:hover .header-brand-mark': {
        transform: 'none',
      },
    },
  }),

  brandMark: (theme: Theme): SystemStyleObject<Theme> => ({
    position: 'relative',
    width: { xs: 42, sm: 46 },
    height: { xs: 42, sm: 46 },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    borderRadius: '13px',
    border: `1px solid ${alpha(
      theme.palette.primary.main,
      0.3,
    )}`,
    background: `linear-gradient(
      135deg,
      ${alpha(theme.palette.primary.main, 0.17)},
      ${alpha(theme.palette.info.main, 0.09)}
    )`,
    boxShadow: theme.palette.mode === 'dark'
      ? '0 6px 22px rgba(0,0,0,0.15)'
      : '0 6px 22px rgba(20,35,50,0.06)',
    transition:
      'transform 300ms ease, border-color 300ms ease, box-shadow 300ms ease',

    '@media (prefers-reduced-motion: reduce)': {
      transition: 'none',
    },
  }),

  brandMonogram: {
    fontSize: { xs: '1.17rem', sm: '1.28rem' },
    fontWeight: 900,
    letterSpacing: '-0.08em',
    lineHeight: 1,
    color: 'text.primary',
  } satisfies SystemStyleObject<Theme>,

  brandDot: (theme: Theme): SystemStyleObject<Theme> => ({
    position: 'absolute',
    right: 7,
    bottom: 7,
    width: 6,
    height: 6,
    borderRadius: '50%',
    bgcolor: 'primary.main',
    boxShadow: `0 0 10px ${alpha(
      theme.palette.primary.main,
      0.6,
    )}`,
  }),

  brandName: {
    fontWeight: 850,
    fontSize: { xs: '1.05rem', sm: '1.25rem' },
    letterSpacing: '-0.055em',
    whiteSpace: 'nowrap',
    color: 'text.primary',
  } satisfies SystemStyleObject<Theme>,

  desktopNav: {
    display: { xs: 'none', md: 'flex' },
    minWidth: 0,
    flex: 1,
  } satisfies SystemStyleObject<Theme>,

  navLink: (theme: Theme): SystemStyleObject<Theme> => ({
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 44,
    px: 1.5,
    color: 'text.secondary',
    textDecoration: 'none',
    fontSize: '0.875rem',
    fontWeight: 650,
    whiteSpace: 'nowrap',
    transition: 'color 250ms ease, transform 250ms ease',

    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 5,
      left: '50%',
      width: 0,
      height: 2,
      borderRadius: '999px',
      bgcolor: 'primary.main',
      transform: 'translateX(-50%)',
      transition: 'width 250ms ease',
    },

    '&:hover': {
      color: 'text.primary',
      transform: 'translateY(-2px)',
    },

    '&:hover::after': {
      width: '55%',
    },

    '&:focus-visible': {
      outline: `2px solid ${theme.palette.primary.main}`,
      outlineOffset: 3,
      borderRadius: '6px',
    },

    '@media (prefers-reduced-motion: reduce)': {
      transition: 'none',
      '&::after': { transition: 'none' },
      '&:hover': { transform: 'none' },
    },
  }),

  actions: {
    flexShrink: 0,
  } satisfies SystemStyleObject<Theme>,

  themeToggle: (theme: Theme): SystemStyleObject<Theme> => ({
    width: { xs: 42, sm: 44 },
    height: { xs: 42, sm: 44 },
    borderRadius: '12px',
    color: 'text.primary',
    bgcolor: alpha(theme.palette.background.paper, 0.7),
    border: '1px solid',
    borderColor: 'divider',
    transition:
      'transform 280ms ease, border-color 280ms ease, background-color 280ms ease',

    '&:hover': {
      transform: 'rotate(12deg)',
      borderColor: 'primary.main',
      bgcolor: alpha(theme.palette.primary.main, 0.1),
    },

    '&:focus-visible': {
      outline: `2px solid ${theme.palette.primary.main}`,
      outlineOffset: 3,
    },

    '@media (prefers-reduced-motion: reduce)': {
      transition: 'none',
      '&:hover': { transform: 'none' },
    },
  }),

  contactButton: (theme: Theme): SystemStyleObject<Theme> => ({
    display: { xs: 'none', sm: 'inline-flex' },
    minHeight: 44,
    px: { sm: 2, lg: 2.5 },
    borderRadius: '12px',
    fontSize: '0.82rem',
    fontWeight: 800,
    whiteSpace: 'nowrap',
    textTransform: 'none',
    boxShadow: `0 8px 25px ${alpha(
      theme.palette.primary.main,
      0.16,
    )}`,
    transition: 'transform 250ms ease, box-shadow 250ms ease',

    '&:hover': {
      transform: 'translateY(-3px)',
      boxShadow: `0 13px 32px ${alpha(
        theme.palette.primary.main,
        0.28,
      )}`,
    },

    '&:focus-visible': {
      outline: `2px solid ${theme.palette.primary.main}`,
      outlineOffset: 3,
    },

    '@media (prefers-reduced-motion: reduce)': {
      transition: 'none',
      '&:hover': { transform: 'none' },
    },
  }),

  menuButton: (theme: Theme): SystemStyleObject<Theme> => ({
    display: { xs: 'inline-flex', md: 'none' },
    width: 44,
    height: 44,
    borderRadius: '12px',
    color: 'text.primary',
    border: '1px solid',
    borderColor: 'divider',
    bgcolor: alpha(theme.palette.background.paper, 0.7),
    transition:
      'border-color 220ms ease, background-color 220ms ease',

    '&:hover': {
      borderColor: 'primary.main',
      bgcolor: alpha(theme.palette.primary.main, 0.1),
    },

    '&:focus-visible': {
      outline: `2px solid ${theme.palette.primary.main}`,
      outlineOffset: 3,
    },
  }),

  drawerPaper: (theme: Theme): SystemStyleObject<Theme> => ({
    width: { xs: 'min(100vw, 360px)', sm: 390 },
    maxWidth: '100vw',
    height: '100dvh',
    display: 'flex',
    flexDirection: 'column',
    overflowX: 'hidden',
    color: 'text.primary',
    bgcolor: 'background.paper',
    borderLeft: '1px solid',
    borderColor: 'divider',
    backgroundImage: `
      radial-gradient(
        ellipse at 100% 0%,
        ${alpha(theme.palette.primary.main, 0.13)},
        transparent 50%
      ),
      radial-gradient(
        ellipse at 0% 95%,
        ${alpha(theme.palette.info.main, 0.1)},
        transparent 50%
      )
    `,
    boxShadow: '-25px 0 80px rgba(0,0,0,0.22)',
  }),

  drawerBackdrop: {
    bgcolor: 'rgba(5,10,18,0.65)',
    backdropFilter: 'blur(7px)',
    WebkitBackdropFilter: 'blur(7px)',
  } satisfies SystemStyleObject<Theme>,

  drawerHeader: {
    px: 3,
    py: 3,
    borderBottom: '1px solid',
    borderColor: 'divider',
  } satisfies SystemStyleObject<Theme>,

  drawerHeaderIcon: (theme: Theme): SystemStyleObject<Theme> => ({
    width: 41,
    height: 41,
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'primary.main',
    bgcolor: alpha(theme.palette.primary.main, 0.11),
    border: `1px solid ${alpha(
      theme.palette.primary.main,
      0.23,
    )}`,
  }),

  drawerClose: (theme: Theme): SystemStyleObject<Theme> => ({
    width: 42,
    height: 42,
    borderRadius: '12px',
    color: 'text.primary',
    border: '1px solid',
    borderColor: 'divider',
    bgcolor: alpha(theme.palette.text.primary, 0.045),
    transition: 'transform 250ms ease, background-color 250ms ease',

    '&:hover': {
      transform: 'rotate(90deg)',
      bgcolor: alpha(theme.palette.error.main, 0.1),
    },

    '@media (prefers-reduced-motion: reduce)': {
      transition: 'none',
      '&:hover': { transform: 'none' },
    },
  }),

  mobileNav: {
    flex: 1,
    px: 2.5,
    py: 3,
    overflowY: 'auto',
  } satisfies SystemStyleObject<Theme>,

  mobileNavItem: (theme: Theme): SystemStyleObject<Theme> => ({
    display: 'flex',
    alignItems: 'center',
    gap: 1.8,
    minHeight: 63,
    px: 2,
    py: 1.3,
    borderRadius: '14px',
    textDecoration: 'none',
    color: 'text.primary',
    border: '1px solid',
    borderColor: 'divider',
    bgcolor: alpha(theme.palette.background.default, 0.3),
    transition:
      'transform 250ms ease, border-color 250ms ease, background-color 250ms ease, box-shadow 250ms ease',

    '&:hover': {
      transform: 'translateX(5px)',
      borderColor: alpha(theme.palette.primary.main, 0.55),
      bgcolor: alpha(theme.palette.primary.main, 0.08),
      boxShadow: `0 8px 25px ${alpha(
        theme.palette.primary.main,
        0.07,
      )}`,
    },

    '&:hover .mobile-nav-arrow': {
      transform: 'translate(3px, -3px)',
      color: 'primary.main',
    },

    '&:focus-visible': {
      outline: `2px solid ${theme.palette.primary.main}`,
      outlineOffset: 3,
    },

    '@media (prefers-reduced-motion: reduce)': {
      transition: 'none',
      '&:hover': { transform: 'none' },
      '&:hover .mobile-nav-arrow': {
        transform: 'none',
      },
    },
  }),

  mobileNavArrow: {
    fontSize: 19,
    color: 'text.secondary',
    transition: 'transform 250ms ease, color 250ms ease',

    '@media (prefers-reduced-motion: reduce)': {
      transition: 'none',
    },
  } satisfies SystemStyleObject<Theme>,

  drawerFooter: {
    mt: 'auto',
    px: 3,
    pt: 3,
    pb: 3.5,
  } satisfies SystemStyleObject<Theme>,

  drawerContactButton: (theme: Theme): SystemStyleObject<Theme> => ({
    minHeight: 54,
    borderRadius: '13px',
    fontSize: '0.95rem',
    fontWeight: 800,
    textTransform: 'none',
    boxShadow: `0 10px 30px ${alpha(
      theme.palette.primary.main,
      0.22,
    )}`,
    transition: 'transform 250ms ease, box-shadow 250ms ease',

    '&:hover': {
      transform: 'translateY(-3px)',
      boxShadow: `0 15px 38px ${alpha(
        theme.palette.primary.main,
        0.3,
      )}`,
    },

    '@media (prefers-reduced-motion: reduce)': {
      transition: 'none',
      '&:hover': { transform: 'none' },
    },
  }),
} as const;