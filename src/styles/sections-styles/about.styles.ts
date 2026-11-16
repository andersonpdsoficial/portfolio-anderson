import type { Theme } from '@mui/material/styles';
import type { SystemStyleObject } from '@mui/system';

export const aboutStyles = {
  section: {
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
        ellipse at 85% 15%,
        rgba(159, 234, 115, 0.11),
        transparent 40%
      ),
      radial-gradient(
        ellipse at 5% 85%,
        rgba(100, 130, 255, 0.09),
        transparent 45%
      )
    `,
  } satisfies SystemStyleObject<Theme>,

  sectionGlow: {
    position: 'absolute',
    width: 480,
    height: 480,
    top: 30,
    right: '-12%',
    borderRadius: '50%',
    background: `
      radial-gradient(
        circle,
        rgba(159,234,115,0.12),
        transparent 70%
      )
    `,
    filter: 'blur(65px)',
    pointerEvents: 'none',
    zIndex: -1,
  } satisfies SystemStyleObject<Theme>,

  introEyebrow: {
    color: 'primary.main',
    fontWeight: 800,
    letterSpacing: '0.2em',
  } satisfies SystemStyleObject<Theme>,

  introTitle: {
    fontWeight: 800,
    color: 'text.primary',
    letterSpacing: '-0.055em',
    lineHeight: 1.12,
    fontSize: {
      xs: '2.35rem',
      sm: '3rem',
      md: '3.4rem',
      lg: '3.85rem',
    },
  } satisfies SystemStyleObject<Theme>,

  gradientText: {
    display: 'inline',
    background:
      'linear-gradient(110deg, #B7ED73, #71DCCA, #86A8FF)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  } satisfies SystemStyleObject<Theme>,

  aboutParagraph: {
    color: 'text.secondary',
    fontSize: {
      xs: '0.94rem',
      md: '1rem',
    },
    lineHeight: 1.8,
    m: 0,
  } satisfies SystemStyleObject<Theme>,

  valueChip: {
    height: 'auto',
    minHeight: 44,
    py: 0.6,
    px: 0.5,
    fontWeight: 600,
    borderRadius: '12px',
    color: 'text.primary',
    borderColor: 'divider',
    bgcolor: 'background.paper',
    transition:
      'transform 250ms ease, border-color 250ms ease',
    '& .MuiChip-icon': {
      fontSize: 18,
      color: 'primary.main',
    },
    '&:hover': {
      transform: 'translateY(-4px)',
      borderColor: 'primary.main',
    },
    '@media (prefers-reduced-motion: reduce)': {
      transition: 'none',
      '&:hover': {
        transform: 'none',
      },
    },
  } satisfies SystemStyleObject<Theme>,

  photoContainer: {
    position: 'relative',
    maxWidth: 530,
    mx: 'auto',
    transition:
      'transform 400ms cubic-bezier(.22,1,.36,1)',
    '&:hover': {
      transform: 'translateY(-7px)',
    },
    '@media (prefers-reduced-motion: reduce)': {
      transition: 'none',
      '&:hover': {
        transform: 'none',
      },
    },
  } satisfies SystemStyleObject<Theme>,

  photoGlow: {
    position: 'absolute',
    inset: -18,
    borderRadius: '36px',
    background: `
      linear-gradient(
        135deg,
        rgba(159,234,115,0.22),
        rgba(100,150,255,0.15),
        rgba(160,90,255,0.16)
      )
    `,
    filter: 'blur(34px)',
    opacity: 0.85,
    pointerEvents: 'none',
  } satisfies SystemStyleObject<Theme>,

  photoPaper: {
    position: 'relative',
    m: 0,
    overflow: 'hidden',
    borderRadius: {
      xs: '22px',
      md: '28px',
    },
    bgcolor: 'background.paper',
    border: '1px solid',
    borderColor: 'divider',
    boxShadow: '0 25px 75px rgba(0,0,0,0.16)',
  } satisfies SystemStyleObject<Theme>,

  photoHeader: {
    px: 2.5,
    py: 2,
    borderBottom: '1px solid',
    borderColor: 'divider',
  } satisfies SystemStyleObject<Theme>,

  statusDot: {
    width: 9,
    height: 9,
    borderRadius: '50%',
    bgcolor: 'success.main',
    boxShadow: '0 0 14px rgba(100,230,140,0.5)',
  } satisfies SystemStyleObject<Theme>,

  meetingImage: {
    position: 'relative',
    width: '100%',
    height: {
      xs: 190,
      sm: 235,
      md: 215,
    },
    overflow: 'hidden',
    borderRadius: '0 0 16px 16px',
    bgcolor: '#10151c',
    '& img': {
      transition:
        'transform 650ms cubic-bezier(.2,.8,.2,1)',
    },
    '&:hover img': {
      transform: 'scale(1.035)',
    },
    '@media (prefers-reduced-motion: reduce)': {
      '& img': {
        transition: 'none',
      },
      '&:hover img': {
        transform: 'none',
      },
    },
  } satisfies SystemStyleObject<Theme>,

  meetingOverlay: {
    position: 'absolute',
    inset: 0,
    background: `
      linear-gradient(
        180deg,
        transparent 35%,
        rgba(7,12,20,0.78) 100%
      )
    `,
    pointerEvents: 'none',
  } satisfies SystemStyleObject<Theme>,

  meetingCaption: {
    position: 'absolute',
    bottom: 16,
    left: 20,
    zIndex: 2,
    color: '#FFFFFF',
    fontSize: '0.68rem',
    letterSpacing: '0.12em',
    fontWeight: 800,
  } satisfies SystemStyleObject<Theme>,

  profileArea: {
    position: 'relative',
    minHeight: {
      xs: 220,
      sm: 245,
      md: 240,
    },
    background: `
      linear-gradient(
        125deg,
        rgba(120,220,150,0.12),
        rgba(80,120,230,0.09),
        transparent
      )
    `,
  } satisfies SystemStyleObject<Theme>,

  profileGlow: {
    position: 'absolute',
    width: 190,
    height: 190,
    right: -40,
    bottom: -70,
    borderRadius: '50%',
    background: `
      radial-gradient(
        circle,
        rgba(120,220,140,0.21),
        transparent 70%
      )
    `,
    filter: 'blur(20px)',
    pointerEvents: 'none',
  } satisfies SystemStyleObject<Theme>,

  profileImage: {
    position: 'absolute',
    top: -65,
    right: {
      xs: 15,
      sm: 25,
      md: 20,
    },
    width: {
      xs: '57%',
      sm: '57%',
      md: '58%',
    },
    aspectRatio: '4 / 3',
    overflow: 'hidden',
    borderRadius: {
      xs: '18px',
      sm: '24px',
    },
    bgcolor: '#111827',
    border: '4px solid',
    borderColor: 'background.paper',
    boxShadow: '0 18px 45px rgba(0,0,0,0.24)',
    transition:
      'transform 350ms ease, box-shadow 350ms ease',
    '&:hover': {
      transform: 'scale(1.035)',
      boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
    },
    '@media (prefers-reduced-motion: reduce)': {
      transition: 'none',
      '&:hover': {
        transform: 'none',
      },
    },
  } satisfies SystemStyleObject<Theme>,

  profileDescription: {
    position: 'absolute',
    left: {
      xs: 17,
      sm: 25,
    },
    bottom: {
      xs: 23,
      sm: 28,
    },
    maxWidth: '45%',
  } satisfies SystemStyleObject<Theme>,

  floatingLabel: {
    position: 'absolute',
    right: -8,
    bottom: -18,
    zIndex: 3,
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    px: 2.5,
    py: 1.4,
    borderRadius: '12px',
    bgcolor: 'background.paper',
    border: '1px solid',
    borderColor: 'divider',
    boxShadow: '0 12px 35px rgba(0,0,0,0.14)',
  } satisfies SystemStyleObject<Theme>,

  capabilitiesSection: {
    mt: {
      xs: 11,
      md: 15,
    },
  } satisfies SystemStyleObject<Theme>,

  capabilitiesEyebrow: {
    color: 'primary.main',
    fontWeight: 800,
    letterSpacing: '0.17em',
  } satisfies SystemStyleObject<Theme>,

  capabilityCard: {
    position: 'relative',
    height: '100%',
    minHeight: 255,
    p: {
      xs: 3,
      md: 3.5,
    },
    overflow: 'hidden',
    borderRadius: '20px',
    border: '1px solid',
    borderColor: 'divider',
    bgcolor: 'background.paper',
    backgroundImage: `
      linear-gradient(
        145deg,
        rgba(159,234,115,0.045),
        transparent 70%
      )
    `,
    transition:
      'transform 300ms ease, border-color 300ms ease, box-shadow 300ms ease',
    '&:hover': {
      transform: 'translateY(-8px)',
      borderColor: 'primary.main',
      boxShadow: '0 20px 50px rgba(0,0,0,0.12)',
    },
    '&:hover .capability-arrow': {
      transform: 'translate(4px, -4px) rotate(8deg)',
      color: 'primary.main',
    },
    '@media (prefers-reduced-motion: reduce)': {
      transition: 'none',
      '&:hover': {
        transform: 'none',
      },
      '&:hover .capability-arrow': {
        transform: 'none',
      },
    },
  } satisfies SystemStyleObject<Theme>,

  capabilityArrow: {
    position: 'absolute',
    bottom: 22,
    right: 22,
    fontSize: 22,
    color: 'text.secondary',
    transition:
      'transform 300ms ease, color 300ms ease',
    '@media (prefers-reduced-motion: reduce)': {
      transition: 'none',
    },
  } satisfies SystemStyleObject<Theme>,
} as const;