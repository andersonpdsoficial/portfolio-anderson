'use client';

import {
  useMemo,
  type PropsWithChildren,
} from 'react';

import {
  ThemeProvider,
} from '@mui/material/styles';

import { useColorMode } from '@/hooks/useColorMode';
import { getPortfolioTheme } from '@/styles/theme';

type MaterialThemeProviderProps = Readonly<PropsWithChildren>;

export function MaterialThemeProvider({
  children,
}: MaterialThemeProviderProps) {
  const { mode } = useColorMode();

  const theme = useMemo(
    () => getPortfolioTheme(mode),
    [mode],
  );

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}