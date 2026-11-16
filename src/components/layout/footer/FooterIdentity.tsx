import Link from 'next/link';

import {
  Box,
  Stack,
  Typography,
} from '@mui/material';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import { FooterIdentityProps } from '@/types/layoutTypes/footer/footer.types';
import { footerStyles } from '@/styles/layoutStyles/footerStyles/footer.styles';

export function FooterIdentity({
  identity,
}: FooterIdentityProps) {
  return (
    <Stack
      spacing={3}
      sx={footerStyles.identity}
    >
      <Box
        component={Link}
        href="/"
        aria-label={`Voltar à página inicial de ${identity.shortName}`}
        sx={footerStyles.logo}
      >
        <Typography
          component="span"
          sx={footerStyles.monogram}
        >
          {identity.monogram}

          <Box
            component="span"
            sx={{ color: 'primary.main' }}
          >
            .
          </Box>
        </Typography>
      </Box>

      <Stack spacing={1}>
        <Typography
          component="h2"
          sx={footerStyles.identityName}
        >
          {identity.shortName}
        </Typography>

        <Typography
          variant="body2"
          sx={footerStyles.identityRole}
        >
          {identity.role}
        </Typography>
      </Stack>

      <Typography
        variant="body2"
        sx={footerStyles.identityDescription}
      >
        Projetando software com intenção, qualidade
        e atenção aos detalhes. Transformando
        desafios em soluções digitais.
      </Typography>

      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        sx={footerStyles.signature}
      >
        <AutoAwesomeRoundedIcon
          aria-hidden="true"
          sx={{
            fontSize: 16,
            color: 'primary.main',
          }}
        />

        <Typography
          variant="caption"
          sx={{
            fontWeight: 800,
            fontSize: '0.66rem',
            color: 'text.primary',
            letterSpacing: '0.08em',
          }}
        >
          BUILD WITH PURPOSE
        </Typography>
      </Stack>
    </Stack>
  );
}