'use client';

import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react';
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  Dialog,
  IconButton,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { alpha, keyframes } from '@mui/material/styles';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { portfolioData } from '@/data/portfolioData';
import { contactData, contactSubjects, type ContactSubject } from '@/data/contactData';
import {
  validateContactMessage,
  type ContactField,
  type ContactFieldErrors,
  type ContactMessage,
} from '@/functions/contactValidation';
import { Reveal } from '@/components/ui/Reveal';
import { ContactSubmissionError, submitContactForm } from '@/functions/submitContactForm';

type ContactDraft = Omit<ContactMessage, 'subject'> & {
  subject: ContactSubject | '';
};

type Feedback = { severity: 'error'; message: string } | null;

const SUCCESS_POPUP_DURATION = 6500;
const emptyForm: ContactDraft = {
  name: '',
  email: '',
  company: '',
  subject: '',
  message: '',
};

const timeoutBar = keyframes`
  from { transform: scaleX(1); }
  to { transform: scaleX(0); }
`;

const fieldSx = {
  '& .MuiOutlinedInput-root': {
    borderRadius: '14px',
    backgroundColor: 'background.default',
    transition: 'box-shadow 200ms ease, border-color 200ms ease',
    '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'primary.main' },
    '&.Mui-focused': { boxShadow: '0 0 0 3px rgba(140,210,130,0.12)' },
  },
  '& .MuiFormHelperText-root': { ml: 0 },
} as const;

