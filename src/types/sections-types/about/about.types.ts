import { portfolioData } from '@/data/portfolioData';

export type AboutIdentity = typeof portfolioData.identity;

export type AboutCapability =
  (typeof portfolioData.capabilities)[number];

export interface AboutIntroProps {
  readonly about: AboutIdentity['about'];
}

export interface AboutPhotoHeaderProps {
  readonly year?: string;
}

export interface AboutMeetingImageProps {
  readonly src?: string;
  readonly alt?: string;
}

export interface AboutProfileHighlightProps {
  readonly src?: string;
  readonly alt?: string;
}

export interface AboutPhotoCardProps {
  readonly meetingImage?: string;
  readonly profileImage?: string;
}

export interface AboutCapabilitiesProps {
  readonly capabilities: readonly AboutCapability[];
}

export interface CapabilityCardProps {
  readonly capability: AboutCapability;
}