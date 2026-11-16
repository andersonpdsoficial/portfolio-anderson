import {
  Button,
  Stack,
} from '@mui/material';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';import { ContactSocialLinksProps } from '@/types/sections-types/about/contact.types';
import { contactStyles } from '@/styles/sections-styles/contact.styles';
;

export function ContactSocialLinks({
  links,
}: ContactSocialLinksProps) {
  const socialLinks = links.filter(
    (link) =>
      link.type === 'github' ||
      link.type === 'linkedin',
  );

  if (socialLinks.length === 0) {
    return null;
  }

  return (
    <Stack
      direction="row"
      spacing={1.2}
      flexWrap="wrap"
      useFlexGap
    >
      {socialLinks.map((link) => (
        <Button
          key={link.href}
          component="a"
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          variant="outlined"
          startIcon={
            link.type === 'github'
              ? <GitHubIcon />
              : <LinkedInIcon />
          }
          endIcon={
            <ArrowOutwardRoundedIcon
              sx={{ fontSize: 16 }}
            />
          }
          sx={contactStyles.socialButton}
        >
          {link.label}
        </Button>
      ))}
    </Stack>
  );
}