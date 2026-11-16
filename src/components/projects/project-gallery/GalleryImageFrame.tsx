import Image from 'next/image';
import { Box } from '@mui/material';
import ZoomInRoundedIcon from '@mui/icons-material/ZoomInRounded';
import { GalleryImageFrameProps } from '@/types/projectsTypes/gallery';
import { galleryStyles } from '@/styles/projects/project-galleryStyles/gallery.styles';

export function GalleryImageFrame({
  image,
  singleImage,
}: GalleryImageFrameProps) {
  return (
    <Box sx={galleryStyles.imageBackground}>
      <Box sx={galleryStyles.imageFrame}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={
            singleImage
              ? '(max-width: 1200px) 90vw, 1100px'
              : '(max-width: 600px) 90vw, (max-width: 1200px) 45vw, 550px'
          }
          style={{ objectFit: 'contain' }}
        />

        <Box
          aria-hidden="true"
          sx={galleryStyles.imageOverlay}
        />

        <Box
          data-zoom-icon
          aria-hidden="true"
          sx={galleryStyles.zoomIcon}
        >
          <ZoomInRoundedIcon />
        </Box>
      </Box>
    </Box>
  );
}