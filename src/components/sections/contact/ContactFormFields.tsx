'use client';

import {
  Box,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import {
  contactSubjects,
} from '@/data/contactData';
import { ContactHoneypot } from './ContactHoneypot';
import { ContactFormFieldsProps } from '@/types/sections-types/about/contact.types';
import { contactStyles } from '@/styles/sections-styles/contact.styles';
import { ContactTextField } from './ContactTextField';
import { CONTACT_FIELD_LIMITS } from '@/functions/contactFunctions/contact.constants';

export function ContactFormFields({
  controller,
}: ContactFormFieldsProps) {
  const {
    form,
    website,
    errors,
    isSending,
    setField,
    validateField,
    setWebsite,
  } = controller;

  return (
    <Stack spacing={2.3}>
      <Box sx={contactStyles.fieldsGrid}>
        <ContactTextField
          name="name"
          label="Nome completo"
          placeholder="Como posso chamar você?"
          required
          value={form.name}
          autoComplete="name"
          maxLength={CONTACT_FIELD_LIMITS.name}
          error={errors.name}
          disabled={isSending}
          onChange={(event) =>
            setField('name', event.target.value)
          }
          onBlur={() => validateField('name')}
        />

        <ContactTextField
          name="email"
          label="E-mail"
          placeholder="voce@empresa.com"
          type="email"
          required
          value={form.email}
          autoComplete="email"
          maxLength={CONTACT_FIELD_LIMITS.email}
          error={errors.email}
          disabled={isSending}
          onChange={(event) =>
            setField('email', event.target.value)
          }
          onBlur={() => validateField('email')}
        />
      </Box>

      <ContactTextField
        name="company"
        label="Empresa / organização (opcional)"
        placeholder="Onde você trabalha?"
        value={form.company}
        autoComplete="organization"
        maxLength={CONTACT_FIELD_LIMITS.company}
        error={errors.company}
        disabled={isSending}
        onChange={(event) =>
          setField('company', event.target.value)
        }
        onBlur={() => validateField('company')}
      />

      <TextField
        name="subject"
        label="Assunto"
        required
        select
        fullWidth
        size="small"
        value={form.subject}
        onChange={(event) => {
          const value = event.target.value;

          if (
            value === '' ||
            contactSubjects.some(
              (subject) => subject === value,
            )
          ) {
            setField('subject', value);
          }
        }}
        onBlur={() => validateField('subject')}
        error={Boolean(errors.subject)}
        helperText={errors.subject}
        disabled={isSending}
        sx={contactStyles.field}
      >
        {contactSubjects.map((subject) => (
          <MenuItem
            key={subject}
            value={subject}
          >
            {subject}
          </MenuItem>
        ))}
      </TextField>

      <Box>
        <ContactTextField
          name="message"
          label="Sua mensagem"
          placeholder="Conte um pouco sobre a oportunidade, o projeto ou como podemos colaborar..."
          required
          multiline
          minRows={5}
          value={form.message}
          maxLength={CONTACT_FIELD_LIMITS.message}
          error={errors.message}
          disabled={isSending}
          onChange={(event) =>
            setField('message', event.target.value)
          }
          onBlur={() => validateField('message')}
        />

        <Typography
          variant="caption"
          sx={{
            display: 'block',
            textAlign: 'right',
            color: 'text.secondary',
            mt: 0.8,
          }}
        >
          {form.message.length} / 3.000 caracteres
        </Typography>
      </Box>

      <ContactHoneypot
        value={website}
        onChange={setWebsite}
      />
    </Stack>
  );
}