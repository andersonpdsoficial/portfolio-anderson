import {
  IconButton,
  Stack,
} from '@mui/material';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { galleryStyles } from '../../../styles/projects/project-galleryStyles/gallery.styles';
import { LightboxNavigationProps } from '@/types/projectsTypes/gallery';
export function LightboxNavigation({
  onPrevious,
  onNext,
}: LightboxNavigationProps) {
  return (
    <Stack
      direction="row"
      spacing={1}
      justifyContent={{
        xs: 'flex-end',
        sm: 'center',
      }}
      sx={{ flexShrink: 0 }}
    >
      <IconButton
        aria-label="Imagem anterior"
        onClick={onPrevious}
        sx={galleryStyles.navigationButton}
      >
        <ArrowBackIosNewRoundedIcon
          sx={{ fontSize: 18 }}
        />
      </IconButton>

      <IconButton
        aria-label="Próxima imagem"
        onClick={onNext}
        sx={galleryStyles.navigationButton}
      >
        <ArrowForwardIosRoundedIcon
          sx={{ fontSize: 18 }}
        />
      </IconButton>
    </Stack>
  );
}