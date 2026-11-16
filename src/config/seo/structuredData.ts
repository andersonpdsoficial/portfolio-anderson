
import { portfolioData } from '@/data/portfolioData';
import { getSiteUrl } from '@/functions/getSiteUrl';

interface PersonPostalAddress {
  readonly '@type': 'PostalAddress';
  readonly addressLocality: string;
  readonly addressRegion: string;
  readonly addressCountry: string;
}

export interface PersonStructuredData {
  readonly '@context': 'https://schema.org';
  readonly '@type': 'Person';
  readonly '@id': string;
  readonly name: string;
  readonly alternateName: string;
  readonly jobTitle: string;
  readonly description: string;
  readonly url: string;
  readonly address: PersonPostalAddress;
  readonly sameAs?: readonly string[];
}

/**
 * Mantém apenas URLs profissionais válidas
 * usando os protocolos HTTP e HTTPS.
 */
function getProfessionalLinks(): string[] {
  const { links } = portfolioData.identity;

  return links
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
}

/**
 * Gera os dados estruturados do perfil profissional.
 */
export function getPersonStructuredData(): PersonStructuredData {
  const { identity } = portfolioData;

  const siteUrl = getSiteUrl();

  const professionalLinks = getProfessionalLinks();

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

/**
 * Serialização segura para inserção em script JSON-LD.
 *
 * Evita que caracteres especiais sejam interpretados
 * como marcação HTML.
 */
export function serializeJsonLd(
  value: PersonStructuredData,
): string {
  return JSON.stringify(value)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
}