export function Contact() {
  const [form, setForm] = useState<ContactDraft>(emptyForm);
  const [website, setWebsite] = useState('');
  const [errors, setErrors] = useState<ContactFieldErrors>({});
  const [feedback, setFeedback] = useState<Feedback>(null);
  const [isSending, setIsSending] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const { identity } = portfolioData;
  const contactEmail = identity.email ?? contactData.recipientEmail;
  const socialLinks = identity.links.filter(
    (link) => link.type === 'github' || link.type === 'linkedin',
  );

  useEffect(() => {
    if (!isSuccessOpen) return;
    const timer = window.setTimeout(() => setIsSuccessOpen(false), SUCCESS_POPUP_DURATION);
    return () => window.clearTimeout(timer);
  }, [isSuccessOpen]);

  function setField<K extends ContactField>(field: K, value: ContactDraft[K]) {
    setForm((previous) => ({ ...previous, [field]: value }));
    setErrors((previous) => ({ ...previous, [field]: undefined }));
    setFeedback(null);
  }

  function validateField(field: ContactField) {
    const result = validateContactMessage(form);
    setErrors((previous) => ({
      ...previous,
      [field]: result.success ? undefined : result.errors[field],
    }));
  }

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSending) return;
    setFeedback(null);

    const result = validateContactMessage(form);
    if (!result.success) {
      setErrors(result.errors);
      setFeedback({ severity: 'error', message: 'Confira os campos sinalizados antes de enviar.' });
      return;
    }

    // Honeypot: evita enviar submissões automatizadas.
    if (website.trim()) {
      setForm({ ...emptyForm });
      setWebsite('');
      setIsSuccessOpen(true);
      return;
    }

    const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID?.trim();
    if (!formId || !/^[A-Za-z0-9]+$/.test(formId)) {
      setFeedback({
        severity: 'error',
        message: 'O contato está em configuração. Use o e-mail direto abaixo.',
      });
      return;
    }

    setIsSending(true);
    setErrors({});
    submitContactForm(formId, result.data)
      .then(() => {
        setForm({ ...emptyForm });
        setWebsite('');
        setFeedback(null);
        setIsSuccessOpen(true);
      })
      .catch((error: unknown) => {
        setFeedback({
          severity: 'error',
          message: error instanceof ContactSubmissionError
            ? error.message
            : 'Falha de conexão no envio. Tente novamente ou escreva para o e-mail direto.',
        });
      })
      .finally(() => {
        setIsSending(false);
      });
  }

  return (
    <>
      <Box
        component="section"
        id="contato"
        aria-labelledby="contact-title"
        sx={(theme) => ({
          position: 'relative',
          overflow: 'hidden',
          isolation: 'isolate',
          py: { xs: 7, md: 10 },
          backgroundColor: 'background.default',
          backgroundImage: [
            `radial-gradient(ellipse at 10% 12%, ${alpha(theme.palette.primary.main, 0.11)}, transparent 52%)`,
            `radial-gradient(ellipse at 95% 95%, ${alpha(theme.palette.secondary.main, 0.11)}, transparent 48%)`,
          ].join(', '),
        })}
      >
        <Container maxWidth="lg">
          <Reveal>
            <Paper
              elevation={0}
              sx={(theme) => ({
                position: 'relative',
                overflow: 'hidden',
                p: { xs: 3, sm: 4, md: 6 },
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: { xs: '24px', md: '32px' },
                backgroundColor: 'background.paper',
                backgroundImage: `radial-gradient(ellipse at 0% 0%, ${alpha(theme.palette.primary.main, 0.07)}, transparent 56%)`,
                boxShadow: theme.palette.mode === 'dark'
                  ? '0 24px 90px rgba(0,0,0,0.23)'
                  : '0 24px 90px rgba(23,55,34,0.07)',
              })}
            >
              <Box
                aria-hidden="true"
                sx={{
                  position: 'absolute',
                  top: -105,
                  right: -55,
                  width: 310,
                  height: 310,
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(144,220,143,0.1), transparent 68%)',
                  pointerEvents: 'none',
                }}
              />

              <Box
                sx={{
                  position: 'relative',
                  display: 'grid',
                  gridTemplateColumns: { xs: 'minmax(0,1fr)', md: 'minmax(0,0.9fr) minmax(0,1.1fr)' },
                  gap: { xs: 5, md: 7 },
                  alignItems: 'start',
                }}
              >
                <Stack spacing={3.2} sx={{ minWidth: 0, pt: { md: 2 } }}>
                  <Typography
                    variant="overline"
                    sx={{ color: 'primary.main', fontWeight: 800, letterSpacing: '0.19em' }}
                  >
                    05 / CONEXÕES
                  </Typography>

                  <Box
                    sx={(theme) => ({
                      alignSelf: 'flex-start',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      px: 1.7,
                      py: 0.85,
                      borderRadius: '999px',
                      border: `1px solid ${alpha(theme.palette.primary.main, 0.22)}`,
                      bgcolor: alpha(theme.palette.primary.main, 0.065),
                    })}
                  >
                    <Box
                      aria-hidden="true"
                      sx={{ width: 8, height: 8, bgcolor: 'success.main', borderRadius: '50%', boxShadow: '0 0 12px rgba(85,210,124,0.55)' }}
                    />
                    <Typography variant="caption" sx={{ fontWeight: 800, letterSpacing: '0.11em' }}>
                      CONTATO PROFISSIONAL
                    </Typography>
                  </Box>

                  <Typography
                    id="contact-title"
                    component="h2"
                    sx={{
                      fontWeight: 800,
                      letterSpacing: '-0.055em',
                      lineHeight: 1.08,
                      fontSize: { xs: '2.6rem', sm: '3.4rem', md: '4rem' },
                    }}
                  >
                    Vamos{' '}
                    <Box
                      component="span"
                      sx={{
                        backgroundImage: 'linear-gradient(115deg, #A5DC69, #6ED5C3, #92A8FF)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      conversar.
                    </Box>
                  </Typography>

                  <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.9, maxWidth: 470 }}>
                    {contactData.description}
                  </Typography>

                  <Stack spacing={1.3} sx={{ pt: 0.5 }}>
                    {['Recrutamento e vagas', 'Projetos e colaboração', 'Conversas sobre tecnologia'].map((label) => (
                      <Stack direction="row" spacing={1.3} alignItems="center" key={label}>
                        <CheckCircleOutlineRoundedIcon color="primary" sx={{ fontSize: 19 }} />
                        <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.secondary' }}>
                          {label}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>

                  <Box sx={{ pt: 2 }}>
                    <Typography variant="overline" sx={{ color: 'text.secondary', fontWeight: 800, letterSpacing: '0.13em' }}>
                      PREFERE O E-MAIL DIRETO?
                    </Typography>
                    <Box
                      component="a"
                      href={`mailto:${contactEmail}`}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1.2,
                        mt: 1.2,
                        color: 'text.primary',
                        textDecoration: 'none',
                        fontWeight: 700,
                        overflowWrap: 'anywhere',
                        transition: 'color 200ms ease, transform 200ms ease',
                        '&:hover': { color: 'primary.main', transform: 'translateX(4px)' },
                        '@media (prefers-reduced-motion: reduce)': { transition: 'none', '&:hover': { transform: 'none' } },
                      }}
                    >
                      <AlternateEmailRoundedIcon color="primary" fontSize="small" />
                      <Box component="span" sx={{ minWidth: 0 }}>{contactEmail}</Box>
                      <ArrowOutwardRoundedIcon sx={{ fontSize: 18, flexShrink: 0 }} />
                    </Box>
                  </Box>

                  {socialLinks.length > 0 && (
                    <Stack direction="row" spacing={1.2} flexWrap="wrap" useFlexGap>
                      {socialLinks.map((link) => (
                        <Button
                          key={link.href}
                          component="a"
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="outlined"
                          startIcon={link.type === 'github' ? <GitHubIcon /> : <LinkedInIcon />}
                          endIcon={<ArrowOutwardRoundedIcon sx={{ fontSize: 16 }} />}
                          sx={{
                            borderRadius: '12px',
                            borderColor: 'divider',
                            color: 'text.primary',
                            '&:hover': { borderColor: 'primary.main', bgcolor: 'action.hover' },
                          }}
                        >
                          {link.label}
                        </Button>
                      ))}
                    </Stack>
                  )}
                </Stack>

                <Paper
                  elevation={0}
                  sx={(theme) => ({
                    p: { xs: 2.5, sm: 3.5 },
                    minWidth: 0,
                    borderRadius: '24px',
                    border: '1px solid',
                    borderColor: 'divider',
                    bgcolor: 'background.paper',
                    backgroundImage: `linear-gradient(145deg, ${alpha(theme.palette.primary.main, 0.035)}, transparent 48%)`,
                    boxShadow: theme.palette.mode === 'dark'
                      ? '0 20px 55px rgba(0,0,0,0.2)'
                      : '0 16px 44px rgba(18,43,33,0.08)',
                  })}
                >
                  <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
                    <Box
                      sx={(theme) => ({
                        width: 48,
                        height: 48,
                        borderRadius: '14px',
                        display: 'grid',
                        placeItems: 'center',
                        color: 'primary.main',
                        bgcolor: alpha(theme.palette.primary.main, 0.12),
                      })}
                    >
                      <SendRoundedIcon />
                    </Box>
                    <Box sx={{ minWidth: 0 }}>
                      <Typography component="h3" variant="h6" sx={{ fontWeight: 800, letterSpacing: '-0.03em' }}>
                        {contactData.formTitle}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                        {contactData.formDescription}
                      </Typography>
                    </Box>
                  </Stack>

                  <Box component="form" noValidate onSubmit={submitForm}>
                    <Stack spacing={2.3}>
                      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
                        <TextField
                          name="name" label="Nome completo" placeholder="Como posso chamar você?"
                          required fullWidth size="small" autoComplete="name" value={form.name}
                          onChange={(event) => setField('name', event.target.value)}
                          onBlur={() => validateField('name')}
                          inputProps={{ maxLength: 100 }}
                          error={Boolean(errors.name)} helperText={errors.name}
                          sx={fieldSx} disabled={isSending}
                        />
                        <TextField
                          name="email" label="E-mail" placeholder="voce@empresa.com"
                          type="email" required fullWidth size="small" autoComplete="email" value={form.email}
                          onChange={(event) => setField('email', event.target.value)}
                          onBlur={() => validateField('email')}
                          inputProps={{ maxLength: 254 }}
                          error={Boolean(errors.email)} helperText={errors.email}
                          sx={fieldSx} disabled={isSending}
                        />
                      </Box>
                      <TextField
                        name="company" label="Empresa / organização (opcional)"
                        placeholder="Onde você trabalha?" fullWidth size="small"
                        autoComplete="organization" value={form.company}
                        onChange={(event) => setField('company', event.target.value)}
                        onBlur={() => validateField('company')}
                        inputProps={{ maxLength: 120 }}
                        error={Boolean(errors.company)} helperText={errors.company}
                        sx={fieldSx} disabled={isSending}
                      />
                      <TextField
                        name="subject" label="Assunto" required select fullWidth size="small"
                        value={form.subject}
                        onChange={(event) => setField('subject', event.target.value as ContactSubject)}
                        onBlur={() => validateField('subject')}
                        error={Boolean(errors.subject)} helperText={errors.subject}
                        sx={fieldSx} disabled={isSending}
                      >
                        {contactSubjects.map((subject) => (
                          <MenuItem key={subject} value={subject}>{subject}</MenuItem>
                        ))}
                      </TextField>
                      <Box>
                        <TextField
                          name="message" label="Sua mensagem"
                          placeholder="Conte um pouco sobre a oportunidade, o projeto ou como podemos colaborar..."
                          required multiline minRows={5} fullWidth value={form.message}
                          onChange={(event) => setField('message', event.target.value)}
                          onBlur={() => validateField('message')}
                          inputProps={{ maxLength: 3000 }}
                          error={Boolean(errors.message)} helperText={errors.message}
                          sx={fieldSx} disabled={isSending}
                        />
                        <Typography variant="caption" sx={{ display: 'block', textAlign: 'right', color: 'text.secondary', mt: 0.8 }}>
                          {form.message.length} / 3.000 caracteres
                        </Typography>
                      </Box>

                      {/* Honeypot visualmente oculto, sem depender de CSS externo. */}
                      <Box aria-hidden="true" sx={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clipPath: 'inset(50%)', whiteSpace: 'nowrap' }}>
                        <Box component="label" htmlFor="contact-website">Não preencha este campo</Box>
                        <Box
                          component="input" id="contact-website" type="text" name="website"
                          tabIndex={-1} autoComplete="off" value={website}
                          onChange={(event: ChangeEvent<HTMLInputElement>) => setWebsite(event.target.value)}
                        />
                      </Box>

                      {feedback && (
                        <Alert severity="error" variant="outlined" role="alert" sx={{ borderRadius: '12px' }}>
                          {feedback.message}
                        </Alert>
                      )}

                      <Button
                        type="submit" variant="contained" color="primary" size="large" fullWidth
                        disabled={isSending}
                        startIcon={isSending ? <CircularProgress size={18} color="inherit" /> : <SendRoundedIcon fontSize="small" />}
                        endIcon={!isSending ? <ArrowOutwardRoundedIcon fontSize="small" /> : undefined}
                        sx={{
                          minHeight: 52,
                          borderRadius: '14px',
                          fontWeight: 800,
                          transition: 'transform 200ms ease, box-shadow 200ms ease',
                          '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 12px 30px rgba(120,190,110,0.25)' },
                          '@media (prefers-reduced-motion: reduce)': { transition: 'none', '&:hover': { transform: 'none' } },
                        }}
                      >
                        {isSending ? 'Enviando mensagem...' : 'Enviar mensagem'}
                      </Button>
                      <Typography variant="caption" sx={{ textAlign: 'center', color: 'text.secondary', lineHeight: 1.7 }}>
                        Seus dados serão utilizados apenas para responder ao seu contato. Não é necessário criar uma conta.
                      </Typography>
                    </Stack>
                  </Box>
                </Paper>
              </Box>

              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                justifyContent="space-between"
                spacing={1}
                sx={{ mt: { xs: 5, md: 7 }, pt: 3, borderTop: '1px solid', borderColor: 'divider' }}
              >
                <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 700, letterSpacing: '0.11em' }}>
                  ABERTO A CONVERSAS
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 700, letterSpacing: '0.11em' }}>
                  AP · SOFTWARE ENGINEERING
                </Typography>
              </Stack>
            </Paper>
          </Reveal>
        </Container>
      </Box>

      <Dialog
        open={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
        aria-labelledby="contact-success-title"
        aria-describedby="contact-success-description"
        fullWidth
        maxWidth="xs"
        PaperProps={{
          sx: (theme) => ({
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '26px',
            border: '1px solid',
            borderColor: 'divider',
            backgroundColor: 'background.paper',
            backgroundImage: `radial-gradient(ellipse at 50% 0%, ${alpha(theme.palette.primary.main, 0.16)}, transparent 75%)`,
            boxShadow: '0 28px 100px rgba(0,0,0,0.35)',
            px: { xs: 2.5, sm: 4 },
            pt: 5.5,
            pb: 3.5,
            m: 2,
          }),
        }}
        BackdropProps={{ sx: { bgcolor: 'rgba(5,10,18,0.65)', backdropFilter: 'blur(8px)' } }}
      >
        <IconButton
          aria-label="Fechar mensagem"
          onClick={() => setIsSuccessOpen(false)}
          sx={{
            position: 'absolute', top: 12, right: 12, color: 'text.secondary',
            transition: 'transform 200ms ease',
            '&:hover': { transform: 'rotate(90deg)', bgcolor: 'action.hover' },
            '@media (prefers-reduced-motion: reduce)': { transition: 'none', '&:hover': { transform: 'none' } },
          }}
        >
          <CloseRoundedIcon />
        </IconButton>

        <Stack alignItems="center" spacing={2} sx={{ textAlign: 'center' }}>
          <Box
            sx={{
              width: 86, height: 86, display: 'grid', placeItems: 'center', borderRadius: '50%',
              background: 'linear-gradient(135deg, #D9FF8C, #9FEA73, #75DDA7)',
              boxShadow: '0 0 0 9px rgba(155,230,130,0.08), 0 16px 42px rgba(155,230,130,0.24)',
              mb: 1,
            }}
          >
            <CheckCircleOutlineRoundedIcon sx={{ color: '#183518', fontSize: 50 }} />
          </Box>

          <Typography id="contact-success-title" component="h2" sx={{ fontSize: { xs: '1.6rem', sm: '1.85rem' }, fontWeight: 800, letterSpacing: '-0.04em' }}>
            Mensagem enviada!
          </Typography>
          <Typography id="contact-success-description" variant="body1" sx={{ maxWidth: 330, color: 'text.secondary', lineHeight: 1.8 }}>
            Obrigado pelo contato. Responderei pelo e-mail informado.
          </Typography>

          <Box sx={(theme) => ({ display: 'flex', alignItems: 'center', gap: 1, px: 2, py: 1, borderRadius: '999px', bgcolor: alpha(theme.palette.success.main, 0.08), border: `1px solid ${alpha(theme.palette.success.main, 0.2)}` })}>
            <CheckCircleOutlineRoundedIcon color="success" sx={{ fontSize: 17 }} />
            <Typography variant="caption" sx={{ fontWeight: 700 }}>
              Formulário enviado com sucesso
            </Typography>
          </Box>

          <Button variant="contained" color="primary" fullWidth size="large" onClick={() => setIsSuccessOpen(false)} sx={{ mt: 2, minHeight: 49, borderRadius: '13px', fontWeight: 800 }}>
            Fechar
          </Button>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            Esta janela será fechada automaticamente.
          </Typography>
        </Stack>

        <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 4, bgcolor: 'action.hover', overflow: 'hidden' }}>
          <Box
            sx={{
              width: '100%', height: '100%', bgcolor: 'primary.main',
              transformOrigin: 'left',
              animation: `${timeoutBar} ${SUCCESS_POPUP_DURATION}ms linear forwards`,
              '@media (prefers-reduced-motion: reduce)': { animation: 'none' },
            }}
          />
        </Box>
      </Dialog>
    </>
  );
}
