import { SUCCESS_POPUP_DURATION } from '@/functions/contactFunctions/contact.constants';
import {
  alpha,
  keyframes,
} from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';
import type { SystemStyleObject } from '@mui/system';


const timeoutBar = keyframes`
  from {
    transform: scaleX(1);
  }

  to {
    transform: scaleX(0);
  }
`;

export const contactStyles = {
  section: (theme: Theme) => ({
    position: 'relative',
    overflow: 'hidden',
    isolation: 'isolate',
    py: { xs: 7, md: 10 },
    bgcolor: 'background.default',
    backgroundImage: [
      `radial-gradient(
        ellipse at 10% 12%,
        ${alpha(theme.palette.primary.main, 0.11)},
        transparent 52%
      )`,
      `radial-gradient(
        ellipse at 95% 95%,
        ${alpha(theme.palette.secondary.main, 0.11)},
        transparent 48%
      )`,
    ].join(', '),
  } satisfies SystemStyleObject<Theme>),

  mainPaper: (theme: Theme) => ({
    position: 'relative',
    overflow: 'hidden',
    p: { xs: 3, sm: 4, md: 6 },
    border: '1px solid',
    borderColor: 'divider',
    borderRadius: {
      xs: '24px',
      md: '32px',
    },
    bgcolor: 'background.paper',
    backgroundImage: `radial-gradient(
      ellipse at 0% 0%,
      ${alpha(theme.palette.primary.main, 0.07)},
      transparent 56%
    )`,
    boxShadow:
      theme.palette.mode === 'dark'
        ? '0 24px 90px rgba(0,0,0,0.23)'
        : '0 24px 90px rgba(23,55,34,0.07)',
  } satisfies SystemStyleObject<Theme>),

  decorativeGlow: {
    position: 'absolute',
    top: -105,
    right: -55,
    width: 310,
    height: 310,
    borderRadius: '50%',
    background: `radial-gradient(
      circle,
      rgba(144,220,143,0.1),
      transparent 68%
    )`,
    pointerEvents: 'none',
  } satisfies SystemStyleObject<Theme>,

  contentGrid: {
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: {
      xs: 'minmax(0,1fr)',
      md: 'minmax(0,0.9fr) minmax(0,1.1fr)',
    },
    gap: { xs: 5, md: 7 },
    alignItems: 'start',
  } satisfies SystemStyleObject<Theme>,

  eyebrow: {
    color: 'primary.main',
    fontWeight: 800,
    letterSpacing: '0.19em',
  } satisfies SystemStyleObject<Theme>,

  availability: (theme: Theme) => ({
    alignSelf: 'flex-start',
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    px: 1.7,
    py: 0.85,
    borderRadius: '999px',
    border: `1px solid ${alpha(
      theme.palette.primary.main,
      0.22,
    )}`,
    bgcolor: alpha(theme.palette.primary.main, 0.065),
  } satisfies SystemStyleObject<Theme>),

  availabilityDot: {
    width: 8,
    height: 8,
    bgcolor: 'success.main',
    borderRadius: '50%',
    boxShadow: '0 0 12px rgba(85,210,124,0.55)',
  } satisfies SystemStyleObject<Theme>,

  title: {
    fontWeight: 800,
    letterSpacing: '-0.055em',
    lineHeight: 1.08,
    fontSize: {
      xs: '2.6rem',
      sm: '3.4rem',
      md: '4rem',
    },
  } satisfies SystemStyleObject<Theme>,

  gradientText: {
    backgroundImage:
      'linear-gradient(115deg, #A5DC69, #6ED5C3, #92A8FF)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  } satisfies SystemStyleObject<Theme>,

  description: {
    color: 'text.secondary',
    lineHeight: 1.9,
    maxWidth: 470,
  } satisfies SystemStyleObject<Theme>,

  directEmail: {
    display: 'flex',
    alignItems: 'center',
    gap: 1.2,
    mt: 1.2,
    color: 'text.primary',
    textDecoration: 'none',
    fontWeight: 700,
    overflowWrap: 'anywhere',
    transition:
      'color 200ms ease, transform 200ms ease',

    '&:hover': {
      color: 'primary.main',
      transform: 'translateX(4px)',
    },

    '@media (prefers-reduced-motion: reduce)': {
      transition: 'none',
      '&:hover': {
        transform: 'none',
      },
    },
  } satisfies SystemStyleObject<Theme>,

  socialButton: {
    borderRadius: '12px',
    borderColor: 'divider',
    color: 'text.primary',

    '&:hover': {
      borderColor: 'primary.main',
      bgcolor: 'action.hover',
    },
  } satisfies SystemStyleObject<Theme>,

  formPaper: (theme: Theme) => ({
    p: { xs: 2.5, sm: 3.5 },
    minWidth: 0,
    borderRadius: '24px',
    border: '1px solid',
    borderColor: 'divider',
    bgcolor: 'background.paper',
    backgroundImage: `linear-gradient(
      145deg,
      ${alpha(theme.palette.primary.main, 0.035)},
      transparent 48%
    )`,
    boxShadow:
      theme.palette.mode === 'dark'
        ? '0 20px 55px rgba(0,0,0,0.2)'
        : '0 16px 44px rgba(18,43,33,0.08)',
  } satisfies SystemStyleObject<Theme>),

  formIcon: (theme: Theme) => ({
    width: 48,
    height: 48,
    borderRadius: '14px',
    display: 'grid',
    placeItems: 'center',
    color: 'primary.main',
    bgcolor: alpha(theme.palette.primary.main, 0.12),
  } satisfies SystemStyleObject<Theme>),

  field: {
    '& .MuiOutlinedInput-root': {
      borderRadius: '14px',
      bgcolor: 'background.default',
      transition:
        'box-shadow 200ms ease, border-color 200ms ease',

      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: 'primary.main',
      },

      '&.Mui-focused': {
        boxShadow:
          '0 0 0 3px rgba(140,210,130,0.12)',
      },
    },

    '& .MuiFormHelperText-root': {
      ml: 0,
    },

    '@media (prefers-reduced-motion: reduce)': {
      '& .MuiOutlinedInput-root': {
        transition: 'none',
      },
    },
  } satisfies SystemStyleObject<Theme>,

  fieldsGrid: {
    display: 'grid',
    gridTemplateColumns: {
      xs: '1fr',
      sm: '1fr 1fr',
    },
    gap: 2,
  } satisfies SystemStyleObject<Theme>,

  honeypot: {
    position: 'absolute',
    width: 1,
    height: 1,
    overflow: 'hidden',
    clipPath: 'inset(50%)',
    whiteSpace: 'nowrap',
  } satisfies SystemStyleObject<Theme>,

  submitButton: {
    minHeight: 52,
    borderRadius: '14px',
    fontWeight: 800,
    transition:
      'transform 200ms ease, box-shadow 200ms ease',

    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow:
        '0 12px 30px rgba(120,190,110,0.25)',
    },

    '@media (prefers-reduced-motion: reduce)': {
      transition: 'none',
      '&:hover': {
        transform: 'none',
      },
    },
  } satisfies SystemStyleObject<Theme>,

  footer: {
    mt: { xs: 5, md: 7 },
    pt: 3,
    borderTop: '1px solid',
    borderColor: 'divider',
  } satisfies SystemStyleObject<Theme>,

  successPaper: (theme: Theme) => ({
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '26px',
    border: '1px solid',
    borderColor: 'divider',
    bgcolor: 'background.paper',
    backgroundImage: `radial-gradient(
      ellipse at 50% 0%,
      ${alpha(theme.palette.primary.main, 0.16)},
      transparent 75%
    )`,
    boxShadow: '0 28px 100px rgba(0,0,0,0.35)',
    px: { xs: 2.5, sm: 4 },
    pt: 5.5,
    pb: 3.5,
    m: 2,
  } satisfies SystemStyleObject<Theme>),

  successBackdrop: {
    bgcolor: 'rgba(5,10,18,0.65)',
    backdropFilter: 'blur(8px)',
  } satisfies SystemStyleObject<Theme>,

  successClose: {
    position: 'absolute',
    top: 12,
    right: 12,
    color: 'text.secondary',
    transition: 'transform 200ms ease',

    '&:hover': {
      transform: 'rotate(90deg)',
      bgcolor: 'action.hover',
    },

    '@media (prefers-reduced-motion: reduce)': {
      transition: 'none',
      '&:hover': {
        transform: 'none',
      },
    },
  } satisfies SystemStyleObject<Theme>,

  successIcon: {
    width: 86,
    height: 86,
    display: 'grid',
    placeItems: 'center',
    borderRadius: '50%',
    background:
      'linear-gradient(135deg, #D9FF8C, #9FEA73, #75DDA7)',
    boxShadow: `
      0 0 0 9px rgba(155,230,130,0.08),
      0 16px 42px rgba(155,230,130,0.24)
    `,
    mb: 1,
  } satisfies SystemStyleObject<Theme>,

  successBadge: (theme: Theme) => ({
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    px: 2,
    py: 1,
    borderRadius: '999px',
    bgcolor: alpha(theme.palette.success.main, 0.08),
    border: `1px solid ${alpha(
      theme.palette.success.main,
      0.2,
    )}`,
  } satisfies SystemStyleObject<Theme>),

  successProgressContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 4,
    bgcolor: 'action.hover',
    overflow: 'hidden',
  } satisfies SystemStyleObject<Theme>,

  successProgress: {
    width: '100%',
    height: '100%',
    bgcolor: 'primary.main',
    transformOrigin: 'left',
    animation: `${timeoutBar} ${SUCCESS_POPUP_DURATION}ms linear forwards`,

    '@media (prefers-reduced-motion: reduce)': {
      animation: 'none',
    },
  } satisfies SystemStyleObject<Theme>,
} as const;