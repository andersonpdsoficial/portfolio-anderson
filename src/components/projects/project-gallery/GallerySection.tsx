import {
  Box,
  Container,
} from '@mui/material';
import { GalleryHeader } from './GalleryHeader';
import { GalleryGrid } from './GalleryGrid';
import { GalleryHint } from './GalleryHint';
import { galleryStyles } from '../../../styles/projects/project-galleryStyles/gallery.styles';
import { GalleryGridProps } from '@/types/projectsTypes/gallery';

interface GallerySectionProps extends GalleryGridProps {
  readonly titleId: string;
}

export function GallerySection({
  images,
  title,
  titleId,
  onOpen,
}: GallerySectionProps) {
  return (
    <Box
      component="section"
      aria-labelledby={titleId}
      sx={galleryStyles.section}
    >
      <Box
        aria-hidden="true"
        sx={galleryStyles.glow}
      />

      <Container maxWidth="lg">
        <GalleryHeader
          titleId={titleId}
          total={images.length}
        />

        <GalleryGrid
          images={images}
          title={title}
          onOpen={onOpen}
        />

        <GalleryHint total={images.length} />
      </Container>
    </Box>
  );
}