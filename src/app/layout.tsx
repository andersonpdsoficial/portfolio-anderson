
import type { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';

import Box from '@mui/material/Box';

import { AppRouterCacheProvider } from
  '@mui/material-nextjs/v15-appRouter';

import { Providers } from '@/components/layout/Providers';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

import { portfolioData } from '@/data/portfolioData';
import { getSiteUrl } from '@/functions/getSiteUrl';

// A apresentação global é controlada pelo ThemeProvider e GlobalStyles do MUI.

// ============================================================
// TIPOS
// ============================================================

interface RootLayoutProps {
  children: ReactNode;
}

// ============================================================
// CONFIGURAÇÕES DO SITE
// ============================================================

const { identity } = portfolioData;

const siteUrl = getSiteUrl();

const siteName = `Portfólio de ${identity.shortName}`;

const siteTitle =
  `${identity.shortName} | ${identity.role}`;

const siteDescription = identity.intro;

const ogImagePath = '/opengraph-image';

const isPreview =
  process.env.VERCEL_ENV === 'preview';

// ============================================================
// SEO — NEXT.JS METADATA API
// ============================================================

export const metadata: Metadata = {
  metadataBase: siteUrl,

  applicationName:
    'Portfólio | Anderson Pereira',

  title: {
    default: siteTitle,
    template: `%s | ${identity.shortName}`,
  },

  description: siteDescription,

  keywords: [
    'Anderson Pereira',
    'Anderson Pereira da Silva',
    'Engenheiro de Software',
    'Engenharia de Software',
    'Desenvolvimento Full Stack',
    'Desenvolvedor Full Stack',
    'Arquitetura de Software',
    'Next.js',
    'React',
    'TypeScript',
    'JavaScript',
    'Python',
    'Django',
    'FastAPI',
    'PostgreSQL',
    'Material UI',
    'Inteligência Artificial',
    'Machine Learning',
    'Portfólio de Desenvolvedor',
    'Porto Velho',
    'Rondônia',
  ],

  authors: [
    {
      name: identity.name,
      url: siteUrl.href,
    },
  ],

  creator: identity.name,

  publisher: identity.name,

  category: 'technology',

  alternates: {
    canonical: '/',
  },

  // ==========================================================
  // OPEN GRAPH
  // ==========================================================

  openGraph: {
    type: 'website',

    locale: 'pt_BR',

    url: siteUrl.href,

    siteName,

    title: siteTitle,

    description: siteDescription,

    images: [
      {
        url: ogImagePath,
        width: 1200,
        height: 630,
        alt: `Portfólio profissional de ${identity.name}`,
      },
    ],
  },

  // ==========================================================
  // TWITTER / X
  // ==========================================================

  twitter: {
    card: 'summary_large_image',

    title: siteTitle,

    description: siteDescription,

    images: [ogImagePath],
  },

  // ==========================================================
  // ROBÔS DE BUSCA
  // ==========================================================

  robots: {
    index: !isPreview,
    follow: !isPreview,

    googleBot: {
      index: !isPreview,
      follow: !isPreview,

      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },

  // ==========================================================
  // DETECÇÃO DE CONTEÚDO
  // ==========================================================

  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

// ============================================================
// CONFIGURAÇÃO DO VIEWPORT
// ============================================================

export const viewport: Viewport = {
  width: 'device-width',

  initialScale: 1,

  themeColor: [
    {
      media: '(prefers-color-scheme: dark)',
      color: '#080B11',
    },
    {
      media: '(prefers-color-scheme: light)',
      color: '#F5F6F2',
    },
  ],
};

// ============================================================
// DADOS ESTRUTURADOS — SCHEMA.ORG
// ============================================================

function getPersonStructuredData() {
  const professionalLinks = identity.links
    .filter((link) => link.type !== 'email')
    .map((link) => link.href)
    .filter((href) => {
      try {
        const url = new URL(href);

        return (
          url.protocol === 'https:' ||
          url.protocol === 'http:'
        );
      } catch {
        return false;
      }
    });

  return {
    '@context': 'https://schema.org',

    '@type': 'Person',

    '@id': `${siteUrl.href}#person`,

    name: identity.name,

    alternateName: identity.shortName,

    jobTitle: identity.role,

    description: identity.intro,

    url: siteUrl.href,

    address: {
      '@type': 'PostalAddress',

      addressLocality: 'Porto Velho',

      addressRegion: 'RO',

      addressCountry: 'BR',
    },

    ...(professionalLinks.length > 0
      ? { sameAs: professionalLinks }
      : {}),
  };
}

// ============================================================
// SERIALIZAÇÃO SEGURA DO JSON-LD
// ============================================================

function serializeJsonLd(
  value: Record<string, unknown>,
): string {
  return JSON.stringify(value)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026');
}

// ============================================================
// LINK DE ACESSIBILIDADE — MATERIAL UI
// ============================================================

function SkipToContent() {
  return (
    <Box
      component="a"
      href="#conteudo"
      sx={{
        position: 'fixed',

        top: 16,
        left: 16,

        zIndex: 2000,

        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',

        minHeight: 48,

        px: 2.5,
        py: 1.25,

        borderRadius: '12px',

        bgcolor: 'primary.main',
        color: 'primary.contrastText',

        fontWeight: 800,
        fontSize: '0.875rem',

        textDecoration: 'none',

        boxShadow:
          '0 12px 35px rgba(0,0,0,0.20)',

        transform: 'translateY(-180%)',

        transition: 'transform 200ms ease',

        '&:focus': {
          transform: 'translateY(0)',
        },

        '&:focus-visible': {
          transform: 'translateY(0)',

          outline: '3px solid',
          outlineColor: 'primary.main',
          outlineOffset: 3,
        },

        '@media (prefers-reduced-motion: reduce)': {
          transition: 'none',
        },
      }}
    >
      Pular para o conteúdo
    </Box>
  );
}

// ============================================================
// ROOT LAYOUT — NEXT.JS APP ROUTER
// ============================================================

export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
  const structuredData = getPersonStructuredData();

  const jsonLd = serializeJsonLd(structuredData);

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body suppressHydrationWarning>

        <AppRouterCacheProvider
          options={{
            key: 'mui',
          }}
        >

          <Providers>
            {/* ACESSIBILIDADE */}

            <SkipToContent />

            {/* NAVEGAÇÃO GLOBAL */}

            <Header />

            {/* CONTEÚDO DA ROTA ATUAL */}

            {children}

            {/* RODAPÉ GLOBAL */}

            <Footer />
          </Providers>
        </AppRouterCacheProvider>

        {/* ================================================
            SCHEMA.ORG — DADOS ESTRUTURADOS
        ================================================ */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLd,
          }}
        />
      </body>
    </html>
  );
}
