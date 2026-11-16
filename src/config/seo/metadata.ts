
import type { Metadata } from 'next';

import { portfolioData } from '@/data/portfolioData';
import { getSiteUrl } from '@/functions/getSiteUrl';

const { identity } = portfolioData;

const siteUrl = getSiteUrl();

const siteName = `Portfólio de ${identity.shortName}`;

const siteTitle = `${identity.shortName} | ${identity.role}`;

const siteDescription = identity.intro;

const ogImagePath = '/opengraph-image';

const isPreview = process.env.VERCEL_ENV === 'preview';

export const siteMetadata: Metadata = {
  metadataBase: siteUrl,

  applicationName: 'Portfólio | Anderson Pereira',

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

  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [ogImagePath],
  },

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

  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};
