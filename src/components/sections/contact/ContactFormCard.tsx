'use client';

import {
  Alert,
  Box,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { contactData } from '@/data/contactData';
import { ContactFormFields } from './ContactFormFields';
import { ContactSubmitButton } from './ContactSubmitButton';
import { ContactFormCardProps } from '@/types/sections-types/about/contact.types';
import { contactStyles } from '@/styles/sections-styles/contact.styles';

export function ContactFormCard({
  controller,
}: ContactFormCardProps) {
  const {
    feedback,
    isSending,
    submitForm,
  } = controller;

  return (
    <Paper
      elevation={0}
      sx={contactStyles.formPaper}
    >
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        sx={{ mb: 3 }}
      >
        <Box sx={contactStyles.formIcon}>
          <SendRoundedIcon />
        </Box>

        <Box sx={{ minWidth: 0 }}>
          <Typography
            component="h3"
            variant="h6"
            sx={{
              fontWeight: 800,
              letterSpacing: '-0.03em',
            }}
          >
            {contactData.formTitle}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              lineHeight: 1.6,
            }}
          >
            {contactData.formDescription}
          </Typography>
        </Box>
      </Stack>

      <Box
        component="form"
        noValidate
        onSubmit={submitForm}
        aria-busy={isSending}
      >
        <Stack spacing={2.3}>
          <ContactFormFields controller={controller} />

          {feedback && (
            <Alert
              severity={feedback.severity}
              variant="outlined"
              role="alert"
              sx={{ borderRadius: '12px' }}
            >
              {feedback.message}
            </Alert>
          )}

          <ContactSubmitButton
            isSending={isSending}
          />

          <Typography
            variant="caption"
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              lineHeight: 1.7,
            }}
          >
            Seus dados serão utilizados apenas para
            responder ao seu contato. Não é necessário
            criar uma conta.
          </Typography>
        </Stack>
      </Box>
    </Paper>
  );
}