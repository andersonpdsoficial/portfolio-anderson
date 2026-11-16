import {
  Box,
  Chip,
  Stack,
  Typography,
} from '@mui/material';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import PhotoLibraryOutlinedIcon from '@mui/icons-material/PhotoLibraryOutlined';
import { formatProjectIndex } from '@/functions/projectVisuals';
import { galleryStyles } from '../../../styles/projects/project-galleryStyles/gallery.styles';
interface GalleryHeaderProps {
  readonly titleId: string;
  readonly total: number;
}

export function GalleryHeader({
  titleId,
  total,
}: GalleryHeaderProps) {
  return (
    <Stack
      spacing={2.5}
      sx={{ mb: { xs: 4, md: 5 } }}
    >
      <Stack
        direction="row"
        alignItems="center"
        spacing={1.5}
      >
        <Box sx={galleryStyles.headerIcon}>
          <CollectionsOutlinedIcon />
        </Box>

        <Typography
          variant="overline"
          sx={{
            color: 'primary.main',
            fontWeight: 800,
            letterSpacing: '0.17em',
          }}
        >
          06 / VISÃO VISUAL
        </Typography>
      </Stack>

      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        alignItems={{
          xs: 'flex-start',
          sm: 'flex-end',
        }}
        justifyContent="space-between"
        gap={2.5}
      >
        <Box>
          <Typography
            id={titleId}
            component="h2"
            sx={galleryStyles.heading}
          >
            Por dentro do{' '}
            <Box
              component="span"
              sx={galleryStyles.headingGradient}
            >
              projeto.
            </Box>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mt: 1.5,
              color: 'text.secondary',
              lineHeight: 1.8,
              maxWidth: 650,
            }}
          >
            Explore as imagens e interfaces deste
            projeto. Clique em uma imagem para
            visualizar seus detalhes.
          </Typography>
        </Box>

        <Chip
          icon={<PhotoLibraryOutlinedIcon />}
          label={`${formatProjectIndex(total)} VISUAIS`}
          variant="outlined"
          sx={galleryStyles.countChip}
        />
      </Stack>
    </Stack>
  );
}