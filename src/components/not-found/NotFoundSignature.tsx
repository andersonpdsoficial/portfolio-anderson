import {
  Stack,
  Typography,
} from '@mui/material';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { notFoundStyles } from '@/styles/notFoundStyles/notFound.styles';
import { NOT_FOUND_CONFIG } from '@/constants/notFound.constants';


export function NotFoundSignature() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      spacing={1}
      sx={notFoundStyles.signature}
    >
      <HomeRoundedIcon
        aria-hidden="true"
        sx={notFoundStyles.signatureIcon}
      />

      <Typography
        variant="caption"
        sx={notFoundStyles.signatureText}
      >
        {NOT_FOUND_CONFIG.signature}
      </Typography>
    </Stack>
  );
}