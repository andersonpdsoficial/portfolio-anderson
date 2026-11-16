import {
  Box,
  Stack,
  Typography,
} from '@mui/material';
import { contactData } from '@/data/contactData';
import { ContactBenefits } from './ContactBenefits';
import { ContactDirectEmail } from './ContactDirectEmail';
import { ContactSocialLinks } from './ContactSocialLinks';
import { ContactIntroProps } from '@/types/sections-types/about/contact.types';
import { contactStyles } from '@/styles/sections-styles/contact.styles';

export function ContactIntro({
  email,
  socialLinks,
}: ContactIntroProps) {
  return (
    <Stack
      spacing={3.2}
      sx={{
        minWidth: 0,
        pt: { md: 2 },
      }}
    >
      <Typography
        variant="overline"
        sx={contactStyles.eyebrow}
      >
        05 / CONEXÕES
      </Typography>

      <Box sx={contactStyles.availability}>
        <Box
          aria-hidden="true"
          sx={contactStyles.availabilityDot}
        />

        <Typography
          variant="caption"
          sx={{
            fontWeight: 800,
            letterSpacing: '0.11em',
          }}
        >
          CONTATO PROFISSIONAL
        </Typography>
      </Box>

      <Typography
        id="contact-title"
        component="h2"
        sx={contactStyles.title}
      >
        Vamos{' '}

        <Box
          component="span"
          sx={contactStyles.gradientText}
        >
          conversar.
        </Box>
      </Typography>

      <Typography
        variant="body1"
        sx={contactStyles.description}
      >
        {contactData.description}
      </Typography>

      <ContactBenefits />

      <ContactDirectEmail email={email} />

      <ContactSocialLinks links={socialLinks} />
    </Stack>
  );
}