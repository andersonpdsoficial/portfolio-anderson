import { createTheme } from '@mui/material/styles';
import type { PaletteMode } from '@mui/material';

export function getPortfolioTheme(mode: PaletteMode) {
  const dark = mode === 'dark';
  return createTheme({
    palette: {
      mode,
      primary: { main: dark ? '#b8f780' : '#326a20', contrastText: dark ? '#071006' : '#fff' },
      secondary: { main: '#9b9cff' },
      background: { default: dark ? '#080b11' : '#f5f6f2', paper: dark ? '#121820' : '#ffffff' },
      text: { primary: dark ? '#f3f6f4' : '#151f1b', secondary: dark ? '#9faeac' : '#52635d' },
      divider: dark ? 'rgba(255,255,255,.1)' : 'rgba(9,28,19,.12)',
    },
    typography: {
      fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      button: { textTransform: 'none', fontWeight: 700, letterSpacing: 0 },
    },
    shape: { borderRadius: 16 },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: { scrollBehavior: 'smooth' },
          body: { margin: 0, minWidth: 320 },
          '::selection': { background: dark ? '#b8f780' : '#356c25', color: dark ? '#0c1709' : '#ffffff' },
        },
      },
      MuiButton: {
        defaultProps: { disableElevation: true },
        styleOverrides: {
          root: { minHeight: 44, paddingInline: 22, borderRadius: 12 },
          containedPrimary: { fontWeight: 800 },
        },
      },
      MuiChip: { styleOverrides: { root: { borderRadius: 8 } } },
      MuiTooltip: { styleOverrides: { tooltip: { borderRadius: 8 } } },
    },
  });
}
