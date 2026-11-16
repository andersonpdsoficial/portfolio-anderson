'use client';

import type { ChangeEvent } from 'react';
import { Box } from '@mui/material';
import { ContactHoneypotProps } from '@/types/sections-types/about/contact.types';
import { contactStyles } from '@/styles/sections-styles/contact.styles';

export function ContactHoneypot({
  value,
  onChange,
}: ContactHoneypotProps) {
  function handleChange(
    event: ChangeEvent<HTMLInputElement>,
  ): void {
    onChange(event.target.value);
  }

  return (
    <Box
      aria-hidden="true"
      sx={contactStyles.honeypot}
    >
      <Box
        component="label"
        htmlFor="contact-website"
      >
        Não preencha este campo
      </Box>

      <Box
        component="input"
        id="contact-website"
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        value={value}
        onChange={handleChange}
      />
    </Box>
  );
}