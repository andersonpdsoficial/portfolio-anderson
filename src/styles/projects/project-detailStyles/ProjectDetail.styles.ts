import { alpha } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';
import type { SystemStyleObject } from '@mui/system';

export const projectDetailStyles = {
  main: (accent: string) => (theme: Theme) => ({
    minHeight: '100vh',
    overflow: 'hidden',
    bgcolor: 'background.default',
    color: 'text.primary',
    backgroundImage: `
      radial-gradient(
        ellipse at 88% 5%,
        ${alpha(accent, 0.12)},
        transparent 42%
      ),
      radial-gradient(
        ellipse at 5% 42%,
        ${alpha(theme.palette.info.main, 0.08)},
        transparent 48%
      )
    `,
  } satisfies SystemStyleObject<Theme>),

  backButton: (accent: string) => ({
    color: 'text.secondary',
    fontWeight: 700,
    borderRadius: 2,
    px: 1.5,
    mb: { xs: 3, md: 4 },
    '&:hover': {
      color: 'primary.main',
      bgcolor: alpha(accent, 0.08),
    },
  } satisfies SystemStyleObject<Theme>),

  header: {
    maxWidth: 900,
    mb: { xs: 5, md: 7 },
  } satisfies SystemStyleObject<Theme>,

  headerEyebrow: {
    color: 'primary.main',
    fontWeight: 800,
    letterSpacing: '0.15em',
  } satisfies SystemStyleObject<Theme>,

  statusChip: (accent: string) => ({
    color: 'text.primary',
    borderColor: alpha(accent, 0.45),
    bgcolor: alpha(accent, 0.08),
  } satisfies SystemStyleObject<Theme>),

  headerTitle: (accent: string) => (theme: Theme) => ({
    fontSize: {
      xs: '2.25rem',
      sm: '3.2rem',
      md: '4.25rem',
    },
    lineHeight: 1.08,
    fontWeight: 900,
    letterSpacing: '-0.06em',
    backgroundImage: `linear-gradient(
      115deg,
      ${theme.palette.text.primary} 25%,
      ${accent} 105%
    )`,
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  } satisfies SystemStyleObject<Theme>),

  headerSummary: {
    maxWidth: 760,
    fontSize: {
      xs: '1rem',
      md: '1.15rem',
    },
    color: 'text.secondary',
    lineHeight: 1.9,
  } satisfies SystemStyleObject<Theme>,

  techChip: (accent: string) => (theme: Theme) => ({
    color: 'text.secondary',
    borderColor: 'divider',
    fontWeight: 650,
    bgcolor: alpha(theme.palette.background.paper, 0.65),
    '&:hover': {
      borderColor: accent,
      bgcolor: alpha(accent, 0.1),
    },
  } satisfies SystemStyleObject<Theme>),

  cover: (accent: string) => (theme: Theme) => {
    const dark = theme.palette.mode === 'dark';

    return {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: { xs: 3, md: 5 },
      border: `1px solid ${alpha(accent, 0.3)}`,
      p: { xs: 2, sm: 4, md: 6 },
      bgcolor: dark ? '#101722' : '#eaf0f3',
      backgroundImage: `
        radial-gradient(
          ellipse at 10% 10%,
          ${alpha(accent, 0.3)},
          transparent 58%
        ),
        radial-gradient(
          ellipse at 95% 95%,
          ${alpha(theme.palette.info.main, 0.25)},
          transparent 58%
        )
      `,
      boxShadow: dark
        ? '0 24px 65px rgba(0,0,0,0.23)'
        : '0 24px 65px rgba(20,35,50,0.09)',
    } satisfies SystemStyleObject<Theme>;
  },

  coverGrid: (accent: string) => ({
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
    opacity: 0.16,
    backgroundImage: `
      linear-gradient(${accent} 1px, transparent 1px),
      linear-gradient(90deg, ${accent} 1px, transparent 1px)
    `,
    backgroundSize: '45px 45px',
    maskImage: 'linear-gradient(120deg, black, transparent 85%)',
    WebkitMaskImage:
      'linear-gradient(120deg, black, transparent 85%)',
  } satisfies SystemStyleObject<Theme>),

  coverFrame: (accent: string) => ({
    position: 'relative',
    maxWidth: 980,
    mx: 'auto',
    overflow: 'hidden',
    borderRadius: { xs: 3, md: 4 },
    border: `1px solid ${alpha(accent, 0.35)}`,
    bgcolor: '#0c1420',
    boxShadow: '0 20px 65px rgba(0,0,0,0.28)',
    transition: 'transform 350ms ease',
    '&:hover': {
      transform: 'translateY(-5px)',
    },
    '@media (prefers-reduced-motion: reduce)': {
      transition: 'none',
      '&:hover': {
        transform: 'none',
      },
    },
  } satisfies SystemStyleObject<Theme>),

  coverToolbar: {
    px: 2,
    py: 1.35,
    bgcolor: '#161f2d',
  } satisfies SystemStyleObject<Theme>,

  coverImage: {
    position: 'relative',
    aspectRatio: '16 / 9',
    bgcolor: '#101722',
  } satisfies SystemStyleObject<Theme>,

  coverCaption: (theme: Theme) => ({
    display: 'block',
    mt: 2.5,
    textAlign: 'right',
    color:
      theme.palette.mode === 'dark'
        ? '#e7eef8'
        : '#293744',
    fontWeight: 800,
    letterSpacing: '0.13em',
  } satisfies SystemStyleObject<Theme>),

  contentGrid: {
    display: 'grid',
    gridTemplateColumns: {
      xs: 'minmax(0, 1fr)',
      md: 'minmax(0, 0.35fr) minmax(0, 0.65fr)',
    },
    alignItems: 'start',
    gap: { xs: 3, md: 4.5 },
    py: { xs: 5, md: 7 },
  } satisfies SystemStyleObject<Theme>,

  sidebar: {
    position: { md: 'sticky' },
    top: { md: 115 },
    alignSelf: 'start',
  } satisfies SystemStyleObject<Theme>,

  sidebarPaper: (accent: string) => ({
    p: 3,
    borderRadius: 3,
    border: '1px solid',
    borderColor: 'divider',
    bgcolor: 'background.paper',
    backgroundImage: `radial-gradient(
      ellipse at 100% 0%,
      ${alpha(accent, 0.09)},
      transparent 70%
    )`,
  } satisfies SystemStyleObject<Theme>),

  metadataLabel: {
    color: 'text.secondary',
    fontWeight: 800,
    letterSpacing: '0.12em',
  } satisfies SystemStyleObject<Theme>,

  metadataValue: {
    color: 'text.primary',
    fontWeight: 700,
    mt: 0.3,
    lineHeight: 1.5,
  } satisfies SystemStyleObject<Theme>,

  externalButton: (accent: string) => ({
    justifyContent: 'space-between',
    textAlign: 'left',
    color: 'text.primary',
    borderColor: alpha(accent, 0.35),
    borderRadius: 2,
    py: 1.25,
    '&:hover': {
      borderColor: accent,
      bgcolor: alpha(accent, 0.09),
    },
  } satisfies SystemStyleObject<Theme>),

  detailSection: {
    pb: { xs: 3, md: 3.5 },
    mb: { xs: 3, md: 3.5 },
    borderBottom: '1px solid',
    borderColor: 'divider',
  } satisfies SystemStyleObject<Theme>,

  detailEyebrow: {
    fontWeight: 800,
    color: 'primary.main',
    letterSpacing: '0.16em',
  } satisfies SystemStyleObject<Theme>,

  detailTitle: {
    fontSize: {
      xs: '1.55rem',
      md: '1.95rem',
    },
    fontWeight: 800,
    letterSpacing: '-0.04em',
    lineHeight: 1.25,
    color: 'text.primary',
  } satisfies SystemStyleObject<Theme>,

  detailText: {
    color: 'text.secondary',
    lineHeight: 1.95,
    overflowWrap: 'anywhere',
  } satisfies SystemStyleObject<Theme>,

  decisionCard: (accent: string) => ({
    display: 'flex',
    alignItems: 'flex-start',
    gap: 2,
    p: 2.2,
    borderRadius: 2,
    border: '1px solid',
    borderColor: 'divider',
    bgcolor: 'background.paper',
    transition:
      'border-color 200ms ease, transform 200ms ease',
    '&:hover': {
      borderColor: accent,
      transform: 'translateX(3px)',
    },
    '@media (prefers-reduced-motion: reduce)': {
      transition: 'none',
      '&:hover': {
        transform: 'none',
      },
    },
  } satisfies SystemStyleObject<Theme>),

  featureChip: (accent: string) => ({
    height: 'auto',
    minHeight: 34,
    color: 'text.primary',
    bgcolor: alpha(accent, 0.065),
    borderColor: alpha(accent, 0.28),
    '& .MuiChip-label': {
      whiteSpace: 'normal',
      py: 0.8,
    },
    '& .MuiChip-icon': {
      color: 'primary.main',
    },
  } satisfies SystemStyleObject<Theme>),

  disclosure: (theme: Theme) => ({
    display: 'flex',
    alignItems: 'flex-start',
    gap: 1.5,
    p: 2.5,
    borderRadius: 2.5,
    bgcolor: alpha(theme.palette.info.main, 0.045),
    borderColor: 'divider',
  } satisfies SystemStyleObject<Theme>),

  relatedSection: {
    py: { xs: 5, md: 7 },
  } satisfies SystemStyleObject<Theme>,

  relatedGrid: {
    display: 'grid',
    gridTemplateColumns: {
      xs: '1fr',
      sm: 'repeat(2, minmax(0, 1fr))',
      md: 'repeat(3, minmax(0, 1fr))',
    },
    gap: 2,
  } satisfies SystemStyleObject<Theme>,

  relatedCard: (accent: string) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 2,
    p: 2.5,
    textDecoration: 'none',
    color: 'text.primary',
    border: '1px solid',
    borderColor: 'divider',
    borderRadius: 3,
    bgcolor: 'background.paper',
    transition:
      'transform 250ms ease, border-color 250ms ease',
    '&:hover': {
      transform: 'translateY(-4px)',
      borderColor: accent,
    },
    '&:focus-visible': {
      outline: `2px solid ${accent}`,
      outlineOffset: 3,
    },
    '@media (prefers-reduced-motion: reduce)': {
      transition: 'none',
      '&:hover': {
        transform: 'none',
      },
    },
  } satisfies SystemStyleObject<Theme>),
} as const;