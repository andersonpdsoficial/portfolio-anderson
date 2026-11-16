import { alpha } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';
import type { SystemStyleObject } from '@mui/system';

const cardHover = {
  transition:
    'transform 350ms cubic-bezier(.22,1,.36,1), border-color 350ms ease, box-shadow 350ms ease',

  '&:hover': {
    transform: 'translateY(-6px)',
    borderColor: 'primary.main',
    boxShadow: '0 20px 55px rgba(0,0,0,0.13)',
  },

  '@media (prefers-reduced-motion: reduce)': {
    transition: 'none',
    '&:hover': {
      transform: 'none',
    },
  },
} satisfies SystemStyleObject<Theme>;

export const experienceStyles = {
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
        ellipse at 5% 15%,
        ${alpha(theme.palette.primary.main, 0.1)},
        transparent 45%
      ),
      radial-gradient(
        ellipse at 95% 65%,
        ${alpha(theme.palette.info.main, 0.08)},
        transparent 45%
      )
    `,
  } satisfies SystemStyleObject<Theme>),

  decorativeGlow: (theme: Theme) => ({
    position: 'absolute',
    top: '10%',
    left: '-180px',
    width: 420,
    height: 420,
    borderRadius: '50%',

    background: `radial-gradient(
      circle,
      ${alpha(theme.palette.primary.main, 0.11)},
      transparent 70%
    )`,

    filter: 'blur(65px)',
    pointerEvents: 'none',
    zIndex: -1,
  } satisfies SystemStyleObject<Theme>),

  layout: {
    display: 'grid',

    gridTemplateColumns: {
      xs: 'minmax(0, 1fr)',
      md: 'minmax(0, 0.85fr) minmax(0, 1.15fr)',
    },

    gap: {
      xs: 4,
      md: 4,
      lg: 6,
    },

    alignItems: 'start',
  } satisfies SystemStyleObject<Theme>,

  leftColumn: {
    minWidth: 0,
    position: 'relative',
  } satisfies SystemStyleObject<Theme>,

  introIcon: (theme: Theme) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: 38,
    height: 38,
    borderRadius: '12px',

    color: 'primary.main',

    bgcolor: alpha(theme.palette.primary.main, 0.1),

    border: `1px solid ${alpha(
      theme.palette.primary.main,
      0.2,
    )}`,
  } satisfies SystemStyleObject<Theme>),

  introEyebrow: {
    fontWeight: 800,
    letterSpacing: '0.18em',
    color: 'primary.main',
  } satisfies SystemStyleObject<Theme>,

  introTitle: {
    color: 'text.primary',
    fontWeight: 800,
    letterSpacing: '-0.055em',
    lineHeight: 1.12,

    fontSize: {
      xs: '2.35rem',
      sm: '3rem',
      md: '3.3rem',
      lg: '3.65rem',
    },
  } satisfies SystemStyleObject<Theme>,

  titleGradient: {
    display: 'inline',

    background:
      'linear-gradient(110deg, #A7DF69, #61CDB8, #86A8FF)',

    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  } satisfies SystemStyleObject<Theme>,

  introDescription: {
    color: 'text.secondary',
    lineHeight: 1.9,
    maxWidth: 470,

    fontSize: {
      xs: '1rem',
      md: '1.06rem',
    },
  } satisfies SystemStyleObject<Theme>,

  educationPaper: (theme: Theme) => ({
    position: 'relative',
    overflow: 'hidden',

    mt: {
      xs: 5,
      md: 7,
    },

    p: {
      xs: 3,
      sm: 3.5,
    },

    borderRadius: '22px',

    bgcolor: 'background.paper',

    border: '1px solid',
    borderColor: 'divider',

    backgroundImage: `
      radial-gradient(
        ellipse at 100% 0%,
        ${alpha(theme.palette.primary.main, 0.09)},
        transparent 65%
      )
    `,

    boxShadow:
      theme.palette.mode === 'dark'
        ? '0 15px 45px rgba(0,0,0,0.16)'
        : '0 15px 45px rgba(20,30,45,0.045)',

    ...cardHover,
  } satisfies SystemStyleObject<Theme>),

  panelIcon: (theme: Theme) => ({
    width: 43,
    height: 43,
    borderRadius: '13px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    color: 'primary.main',

    bgcolor: alpha(theme.palette.primary.main, 0.1),
  } satisfies SystemStyleObject<Theme>),

  panelTitle: {
    fontSize: '0.88rem',
    fontWeight: 800,
    letterSpacing: '0.085em',
    color: 'text.primary',
  } satisfies SystemStyleObject<Theme>,

  educationItem: {
    position: 'relative',

    pl: 2.5,
    py: 0.5,

    borderLeft: '2px solid',
    borderColor: 'primary.main',

    transition: 'padding-left 250ms ease',

    '&:hover': {
      pl: 3,
    },

    '@media (prefers-reduced-motion: reduce)': {
      transition: 'none',
      '&:hover': {
        pl: 2.5,
      },
    },
  } satisfies SystemStyleObject<Theme>,

  educationTitle: {
    fontSize: '0.98rem',
    fontWeight: 750,
    color: 'text.primary',
    lineHeight: 1.5,
  } satisfies SystemStyleObject<Theme>,

  educationStatus: (theme: Theme) => ({
    height: 26,
    fontWeight: 700,
    fontSize: '0.7rem',
    color: 'success.main',

    bgcolor: alpha(theme.palette.success.main, 0.09),

    '& .MuiChip-icon': {
      color: 'success.main',
    },
  } satisfies SystemStyleObject<Theme>),

  coursesPaper: (theme: Theme) => ({
    mt: 2.5,

    p: {
      xs: 2.5,
      sm: 3,
    },

    borderRadius: '20px',

    bgcolor: 'background.paper',

    border: '1px solid',
    borderColor: 'divider',

    backgroundImage: `
      radial-gradient(
        ellipse at 100% 0%,
        ${alpha(theme.palette.info.main, 0.1)},
        transparent 65%
      )
    `,

    boxShadow:
      theme.palette.mode === 'dark'
        ? '0 14px 36px rgba(0,0,0,0.12)'
        : '0 14px 36px rgba(20,30,45,0.045)',
  } satisfies SystemStyleObject<Theme>),

  coursesIcon: (theme: Theme) => ({
    width: 42,
    height: 42,
    borderRadius: '12px',
    flexShrink: 0,

    display: 'grid',
    placeItems: 'center',

    color: 'primary.main',
    bgcolor: alpha(theme.palette.primary.main, 0.1),
  } satisfies SystemStyleObject<Theme>),

  coursesButton: {
    minHeight: 44,
    borderRadius: '12px',
    fontWeight: 750,
    textTransform: 'none',

    '&:focus-visible': {
      outline: '2px solid',
      outlineOffset: 3,
    },
  } satisfies SystemStyleObject<Theme>,

  timeline: {
    position: 'relative',
    minWidth: 0,

    '&::before': {
      content: '""',
      position: 'absolute',

      left: '15px',
      top: 27,
      bottom: 28,

      width: '2px',

      background:
        'linear-gradient(180deg, #A7DF69 0%, #69CCB9 45%, #8594E8 80%, transparent 100%)',

      opacity: 0.75,
      borderRadius: '999px',
    },
  } satisfies SystemStyleObject<Theme>,

  timelineItem: (isLast: boolean) => ({
    position: 'relative',

    pl: {
      xs: 5,
      sm: 6,
    },

    mb: isLast ? 0 : 3,

    '&::before': {
      content: '""',
      position: 'absolute',

      left: '8px',
      top: '28px',

      width: 16,
      height: 16,

      borderRadius: '50%',

      backgroundColor: 'primary.main',

      border: '4px solid',
      borderColor: 'background.default',

      boxSizing: 'border-box',

      boxShadow:
        '0 0 0 3px rgba(159,234,115,0.18)',

      zIndex: 2,
    },
  } satisfies SystemStyleObject<Theme>),

  experiencePaper: (theme: Theme) => ({
    position: 'relative',
    overflow: 'hidden',

    p: {
      xs: 2.5,
      sm: 3,
      md: 3.5,
    },

    borderRadius: '22px',

    bgcolor: 'background.paper',

    border: '1px solid',
    borderColor: 'divider',

    backgroundImage: `
      radial-gradient(
        ellipse at 100% 0%,
        ${alpha(theme.palette.primary.main, 0.07)},
        transparent 55%
      )
    `,

    boxShadow:
      theme.palette.mode === 'dark'
        ? '0 12px 40px rgba(0,0,0,0.12)'
        : '0 12px 40px rgba(20,30,45,0.045)',

    ...cardHover,
  } satisfies SystemStyleObject<Theme>),

  experienceRole: {
    color: 'text.primary',
    fontWeight: 800,
    lineHeight: 1.35,
    letterSpacing: '-0.025em',

    fontSize: {
      xs: '1.15rem',
      sm: '1.3rem',
    },
  } satisfies SystemStyleObject<Theme>,

  experienceOrganization: {
    color: 'primary.main',
    fontSize: '0.95rem',
    fontWeight: 700,
    lineHeight: 1.5,
  } satisfies SystemStyleObject<Theme>,

  experienceDescription: {
    color: 'text.secondary',
    lineHeight: 1.85,
    fontSize: '0.91rem',
  } satisfies SystemStyleObject<Theme>,

  highlightsList: {
    listStyle: 'none',
    m: 0,
    p: 0,

    display: 'grid',
    gap: 1.35,
  } satisfies SystemStyleObject<Theme>,

  highlightsItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 1.3,
  } satisfies SystemStyleObject<Theme>,

  technologiesSection: {
    pt: 2.3,

    borderTop: '1px solid',
    borderColor: 'divider',
  } satisfies SystemStyleObject<Theme>,

  technologyChip: (theme: Theme) => ({
    height: 29,
    borderRadius: '8px',

    fontWeight: 600,
    fontSize: '0.72rem',

    color: 'text.secondary',

    borderColor: theme.palette.divider,

    bgcolor: alpha(theme.palette.primary.main, 0.035),

    transition:
      'background-color 200ms ease, border-color 200ms ease, transform 200ms ease',

    '&:hover': {
      color: 'text.primary',
      borderColor: 'primary.main',

      bgcolor: alpha(theme.palette.primary.main, 0.1),

      transform: 'translateY(-2px)',
    },

    '@media (prefers-reduced-motion: reduce)': {
      transition: 'none',
      '&:hover': {
        transform: 'none',
      },
    },
  } satisfies SystemStyleObject<Theme>),
} as const;