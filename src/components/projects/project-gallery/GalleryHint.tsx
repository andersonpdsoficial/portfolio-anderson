import {
  Stack,
  Typography,
} from '@mui/material';
import ZoomInRoundedIcon from '@mui/icons-material/ZoomInRounded';

interface GalleryHintProps {
  readonly total: number;
}

export function GalleryHint({
  total,
}: GalleryHintProps) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={1}
      sx={{
        mt: 3,
        color: 'text.secondary',
      }}
    >
      <ZoomInRoundedIcon sx={{ fontSize: 17 }} />

      <Typography
        variant="caption"
        sx={{ lineHeight: 1.7 }}
      >
        {total > 1
          ? 'Clique para ampliar. Utilize as setas do teclado para navegar entre as imagens.'
          : 'Clique na imagem para ampliar e visualizar seus detalhes.'}
      </Typography>
    </Stack>
  );
}