
import { alpha } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';
import type { SystemStyleObject } from '@mui/system';

export const educationItemStyles = {

    card: (theme: Theme): SystemStyleObject<Theme> => {
        const primary = theme.palette.primary.main;

        return {
            position: 'relative',
            overflow: 'hidden',
            p: {
                xs: 2,
                sm: 2.5,
            },
            borderRadius: '18px',
            border: '1px solid',
            borderColor: 'divider',
            background: `linear-gradient(
        135deg,
        ${alpha(primary, 0.055)} 0%,
        ${alpha(theme.palette.background.paper, 0.92)} 55%,
        ${theme.palette.background.paper} 100%
      )`,
            transition:
                'border-color 250ms ease, box-shadow 250ms ease, transform 250ms ease',
            '&:hover': {
                transform: 'translateY(-3px)',
                borderColor: alpha(primary, 0.35),
                boxShadow: `0 14px 36px ${alpha(
                    theme.palette.common.black,
                    theme.palette.mode === 'dark' ? 0.18 : 0.06,
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

    topAccent: (theme: Theme): SystemStyleObject<Theme> => ({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '38%',
        height: 2,
        background: `linear-gradient(
      90deg,
      ${theme.palette.primary.main},
      transparent
    )`,

        pointerEvents: 'none',
    }),

    header: {
        minWidth: 0,
    } satisfies SystemStyleObject<Theme>,

    iconContainer: (
        theme: Theme,
    ): SystemStyleObject<Theme> => ({
        width: {
            xs: 42,
            sm: 48,
        },
        height: {
            xs: 42,
            sm: 48,
        },

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        borderRadius: '13px',
        color: 'primary.main',
        bgcolor: alpha(theme.palette.primary.main, 0.1),
        border: `1px solid ${alpha(
            theme.palette.primary.main,
            0.15,
        )}`,
    }),

    educationIcon: {
        fontSize: 25,
    } satisfies SystemStyleObject<Theme>,
    titleContainer: {
        flex: 1,
        minWidth: 0,
    } satisfies SystemStyleObject<Theme>,

    title: {
        fontWeight: 800,
        letterSpacing: '-0.025em',
        lineHeight: 1.4,
        fontSize: {
            xs: '1rem',
            sm: '1.08rem',
        },
    } satisfies SystemStyleObject<Theme>,

    typeContainer: {
        mt: 0.65,
    } satisfies SystemStyleObject<Theme>,

    typeIcon: {
        fontSize: 16,
        color: 'primary.main',
    } satisfies SystemStyleObject<Theme>,

    typeText: {
        color: 'text.secondary',
        fontWeight: 600,
        lineHeight: 1.5,
    } satisfies SystemStyleObject<Theme>,

    // ============================================================
    // METADADOS
    // ============================================================

    metadata: {
        gap: {
            xs: 1.5,
            sm: 2,
        },
    } satisfies SystemStyleObject<Theme>,

    metadataIcon: {
        fontSize: 17,
        color: 'text.disabled',
    } satisfies SystemStyleObject<Theme>,

    metadataText: {
        color: 'text.secondary',
        fontWeight: 600,
        fontSize: '0.79rem',
    } satisfies SystemStyleObject<Theme>,

    // ============================================================
    // STATUS
    // ============================================================

    statusChip:
        (isCompleted: boolean) =>
            (theme: Theme): SystemStyleObject<Theme> => {
                const color = isCompleted
                    ? theme.palette.success.main
                    : theme.palette.info.main;
                return {
                    height: 30,
                    borderRadius: '9px',
                    px: 0.5,
                    color,
                    bgcolor: alpha(color, 0.09),
                    border: `1px solid ${alpha(color, 0.22)}`,
                    fontWeight: 800,
                    '& .MuiChip-label': {
                        px: 0.7,
                        fontSize: '0.73rem',
                    },
                    '& .MuiChip-icon': {
                        color: 'inherit',
                        fontSize: 17,
                        ml: 0.5,
                    },
                };
            },
} as const;
