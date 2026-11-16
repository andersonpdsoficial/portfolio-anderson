import {
  Box,
  Paper,
  Typography,
} from '@mui/material';

import SearchOffRoundedIcon from '@mui/icons-material/SearchOffRounded';
import { notFoundStyles } from '@/styles/notFoundStyles/notFound.styles';

export function NotFoundIllustration() {
  return (
    <Box sx={notFoundStyles.illustration}>
      <Typography
        component="span"
        aria-hidden="true"
        sx={notFoundStyles.errorNumber}
      >
        404
      </Typography>

      <Paper
        elevation={0}
        aria-hidden="true"
        sx={notFoundStyles.illustrationIcon}
      >
        <SearchOffRoundedIcon
          sx={{
            fontSize: {
              xs: 23,
              sm: 30,
            },
          }}
        />
      </Paper>
    </Box>
  );
}