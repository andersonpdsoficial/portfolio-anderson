import { NOT_FOUND_CONFIG } from '@/constants/notFound.constants';
import { notFoundStyles } from '@/styles/notFoundStyles/notFound.styles';
import {
  Box,
  Stack,
  Typography,
} from '@mui/material';


export function NotFoundBadge() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={1.2}
      sx={notFoundStyles.badge}
    >
      <Box
        aria-hidden="true"
        sx={notFoundStyles.badgeDot}
      />

      <Typography
        variant="overline"
        sx={notFoundStyles.badgeText}
      >
        {NOT_FOUND_CONFIG.badge}
      </Typography>
    </Stack>
  );
}