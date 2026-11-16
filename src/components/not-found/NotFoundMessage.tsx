import { NOT_FOUND_CONFIG } from '@/constants/notFound.constants';
import { notFoundStyles } from '@/styles/notFoundStyles/notFound.styles';
import {
  Box,
  Stack,
  Typography,
} from '@mui/material';


export function NotFoundMessage() {
  return (
    <Stack
      spacing={2}
      alignItems="center"
    >
      <Typography
        id={NOT_FOUND_CONFIG.headingId}
        component="h1"
        sx={notFoundStyles.heading}
      >
        {NOT_FOUND_CONFIG.title}{' '}

        <Box
          component="span"
          sx={notFoundStyles.headingHighlight}
        >
          {NOT_FOUND_CONFIG.titleHighlight}
        </Box>
      </Typography>

      <Typography
        variant="body1"
        sx={notFoundStyles.description}
      >
        {NOT_FOUND_CONFIG.description}
      </Typography>
    </Stack>
  );
}