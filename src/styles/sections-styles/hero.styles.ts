
import { alpha, keyframes } from '@mui/material/styles';

import type { Theme } from '@mui/material/styles';
import type { SystemStyleObject } from '@mui/system';

// ============================================================
// ANIMAÇÕES
// ============================================================

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }

  50% {
    opacity: 0.55;
    transform: scale(0.8);
  }
`;

const cursor = keyframes`
  0%, 49% {
    opacity: 1;
  }

  50%, 100% {
    opacity: 0;
  }
`;

const scroll = keyframes`
  0%, 100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(5px);
  }
`;

// ============================================================
// ESTILOS DO HERO
// ============================================================

export const heroStyles = {
  // ==========================================================
  // SEÇÃO PRINCIPAL
  // ==========================================================

  section: (theme: Theme): SystemStyleObject<Theme> => {
    const isDark = theme.palette.mode === 'dark';

    return {
      position: 'relative',
      isolation: 'isolate',
      overflow: 'hidden',

      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',

      minHeight: {
        xs: 'auto',
        md: 'min(780px, 92svh)',
      },

      bgcolor: 'background.default',

      backgroundImage: `
        radial-gradient(
          ellipse at 10% 15%,
          ${alpha(
            theme.palette.primary.main,
            isDark ? 0.14 : 0.11,
          )},
          transparent 43%
        ),
        radial-gradient(
          ellipse at 92% 35%,
          ${alpha(
            theme.palette.info.main,
            isDark ? 0.11 : 0.08,
          )},
          transparent 48%
        ),
        radial-gradient(
          ellipse at 50% 100%,
          ${alpha(
            theme.palette.secondary.main,
            0.07,
          )},
          transparent 55%
        )
      `,

      pt: {
        xs: 9,
        sm: 10,
        md: 11,
      },

      pb: {
        xs: 6,
        md: 4,
      },
    };
  },

  // ==========================================================
  // FUNDO DECORATIVO
  // ==========================================================

  backgroundGrid: (theme: Theme): SystemStyleObject<Theme> => ({
    position: 'absolute',
    inset: 0,

    pointerEvents: 'none',
    zIndex: -1,

    opacity:
      theme.palette.mode === 'dark'
        ? 0.075
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

    backgroundSize: '74px 74px',

    maskImage:
      'linear-gradient(to bottom, black, transparent 90%)',

    WebkitMaskImage:
      'linear-gradient(to bottom, black, transparent 90%)',
  }),

  greenOrb: (theme: Theme): SystemStyleObject<Theme> => ({
    position: 'absolute',

    top: '-160px',
    left: '-170px',

    width: {
      xs: 350,
      md: 600,
    },

    height: {
      xs: 350,
      md: 600,
    },

    borderRadius: '50%',

    background: `
      radial-gradient(
        circle,
        ${alpha(theme.palette.primary.main, 0.16)},
        transparent 70%
      )
    `,

    filter: 'blur(65px)',
    pointerEvents: 'none',
    zIndex: -1,
  }),

  blueOrb: (theme: Theme): SystemStyleObject<Theme> => ({
    position: 'absolute',

    right: '-190px',
    bottom: '-130px',

    width: {
      xs: 350,
      md: 620,
    },

    height: {
      xs: 350,
      md: 620,
    },

    borderRadius: '50%',

    background: `
      radial-gradient(
        circle,
        ${alpha(theme.palette.info.main, 0.14)},
        transparent 70%
      )
    `,

    filter: 'blur(80px)',
    pointerEvents: 'none',
    zIndex: -1,
  }),

  // ==========================================================
  // LAYOUT
  // ==========================================================

  container: {
    position: 'relative',
    zIndex: 1,

    flex: 1,
    display: 'flex',
    alignItems: 'center',
  } satisfies SystemStyleObject<Theme>,

  layout: {
    width: '100%',
    display: 'grid',

    gridTemplateColumns: {
      xs: 'minmax(0, 1fr)',
      md: 'minmax(0, 1.05fr) minmax(0, 0.95fr)',
    },

    alignItems: 'center',

    columnGap: {
      md: 5,
      lg: 8,
    },

    rowGap: {
      xs: 7,
      md: 4,
    },
  } satisfies SystemStyleObject<Theme>,

  // ==========================================================
  // APRESENTAÇÃO
  // ==========================================================

  intro: {
    minWidth: 0,
    maxWidth: 670,
  } satisfies SystemStyleObject<Theme>,

  locationBadge: (theme: Theme): SystemStyleObject<Theme> => ({
    width: 'fit-content',
    maxWidth: '100%',

    px: 1.8,
    py: 1.1,

    border: `1px solid ${alpha(
      theme.palette.primary.main,
      0.25,
    )}`,

    borderRadius: '999px',

    bgcolor: alpha(
      theme.palette.primary.main,
      0.075,
    ),
  }),

  locationDot: (theme: Theme): SystemStyleObject<Theme> => ({
    width: 8,
    height: 8,

    flexShrink: 0,
    borderRadius: '50%',

    bgcolor: 'success.main',

    boxShadow: `0 0 12px ${alpha(
      theme.palette.success.main,
      0.6,
    )}`,
  }),

  // ==========================================================
  // TÍTULO PRINCIPAL
  // ==========================================================

  title: {
    fontWeight: 900,
    letterSpacing: '-0.07em',

    lineHeight: {
      xs: 1.06,
      md: 1.03,
    },

    color: 'text.primary',

    fontSize: {
      xs: '3.15rem',
      sm: '4.7rem',
      md: '4.6rem',
      lg: '5.5rem',
    },
  } satisfies SystemStyleObject<Theme>,

  titleGradient: (theme: Theme): SystemStyleObject<Theme> => ({
    display: 'inline',

    backgroundImage: `
      linear-gradient(
        110deg,
        ${theme.palette.primary.main} 0%,
        ${theme.palette.info.main} 85%
      )
    `,

    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  }),

  titleCursor: {
    display: 'inline-block',

    color: 'primary.main',
    fontWeight: 500,
    ml: 0.3,

    animation: `${cursor} 1.1s steps(1) infinite`,

    '@media (prefers-reduced-motion: reduce)': {
      animation: 'none',
    },
  } satisfies SystemStyleObject<Theme>,

  // ==========================================================
  // IDENTIFICAÇÃO PROFISSIONAL
  // ==========================================================

  role: {
    fontSize: {
      xs: '1.12rem',
      sm: '1.3rem',
    },

    color: 'text.primary',
    lineHeight: 1.7,
  } satisfies SystemStyleObject<Theme>,

  description: {
    color: 'text.secondary',
    maxWidth: 560,
    lineHeight: 1.95,

    fontSize: {
      xs: '0.98rem',
      md: '1.06rem',
    },
  } satisfies SystemStyleObject<Theme>,

  // ==========================================================
  // BOTÃO PRINCIPAL
  // ==========================================================

  primaryButton: (theme: Theme): SystemStyleObject<Theme> => ({
    minHeight: 54,

    px: 3,

    borderRadius: '13px',

    fontWeight: 800,
    textTransform: 'none',
    fontSize: '0.95rem',

    boxShadow: `0 12px 35px ${alpha(
      theme.palette.primary.main,
      0.19,
    )}`,

    transition:
      'transform 250ms ease, box-shadow 250ms ease',

    '&:hover': {
      transform: 'translateY(-3px)',

      boxShadow: `0 18px 42px ${alpha(
        theme.palette.primary.main,
        0.28,
      )}`,
    },

    '&:focus-visible': {
      outline: `3px solid ${theme.palette.primary.main}`,
      outlineOffset: 3,
    },

    '@media (prefers-reduced-motion: reduce)': {
      transition: 'none',

      '&:hover': {
        transform: 'none',
      },
    },
  }),

  // ==========================================================
  // BOTÃO SECUNDÁRIO
  // ==========================================================

  secondaryButton: (theme: Theme): SystemStyleObject<Theme> => ({
    minHeight: 54,

    px: 3,

    borderRadius: '13px',

    fontWeight: 700,
    textTransform: 'none',
    fontSize: '0.95rem',

    color: 'text.primary',
    borderColor: 'divider',

    bgcolor: alpha(
      theme.palette.background.paper,
      0.5,
    ),

    transition:
      'transform 250ms ease, border-color 250ms ease, background-color 250ms ease',

    '&:hover': {
      borderColor: 'primary.main',

      bgcolor: alpha(
        theme.palette.primary.main,
        0.07,
      ),

      transform: 'translateY(-3px)',
    },

    '&:focus-visible': {
      outline: `3px solid ${theme.palette.primary.main}`,
      outlineOffset: 3,
    },

    '@media (prefers-reduced-motion: reduce)': {
      transition: 'none',

      '&:hover': {
        transform: 'none',
      },
    },
  }),

  // ==========================================================
  // ÁREAS DE ATUAÇÃO
  // ==========================================================

  focusChip: (theme: Theme): SystemStyleObject<Theme> => ({
    height: 32,

    px: 0.5,

    borderRadius: '9px',

    fontWeight: 600,
    fontSize: '0.72rem',

    color: 'text.secondary',
    borderColor: 'divider',

    bgcolor: alpha(
      theme.palette.background.paper,
      0.4,
    ),

    transition:
      'transform 200ms ease, border-color 200ms ease',

    '&:hover': {
      transform: 'translateY(-2px)',

      borderColor: 'primary.main',
      color: 'text.primary',
    },

    '@media (prefers-reduced-motion: reduce)': {
      transition: 'none',

      '&:hover': {
        transform: 'none',
      },
    },
  }),

  // ==========================================================
  // VISUAL DE ARQUITETURA
  // ==========================================================

  visualContainer: {
    position: 'relative',
    maxWidth: 510,
    mx: 'auto',
    width: '100%',
  } satisfies SystemStyleObject<Theme>,

  visualGlow: (theme: Theme): SystemStyleObject<Theme> => ({
    position: 'absolute',
    inset: '12% -8%',
    zIndex: -1,

    borderRadius: '50%',

    background: `
      radial-gradient(
        ellipse,
        ${alpha(theme.palette.primary.main, 0.2)},
        ${alpha(theme.palette.info.main, 0.09)} 45%,
        transparent 75%
      )
    `,

    filter: 'blur(55px)',
    pointerEvents: 'none',
  }),

  // ==========================================================
  // PAPER DO DIAGRAMA
  // ==========================================================

  visualPaper: (theme: Theme): SystemStyleObject<Theme> => {
    const isDark = theme.palette.mode === 'dark';

    return {
      position: 'relative',
      isolation: 'isolate',
      overflow: 'hidden',

      width: '100%',

      borderRadius: {
        xs: '22px',
        sm: '28px',
      },

      border: `1px solid ${alpha(
        theme.palette.primary.main,
        0.24,
      )}`,

      bgcolor: 'background.paper',

      backgroundImage: `
        radial-gradient(
          ellipse at 90% 0%,
          ${alpha(theme.palette.primary.main, 0.14)},
          transparent 55%
        ),
        radial-gradient(
          ellipse at 0% 95%,
          ${alpha(theme.palette.info.main, 0.1)},
          transparent 55%
        )
      `,

      boxShadow: isDark
        ? '0 30px 90px rgba(0,0,0,0.30)'
        : '0 30px 90px rgba(20,35,55,0.12)',

      transition:
        'transform 400ms ease, box-shadow 400ms ease',

      '&:hover': {
        transform: 'translateY(-5px)',

        boxShadow: isDark
          ? '0 40px 100px rgba(0,0,0,0.38)'
          : '0 40px 100px rgba(20,35,55,0.17)',
      },

      '@media (prefers-reduced-motion: reduce)': {
        transition: 'none',

        '&:hover': {
          transform: 'none',
        },
      },
    };
  },

  visualGrid: (theme: Theme): SystemStyleObject<Theme> => ({
    position: 'absolute',
    inset: 0,
    zIndex: -1,

    pointerEvents: 'none',

    opacity:
      theme.palette.mode === 'dark'
        ? 0.09
        : 0.055,

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

    backgroundSize: '36px 36px',

    maskImage:
      'linear-gradient(to bottom, black, transparent 90%)',

    WebkitMaskImage:
      'linear-gradient(to bottom, black, transparent 90%)',
  }),

  // ==========================================================
  // INDICADOR DE STATUS
  // ==========================================================

  systemStatus: (theme: Theme): SystemStyleObject<Theme> => ({
    width: 8,
    height: 8,

    borderRadius: '50%',
    bgcolor: 'success.main',

    boxShadow: `0 0 14px ${alpha(
      theme.palette.success.main,
      0.65,
    )}`,

    animation: `${pulse} 2.6s ease-in-out infinite`,

    '@media (prefers-reduced-motion: reduce)': {
      animation: 'none',
    },
  }),

  // ==========================================================
  // ÍCONE DO DIAGRAMA
  // ==========================================================

  systemTitleIcon: (theme: Theme): SystemStyleObject<Theme> => ({
    width: 52,
    height: 52,
    flexShrink: 0,

    borderRadius: '16px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    bgcolor: alpha(
      theme.palette.primary.main,
      0.1,
    ),

    border: `1px solid ${alpha(
      theme.palette.primary.main,
      0.2,
    )}`,

    color: 'primary.main',
  }),

  // ==========================================================
  // LINHA DE CONEXÃO
  // ==========================================================

  systemLine: (theme: Theme): SystemStyleObject<Theme> => ({
    position: 'absolute',

    top: 65,
    bottom: 65,

    left: {
      xs: 50,
      sm: 54,
    },

    width: 2,

    borderRadius: '999px',

    background: `
      linear-gradient(
        180deg,
        ${theme.palette.primary.main},
        ${theme.palette.info.main}
      )
    `,

    opacity: 0.45,
    zIndex: 0,

    pointerEvents: 'none',
  }),

  // ==========================================================
  // NÓS DO DIAGRAMA
  // ==========================================================

  systemNode: (accent: string) =>
    (theme: Theme): SystemStyleObject<Theme> => {
      const isDark = theme.palette.mode === 'dark';

      return {
        position: 'relative',
        zIndex: 1,

        display: 'flex',
        alignItems: 'center',

        gap: {
          xs: 1.5,
          sm: 2,
        },

        minHeight: 92,

        px: {
          xs: 1.5,
          sm: 2,
        },

        py: 1.6,

        borderRadius: '15px',

        border: '1px solid',
        borderColor: 'divider',

        bgcolor: alpha(
          theme.palette.background.paper,
          isDark ? 0.85 : 0.93,
        ),

        backdropFilter: 'blur(12px)',

        boxShadow: isDark
          ? '0 8px 25px rgba(0,0,0,0.12)'
          : '0 8px 25px rgba(20,30,45,0.035)',

        transition:
          'transform 280ms ease, border-color 280ms ease, box-shadow 280ms ease',

        '&:hover': {
          transform: 'translateX(6px)',
          borderColor: accent,

          boxShadow: `0 12px 35px ${alpha(
            accent,
            0.12,
          )}`,
        },

        '@media (prefers-reduced-motion: reduce)': {
          transition: 'none',

          '&:hover': {
            transform: 'none',
          },
        },
      };
    },

  systemNodeIcon: (accent: string): SystemStyleObject<Theme> => ({
    flexShrink: 0,

    width: {
      xs: 43,
      sm: 49,
    },

    height: {
      xs: 43,
      sm: 49,
    },

    borderRadius: '13px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    color: accent,

    bgcolor: alpha(accent, 0.11),

    border: `1px solid ${alpha(
      accent,
      0.18,
    )}`,
  }),

  // ==========================================================
  // RODAPÉ DO DIAGRAMA
  // ==========================================================

  systemFooter: {
    mt: 2,

    px: {
      xs: 2.5,
      sm: 3.5,
    },

    py: 2.5,

    borderTop: '1px solid',
    borderColor: 'divider',
  } satisfies SystemStyleObject<Theme>,

  // ==========================================================
  // RODAPÉ PRINCIPAL
  // ==========================================================

  footerContainer: {
    position: 'relative',
    zIndex: 1,

    mt: {
      xs: 7,
      md: 9,
    },

    pt: 3,

    borderTop: '1px solid',
    borderColor: 'divider',
  } satisfies SystemStyleObject<Theme>,

  footerLine: {
    width: 24,
    height: 1,
    bgcolor: 'primary.main',
  } satisfies SystemStyleObject<Theme>,

  scrollIcon: {
    fontSize: 15,
    color: 'primary.main',

    animation: `${scroll} 2s ease-in-out infinite`,

    '@media (prefers-reduced-motion: reduce)': {
      animation: 'none',
    },
  } satisfies SystemStyleObject<Theme>,
} as const;
