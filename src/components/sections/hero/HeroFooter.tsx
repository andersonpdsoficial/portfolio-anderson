import {
  Box,
  Container,
  Stack,
  Typography,
} from '@mui/material';
import SouthRoundedIcon from '@mui/icons-material/SouthRounded';
import { heroStyles } from '@/styles/sections-styles/hero.styles';

export function HeroFooter() {
  return (
    <Container
      maxWidth="lg"
      sx={heroStyles.footerContainer}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Stack
          direction="row"
          alignItems="center"
          spacing={1.5}
        >
          <Box
            aria-hidden="true"
            sx={heroStyles.footerLine}
          />

          <Typography
            variant="caption"
            sx={{
              color: 'text.secondary',
              fontWeight: 700,
              letterSpacing: '0.12em',
              fontSize: {
                xs: '0.61rem',
                sm: '0.68rem',
              },
            }}
          >
            SCROLL PARA EXPLORAR
          </Typography>

          <SouthRoundedIcon
            aria-hidden="true"
            sx={heroStyles.scrollIcon}
          />
        </Stack>

        <Typography
          variant="caption"
          sx={{
            color: 'text.disabled',
            fontWeight: 700,
            letterSpacing: '0.12em',
          }}
        >
          AP / 2026
        </Typography>
      </Stack>
    </Container>
  );
}