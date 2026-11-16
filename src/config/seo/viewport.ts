
import type { Viewport } from 'next';

export const siteViewport: Viewport = {
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
