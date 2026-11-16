import type { ProjectImage } from '@/types/portfolio';

export interface ProjectGalleryProps {
  readonly title: string;
  readonly images: readonly ProjectImage[];
}

export interface GalleryCardProps {
  readonly image: ProjectImage;
  readonly index: number;
  readonly total: number;
  readonly onOpen: (index: number) => void;
}

export interface GalleryGridProps {
  readonly images: readonly ProjectImage[];
  readonly title: string;
  readonly onOpen: (index: number) => void;
}

export interface GalleryImageFrameProps {
  readonly image: ProjectImage;
  readonly singleImage: boolean;
}

export interface GalleryLightboxProps {
  readonly title: string;
  readonly images: readonly ProjectImage[];
  readonly activeIndex: number | null;
  readonly onClose: () => void;
  readonly onPrevious: () => void;
  readonly onNext: () => void;
}

export interface LightboxHeaderProps {
  readonly title: string;
  readonly index: number;
  readonly total: number;
  readonly titleId: string;
  readonly onClose: () => void;
}

export interface LightboxNavigationProps {
  readonly onPrevious: () => void;
  readonly onNext: () => void;
}

export interface LightboxFooterProps
  extends LightboxNavigationProps {
  readonly image: ProjectImage;
  readonly showNavigation: boolean;
}