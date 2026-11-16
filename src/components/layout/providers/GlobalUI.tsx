'use client';

import CssBaseline from '@mui/material/CssBaseline';
import { PremiumGlobalStyles } from '@/styles/PremiumGlobalStyles';
import { BackToTop } from '@/components/ui/BackToTop';
import { EntryLoader } from '@/components/ui/EntryLoader';

export function GlobalUI() {
  return (
    <>
      <CssBaseline enableColorScheme />

      <PremiumGlobalStyles />

      <EntryLoader />

      <BackToTop />
    </>
  );
}