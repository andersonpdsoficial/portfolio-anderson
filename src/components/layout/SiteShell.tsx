
import type { ReactNode } from 'react';

import { Header } from '@/components/layout/header/Index';
import { Footer } from '@/components/layout/footer/Index';

import { SkipToContent } from './SkipToContent';

interface SiteShellProps {
  readonly children: ReactNode;
}

export function SiteShell({
  children,
}: SiteShellProps) {
  return (
    <>
      <SkipToContent />

      <Header />

      {children}

      <Footer />
    </>
  );
}
