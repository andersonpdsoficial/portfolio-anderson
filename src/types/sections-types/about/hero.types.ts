import type { ElementType } from 'react';
import type { portfolioData } from '@/data/portfolioData';

export type HeroIdentity = typeof portfolioData.identity;

export interface HeroIntroProps {
  readonly identity: HeroIdentity;
}

export interface HeroFocusProps {
  readonly focus: HeroIdentity['focus'];
}

export interface SystemNodeData {
  readonly id: string;
  readonly index: string;
  readonly label: string;
  readonly meta: string;
  readonly description: string;
  readonly icon: ElementType;
  readonly accent: 'primary' | 'info' | 'secondary';
}

export interface SystemNodeProps {
  readonly system: SystemNodeData;
}