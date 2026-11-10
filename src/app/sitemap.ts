import type { MetadataRoute } from 'next';
import { portfolioData } from '@/data/portfolioData';
import { getSiteUrl } from '@/functions/getSiteUrl';

export default function sitemap(): MetadataRoute.Sitemap {
  const site = getSiteUrl();
  const pages = ['', ...portfolioData.projects.map((project) => `projetos/${project.slug}`)];
  return pages.map((path) => ({
    url: new URL(path, site).href,
    changeFrequency: path ? 'monthly' : 'weekly',
    priority: path ? 0.7 : 1,
  }));
}
