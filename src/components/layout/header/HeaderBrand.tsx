import Link from 'next/link';

import {
  Box,
  Typography,
} from '@mui/material';
import { HeaderBrandProps } from '@/types/layoutTypes/header/header.types';
import { headerStyles } from '@/styles/layoutStyles/headerStyles/header.styles';

export function HeaderBrand({
  identity,
  onNavigate,
}: HeaderBrandProps) {
  return (
    <Box
      component={Link}
      href="/"
      onClick={onNavigate}
      aria-label={`${identity.shortName}, página inicial`}
      sx={headerStyles.brandLink}
    >
      <Box
        className="header-brand-mark"
        sx={headerStyles.brandMark}
      >
        <Typography
          component="span"
          sx={headerStyles.brandMonogram}
        >
          {identity.monogram}
        </Typography>

        <Box
          aria-hidden="true"
          sx={headerStyles.brandDot}
        />
      </Box>

      <Typography
        component="span"
        sx={headerStyles.brandName}
      >
        anderson
        <Box
          component="span"
          sx={{ color: 'primary.main' }}
        >
          .dev
        </Box>
      </Typography>
    </Box>
  );
}