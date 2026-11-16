import Image from 'next/image';

import {
  Box,
  Typography,
} from '@mui/material';
import { AboutMeetingImageProps } from '@/types/sections-types/about/about.types';
import { aboutStyles } from '@/styles/sections-styles/about.styles';

export function AboutMeetingImage({
  src = '/about/reuniao-apresentacao.webp',
  alt = 'Apresentação de uma interface digital durante uma reunião online',
}: AboutMeetingImageProps) {
  return (
    <Box sx={aboutStyles.meetingImage}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 900px) 90vw, 530px"
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />

      <Box
        aria-hidden="true"
        sx={aboutStyles.meetingOverlay}
      />

      <Typography
        variant="caption"
        sx={aboutStyles.meetingCaption}
      >
        VISÃO DE PRODUTO · COLABORAÇÃO
      </Typography>
    </Box>
  );
}