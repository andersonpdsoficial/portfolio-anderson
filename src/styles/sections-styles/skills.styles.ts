import { SkillAccent } from '@/types/sections-types/about/skills.types';
import { alpha } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';
import type { SystemStyleObject } from '@mui/system';

const getAccentColor = (
  theme: Theme,
  accent: SkillAccent,
): string => theme.palette[accent].main;

export const skillsStyles = {
  section: (theme: Theme): SystemStyleObject<Theme> => ({
    position: 'relative',
    isolation: 'isolate',
    overflow: 'hidden',
    py: { xs: 7, sm: 8, md: 11 },
    bgcolor: 'background.default',
    backgroundImage: `
      radial-gradient(
        ellipse at 8% 15%,
        ${alpha(theme.palette.primary.main, 0.11)},
        transparent 45%
      ),
      radial-gradient(
        ellipse at 92% 35%,
        ${alpha(theme.palette.info.main, 0.09)},
        transparent 47%
      ),
      radial-gradient(
        ellipse at 50% 100%,
        ${alpha(theme.palette.secondary.main, 0.07)},
        transparent 55%
      )
    `,
  }),

  topGlow: (theme: Theme): SystemStyleObject<Theme> => ({
    position: 'absolute',
    top: '-180px',
    right: '-150px',
    width: { xs: 340, md: 580 },
    height: { xs: 340, md: 580 },
    borderRadius: '50%',
    background: `radial-gradient(
      circle,
      ${alpha(theme.palette.primary.main, 0.16)},
      transparent 70%
    )`,
    filter: 'blur(75px)',
    pointerEvents: 'none',
    zIndex: -1,
  }),

  bottomGlow: (theme: Theme): SystemStyleObject<Theme> => ({
    position: 'absolute',
    bottom: '-180px',
    left: '-160px',
    width: { xs: 340, md: 540 },
    height: { xs: 340, md: 540 },
    borderRadius: '50%',
    background: `radial-gradient(
      circle,
      ${alpha(theme.palette.info.main, 0.13)},
      transparent 70%
    )`,
    filter: 'blur(80px)',
    pointerEvents: 'none',
    zIndex: -1,
  }),

  backgroundGrid: (theme: Theme): SystemStyleObject<Theme> => ({
    position: 'absolute',
    inset: 0,
    opacity: theme.palette.mode === 'dark' ? 0.065 : 0.04,
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
    backgroundSize: '76px 76px',
    maskImage:
      'linear-gradient(to bottom, transparent, black 40%, transparent)',
    WebkitMaskImage:
      'linear-gradient(to bottom, transparent, black 40%, transparent)',
    pointerEvents: 'none',
    zIndex: -1,
  }),

  container: {
    position: 'relative',
    zIndex: 1,
  } satisfies SystemStyleObject<Theme>,

  header: {
    mb: { xs: 5, md: 7 },
  } satisfies SystemStyleObject<Theme>,

  headerIcon: (theme: Theme): SystemStyleObject<Theme> => ({
    width: 42,
    height: 42,
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

  eyebrow: {
    color: 'primary.main',
    fontWeight: 800,
    letterSpacing: '0.18em',
    fontSize: { xs: '0.68rem', sm: '0.75rem' },
  } satisfies SystemStyleObject<Theme>,

  title: {
    maxWidth: 880,
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

  gradientText: {
    display: 'inline',
    background:
      'linear-gradient(110deg, #B7ED73 0%, #71DCCA 50%, #86A8FF 100%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  } satisfies SystemStyleObject<Theme>,

  description: {
    color: 'text.secondary',
    maxWidth: 760,
    lineHeight: 1.9,
    fontSize: { xs: '1rem', md: '1.07rem' },
  } satisfies SystemStyleObject<Theme>,

  indicator: (
    accent: 'primary' | 'info',
  ) => (theme: Theme): SystemStyleObject<Theme> => {
    const color = theme.palette[accent].main;

    return {
      minHeight: 40,
      height: 'auto',
      py: 0.5,
      px: 0.5,
      borderRadius: '11px',
      fontWeight: 700,
      color: 'text.primary',
      borderColor: alpha(color, 0.25),
      bgcolor: alpha(color, 0.07),
      '& .MuiChip-icon': {
        color,
      },
    };
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: {
      xs: 'minmax(0, 1fr)',
      sm: 'repeat(2, minmax(0, 1fr))',
    },
    gap: { xs: 2.5, md: 3 },
    alignItems: 'stretch',
  } satisfies SystemStyleObject<Theme>,

  card: (
    accent: SkillAccent,
  ) => (theme: Theme): SystemStyleObject<Theme> => {
    const color = getAccentColor(theme, accent);
    const isDark = theme.palette.mode === 'dark';

    return {
      position: 'relative',
      isolation: 'isolate',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0,
      height: '100%',
      p: { xs: 2.5, sm: 3, md: 3.25 },
      borderRadius: '23px',
      bgcolor: 'background.paper',
      border: '1px solid',
      borderColor: 'divider',
      backgroundImage: `
        radial-gradient(
          ellipse at 100% 0%,
          ${alpha(color, 0.11)},
          transparent 60%
        ),
        linear-gradient(
          145deg,
          ${alpha(color, 0.035)},
          transparent 75%
        )
      `,
      boxShadow: isDark
        ? '0 15px 45px rgba(0,0,0,0.13)'
        : '0 15px 45px rgba(20,30,45,0.045)',
      transition:
        'transform 350ms cubic-bezier(.22,1,.36,1), border-color 350ms ease, box-shadow 350ms ease',

      '&:hover': {
        transform: 'translateY(-8px)',
        borderColor: alpha(color, 0.55),
        boxShadow: `0 28px 65px ${alpha(
          color,
          isDark ? 0.1 : 0.13,
        )}`,
      },

      '&:hover .skill-arrow': {
        transform: 'translate(4px, -4px)',
        color,
      },

      '&:hover .skill-icon': {
        transform: 'scale(1.08) rotate(-4deg)',
        boxShadow: `0 12px 30px ${alpha(color, 0.15)}`,
      },

      '@media (prefers-reduced-motion: reduce)': {
        transition: 'none',
        '&:hover': {
          transform: 'none',
        },
        '&:hover .skill-icon': {
          transform: 'none',
        },
        '&:hover .skill-arrow': {
          transform: 'none',
        },
      },
    };
  },

  cardIcon: (
    accent: SkillAccent,
  ) => (theme: Theme): SystemStyleObject<Theme> => {
    const color = getAccentColor(theme, accent);

    return {
      width: { xs: 58, sm: 64 },
      height: { xs: 58, sm: 64 },
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '18px',
      color,
      bgcolor: alpha(color, 0.11),
      border: `1px solid ${alpha(color, 0.22)}`,
      transition:
        'transform 300ms ease, box-shadow 300ms ease',
      '@media (prefers-reduced-motion: reduce)': {
        transition: 'none',
      },
    };
  },

  cardArrow: {
    fontSize: 21,
    color: 'text.secondary',
    transition:
      'transform 300ms ease, color 300ms ease',
    '@media (prefers-reduced-motion: reduce)': {
      transition: 'none',
    },
  } satisfies SystemStyleObject<Theme>,

  cardTitle: {
    fontSize: { xs: '1.3rem', sm: '1.5rem' },
    fontWeight: 800,
    letterSpacing: '-0.035em',
    lineHeight: 1.3,
    color: 'text.primary',
    mb: 1.5,
  } satisfies SystemStyleObject<Theme>,

  cardDescription: {
    color: 'text.secondary',
    lineHeight: 1.85,
    fontSize: { xs: '0.89rem', md: '0.94rem' },
    mb: 3,
    maxWidth: 470,
  } satisfies SystemStyleObject<Theme>,

  cardDivider: (
    accent: SkillAccent,
  ) => (theme: Theme): SystemStyleObject<Theme> => ({
    height: '1px',
    width: '100%',
    mb: 3,
    background: `linear-gradient(
      90deg,
      ${alpha(getAccentColor(theme, accent), 0.35)},
      ${theme.palette.divider},
      transparent
    )`,
  }),

  tagsList: {
    listStyle: 'none',
    display: 'flex',
    flexWrap: 'wrap',
    gap: 1,
    p: 0,
    m: 0,
    flex: 1,
    alignContent: 'flex-start',
  } satisfies SystemStyleObject<Theme>,

  tag: (
    accent: SkillAccent,
  ) => (theme: Theme): SystemStyleObject<Theme> => {
    const color = getAccentColor(theme, accent);

    return {
      height: 'auto',
      minHeight: 34,
      maxWidth: '100%',
      borderRadius: '9px',
      fontWeight: 650,
      fontSize: '0.76rem',
      color: 'text.secondary',
      borderColor: theme.palette.divider,
      bgcolor: alpha(
        theme.palette.background.default,
        theme.palette.mode === 'dark' ? 0.48 : 0.7,
      ),
      transition:
        'transform 220ms ease, border-color 220ms ease, background-color 220ms ease, color 220ms ease',
      '& .MuiChip-label': {
        px: 1.35,
        py: 0.75,
        whiteSpace: 'normal',
        overflowWrap: 'anywhere',
      },
      '&:hover': {
        transform: 'translateY(-3px)',
        color: 'text.primary',
        borderColor: alpha(color, 0.55),
        bgcolor: alpha(color, 0.11),
      },
      '@media (prefers-reduced-motion: reduce)': {
        transition: 'none',
        '&:hover': {
          transform: 'none',
        },
      },
    };
  },

  cardFooter: {
    mt: 3,
    pt: 2.5,
    borderTop: '1px solid',
    borderColor: 'divider',
  } satisfies SystemStyleObject<Theme>,

  footerDot: (
    accent: SkillAccent,
  ) => (theme: Theme): SystemStyleObject<Theme> => {
    const color = getAccentColor(theme, accent);

    return {
      width: 7,
      height: 7,
      borderRadius: '50%',
      bgcolor: color,
      boxShadow: `0 0 11px ${alpha(color, 0.4)}`,
    };
  },

  footerAccentText: (
    accent: SkillAccent,
  ) => (theme: Theme): SystemStyleObject<Theme> => ({
    fontWeight: 800,
    color: getAccentColor(theme, accent),
    letterSpacing: '0.1em',
    fontSize: '0.65rem',
  }),

  sectionFooter: (theme: Theme): SystemStyleObject<Theme> => ({
    mt: { xs: 6, md: 8 },
    p: { xs: 2.5, sm: 3 },
    borderRadius: '17px',
    border: `1px solid ${alpha(
      theme.palette.primary.main,
      0.18,
    )}`,
    bgcolor: alpha(theme.palette.background.paper, 0.7),
    backgroundImage: `linear-gradient(
      120deg,
      ${alpha(theme.palette.primary.main, 0.06)},
      transparent 75%
    )`,
  }),
} as const;