'use client';

import {
  useId,
  type KeyboardEvent,
} from 'react';
import {
  Dialog,
  Stack,
} from '@mui/material';
import { LightboxHeader } from './LightboxHeader';
import { LightboxImage } from './LightboxImage';
import { LightboxFooter } from './LightboxFooter';
import { galleryStyles } from '../../../styles/projects/project-galleryStyles/gallery.styles';
import { GalleryLightboxProps } from '@/types/projectsTypes/gallery';

export function GalleryLightbox({
  title,
  images,
  activeIndex,
  onClose,
  onPrevious,
  onNext,
}: GalleryLightboxProps) {
  const titleId = useId();

  const currentImage =
    activeIndex !== null
      ? images[activeIndex] ?? null
      : null;

  const isOpen = currentImage !== null;

  function handleKeyDown(
    event: KeyboardEvent<HTMLDivElement>,
  ): void {
    if (
      event.altKey ||
      event.ctrlKey ||
      event.metaKey ||
      images.length <= 1
    ) {
      return;
    }

    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      onPrevious();
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      onNext();
    }
  }

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      onKeyDown={handleKeyDown}
      maxWidth="lg"
      fullWidth
      aria-labelledby={titleId}
      PaperProps={{
        sx: galleryStyles.lightboxPaper,
      }}
      BackdropProps={{
        sx: galleryStyles.lightboxBackdrop,
      }}
    >
      {currentImage !== null && activeIndex !== null && (
        <Stack
          sx={{
            width: '100%',
            minWidth: 0,
            overflow: 'hidden',
          }}
        >
          <LightboxHeader
            title={title}
            index={activeIndex}
            total={images.length}
            titleId={titleId}
            onClose={onClose}
          />

          <LightboxImage image={currentImage} />

          <LightboxFooter
            image={currentImage}
            showNavigation={images.length > 1}
            onPrevious={onPrevious}
            onNext={onNext}
          />
        </Stack>
      )}
    </Dialog>
  );
}