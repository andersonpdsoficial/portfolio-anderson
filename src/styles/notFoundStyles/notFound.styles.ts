
import { alpha } from '@mui/material/styles';

import type { Theme } from '@mui/material/styles';
import type { SystemStyleObject } from '@mui/system';

export const notFoundStyles = {
  // ============================================================
  // SEÇÃO PRINCIPAL
  // ============================================================

  root: (theme: Theme): SystemStyleObject<Theme> => {
    const isDark = theme.palette.mode === 'dark';

    return {
      position: 'relative',
      isolation: 'isolate',
      overflow: 'hidden',

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      minHeight: {
        xs: 'calc(100svh - 100px)',
        md: 'calc(100svh - 150px)',
      },

      py: {
        xs: 10,
        sm: 12,
        md: 15,
      },

      bgcolor: 'background.default',

      backgroundImage: `
        radial-gradient(
          ellipse at 15% 20%,
          ${alpha(
            theme.palette.primary.main,
            isDark ? 0.15 : 0.11,
          )},
          transparent 50%
        ),
        radial-gradient(
          ellipse at 85% 80%,
          ${alpha(
            theme.palette.info.main,
            isDark ? 0.12 : 0.09,
          )},
          transparent 52%
        )
      `,
    };
  },

  // ============================================================
  // FUNDO DECORATIVO
  // ============================================================

  backgroundGrid: (
    theme: Theme,
  ): SystemStyleObject<Theme> => ({
    position: 'absolute',
    inset: 0,

    zIndex: -1,
    pointerEvents: 'none',

    opacity:
      theme.palette.mode === 'dark'
        ? 0.065
        : 0.045,

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

    backgroundSize: '70px 70px',

    maskImage:
      'radial-gradient(ellipse at center, black, transparent 80%)',

    WebkitMaskImage:
      'radial-gradient(ellipse at center, black, transparent 80%)',
  }),

  topGlow: (theme: Theme): SystemStyleObject<Theme> => ({
    position: 'absolute',

    top: '-160px',
    left: '-160px',

    width: {
      xs: 330,
      md: 550,
    },

    height: {
      xs: 330,
      md: 550,
    },

    borderRadius: '50%',

    background: `radial-gradient(
      circle,
      ${alpha(theme.palette.primary.main, 0.18)},
      transparent 70%
    )`,

    filter: 'blur(75px)',

    pointerEvents: 'none',
    zIndex: -1,
  }),

  bottomGlow: (
    theme: Theme,
  ): SystemStyleObject<Theme> => ({
    position: 'absolute',

    bottom: '-200px',
    right: '-170px',

    width: {
      xs: 350,
      md: 580,
    },

    height: {
      xs: 350,
      md: 580,
    },

    borderRadius: '50%',

    background: `radial-gradient(
      circle,
      ${alpha(theme.palette.info.main, 0.15)},
      transparent 70%
    )`,

    filter: 'blur(80px)',

    pointerEvents: 'none',
    zIndex: -1,
  }),

  // ============================================================
  // CONTAINER
  // ============================================================

  container: {
    position: 'relative',
    zIndex: 1,
  } satisfies SystemStyleObject<Theme>,

  content: {
    width: '100%',
    textAlign: 'center',
  } satisfies SystemStyleObject<Theme>,

  // ============================================================
  // IDENTIFICADOR 404
  // ============================================================

  badge: (theme: Theme): SystemStyleObject<Theme> => ({
    px: 2,
    py: 1.1,

    borderRadius: '999px',

    border: `1px solid ${alpha(
      theme.palette.primary.main,
      0.28,
    )}`,

    bgcolor: alpha(
      theme.palette.primary.main,
      0.07,
    ),
  }),

  badgeDot: (theme: Theme): SystemStyleObject<Theme> => ({
    width: 8,
    height: 8,

    borderRadius: '50%',

    bgcolor: 'primary.main',

    boxShadow: `0 0 12px ${alpha(
      theme.palette.primary.main,
      0.55,
    )}`,
  }),

  badgeText: {
    color: 'primary.main',

    fontWeight: 600,

    letterSpacing: '0.10em',

    fontSize: {
      xs: '0.50rem',
      sm: '0.60rem',
    },
  } satisfies SystemStyleObject<Theme>,

  // ============================================================
  // ILUSTRAÇÃO 404
  // ============================================================

  illustration: {
    position: 'relative',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: '100%',

    py: 1,
  } satisfies SystemStyleObject<Theme>,

  errorNumber: (
    theme: Theme,
  ): SystemStyleObject<Theme> => ({
    fontSize: {
      xs: '4rem',
      sm: '8rem',
      md: '12rem',
    },

    fontWeight: 900,

    letterSpacing: '-0.095em',

    lineHeight: 0.95,

    background: `linear-gradient(
      120deg,
      ${theme.palette.primary.main} 0%,
      ${theme.palette.info.main} 95%
    )`,

    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',

    filter: `drop-shadow(
      0 15px 40px
      ${alpha(theme.palette.primary.main, 0.13)}
    )`,
  }),

  illustrationIcon: (
    theme: Theme,
  ): SystemStyleObject<Theme> => ({
    position: 'absolute',

    top: {
      xs: 0,
      sm: 10,
    },

    right: {
      xs: '8%',
      sm: '15%',
    },

    width: {
      xs: 43,
      sm: 58,
    },

    height: {
      xs: 43,
      sm: 58,
    },

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: '16px',

    bgcolor: 'background.paper',
    color: 'primary.main',

    border: `1px solid ${alpha(
      theme.palette.primary.main,
      0.3,
    )}`,

    boxShadow: `0 14px 36px ${alpha(
      theme.palette.primary.main,
      0.12,
    )}`,
  }),

  // ============================================================
  // TÍTULO E DESCRIÇÃO
  // ============================================================

  heading: {
    maxWidth: 750,

    color: 'text.primary',

    fontWeight: 850,

    letterSpacing: '-0.055em',

    lineHeight: 1.14,

    fontSize: {
      xs: '2.15rem',
      sm: '3.1rem',
      md: '3.7rem',
    },
  } satisfies SystemStyleObject<Theme>,

  headingHighlight: (
    theme: Theme,
  ): SystemStyleObject<Theme> => ({
    background: `linear-gradient(
      110deg,
      ${theme.palette.primary.main},
      ${theme.palette.info.main}
    )`,

    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  }),

  description: {
    maxWidth: 560,

    color: 'text.secondary',

    lineHeight: 1.9,

    fontSize: {
      xs: '0.98rem',
      sm: '1.08rem',
    },
  } satisfies SystemStyleObject<Theme>,

  // ============================================================
  // BOTÕES
  // ============================================================

  actions: {
    width: {
      xs: '100%',
      sm: 'auto',
    },

    pt: 2,
  } satisfies SystemStyleObject<Theme>,

  primaryButton: (
    theme: Theme,
  ): SystemStyleObject<Theme> => ({
    minHeight: 54,

    px: 3,

    borderRadius: '13px',

    fontWeight: 800,
    fontSize: '0.94rem',

    textTransform: 'none',

    boxShadow: `0 12px 35px ${alpha(
      theme.palette.primary.main,
      0.2,
    )}`,

    transition:
      'transform 250ms ease, box-shadow 250ms ease',

    '&:hover': {
      transform: 'translateY(-3px)',

      boxShadow: `0 17px 42px ${alpha(
        theme.palette.primary.main,
        0.3,
      )}`,
    },

    '@media (prefers-reduced-motion: reduce)': {
      transition: 'none',

      '&:hover': {
        transform: 'none',
      },
    },
  }),

  secondaryButton: (
    theme: Theme,
  ): SystemStyleObject<Theme> => ({
    minHeight: 54,

    px: 3,

    borderRadius: '13px',

    color: 'text.primary',

    borderColor: 'divider',

    bgcolor: alpha(
      theme.palette.background.paper,
      0.5,
    ),

    fontWeight: 750,
    fontSize: '0.94rem',

    textTransform: 'none',

    transition:
      'transform 250ms ease, border-color 250ms ease, background-color 250ms ease',

    '&:hover': {
      transform: 'translateY(-3px)',

      borderColor: 'primary.main',

      bgcolor: alpha(
        theme.palette.primary.main,
        0.08,
      ),
    },

    '@media (prefers-reduced-motion: reduce)': {
      transition: 'none',

      '&:hover': {
        transform: 'none',
      },
    },
  }),

  // ============================================================
  // INFORMAÇÃO TÉCNICA
  // ============================================================

  technicalPaper: (
    theme: Theme,
  ): SystemStyleObject<Theme> => ({
    width: '100%',

    maxWidth: 540,

    mt: 3,

    p: {
      xs: 2,
      sm: 2.5,
    },

    borderRadius: '15px',

    bgcolor: alpha(
      theme.palette.background.paper,
      0.7,
    ),

    border: '1px solid',
    borderColor: 'divider',

    backgroundImage: `linear-gradient(
      120deg,
      ${alpha(theme.palette.primary.main, 0.055)},
      transparent
    )`,
  }),

  technicalIcon: (
    theme: Theme,
  ): SystemStyleObject<Theme> => ({
    width: 42,
    height: 42,

    flexShrink: 0,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: '12px',

    color: 'primary.main',

    bgcolor: alpha(
      theme.palette.primary.main,
      0.1,
    ),
  }),

  technicalCode: {
    color: 'primary.main',

    fontWeight: 800,

    letterSpacing: '0.08em',
  } satisfies SystemStyleObject<Theme>,

  technicalDescription: {
    color: 'text.secondary',

    lineHeight: 1.65,

    fontSize: '0.8rem',
  } satisfies SystemStyleObject<Theme>,

  // ============================================================
  // ASSINATURA
  // ============================================================

  signature: {
    pt: 2,
  } satisfies SystemStyleObject<Theme>,

  signatureIcon: {
    fontSize: 17,
    color: 'primary.main',
  } satisfies SystemStyleObject<Theme>,

  signatureText: {
    color: 'text.disabled',

    fontWeight: 700,

    letterSpacing: '0.1em',
  } satisfies SystemStyleObject<Theme>,
} as const;
