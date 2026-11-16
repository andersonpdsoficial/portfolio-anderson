'use client';

import {
  Box,
  Container,
  Paper,
} from '@mui/material';
import { portfolioData } from '@/data/portfolioData';
import { contactData } from '@/data/contactData';
import { Reveal } from '@/components/ui/Reveal';
import { useContactForm } from '@/hooks/useContactForm';
import { ContactIntro } from './ContactIntro';
import { ContactFormCard } from './ContactFormCard';
import { ContactFooter } from './ContactFooter';
import { ContactSuccessDialog } from './ContactSuccessDialog';
import { contactStyles } from '@/styles/sections-styles/contact.styles';

export function Contact() {
  const controller = useContactForm();

  const { identity } = portfolioData;

  const contactEmail =
    identity.email ?? contactData.recipientEmail;

  return (
    <>
      <Box
        component="section"
        id="contato"
        aria-labelledby="contact-title"
        sx={contactStyles.section}
      >
        <Container maxWidth="lg">
          <Reveal>
            <Paper
              elevation={0}
              sx={contactStyles.mainPaper}
            >
              <Box
                aria-hidden="true"
                sx={contactStyles.decorativeGlow}
              />

              <Box sx={contactStyles.contentGrid}>
                <ContactIntro
                  email={contactEmail}
                  socialLinks={identity.links}
                />

                <ContactFormCard
                  controller={controller}
                />
              </Box>

              <ContactFooter />
            </Paper>
          </Reveal>
        </Container>
      </Box>

      <ContactSuccessDialog
        open={controller.isSuccessOpen}
        onClose={controller.closeSuccess}
      />
    </>
  );
}