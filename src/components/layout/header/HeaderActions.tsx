'use client';

import Link from 'next/link';
import {
  Button,
  IconButton,
  Stack,
  Tooltip,
} from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import NorthEastRoundedIcon from '@mui/icons-material/NorthEastRounded';
import { useColorMode } from '@/hooks/useColorMode';
import { ThemeToggle } from './ThemeToggle';
import { HeaderActionsProps } from '@/types/layoutTypes/header/header.types';
import { headerStyles } from '@/styles/layoutStyles/headerStyles/header.styles';

export function HeaderActions({
  isMenuOpen,
  onOpenMenu,
}: HeaderActionsProps) {
  const { mode, toggleMode } = useColorMode();

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="flex-end"
      spacing={{ xs: 0.8, sm: 1.2 }}
      sx={headerStyles.actions}
    >
      <ThemeToggle
        mode={mode}
        onToggle={toggleMode}
      />

      <Button
        component={Link}
        href="/#contato"
        variant="contained"
        color="primary"
        endIcon={
          <NorthEastRoundedIcon
            sx={{ fontSize: 18 }}
          />
        }
        sx={headerStyles.contactButton}
      >
        Vamos conversar
      </Button>

      <Tooltip title="Abrir menu">
        <IconButton
          type="button"
          onClick={onOpenMenu}
          aria-label="Abrir menu de navegação"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          sx={headerStyles.menuButton}
        >
          <MenuRoundedIcon
            sx={{ fontSize: 25 }}
          />
        </IconButton>
      </Tooltip>
    </Stack>
  );
}