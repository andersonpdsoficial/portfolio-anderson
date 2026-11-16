import Link from 'next/link';

import {
  Box,
  Stack,
  Typography,
} from '@mui/material';
import { FooterNavigationProps } from '@/types/layoutTypes/footer/footer.types';
import { footerStyles } from '@/styles/layoutStyles/footerStyles/footer.styles';

export function FooterNavigation({
  navigation,
}: FooterNavigationProps) {
  return (
    <Stack
      component="nav"
      aria-label="Navegação do rodapé"
      spacing={2}
      sx={{ minWidth: 0 }}
    >
      <Typography
        component="h3"
        sx={footerStyles.columnHeading}
      >
        NAVEGAÇÃO
      </Typography>

      {navigation.map((item) => (
        <Box
          component={Link}
          key={item.href}
          href={item.href}
          sx={footerStyles.link}
        >
          <Box
            aria-hidden="true"
            sx={footerStyles.navDot}
          />

          <Typography
            component="span"
            sx={{
              fontSize: 'inherit',
              fontWeight: 'inherit',
              color: 'inherit',
            }}
          >
            {item.label}
          </Typography>
        </Box>
      ))}
    </Stack>
  );
}