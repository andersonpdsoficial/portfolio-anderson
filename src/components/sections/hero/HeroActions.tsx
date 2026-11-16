import Link from 'next/link';

import {
  Button,
  Stack,
} from '@mui/material';

import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import SouthRoundedIcon from '@mui/icons-material/SouthRounded';
import { HERO_LINKS } from '@/constants/hero.constants';
import { heroStyles } from '@/styles/sections-styles/hero.styles';

export function HeroActions() {
  return (
    <Stack
      direction={{
        xs: 'column',
        sm: 'row',
      }}
      spacing={1.5}
      sx={{ pt: 1 }}
    >
      <Button
        component={Link}
        href={HERO_LINKS.projects}
        variant="contained"
        color="primary"
        size="large"
        endIcon={<ArrowForwardRoundedIcon />}
        sx={heroStyles.primaryButton}
      >
        Explorar projetos
      </Button>

      <Button
        component={Link}
        href={HERO_LINKS.about}
        variant="outlined"
        size="large"
        endIcon={<SouthRoundedIcon />}
        sx={heroStyles.secondaryButton}
      >
        Conheça meu trabalho
      </Button>
    </Stack>
  );
}