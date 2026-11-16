'use client';

import {
  useCallback,
  useState,
} from 'react';

import { getCircularIndex } from '@/functions/galleryNavigation';

interface UseProjectGalleryResult {
  readonly activeIndex: number | null;
  readonly openGallery: (index: number) => void;
  readonly closeGallery: () => void;
  readonly nextImage: () => void;
  readonly previousImage: () => void;
}

export function useProjectGallery(
  total: number,
): UseProjectGalleryResult {
  const [activeIndex, setActiveIndex] = useState<
    number | null
  >(null);

  const openGallery = useCallback(
    (index: number): void => {
      if (
        Number.isInteger(index) &&
        index >= 0 &&
        index < total
      ) {
        setActiveIndex(index);
      }
    },
    [total],
  );

  const closeGallery = useCallback((): void => {
    setActiveIndex(null);
  }, []);

  const navigate = useCallback(
    (delta: number): void => {
      setActiveIndex((previous) => {
        if (
          previous === null ||
          previous < 0 ||
          previous >= total ||
          total <= 0
        ) {
          return null;
        }

        return getCircularIndex(previous, delta, total);
      });
    },
    [total],
  );

  const nextImage = useCallback((): void => {
    navigate(1);
  }, [navigate]);

  const previousImage = useCallback((): void => {
    navigate(-1);
  }, [navigate]);

  return {
    activeIndex,
    openGallery,
    closeGallery,
    nextImage,
    previousImage,
  };
}