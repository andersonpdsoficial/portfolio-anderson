import { Box } from '@mui/material';
import { GalleryCard } from './GalleryCard';
import { galleryStyles } from '../../../styles/projects/project-galleryStyles/gallery.styles';
import { GalleryGridProps } from '@/types/projectsTypes/gallery';

export function GalleryGrid({
  images,
  title,
  onOpen,
}: GalleryGridProps) {
  return (
    <Box
      component="ul"
      aria-label={`Galeria visual de ${title}`}
      sx={galleryStyles.grid(images.length === 1)}
    >
      {images.map((image, index) => (
        <GalleryCard
          key={`${image.src}-${index}`}
          image={image}
          index={index}
          total={images.length}
          onOpen={onOpen}
        />
      ))}
    </Box>
  );
}