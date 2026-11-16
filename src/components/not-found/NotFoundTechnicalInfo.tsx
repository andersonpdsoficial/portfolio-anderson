import {
  Box,
  Paper,
  Stack,
  Typography,
} from '@mui/material';

import TerminalRoundedIcon from '@mui/icons-material/TerminalRounded';
import { notFoundStyles } from '@/styles/notFoundStyles/notFound.styles';
import { NOT_FOUND_CONFIG } from '@/constants/notFound.constants';

export function NotFoundTechnicalInfo() {
  return (
    <Paper
      elevation={0}
      sx={notFoundStyles.technicalPaper}
    >
      <Stack
        direction="row"
        alignItems="center"
        spacing={1.4}
        sx={{ textAlign: 'left' }}
      >
        <Box sx={notFoundStyles.technicalIcon}>
          <TerminalRoundedIcon
            sx={{ fontSize: 22 }}
          />
        </Box>

        <Stack
          spacing={0.4}
          sx={{ minWidth: 0 }}
        >
          <Typography
            variant="caption"
            sx={notFoundStyles.technicalCode}
          >
            {NOT_FOUND_CONFIG.technicalCode}
          </Typography>

          <Typography
            variant="body2"
            sx={notFoundStyles.technicalDescription}
          >
            {NOT_FOUND_CONFIG.technicalDescription}
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
}