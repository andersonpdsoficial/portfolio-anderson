
'use client';

import {
  useMemo,
  type PropsWithChildren,
} from 'react';

import CssBaseline from '@mui/material/CssBaseline';

import {
  ThemeProvider,
} from '@mui/material/styles';

import {
  ColorModeProvider,
  useColorMode,
} from '@/hooks/useColorMode';

import {
  getPortfolioTheme,
} from '@/styles/theme';

import {
  PremiumGlobalStyles,
} from '@/styles/PremiumGlobalStyles';
import { BackToTop } from '@/components/ui/BackToTop';
import { EntryLoader } from '@/components/ui/EntryLoader';

// ============================================================
// TIPAGEM
// ============================================================

type ProvidersProps = Readonly<PropsWithChildren>;

// ============================================================
// THEME PROVIDER — MATERIAL UI
// ============================================================

function MaterialThemeProvider({
  children,
}: ProvidersProps) {
  const { mode } = useColorMode();

  const theme = useMemo(
    () => getPortfolioTheme(mode),
    [mode],
  );

  return (
    <ThemeProvider theme={theme}>
      {/* Normalização global MUI */}
      <CssBaseline enableColorScheme />

      {/* Estilos globais premium */}
      <PremiumGlobalStyles />
      <EntryLoader />
      <BackToTop />

      {/* Aplicação */}
      {children}
    </ThemeProvider>
  );
}

// ============================================================
// PROVIDERS GLOBAIS
// ============================================================

export function Providers({
  children,
}: ProvidersProps) {
  return (
    <ColorModeProvider>
      <MaterialThemeProvider>
        {children}
      </MaterialThemeProvider>
    </ColorModeProvider>
  );
}
