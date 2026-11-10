import type { MetadataRoute } from 'next';
import { getSiteUrl } from '@/functions/getSiteUrl';

export default function robots(): MetadataRoute.Robots {
  const site = getSiteUrl();
  return {
    rules: process.env.VERCEL_ENV === 'preview'
      ? { userAgent: '*', disallow: '/' }
      : { userAgent: '*', allow: '/' },
    sitemap: new URL('sitemap.xml', site).href,
  };
}
