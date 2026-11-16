'use client';

import {
  Box,
  Drawer,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import { MobileNavItem } from './MobileNavItem';
import { MobileDrawerFooter } from './MobileDrawerFooter';
import { HeaderMobileDrawerProps } from '@/types/layoutTypes/header/header.types';
import { headerStyles } from '@/styles/layoutStyles/headerStyles/header.styles';

export function HeaderMobileDrawer({
  open,
  onClose,
  navigation,
  location,
}: HeaderMobileDrawerProps) {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      ModalProps={{
        keepMounted: true,
      }}
      PaperProps={{
        sx: headerStyles.drawerPaper,
      }}
      BackdropProps={{
        sx: headerStyles.drawerBackdrop,
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
        sx={headerStyles.drawerHeader}
      >
        <Stack
          direction="row"
          alignItems="center"
          spacing={1.3}
        >
          <Box sx={headerStyles.drawerHeaderIcon}>
            <CodeRoundedIcon />
          </Box>

          <Stack spacing={0.3}>
            <Typography
              sx={{
                color: 'text.primary',
                fontSize: '0.83rem',
                fontWeight: 800,
                letterSpacing: '0.11em',
              }}
            >
              NAVEGAÇÃO
            </Typography>

            <Typography
              variant="caption"
              sx={{
                color: 'text.secondary',
                fontSize: '0.69rem',
              }}
            >
              Explore o portfólio
            </Typography>
          </Stack>
        </Stack>

        <IconButton
          type="button"
          aria-label="Fechar menu de navegação"
          onClick={onClose}
          sx={headerStyles.drawerClose}
        >
          <CloseRoundedIcon />
        </IconButton>
      </Stack>

      <Stack
        component="nav"
        id="mobile-navigation"
        aria-label="Navegação para dispositivos móveis"
        spacing={1.2}
        sx={headerStyles.mobileNav}
      >
        {navigation.map((item, index) => (
          <MobileNavItem
            key={item.href}
            item={item}
            index={index}
            onNavigate={onClose}
          />
        ))}
      </Stack>

      <MobileDrawerFooter
        location={location}
        onNavigate={onClose}
      />
    </Drawer>
  );
}