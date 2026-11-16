import { alpha } from '@mui/material/styles';

import type { Theme } from '@mui/material/styles';
import type { SystemStyleObject } from '@mui/system';

export const footerStyles = {
  root: (theme: Theme) => {
    const isDark = theme.palette.mode === 'dark';

    return {
      position: 'relative',
      isolation: 'isolate',
      overflow: 'hidden',
      bgcolor: 'background.paper',
      color: 'text.primary',
      borderTop: '1px solid',
      borderColor: 'divider',

      backgroundImage: `
        radial-gradient(
          ellipse at 5% 10%,
          ${alpha(
            theme.palette.primary.main,
            isDark ? 0.13 : 0.09,
          )},
          transparent 45%
        ),
        radial-gradient(
          ellipse at 95% 85%,
          ${alpha(theme.palette.info.main, 0.09)},
          transparent 48%
        ),
        linear-gradient(
          180deg,
          ${alpha(theme.palette.background.default, 0.2)},
          transparent
        )
      `,
    } satisfies SystemStyleObject<Theme>;
  },

  topGlowLine: (theme: Theme) => ({
    position: 'absolute',
    top: 0,
    left: '10%',
    right: '10%',
    height: '1px',

    background: `linear-gradient(
      90deg,
      transparent,
      ${alpha(theme.palette.primary.main, 0.75)},
      ${alpha(theme.palette.info.main, 0.55)},
      transparent
    )`,

    pointerEvents: 'none',
  } satisfies SystemStyleObject<Theme>),

  leftGlow: (theme: Theme) => ({
    position: 'absolute',
    top: '-180px',
    left: '-180px',
    width: 460,
    height: 460,
    borderRadius: '50%',

    background: `radial-gradient(
      circle,
      ${alpha(theme.palette.primary.main, 0.16)},
      transparent 70%
    )`,

    filter: 'blur(70px)',
    pointerEvents: 'none',
    zIndex: -1,
  } satisfies SystemStyleObject<Theme>),

  rightGlow: (theme: Theme) => ({
    position: 'absolute',
    bottom: '-220px',
    right: '-170px',
    width: 500,
    height: 500,
    borderRadius: '50%',

    background: `radial-gradient(
      circle,
      ${alpha(theme.palette.info.main, 0.11)},
      transparent 70%
    )`,

    filter: 'blur(75px)',
    pointerEvents: 'none',
    zIndex: -1,
  } satisfies SystemStyleObject<Theme>),

  backgroundGrid: (theme: Theme) => ({
    position: 'absolute',
    inset: 0,
    opacity: theme.palette.mode === 'dark' ? 0.045 : 0.035,

    backgroundImage: `
      linear-gradient(
        ${theme.palette.text.primary} 1px,
        transparent 1px
      ),
      linear-gradient(
        90deg,
        ${theme.palette.text.primary} 1px,
        transparent 1px
      )
    `,

    backgroundSize: '75px 75px',
    maskImage:
      'linear-gradient(to bottom, transparent, black 35%, transparent)',
    WebkitMaskImage:
      'linear-gradient(to bottom, transparent, black 35%, transparent)',
    pointerEvents: 'none',
    zIndex: -1,
  } satisfies SystemStyleObject<Theme>),

  container: {
    position: 'relative',
    zIndex: 1,
  } satisfies SystemStyleObject<Theme>,

  mainGrid: {
    display: 'grid',

    gridTemplateColumns: {
      xs: 'minmax(0, 1fr)',
      sm: 'minmax(0, 1.3fr) minmax(0, 1fr)',
      md: 'minmax(0, 1.5fr) repeat(2, minmax(0, 0.75fr))',
    },

    gap: {
      xs: 5,
      sm: 5,
      md: 7,
    },

    py: {
      xs: 5,
      sm: 6,
      md: 7,
    },
  } satisfies SystemStyleObject<Theme>,

  identity: {
    minWidth: 0,
    gridColumn: {
      xs: 'auto',
      sm: '1 / -1',
      md: 'auto',
    },
    maxWidth: 420,
  } satisfies SystemStyleObject<Theme>,

  logo: (theme: Theme) => {
    const isDark = theme.palette.mode === 'dark';

    return {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 68,
      height: 68,
      borderRadius: '19px',
      textDecoration: 'none',
      color: 'text.primary',

      background: `linear-gradient(
        135deg,
        ${alpha(theme.palette.primary.main, 0.15)},
        ${alpha(theme.palette.info.main, 0.08)}
      )`,

      border: `1px solid ${alpha(
        theme.palette.primary.main,
        0.28,
      )}`,

      boxShadow: isDark
        ? '0 12px 35px rgba(0,0,0,0.17)'
        : '0 12px 35px rgba(20,30,45,0.07)',

      transition:
        'transform 300ms ease, border-color 300ms ease, box-shadow 300ms ease',

      '&:hover': {
        transform: 'translateY(-5px) rotate(-3deg)',
        borderColor: 'primary.main',
        boxShadow: `0 18px 42px ${alpha(
          theme.palette.primary.main,
          0.18,
        )}`,
      },

      '&:focus-visible': {
        outline: `3px solid ${theme.palette.primary.main}`,
        outlineOffset: 4,
      },

      '@media (prefers-reduced-motion: reduce)': {
        transition: 'none',
        '&:hover': { transform: 'none' },
      },
    } satisfies SystemStyleObject<Theme>;
  },

  monogram: {
    fontSize: '1.75rem',
    fontWeight: 900,
    letterSpacing: '-0.09em',
    lineHeight: 1,
  } satisfies SystemStyleObject<Theme>,

  identityName: {
    fontWeight: 800,
    fontSize: {
      xs: '1.3rem',
      sm: '1.45rem',
    },
    color: 'text.primary',
    letterSpacing: '-0.035em',
  } satisfies SystemStyleObject<Theme>,

  identityRole: {
    color: 'primary.main',
    fontWeight: 700,
    letterSpacing: '0.01em',
  } satisfies SystemStyleObject<Theme>,

  identityDescription: {
    color: 'text.secondary',
    maxWidth: 380,
    lineHeight: 1.9,
    fontSize: '0.92rem',
  } satisfies SystemStyleObject<Theme>,

  signature: (theme: Theme) => ({
    width: 'fit-content',
    px: 1.8,
    py: 1,
    borderRadius: '999px',
    border: `1px solid ${alpha(
      theme.palette.primary.main,
      0.2,
    )}`,
    bgcolor: alpha(theme.palette.primary.main, 0.065),
  } satisfies SystemStyleObject<Theme>),

  columnHeading: {
    color: 'text.primary',
    fontSize: '0.72rem',
    fontWeight: 800,
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    mb: 2.5,
  } satisfies SystemStyleObject<Theme>,

  link: (theme: Theme) => ({
    display: 'inline-flex',
    alignItems: 'center',
    gap: 1,
    width: 'fit-content',
    maxWidth: '100%',
    minHeight: 30,
    color: 'text.secondary',
    textDecoration: 'none',
    fontSize: '0.89rem',
    fontWeight: 500,

    transition: 'color 250ms ease, transform 250ms ease',

    '&:hover': {
      color: 'primary.main',
      transform: 'translateX(5px)',
    },

    '&:focus-visible': {
      outline: `2px solid ${theme.palette.primary.main}`,
      outlineOffset: 4,
      borderRadius: '4px',
    },

    '@media (prefers-reduced-motion: reduce)': {
      transition: 'none',
      '&:hover': { transform: 'none' },
    },
  } satisfies SystemStyleObject<Theme>),

  navDot: {
    width: 5,
    height: 5,
    borderRadius: '50%',
    bgcolor: 'primary.main',
    opacity: 0.65,
    flexShrink: 0,
  } satisfies SystemStyleObject<Theme>,

  socialLink: (theme: Theme) => ({
    ...footerStyles.link(theme),
    gap: 1.2,

    '&:hover .footer-social-arrow': {
      transform: 'translate(3px, -3px)',
      opacity: 1,
    },

    '@media (prefers-reduced-motion: reduce)': {
      transition: 'none',
      '&:hover': { transform: 'none' },
      '&:hover .footer-social-arrow': {
        transform: 'none',
      },
    },
  } satisfies SystemStyleObject<Theme>),

  socialIcon: (theme: Theme) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
    flexShrink: 0,
    borderRadius: '9px',
    color: 'primary.main',
    bgcolor: alpha(theme.palette.primary.main, 0.08),
    border: `1px solid ${alpha(
      theme.palette.primary.main,
      0.12,
    )}`,
  } satisfies SystemStyleObject<Theme>),

  socialArrow: {
    fontSize: 15,
    opacity: 0.65,
    transition: 'transform 220ms ease, opacity 220ms ease',

    '@media (prefers-reduced-motion: reduce)': {
      transition: 'none',
    },
  } satisfies SystemStyleObject<Theme>,

  divider: {
    borderColor: 'divider',
    opacity: 0.8,
  } satisfies SystemStyleObject<Theme>,

  bottom: {
    py: {
      xs: 3.5,
      md: 4,
    },
  } satisfies SystemStyleObject<Theme>,

  copyright: {
    color: 'text.secondary',
    fontWeight: 600,
    lineHeight: 1.7,
  } satisfies SystemStyleObject<Theme>,

  backToTop: (theme: Theme) => ({
    alignSelf: {
      xs: 'flex-start',
      md: 'center',
    },

    minHeight: 42,
    px: 2,
    borderRadius: '11px',
    color: 'text.primary',
    bgcolor: alpha(theme.palette.primary.main, 0.065),
    border: `1px solid ${alpha(
      theme.palette.primary.main,
      0.23,
    )}`,
    textTransform: 'none',
    fontSize: '0.82rem',
    fontWeight: 800,

    transition:
      'transform 250ms ease, border-color 250ms ease, background-color 250ms ease',

    '&:hover': {
      transform: 'translateY(-3px)',
      bgcolor: alpha(theme.palette.primary.main, 0.12),
      borderColor: 'primary.main',
    },

    '&:focus-visible': {
      outline: `2px solid ${theme.palette.primary.main}`,
      outlineOffset: 3,
    },

    '@media (prefers-reduced-motion: reduce)': {
      transition: 'none',
      '&:hover': { transform: 'none' },
    },
  } satisfies SystemStyleObject<Theme>),
} as const;