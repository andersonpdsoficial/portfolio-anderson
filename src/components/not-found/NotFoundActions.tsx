import Link from 'next/link';

import {
  Button,
  Stack,
} from '@mui/material';

import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import { notFoundStyles } from '@/styles/notFoundStyles/notFound.styles';
import { NOT_FOUND_LINKS } from '@/constants/notFound.constants';

export function NotFoundActions() {
  return (
    <Stack
      direction={{
        xs: 'column',
        sm: 'row',
      }}
      spacing={1.5}
      sx={notFoundStyles.actions}
    >
      <Button
        component={Link}
        href={NOT_FOUND_LINKS.home}
        variant="contained"
        color="primary"
        size="large"
        startIcon={<ArrowBackRoundedIcon />}
        sx={notFoundStyles.primaryButton}
      >
        Voltar ao início
      </Button>

      <Button
        component={Link}
        href={NOT_FOUND_LINKS.projects}
        variant="outlined"
        size="large"
        endIcon={<ArrowOutwardRoundedIcon />}
        sx={notFoundStyles.secondaryButton}
      >
        Explorar projetos
      </Button>
    </Stack>
  );
}