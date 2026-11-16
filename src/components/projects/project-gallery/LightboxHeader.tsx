import {
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { formatProjectIndex } from '@/functions/projectVisuals';
import { galleryStyles } from '../../../styles/projects/project-galleryStyles/gallery.styles';
import { LightboxHeaderProps } from '@/types/projectsTypes/gallery';

export function LightboxHeader({
  title,
  index,
  total,
  titleId,
  onClose,
}: LightboxHeaderProps) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      gap={2}
      sx={{
        px: { xs: 2, sm: 3 },
        py: 2,
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Stack
        spacing={0.4}
        sx={{ minWidth: 0 }}
      >
        <Typography
          id={titleId}
          variant="subtitle2"
          sx={{
            fontWeight: 800,
            color: 'text.primary',
            overflowWrap: 'anywhere',
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="caption"
          aria-live="polite"
          aria-atomic="true"
          sx={{
            color: 'primary.main',
            fontWeight: 800,
            letterSpacing: '0.08em',
          }}
        >
          {formatProjectIndex(index + 1)}
          {' / '}
          {formatProjectIndex(total)}
        </Typography>
      </Stack>

      <IconButton
        aria-label="Fechar galeria"
        onClick={onClose}
        sx={galleryStyles.closeButton}
      >
        <CloseRoundedIcon />
      </IconButton>
    </Stack>
  );
}