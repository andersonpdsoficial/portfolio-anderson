
'use client';

import { useEffect, useState } from 'react';

import {
  Box,
  CircularProgress,
  Stack,
  Typography,
} from '@mui/material';

import { alpha, useTheme } from '@mui/material/styles';

// ============================================================
// ENTRY LOADER — MATERIAL UI V5
// ============================================================

export function EntryLoader() {
  const theme = useTheme();

  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  const isDark = theme.palette.mode === 'dark';

  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;
  const info = theme.palette.info.main;

  // ==========================================================
  // CONTROLE DO CARREGAMENTO
  // ==========================================================

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    const fadeDelay = reducedMotion ? 200 : 850;
    const removeDelay = reducedMotion ? 250 : 1200;

    const fadeTimer = window.setTimeout(() => {
      setLeaving(true);
    }, fadeDelay);

    const removeTimer = window.setTimeout(() => {
      setVisible(false);
    }, removeDelay);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <Box
      role="status"
      aria-label="Carregando portfólio"
      aria-live="polite"
      sx={{
        position: 'fixed',
        inset: 0,
        zIndex: (t) => t.zIndex.modal + 2,

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        overflow: 'hidden',
        isolation: 'isolate',

        bgcolor: 'background.default',

        opacity: leaving ? 0 : 1,
        visibility: leaving ? 'hidden' : 'visible',

        pointerEvents: leaving ? 'none' : 'auto',

        transition:
          'opacity 350ms ease, visibility 350ms ease',

        // Gradiente de fundo em movimento
        backgroundImage: `
          radial-gradient(
            ellipse at 15% 20%,
            ${alpha(primary, isDark ? 0.19 : 0.24)},
            transparent 55%
          ),
          radial-gradient(
            ellipse at 85% 25%,
            ${alpha(secondary, isDark ? 0.17 : 0.13)},
            transparent 55%
          ),
          radial-gradient(
            ellipse at 50% 90%,
            ${alpha(info, isDark ? 0.16 : 0.12)},
            transparent 60%
          )
        `,

        backgroundSize: '155% 155%',

        animation:
          'loaderGradient 9s ease-in-out infinite alternate',

        '@keyframes loaderGradient': {
          '0%': {
            backgroundPosition: '0% 20%',
          },
          '50%': {
            backgroundPosition: '100% 80%',
          },
          '100%': {
            backgroundPosition: '20% 100%',
          },
        },

        '@media (prefers-reduced-motion: reduce)': {
          animation: 'none',
          transition: 'none',
        },
      }}
    >
      {/* ======================================================
          GRID DECORATIVO
      ====================================================== */}

      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          inset: 0,

          pointerEvents: 'none',

          opacity: isDark ? 0.075 : 0.055,

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

          backgroundSize: '60px 60px',

          maskImage:
            'radial-gradient(ellipse at center, black, transparent 80%)',

          WebkitMaskImage:
            'radial-gradient(ellipse at center, black, transparent 80%)',
        }}
      />

      {/* ======================================================
          ORBE LUMINOSO VERDE
      ====================================================== */}

      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',

          top: '-22%',
          left: '-17%',

          width: {
            xs: 330,
            md: 620,
          },

          height: {
            xs: 330,
            md: 620,
          },

          borderRadius: '50%',

          background: `radial-gradient(
            circle,
            ${alpha(primary, 0.36)} 0%,
            ${alpha(primary, 0.12)} 45%,
            transparent 72%
          )`,

          filter: 'blur(55px)',

          animation:
            'loaderOrbGreen 6s ease-in-out infinite alternate',

          '@keyframes loaderOrbGreen': {
            '0%': {
              transform:
                'translate3d(-25px, 10px, 0) scale(0.9)',
            },
            '100%': {
              transform:
                'translate3d(80px, 55px, 0) scale(1.15)',
            },
          },

          '@media (prefers-reduced-motion: reduce)': {
            animation: 'none',
          },
        }}
      />

      {/* ======================================================
          ORBE LUMINOSO AZUL / VIOLETA
      ====================================================== */}

      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',

          bottom: '-25%',
          right: '-17%',

          width: {
            xs: 350,
            md: 650,
          },

          height: {
            xs: 350,
            md: 650,
          },

          borderRadius: '50%',

          background: `radial-gradient(
            circle,
            ${alpha(secondary, 0.29)} 0%,
            ${alpha(info, 0.14)} 45%,
            transparent 75%
          )`,

          filter: 'blur(65px)',

          animation:
            'loaderOrbBlue 7s ease-in-out infinite alternate',

          '@keyframes loaderOrbBlue': {
            '0%': {
              transform:
                'translate3d(35px, 20px, 0) scale(0.95)',
            },
            '100%': {
              transform:
                'translate3d(-85px, -65px, 0) scale(1.12)',
            },
          },

          '@media (prefers-reduced-motion: reduce)': {
            animation: 'none',
          },
        }}
      />

      {/* ======================================================
          AURA CENTRAL
      ====================================================== */}

      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',

          width: {
            xs: 260,
            sm: 370,
          },

          height: {
            xs: 260,
            sm: 370,
          },

          borderRadius: '50%',

          background: `radial-gradient(
            circle,
            ${alpha(primary, 0.16)},
            ${alpha(info, 0.06)} 45%,
            transparent 70%
          )`,

          filter: 'blur(35px)',

          animation:
            'loaderAura 3s ease-in-out infinite alternate',

          '@keyframes loaderAura': {
            from: {
              transform: 'scale(0.85)',
              opacity: 0.5,
            },
            to: {
              transform: 'scale(1.2)',
              opacity: 1,
            },
          },

          '@media (prefers-reduced-motion: reduce)': {
            animation: 'none',
          },
        }}
      />

      {/* ======================================================
          CONTEÚDO CENTRAL
      ====================================================== */}

      <Stack
        spacing={3}
        alignItems="center"
        sx={{
          position: 'relative',
          zIndex: 2,

          px: 3,

          textAlign: 'center',

          animation:
            'loaderContentIn 600ms ease-out both',

          '@keyframes loaderContentIn': {
            from: {
              opacity: 0,
              transform: 'translateY(18px)',
            },
            to: {
              opacity: 1,
              transform: 'translateY(0)',
            },
          },

          '@media (prefers-reduced-motion: reduce)': {
            animation: 'none',
          },
        }}
      >
        {/* ================================================
            LOGO / ANIMAÇÃO CIRCULAR
        ================================================ */}

        <Box
          sx={{
            position: 'relative',

            display: 'grid',
            placeItems: 'center',

            width: 116,
            height: 116,
          }}
        >
          {/* ARO DECORATIVO EXTERNO */}

          <Box
            aria-hidden="true"
            sx={{
              position: 'absolute',
              inset: 0,

              borderRadius: '50%',

              border: `1px solid ${alpha(primary, 0.19)}`,

              boxShadow: `0 0 35px ${alpha(primary, 0.11)}`,
            }}
          />

          {/* FUNDO DO MONOGRAMA */}

          <Box
            sx={{
              position: 'absolute',

              width: 78,
              height: 78,

              borderRadius: '22px',

              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',

              bgcolor: alpha(
                theme.palette.background.paper,
                0.75,
              ),

              backdropFilter: 'blur(14px)',

              border: `1px solid ${alpha(primary, 0.27)}`,

              boxShadow: `
                0 15px 40px rgba(0,0,0,0.12),
                0 0 30px ${alpha(primary, 0.12)}
              `,
            }}
          >
            <Typography
              component="span"
              sx={{
                fontWeight: 900,

                fontSize: '1.75rem',

                letterSpacing: '-0.08em',

                color: 'text.primary',
              }}
            >
              AP
              <Box
                component="span"
                sx={{
                  color: 'primary.main',
                }}
              >
                .
              </Box>
            </Typography>
          </Box>

          {/* PROGRESSO CIRCULAR */}

          <CircularProgress
            size={104}
            thickness={2.2}
            aria-hidden="true"
            sx={{
              position: 'absolute',

              color: 'primary.main',

              filter: `drop-shadow(
                0 0 9px ${alpha(primary, 0.4)}
              )`,

              '@media (prefers-reduced-motion: reduce)': {
                animation: 'none',
                '& .MuiCircularProgress-circle': {
                  animation: 'none',
                },
              },
            }}
          />
        </Box>

        {/* ================================================
            TEXTOS
        ================================================ */}

        <Stack
          spacing={1}
          alignItems="center"
        >
          <Typography
            sx={{
              fontWeight: 800,

              fontSize: {
                xs: '1rem',
                sm: '1.1rem',
              },

              letterSpacing: '-0.025em',

              color: 'text.primary',
            }}
          >
            Anderson Pereira
          </Typography>

          <Typography
            variant="caption"
            sx={{
              color: 'text.secondary',

              fontSize: '0.68rem',

              letterSpacing: '0.18em',

              fontWeight: 800,
            }}
          >
            PREPARANDO SUA EXPERIÊNCIA
          </Typography>
        </Stack>

        {/* ================================================
            BARRA ANIMADA INFERIOR
        ================================================ */}

        <Box
          aria-hidden="true"
          sx={{
            position: 'relative',

            width: 130,
            height: 3,

            borderRadius: '999px',

            overflow: 'hidden',

            bgcolor: alpha(primary, 0.15),
          }}
        >
          <Box
            sx={{
              width: '45%',
              height: '100%',

              borderRadius: '999px',

              background: `linear-gradient(
                90deg,
                ${primary},
                ${info}
              )`,

              boxShadow: `0 0 12px ${alpha(primary, 0.5)}`,

              animation:
                'loaderProgress 1.3s ease-in-out infinite alternate',

              '@keyframes loaderProgress': {
                from: {
                  transform: 'translateX(-100%)',
                },
                to: {
                  transform: 'translateX(230%)',
                },
              },

              '@media (prefers-reduced-motion: reduce)': {
                animation: 'none',
              },
            }}
          />
        </Box>
      </Stack>

      {/* ======================================================
          ASSINATURA INFERIOR
      ====================================================== */}

      <Typography
        aria-hidden="true"
        variant="caption"
        sx={{
          position: 'absolute',

          bottom: {
            xs: 28,
            md: 38,
          },

          left: '50%',
          transform: 'translateX(-50%)',

          whiteSpace: 'nowrap',

          color: 'text.disabled',

          fontSize: '0.65rem',

          fontWeight: 800,

          letterSpacing: '0.16em',
        }}
      >
        DESIGN · BUILD · EVOLVE
      </Typography>
    </Box>
  );
}
