'use client';

import { useState } from 'react';

import {
  Box,
  Container,
  Stack,
} from '@mui/material';
import { portfolioData } from '@/data/portfolioData';
import { HeaderBackground } from './HeaderBackground';
import { HeaderBrand } from './HeaderBrand';
import { HeaderDesktopNav } from './HeaderDesktopNav';
import { HeaderActions } from './HeaderActions';
import { HeaderMobileDrawer } from './HeaderMobileDrawer';
import { headerStyles } from '@/styles/layoutStyles/headerStyles/header.styles';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { identity, navigation } = portfolioData;

  function openMenu(): void {
    setIsMenuOpen(true);
  }

  function closeMenu(): void {
    setIsMenuOpen(false);
  }

  return (
    <>
      <Box
        component="header"
        sx={headerStyles.root}
      >
        <HeaderBackground />

        <Container maxWidth="lg">
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={2}
            sx={headerStyles.bar}
          >
            <HeaderBrand
              identity={identity}
              onNavigate={closeMenu}
            />

            <HeaderDesktopNav
              navigation={navigation}
            />

            <HeaderActions
              isMenuOpen={isMenuOpen}
              onOpenMenu={openMenu}
            />
          </Stack>
        </Container>
      </Box>

      <HeaderMobileDrawer
        open={isMenuOpen}
        onClose={closeMenu}
        navigation={navigation}
        location={identity.location}
      />
    </>
  );
}