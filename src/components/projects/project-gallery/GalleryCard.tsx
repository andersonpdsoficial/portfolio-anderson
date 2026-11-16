import {
  Box,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import OpenInFullRoundedIcon from '@mui/icons-material/OpenInFullRounded';
import { formatProjectIndex } from '@/functions/projectVisuals';
import { GalleryImageFrame } from './GalleryImageFrame';
import { galleryStyles } from '../../../styles/projects/project-galleryStyles/gallery.styles';
import { GalleryCardProps } from '@/types/projectsTypes/gallery';

export function GalleryCard({
  image,
  index,
  total,
  onOpen,
}: GalleryCardProps) {
  return (
    <Box
      component="li"
      sx={{ minWidth: 0 }}
    >
      <Paper
        component="button"
        type="button"
        onClick={() => onOpen(index)}
        aria-label={`Ampliar imagem ${index + 1} de ${total}: ${image.alt}`}
        elevation={0}
        sx={galleryStyles.card}
      >
        <GalleryImageFrame
          image={image}
          singleImage={total === 1}
        />

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          gap={2}
          sx={{
            px: { xs: 2.2, md: 2.7 },
            py: 2.2,
          }}
        >
          <Stack
            direction="row"
            spacing={1.5}
            alignItems="center"
            sx={{ minWidth: 0 }}
          >
            <Typography
              variant="caption"
              sx={{
                color: 'primary.main',
                fontWeight: 800,
                flexShrink: 0,
              }}
            >
              {formatProjectIndex(index + 1)}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: 'text.primary',
                fontWeight: 700,
                lineHeight: 1.5,
                overflowWrap: 'anywhere',
              }}
            >
              {image.caption || `Tela ${index + 1}`}
            </Typography>
          </Stack>

          <OpenInFullRoundedIcon
            sx={{
              fontSize: 18,
              color: 'primary.main',
              flexShrink: 0,
            }}
          />
        </Stack>
      </Paper>
    </Box>
  );
}