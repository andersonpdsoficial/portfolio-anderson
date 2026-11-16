import { contactStyles } from '@/styles/sections-styles/contact.styles';
import {
  Stack,
  Typography,
} from '@mui/material';

export function ContactFooter() {
  return (
    <Stack
      direction={{
        xs: 'column',
        sm: 'row',
      }}
      justifyContent="space-between"
      spacing={1}
      sx={contactStyles.footer}
    >
      <Typography
        variant="caption"
        sx={{
          color: 'text.secondary',
          fontWeight: 700,
          letterSpacing: '0.11em',
        }}
      >
        ABERTO A CONVERSAS
      </Typography>

      <Typography
        variant="caption"
        sx={{
          color: 'text.secondary',
          fontWeight: 700,
          letterSpacing: '0.11em',
        }}
      >
        AP · SOFTWARE ENGINEERING
      </Typography>
    </Stack>
  );
}