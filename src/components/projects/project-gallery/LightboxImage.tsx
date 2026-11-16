import Image from 'next/image';
import { Box } from '@mui/material';
import type { ProjectImage } from '@/types/portfolio';
import { galleryStyles } from '../../../styles/projects/project-galleryStyles/gallery.styles';
interface LightboxImageProps {
  readonly image: ProjectImage;
}
export function LightboxImage({
  image,
}: LightboxImageProps) {
  return (
    <Box sx={galleryStyles.lightboxImage}>
      <Image
        key={image.src}
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 1200px) 95vw, 1100px"
        style={{
          objectFit: 'contain',
          padding: '12px',
        }}
      />
    </Box>
  );
}