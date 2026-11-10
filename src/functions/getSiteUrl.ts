export function getSiteUrl(): URL {
  const configured = process.env.NEXT_PUBLIC_SITE_URL;
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
  const raw = configured || (vercel ? `https://${vercel}` : 'http://localhost:3000');
  try {
    return new URL(raw);
  } catch {
    return new URL('http://localhost:3000');
  }
}
