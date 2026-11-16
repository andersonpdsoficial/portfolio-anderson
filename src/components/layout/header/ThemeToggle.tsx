'use client';

import {
  IconButton,
  Tooltip,
} from '@mui/material';

import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { ThemeToggleProps } from '@/types/layoutTypes/header/header.types';
import { headerStyles } from '@/styles/layoutStyles/headerStyles/header.styles';
export function ThemeToggle({
  mode,
  onToggle,
}: ThemeToggleProps) {
  const isDark = mode === 'dark';

  const label = isDark
    ? 'Ativar tema claro'
    : 'Ativar tema escuro';

  return (
    <Tooltip title={label} arrow>
      <IconButton
        type="button"
        onClick={onToggle}
        aria-label={label}
        size="medium"
        sx={headerStyles.themeToggle}
      >
        {isDark ? (
          <LightModeOutlinedIcon
            sx={{
              fontSize: 21,
              color: 'primary.main',
            }}
          />
        ) : (
          <DarkModeOutlinedIcon
            sx={{
              fontSize: 21,
              color: 'text.primary',
            }}
          />
        )}
      </IconButton>
    </Tooltip>
  );
}