'use client';

import { useEffect } from 'react';

import {
  Box,
  Button,
  Dialog,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { ContactSuccessDialogProps } from '@/types/sections-types/about/contact.types';
import { contactStyles } from '@/styles/sections-styles/contact.styles';
import { SUCCESS_POPUP_DURATION } from '@/functions/contactFunctions/contact.constants';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export function ContactSuccessDialog({
  open,
  onClose,
}: ContactSuccessDialogProps) {
  useEffect(() => {
    if (!open) {
      return;
    }

    const timer = window.setTimeout(
      onClose,
      SUCCESS_POPUP_DURATION,
    );

    return () => {
      window.clearTimeout(timer);
    };
  }, [open, onClose]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="contact-success-title"
      aria-describedby="contact-success-description"
      fullWidth
      maxWidth="xs"
      PaperProps={{
        sx: contactStyles.successPaper,
      }}
      BackdropProps={{
        sx: contactStyles.successBackdrop,
      }}
    >
      <IconButton
        aria-label="Fechar mensagem"
        onClick={onClose}
        sx={contactStyles.successClose}
      >
        <CloseRoundedIcon />
      </IconButton>

      <Stack
        alignItems="center"
        spacing={2}
        sx={{ textAlign: 'center' }}
      >
        <Box sx={contactStyles.successIcon}>
          <CheckCircleOutlineRoundedIcon
            sx={{
              color: '#183518',
              fontSize: 50,
            }}
          />
        </Box>

        <Typography
          id="contact-success-title"
          component="h2"
          sx={{
            fontSize: {
              xs: '1.6rem',
              sm: '1.85rem',
            },
            fontWeight: 800,
            letterSpacing: '-0.04em',
          }}
        >
          Mensagem enviada!
        </Typography>

        <Typography
          id="contact-success-description"
          variant="body1"
          sx={{
            maxWidth: 330,
            color: 'text.secondary',
            lineHeight: 1.8,
          }}
        >
          Obrigado pelo contato. Responderei pelo
          e-mail informado.
        </Typography>

        <Box sx={contactStyles.successBadge}>
          <CheckCircleOutlineRoundedIcon
            color="success"
            sx={{ fontSize: 17 }}
          />

          <Typography
            variant="caption"
            sx={{ fontWeight: 700 }}
          >
            Formulário enviado com sucesso
          </Typography>
        </Box>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          size="large"
          onClick={onClose}
          sx={{
            mt: 2,
            minHeight: 49,
            borderRadius: '13px',
            fontWeight: 800,
          }}
        >
          Fechar
        </Button>

        <Typography
          variant="caption"
          sx={{ color: 'text.secondary' }}
        >
          Esta janela será fechada automaticamente.
        </Typography>
      </Stack>

      <Box sx={contactStyles.successProgressContainer}>
        {open && (
          <Box sx={contactStyles.successProgress} />
        )}
      </Box>
    </Dialog>
  );
}