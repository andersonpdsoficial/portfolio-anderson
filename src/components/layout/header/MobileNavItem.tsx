'use client';

import Link from 'next/link';
import {
  Box,
  Typography,
} from '@mui/material';
import NorthEastRoundedIcon from '@mui/icons-material/NorthEastRounded';
import { MobileNavItemProps } from '@/types/layoutTypes/header/header.types';
import { headerStyles } from '@/styles/layoutStyles/headerStyles/header.styles';

export function MobileNavItem({
  item,
  index,
  onNavigate,
}: MobileNavItemProps) {
  const number = String(index + 1).padStart(2, '0');

  return (
    <Box
      component={Link}
      href={item.href}
      onClick={onNavigate}
      sx={headerStyles.mobileNavItem}
    >
      <Typography
        variant="caption"
        sx={{
          minWidth: 25,
          color: 'primary.main',
          fontSize: '0.73rem',
          fontWeight: 800,
          letterSpacing: '0.08em',
        }}
      >
        {number}
      </Typography>

      <Typography
        component="span"
        sx={{
          flex: 1,
          fontSize: '1rem',
          fontWeight: 750,
          letterSpacing: '-0.02em',
          color: 'inherit',
        }}
      >
        {item.label}
      </Typography>

      <NorthEastRoundedIcon
        className="mobile-nav-arrow"
        aria-hidden="true"
        sx={headerStyles.mobileNavArrow}
      />
    </Box>
  );
}