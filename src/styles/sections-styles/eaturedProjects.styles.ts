import { alpha } from '@mui/material/styles';

import type { Theme } from '@mui/material/styles';
import type { SystemStyleObject } from '@mui/system';

export const featuredProjectsStyles = {
  // ============================================================
  // SEÇÃO PRINCIPAL
  // ============================================================

  section: (theme: Theme) => ({
    position: 'relative',
    isolation: 'isolate',
    overflow: 'hidden',

    py: {
      xs: 7,
      sm: 8,
      md: 11,
    },

    bgcolor: 'background.default',

    backgroundImage: `
      radial-gradient(
        ellipse at 8% 12%,
        ${alpha(theme.palette.primary.main, 0.11)},
        transparent 43%
      ),
      radial-gradient(
        ellipse at 92% 55%,
        ${alpha(theme.palette.info.main, 0.09)},
        transparent 45%
      ),
      radial-gradient(
        ellipse at 45% 95%,
        ${alpha(theme.palette.secondary.main, 0.07)},
        transparent 50%
      )
    `,
  } satisfies SystemStyleObject<Theme>),

  container: {
    position: 'relative',
    zIndex: 1,
  } satisfies SystemStyleObject<Theme>,

  // ============================================================
  // ELEMENTOS DECORATIVOS
  // ============================================================

  topGlow: (theme: Theme) => ({
    position: 'absolute',
    top: '-150px',
    right: '-120px',

    width: 480,
    height: 480,

    borderRadius: '50%',

    background: `
      radial-gradient(
        circle,
        ${alpha(theme.palette.primary.main, 0.14)},
        transparent 70%
      )
    `,

    filter: 'blur(70px)',
    pointerEvents: 'none',
    zIndex: -1,
  } satisfies SystemStyleObject<Theme>),

  bottomGlow: (theme: Theme) => ({
    position: 'absolute',
    bottom: '-180px',
    left: '-130px',

    width: 500,
    height: 500,

    borderRadius: '50%',

    background: `
      radial-gradient(
        circle,
        ${alpha(theme.palette.info.main, 0.12)},
        transparent 70%
      )
    `,

    filter: 'blur(80px)',
    pointerEvents: 'none',
    zIndex: -1,
  } satisfies SystemStyleObject<Theme>),

  backgroundGrid: (theme: Theme) => ({
    position: 'absolute',
    inset: 0,

    opacity:
      theme.palette.mode === 'dark'
        ? 0.1
        : 0.06,

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

    backgroundSize: '80px 80px',

    maskImage:
      'linear-gradient(to bottom, transparent, black 35%, transparent)',

    WebkitMaskImage:
      'linear-gradient(to bottom, transparent, black 35%, transparent)',

    pointerEvents: 'none',
    zIndex: -1,
  } satisfies SystemStyleObject<Theme>),

  // ============================================================
  // CABEÇALHO
  // ============================================================

  header: {
    mb: {
      xs: 5,
      md: 7,
    },
  } satisfies SystemStyleObject<Theme>,

  headerIcon: (theme: Theme) => ({
    width: 40,
    height: 40,

    borderRadius: '13px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    color: 'primary.main',

    bgcolor: alpha(
      theme.palette.primary.main,
      0.11,
    ),

    border: `1px solid ${alpha(
      theme.palette.primary.main,
      0.2,
    )}`,
  } satisfies SystemStyleObject<Theme>),

  eyebrow: {
    color: 'primary.main',
    fontWeight: 800,
    letterSpacing: '0.18em',

    fontSize: {
      xs: '0.68rem',
      sm: '0.75rem',
    },
  } satisfies SystemStyleObject<Theme>,

  heading: {
    fontWeight: 800,
    color: 'text.primary',

    letterSpacing: '-0.055em',
    lineHeight: 1.12,

    fontSize: {
      xs: '2.35rem',
      sm: '3.1rem',
      md: '3.8rem',
      lg: '4.1rem',
    },
  } satisfies SystemStyleObject<Theme>,

  headingGradient: {
    background:
      'linear-gradient(110deg, #B7ED73 0%, #71DCCA 50%, #86A8FF 100%)',

    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  } satisfies SystemStyleObject<Theme>,

  projectCount: (theme: Theme) => ({
    height: 43,
    px: 1,

    borderRadius: '12px',

    fontWeight: 700,
    color: 'text.primary',

    borderColor: alpha(
      theme.palette.primary.main,
      0.28,
    ),

    bgcolor: alpha(
      theme.palette.primary.main,
      0.07,
    ),

    '& .MuiChip-label': {
      px: 1.2,
    },

    '& .MuiChip-icon': {
      fontSize: 18,
      color: 'primary.main',
    },
  } satisfies SystemStyleObject<Theme>),

  description: {
    color: 'text.secondary',
    maxWidth: 700,
    lineHeight: 1.9,

    fontSize: {
      xs: '1rem',
      md: '1.07rem',
    },
  } satisfies SystemStyleObject<Theme>,

  // ============================================================
  // CATEGORIAS
  // ============================================================

  category: (theme: Theme) => ({
    display: 'flex',
    alignItems: 'center',
    gap: 1,

    px: 1.5,
    py: 0.85,

    borderRadius: '9px',

    border: '1px solid',
    borderColor: 'divider',

    bgcolor: alpha(
      theme.palette.background.paper,
      0.6,
    ),

    transition:
      'border-color 220ms ease, transform 220ms ease',

    '&:hover': {
      borderColor: 'primary.main',
      transform: 'translateY(-2px)',
    },

    '@media (prefers-reduced-motion: reduce)': {
      transition: 'none',

      '&:hover': {
        transform: 'none',
      },
    },
  } satisfies SystemStyleObject<Theme>),

  categoryDot: {
    width: 6,
    height: 6,

    borderRadius: '50%',
    bgcolor: 'primary.main',
  } satisfies SystemStyleObject<Theme>,

  categoryText: {
    fontWeight: 700,
    color: 'text.secondary',
    letterSpacing: '0.025em',
  } satisfies SystemStyleObject<Theme>,

  // ============================================================
  // GRID DE PROJETOS
  // ============================================================

  projectsGrid: {
    display: 'grid',

    gridTemplateColumns: {
      xs: 'minmax(0, 1fr)',
      sm: 'repeat(2, minmax(0, 1fr))',
      lg: 'repeat(3, minmax(0, 1fr))',
    },

    columnGap: {
      xs: 2.5,
      md: 3,
    },

    rowGap: {
      xs: 2,
      md: 2.5,
    },

    alignItems: 'stretch',

    listStyle: 'none',
    p: 0,
    m: 0,
  } satisfies SystemStyleObject<Theme>,

  projectItem: {
    minWidth: 0,
    height: '100%',
  } satisfies SystemStyleObject<Theme>,

  projectWrapper: (theme: Theme) => ({
    position: 'relative',
    isolation: 'isolate',

    height: '100%',
    minWidth: 0,

    borderRadius: '24px',

    transition:
      'transform 350ms cubic-bezier(.22,1,.36,1), box-shadow 350ms ease',

    '&::before': {
      content: '""',

      position: 'absolute',
      inset: -1,

      borderRadius: 'inherit',

      background: `linear-gradient(
        135deg,
        ${alpha(theme.palette.primary.main, 0.5)},
        ${alpha(theme.palette.info.main, 0.3)},
        transparent 85%
      )`,

      opacity: 0,

      transition: 'opacity 350ms ease',

      pointerEvents: 'none',
      zIndex: -1,
    },

    '&:hover': {
      transform: 'none',

      boxShadow:
        theme.palette.mode === 'dark'
          ? '0 28px 65px rgba(0,0,0,0.3)'
          : '0 28px 65px rgba(20,35,50,0.13)',
    },

    '&:hover::before': {
      opacity: 1,
    },

    '&:focus-within': {
      outline: `2px solid ${theme.palette.primary.main}`,
      outlineOffset: 4,
    },

    '& > *': {
      minWidth: 0,
    },

    '@media (prefers-reduced-motion: reduce)': {
      transition: 'none',

      '&::before': {
        transition: 'none',
      },

      '&:hover': {
        transform: 'none',
      },
    },
  } satisfies SystemStyleObject<Theme>),

  // ============================================================
  // RODAPÉ
  // ============================================================

  footer: (theme: Theme) => ({
    mt: {
      xs: 6,
      md: 8,
    },

    p: {
      xs: 2.5,
      sm: 3,
    },

    borderRadius: '16px',

    border: `1px solid ${alpha(
      theme.palette.primary.main,
      0.16,
    )}`,

    bgcolor: alpha(
      theme.palette.background.paper,
      0.65,
    ),

    backgroundImage: `
      linear-gradient(
        120deg,
        ${alpha(theme.palette.primary.main, 0.045)},
        transparent 70%
      )
    `,
  } satisfies SystemStyleObject<Theme>),

  footerDescription: {
    color: 'text.secondary',
    lineHeight: 1.8,
    fontSize: '0.85rem',
  } satisfies SystemStyleObject<Theme>,

  footerLabel: {
    color: 'primary.main',
    fontWeight: 800,
    letterSpacing: '0.11em',
  } satisfies SystemStyleObject<Theme>,
} as const;