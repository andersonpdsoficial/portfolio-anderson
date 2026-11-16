import type { portfolioData } from '@/data/portfolioData';

export type FooterIdentityData =
  typeof portfolioData.identity;

export type FooterNavigationItem =
  (typeof portfolioData.navigation)[number];

export type FooterSocialLink =
  FooterIdentityData['links'][number];

export interface FooterIdentityProps {
  readonly identity: FooterIdentityData;
}

export interface FooterNavigationProps {
  readonly navigation: readonly FooterNavigationItem[];
}

export interface FooterSocialLinksProps {
  readonly links: readonly FooterSocialLink[];
}

export interface FooterBottomProps {
  readonly shortName: string;
  readonly location: string;
  readonly year: number;
}