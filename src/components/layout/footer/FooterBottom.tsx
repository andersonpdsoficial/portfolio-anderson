import {
  Stack,
  Typography,
} from '@mui/material';

import { BackToTopButton } from './BackToTopButton';
import { FooterBottomProps } from '@/types/layoutTypes/footer/footer.types';
import { footerStyles } from '@/styles/layoutStyles/footerStyles/footer.styles';

export function FooterBottom({
  shortName,
  location,
  year,
}: FooterBottomProps) {
  return (
    <Stack
      direction={{
        xs: 'column',
        md: 'row',
      }}
      justifyContent="space-between"
      alignItems={{
        xs: 'flex-start',
        md: 'center',
      }}
      gap={{
        xs: 2.5,
        md: 3,
      }}
      sx={footerStyles.bottom}
    >
      <Stack spacing={0.7}>
        <Typography
          variant="caption"
          sx={footerStyles.copyright}
        >
          © {year} {shortName}. Todos os direitos
          reservados.
        </Typography>

        <Typography
          variant="caption"
          sx={{
            color: 'text.disabled',
            fontSize: '0.72rem',
          }}
        >
          Feito com Next.js, TypeScript e Material UI.
        </Typography>
      </Stack>

      <Typography
        variant="caption"
        sx={footerStyles.copyright}
      >
        {location}
      </Typography>

      <BackToTopButton />
    </Stack>
  );
}