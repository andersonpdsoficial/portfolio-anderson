'use client';

import { useId } from 'react';

import { useProjectGallery } from '@/hooks/useProjectGallery';
import { GallerySection } from './GallerySection';
import { GalleryLightbox } from './GalleryLightbox';
import { ProjectGalleryProps } from '@/types/projectsTypes/gallery';


export function ProjectGallery({
  images,
  title,
}: ProjectGalleryProps) {
  const titleId = useId();

  const {
    activeIndex,
    openGallery,
    closeGallery,
    nextImage,
    previousImage,
  } = useProjectGallery(images.length);

  if (images.length === 0) {
    return null;
  }

  return (
    <>
      <GallerySection
        images={images}
        title={title}
        titleId={titleId}
        onOpen={openGallery}
      />

      <GalleryLightbox
        title={title}
        images={images}
        activeIndex={activeIndex}
        onClose={closeGallery}
        onPrevious={previousImage}
        onNext={nextImage}
      />
    </>
  );
}