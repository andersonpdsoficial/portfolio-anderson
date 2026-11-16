import type { portfolioData } from '@/data/portfolioData';

export type HeaderIdentity =
  typeof portfolioData.identity;

export type HeaderNavigationItem =
  (typeof portfolioData.navigation)[number];

export interface HeaderBrandProps {
  readonly identity: HeaderIdentity;
  readonly onNavigate?: () => void;
}

export interface HeaderDesktopNavProps {
  readonly navigation: readonly HeaderNavigationItem[];
}

export interface HeaderActionsProps {
  readonly isMenuOpen: boolean;
  readonly onOpenMenu: () => void;
}

export interface ThemeToggleProps {
  readonly mode: 'light' | 'dark';
  readonly onToggle: () => void;
}

export interface HeaderMobileDrawerProps {
  readonly open: boolean;
  readonly onClose: () => void;
  readonly navigation: readonly HeaderNavigationItem[];
  readonly location: string;
}

export interface MobileNavItemProps {
  readonly item: HeaderNavigationItem;
  readonly index: number;
  readonly onNavigate: () => void;
}

export interface MobileDrawerFooterProps {
  readonly location: string;
  readonly onNavigate: () => void;
}