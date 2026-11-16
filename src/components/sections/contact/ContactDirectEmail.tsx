import {
  Box,
  Typography,
} from '@mui/material';
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import { ContactDirectEmailProps } from '@/types/sections-types/about/contact.types';
import { contactStyles } from '@/styles/sections-styles/contact.styles';

export function ContactDirectEmail({
  email,
}: ContactDirectEmailProps) {
  return (
    <Box sx={{ pt: 2 }}>
      <Typography
        variant="overline"
        sx={{
          color: 'text.secondary',
          fontWeight: 800,
          letterSpacing: '0.13em',
        }}
      >
        PREFERE O E-MAIL DIRETO?
      </Typography>

      <Box
        component="a"
        href={`mailto:${email}`}
        sx={contactStyles.directEmail}
      >
        <AlternateEmailRoundedIcon
          color="primary"
          fontSize="small"
        />

        <Box
          component="span"
          sx={{ minWidth: 0 }}
        >
          {email}
        </Box>

        <ArrowOutwardRoundedIcon
          sx={{
            fontSize: 18,
            flexShrink: 0,
          }}
        />
      </Box>
    </Box>
  );
}