import { alpha } from '@mui/material/styles';

import type { Theme } from '@mui/material/styles';

import type {
  SxProps,
  SystemStyleObject,
} from '@mui/system';

export const galleryStyles = {
 
  section: (theme: Theme): SystemStyleObject<Theme> => ({
    position: 'relative',
    isolation: 'isolate',
    overflow: 'hidden',
    py: {
      xs: 7,
      md: 10,
    },
    bgcolor: 'background.default',
    backgroundImage: `
      radial-gradient(
        ellipse at 10% 10%,
        ${alpha(theme.palette.primary.main, 0.1)},
        transparent 45%
      ),
      radial-gradient(
        ellipse at 90% 85%,
        ${alpha(theme.palette.info.main, 0.09)},
        transparent 50%
      )
    `,
  }),

  // ============================================================
  // ILUMINAÇÃO DECORATIVA
  // ============================================================

  glow: (theme: Theme): SystemStyleObject<Theme> => ({
    position: 'absolute',
    top: -120,
    right: -150,

    width: 450,
    height: 450,

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
  }),

  // ============================================================
  // CABEÇALHO
  // ============================================================

  headerIcon: (theme: Theme): SystemStyleObject<Theme> => ({
    width: 40,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '13px',
    color: 'primary.main',
    bgcolor: alpha(theme.palette.primary.main, 0.1),
    border: `1px solid ${alpha(
      theme.palette.primary.main,
      0.2,
    )}`,
  }),
  heading: {
    fontWeight: 800,
    color: 'text.primary',
    letterSpacing: '-0.05em',
    lineHeight: 1.15,
    fontSize: {
      xs: '2rem',
      sm: '2.7rem',
      md: '3.3rem',
    },
  } satisfies SxProps<Theme>,

  headingGradient: {
    background:
      'linear-gradient(110deg, #B7ED73, #71DCCA, #86A8FF)',

    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  } satisfies SxProps<Theme>,

  // ============================================================
  // CHIP CONTADOR
  // ============================================================

  countChip: (theme: Theme): SystemStyleObject<Theme> => ({
    height: 42,
    borderRadius: '12px',
    fontWeight: 800,
    letterSpacing: '0.06em',
    color: 'text.primary',
    borderColor: alpha(
      theme.palette.primary.main,
      0.3,
    ),
    bgcolor: alpha(
      theme.palette.primary.main,
      0.07,
    ),
    flexShrink: 0,
    '& .MuiChip-icon': {
      color: 'primary.main',
    },
  }),

  // ============================================================
  // GRID DE IMAGENS
  // ============================================================

  grid: (single: boolean): SystemStyleObject<Theme> => ({
    display: 'grid',
    gridTemplateColumns: single
      ? 'minmax(0, 1fr)'
      : {
          xs: 'minmax(0, 1fr)',
          sm: 'repeat(2, minmax(0, 1fr))',
        },
    gap: {
      xs: 2.5,
      md: 3,
    },
    listStyle: 'none',
    p: 0,
    m: 0,
  }),

  // ============================================================
  // CARD DE IMAGEM
  // ============================================================

  card: (theme: Theme): SystemStyleObject<Theme> => ({
    position: 'relative',
    display: 'block',
    width: '100%',
    p: 0,
    m: 0,
    textAlign: 'left',
    cursor: 'pointer',
    appearance: 'none',
    overflow: 'hidden',
    borderRadius: '24px',
    border: '1px solid',
    borderColor: 'divider',
    bgcolor: 'background.paper',
    color: 'text.primary',
    boxShadow:
      theme.palette.mode === 'dark'
        ? '0 14px 45px rgba(0,0,0,0.17)'
        : '0 14px 45px rgba(20,35,50,0.07)',
    transition: `
      transform 300ms ease,
      border-color 300ms ease,
      box-shadow 300ms ease
    `,
    '&:hover': {
      transform: 'translateY(-6px)',
      borderColor: alpha(
        theme.palette.primary.main,
        0.6,
      ),
      boxShadow: `0 24px 60px ${alpha(
        theme.palette.primary.main,
        0.13,
      )}`,
    },
    '&:hover img': {
      transform: 'scale(1.06)',
    },
    '&:hover [data-zoom-icon]': {
      transform: 'scale(1.1)',
      bgcolor: 'primary.main',
      color: 'primary.contrastText',
    },
    '&:focus-visible': {
      outline: `3px solid ${theme.palette.primary.main}`,
      outlineOffset: 4,
    },
    '@media (prefers-reduced-motion: reduce)': {
      transition: 'none',
      '&:hover': {
        transform: 'none',
      },
      '&:hover img': {
        transform: 'none',
      },
      '&:hover [data-zoom-icon]': {
        transform: 'none',
      },
    },
  }),

  // ============================================================
  // FUNDO DO CARD
  // ============================================================

  imageBackground: (
    theme: Theme,
  ): SystemStyleObject<Theme> => ({
    position: 'relative',
    overflow: 'hidden',
    p: {
      xs: 2,
      md: 3,
    },
    bgcolor:
      theme.palette.mode === 'dark'
        ? '#111821'
        : '#E8EEF3',
    backgroundImage: `
      radial-gradient(
        ellipse at 15% 10%,
        ${alpha(theme.palette.primary.main, 0.25)},
        transparent 60%
      ),
      radial-gradient(
        ellipse at 90% 90%,
        ${alpha(theme.palette.info.main, 0.2)},
        transparent 60%
      )
    `,
  }),

  // ============================================================
  // MOLDURA DA IMAGEM
  // ============================================================

  imageFrame: (
    theme: Theme,
  ): SystemStyleObject<Theme> => ({
    position: 'relative',
    width: '100%',
    aspectRatio: '16 / 10',
    overflow: 'hidden',
    borderRadius: '18px',
    bgcolor: '#111827',
    border: `1px solid ${alpha(
      theme.palette.primary.main,
      0.3,
    )}`,
    boxShadow: `
      0 18px 40px rgba(0,0,0,0.25),
      0 0 28px ${alpha(
        theme.palette.primary.main,
        0.12,
      )}
    `,
    outline: `1px solid ${alpha(
      theme.palette.primary.main,
      0.25,
    )}`,
    outlineOffset: -1,
    '& img': {
      transition:
        'transform 450ms cubic-bezier(.22,1,.36,1)',
    },
    '@media (prefers-reduced-motion: reduce)': {
      '& img': {
        transition: 'none',
      },
    },
  }),

  // ============================================================
  // OVERLAY DA IMAGEM
  // ============================================================

  imageOverlay: (
    theme: Theme,
  ): SystemStyleObject<Theme> => ({
    position: 'absolute',
    inset: 0,
    background: `
      linear-gradient(
        135deg,
        ${alpha(theme.palette.primary.main, 0.1)},
        transparent 48%
      ),
      linear-gradient(
        180deg,
        transparent 65%,
        rgba(0,0,0,0.36)
      )
    `,
    pointerEvents: 'none',
  }),

  // ============================================================
  // ÍCONE DE ZOOM
  // ============================================================

  zoomIcon: {
    position: 'absolute',
    top: 14,
    right: 14,
    width: 40,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '12px',
    bgcolor: 'rgba(15,20,30,0.78)',
    color: '#FFFFFF',
    backdropFilter: 'blur(12px)',
    border:
      '1px solid rgba(255,255,255,0.15)',
    transition: `
      transform 250ms ease,
      background-color 250ms ease
    `,
    '@media (prefers-reduced-motion: reduce)': {
      transition: 'none',
    },
  } satisfies SxProps<Theme>,

  // ============================================================
  // LIGHTBOX — CONTAINER DO MODAL
  // ============================================================

  lightboxPaper: (
    theme: Theme,
  ): SystemStyleObject<Theme> => ({
    position: 'relative',
    overflow: 'hidden',
    borderRadius: {
      xs: '14px',
      sm: '22px',
    },
    bgcolor: 'background.paper',
    color: 'text.primary',
    border: '1px solid',
    borderColor: alpha(
      theme.palette.primary.main,
      0.25,
    ),
    backgroundImage: `
      radial-gradient(
        ellipse at 50% 0%,
        ${alpha(theme.palette.primary.main, 0.08)},
        transparent 65%
      )
    `,
    boxShadow:
      '0 35px 100px rgba(0,0,0,0.35)',
    m: {
      xs: 1,
      sm: 2,
    },
    width: {
      xs: 'calc(100% - 16px)',
      sm: 'calc(100% - 32px)',
    },
    maxHeight: 'calc(100dvh - 24px)',
  }),

  // ============================================================
  // LIGHTBOX — BACKDROP
  // ============================================================

  lightboxBackdrop: {
    bgcolor: 'rgba(4,9,17,0.82)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
  } satisfies SxProps<Theme>,

  // ============================================================
  // LIGHTBOX — IMAGEM AMPLIADA
  // ============================================================

  lightboxImage: (
    theme: Theme,
  ): SystemStyleObject<Theme> => ({
    position: 'relative',
    width: '100%',
    height: {
      xs: '52dvh',
      sm: '65dvh',
    },
    maxHeight: 760,
    minHeight: 200,
    bgcolor:
      theme.palette.mode === 'dark'
        ? '#080D14'
        : '#E6EBF1',
    backgroundImage: `
      radial-gradient(
        ellipse at center,
        ${alpha(theme.palette.primary.main, 0.08)},
        transparent 70%
      )
    `,
  }),

  // ============================================================
  // LIGHTBOX — BOTÃO FECHAR
  // ============================================================

  closeButton: (
    theme: Theme,
  ): SystemStyleObject<Theme> => ({
    flexShrink: 0,
    width: 42,
    height: 42,
    borderRadius: '12px',
    color: 'text.primary',
    bgcolor: alpha(
      theme.palette.text.primary,
      0.06,
    ),
    transition: `
      background-color 200ms ease,
      transform 200ms ease
    `,
    '&:hover': {
      bgcolor: alpha(
        theme.palette.error.main,
        0.13,
      ),
      transform: 'rotate(90deg)',
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

  // ============================================================
  // LIGHTBOX — BOTÕES DE NAVEGAÇÃO
  // ============================================================

  navigationButton: (
    theme: Theme,
  ): SystemStyleObject<Theme> => ({
    width: 45,
    height: 45,
    borderRadius: '12px',
    color: 'text.primary',
    border: '1px solid',
    borderColor: 'divider',
    transition: `
      background-color 200ms ease,
      border-color 200ms ease
    `,
    '&:hover': {
      borderColor: 'primary.main',
      bgcolor: alpha(
        theme.palette.primary.main,
        0.1,
      ),
    },
    '&:focus-visible': {
      outline: `3px solid ${theme.palette.primary.main}`,
      outlineOffset: 3,
    },
    '@media (prefers-reduced-motion: reduce)': {
      transition: 'none',
    },
  }),
} as const;
