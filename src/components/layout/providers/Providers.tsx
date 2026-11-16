'use client';

import type { PropsWithChildren } from 'react';
import { ColorModeProvider } from '@/hooks/useColorMode';
import { MaterialThemeProvider } from './MaterialThemeProvider';
import { GlobalUI } from './GlobalUI';

type ProvidersProps = Readonly<PropsWithChildren>;

export function Providers({
  children,
}: ProvidersProps) {
  return (
    <ColorModeProvider>
      <MaterialThemeProvider>
        <GlobalUI />

        {children}
      </MaterialThemeProvider>
    </ColorModeProvider>
  );
}