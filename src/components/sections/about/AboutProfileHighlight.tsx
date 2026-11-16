import Image from 'next/image';
import {
  Box,
  Stack,
  Typography,
} from '@mui/material';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import { AboutProfileHighlightProps } from '@/types/sections-types/about/about.types';
import { aboutStyles } from '@/styles/sections-styles/about.styles';


export function AboutProfileHighlight({
  src = '/about/reuniao.jpeg',
  alt = 'Profissional participando de uma reunião online',
}: AboutProfileHighlightProps) {
  return (
    <Box sx={aboutStyles.profileArea}>
      <Box
        aria-hidden="true"
        sx={aboutStyles.profileGlow}
      />

      <Box sx={aboutStyles.profileImage}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 600px) 55vw, 310px"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </Box>

      <Stack
        spacing={1.2}
        sx={aboutStyles.profileDescription}
      >
        <AutoAwesomeRoundedIcon
          aria-hidden="true"
          sx={{
            fontSize: 27,
            color: 'primary.main',
          }}
        />

        <Typography
          sx={{
            fontWeight: 800,
            color: 'text.primary',
            lineHeight: 1.35,
            fontSize: {
              xs: '0.86rem',
              sm: '1rem',
            },
          }}
        >
          Por trás de cada entrega, uma conversa.
        </Typography>

        <Typography
          variant="caption"
          sx={{
            color: 'text.secondary',
            lineHeight: 1.5,
          }}
        >
          Engenharia · Produto · Pessoas
        </Typography>
      </Stack>
    </Box>
  );
}