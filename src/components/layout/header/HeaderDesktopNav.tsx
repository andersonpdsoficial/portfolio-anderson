import Link from 'next/link';

import {
  Box,
  Stack,
} from '@mui/material';
import { HeaderDesktopNavProps } from '@/types/layoutTypes/header/header.types';
import { headerStyles } from '@/styles/layoutStyles/headerStyles/header.styles';

export function HeaderDesktopNav({
  navigation,
}: HeaderDesktopNavProps) {
  return (
    <Stack
      component="nav"
      aria-label="Navegação principal"
      direction="row"
      alignItems="center"
      justifyContent="center"
      spacing={{ md: 0, lg: 0.7 }}
      sx={headerStyles.desktopNav}
    >
      {navigation.slice(0, 4).map((item) => (
        <Box
          component={Link}
          key={item.href}
          href={item.href}
          sx={headerStyles.navLink}
        >
          {item.label}
        </Box>
      ))}
    </Stack>
  );
}