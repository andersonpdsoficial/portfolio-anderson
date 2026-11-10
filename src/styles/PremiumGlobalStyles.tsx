
'use client';

import GlobalStyles from '@mui/material/GlobalStyles';

import {
  alpha,
  useTheme,
} from '@mui/material/styles';

// ============================================================
// ESTILOS GLOBAIS — MATERIAL UI V5
// ============================================================

export function PremiumGlobalStyles() {
  const theme = useTheme();

  const isDark = theme.palette.mode === 'dark';

  const primaryColor = theme.palette.primary.main;
  const infoColor = theme.palette.info.main;
  const secondaryColor = theme.palette.secondary.main;

  return (
    <GlobalStyles
      styles={{
        // ====================================================
        // DOCUMENTO HTML
        // ====================================================

        html: {
          scrollBehavior: 'smooth',
          scrollPaddingTop: '86px',
        },

        // ====================================================
        // BODY — FUNDO AMBIENTAL
        // ====================================================

        body: {
          minHeight: '100dvh',
          margin: 0,

          isolation: 'isolate',

          backgroundColor: theme.palette.background.default,

          backgroundImage: `
            radial-gradient(
              ellipse 80% 24% at 88% 4%,
              ${alpha(
                secondaryColor,
                isDark ? 0.16 : 0.09,
              )},
              transparent 75%
            ),

            radial-gradient(
              ellipse 62% 23% at 0% 32%,
              ${alpha(
                infoColor,
                isDark ? 0.12 : 0.07,
              )},
              transparent 75%
            ),

            radial-gradient(
              ellipse 70% 25% at 94% 63%,
              ${alpha(
                primaryColor,
                isDark ? 0.12 : 0.08,
              )},
              transparent 76%
            ),

            radial-gradient(
              ellipse 60% 26% at 14% 96%,
              ${alpha(
                secondaryColor,
                isDark ? 0.13 : 0.07,
              )},
              transparent 80%
            )
          `,

          backgroundAttachment: 'scroll',

          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        },

        // ====================================================
        // SELEÇÃO DE TEXTO
        // ====================================================

        '::selection': {
          backgroundColor: alpha(
            primaryColor,
            isDark ? 0.4 : 0.28,
          ),

          color: theme.palette.text.primary,
        },

        '::-moz-selection': {
          backgroundColor: alpha(
            primaryColor,
            isDark ? 0.4 : 0.28,
          ),

          color: theme.palette.text.primary,
        },

        // ====================================================
        // IMAGENS E ELEMENTOS MULTIMÍDIA
        // ====================================================

        'img, video': {
          verticalAlign: 'middle',
        },

        // ====================================================
        // ELEMENTOS COM ÂNCORA
        // ====================================================

        'section[id]': {
          scrollMarginTop: '86px',
        },

        // ====================================================
        // RESPONSIVIDADE — TABLET
        // ====================================================

        '@media (max-width: 899.95px)': {
          html: {
            scrollPaddingTop: '78px',
          },

          'section[id]': {
            scrollMarginTop: '78px',
          },
        },

        // ====================================================
        // RESPONSIVIDADE — MOBILE
        // ====================================================

        '@media (max-width: 599.95px)': {
          html: {
            scrollPaddingTop: '72px',
          },

          'section[id]': {
            scrollMarginTop: '72px',
          },
        },

        // ====================================================
        // ACESSIBILIDADE — MOVIMENTO REDUZIDO
        // ====================================================

        '@media (prefers-reduced-motion: reduce)': {
          html: {
            scrollBehavior: 'auto',
          },
        },
      }}
    />
  );
}
