'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { PaletteMode } from '@mui/material';

interface ColorModeContextValue {
  mode: PaletteMode;
  toggleMode: () => void;
}

const ColorModeContext = createContext<ColorModeContextValue | undefined>(undefined);
const STORAGE_KEY = 'portfolio-color-mode';

export function ColorModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<PaletteMode>('dark');

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === 'light' || saved === 'dark') setMode(saved);
    } catch {
      // Armazenamento desabilitado: permanece o tema padrão.
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-color-mode', mode);
    document.documentElement.style.colorScheme = mode;
  }, [mode]);

  const toggleMode = useCallback(() => {
    setMode((current) => {
      const next = current === 'dark' ? 'light' : 'dark';
      try { window.localStorage.setItem(STORAGE_KEY, next); } catch { /* opcional */ }
      return next;
    });
  }, []);

  const value = useMemo(() => ({ mode, toggleMode }), [mode, toggleMode]);
  return <ColorModeContext.Provider value={value}>{children}</ColorModeContext.Provider>;
}

export function useColorMode(): ColorModeContextValue {
  const context = useContext(ColorModeContext);
  if (!context) throw new Error('useColorMode deve estar dentro de ColorModeProvider');
  return context;
}
