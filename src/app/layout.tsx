
import type { ReactNode } from 'react';
import { AppRouterCacheProvider } from
  '@mui/material-nextjs/v15-appRouter';
import { Providers } from
  '@/components/layout/providers/Providers';
import { SiteShell } from
  '@/components/layout/SiteShell';
import { PersonJsonLd } from
  '@/components/layout/PersonJsonLd';
import {
  siteMetadata,
  siteViewport,
} from '@/config/seo';

interface RootLayoutProps {
  readonly children: ReactNode;
}

export const metadata = siteMetadata;

export const viewport = siteViewport;

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <AppRouterCacheProvider
          options={{ key: 'mui' }}
        >
          <Providers>
            <SiteShell>
              {children}
            </SiteShell>
          </Providers>
        </AppRouterCacheProvider>

        <PersonJsonLd />
      </body>
    </html>
  );
}
