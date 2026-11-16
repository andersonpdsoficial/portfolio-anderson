'use client';

import Link from 'next/link';

import {
  Box,
  Button,
  Divider,
  Stack,
  Typography,
} from '@mui/material';

import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import { MobileDrawerFooterProps } from '@/types/layoutTypes/header/header.types';
import { headerStyles } from '@/styles/layoutStyles/headerStyles/header.styles';

export function MobileDrawerFooter({
  location,
  onNavigate,
}: MobileDrawerFooterProps) {
  return (
    <Box sx={headerStyles.drawerFooter}>
      <Button
        component={Link}
        href="/#contato"
        onClick={onNavigate}
        fullWidth
        variant="contained"
        color="primary"
        size="large"
        endIcon={<ArrowForwardRoundedIcon />}
        sx={headerStyles.drawerContactButton}
      >
        Vamos conversar
      </Button>

      <Divider
        sx={{
          my: 3,
          borderColor: 'divider',
        }}
      />

      <Stack
        direction="row"
        spacing={1.2}
        alignItems="center"
      >
        <PlaceOutlinedIcon
          aria-hidden="true"
          sx={{
            fontSize: 19,
            color: 'primary.main',
            flexShrink: 0,
          }}
        />

        <Typography
          variant="caption"
          sx={{
            color: 'text.secondary',
            fontSize: '0.78rem',
            fontWeight: 600,
            lineHeight: 1.6,
          }}
        >
          {location}
        </Typography>
      </Stack>

      <Typography
        variant="caption"
        sx={{
          display: 'block',
          mt: 2,
          color: 'text.disabled',
          fontSize: '0.65rem',
          fontWeight: 800,
          letterSpacing: '0.13em',
        }}
      >
        AP · SOFTWARE ENGINEERING
      </Typography>
    </Box>
  );
}