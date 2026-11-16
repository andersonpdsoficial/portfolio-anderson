import Image from 'next/image';
import {
  Box,
  Stack,
  Typography,
} from '@mui/material';
import type { ProjectBrowserFrameProps } from '../../../types/projectsTypes/projectCard.types';
import { projectCardStyles } from '../../../styles/projects/project-cardStyles/projectCard.styles';

const BROWSER_DOTS = [
  '#FF6B6B',
  '#FFC76A',
  '#72DA95',
] as const;

export function ProjectBrowserFrame({
  thumbnail,
  thumbnailAlt,
  projectNumber,
  accentColor,
}: ProjectBrowserFrameProps) {
  return (
    <Box sx={projectCardStyles.browserFrame(accentColor)}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={projectCardStyles.browserToolbar}
      >
        <Stack
          direction="row"
          spacing={0.65}
          alignItems="center"
          aria-hidden="true"
        >
          {BROWSER_DOTS.map((color) => (
            <Box
              key={color}
              sx={projectCardStyles.browserDot(color)}
            />
          ))}
        </Stack>

        <Typography
          variant="caption"
          sx={projectCardStyles.browserLabel}
        >
          PROJECT / {projectNumber}
        </Typography>
      </Stack>

      <Box sx={projectCardStyles.browserImage}>
        <Image
          src={thumbnail}
          alt={thumbnailAlt}
          fill
          loading="lazy"
          sizes="(max-width: 600px) 90vw, (max-width: 1200px) 45vw, 30vw"
          style={{
            objectFit: 'contain',
            objectPosition: 'center',
          }}
        />

        <Box
          aria-hidden="true"
          sx={projectCardStyles.browserImageOverlay}
        />
      </Box>
    </Box>
  );
}