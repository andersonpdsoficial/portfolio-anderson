import {
  Box,
  Stack,
  Typography,
} from '@mui/material';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NorthEastRoundedIcon from '@mui/icons-material/NorthEastRounded';
import { FooterSocialLinksProps } from '@/types/layoutTypes/footer/footer.types';
import { footerStyles } from '@/styles/layoutStyles/footerStyles/footer.styles';

export function FooterSocialLinks({
  links,
}: FooterSocialLinksProps) {
  return (
    <Stack
      spacing={2}
      sx={{ minWidth: 0 }}
    >
      <Typography
        component="h3"
        sx={footerStyles.columnHeading}
      >
        CONECTE-SE
      </Typography>

      {links.length === 0 ? (
        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            fontStyle: 'italic',
          }}
        >
          Canais em configuração.
        </Typography>
      ) : (
        links.map((link) => {
          const IconComponent =
            link.type === 'github'
              ? GitHubIcon
              : link.type === 'linkedin'
                ? LinkedInIcon
                : MailOutlineIcon;

          const isEmail = link.type === 'email';

          return (
            <Box
              component="a"
              key={link.href}
              href={link.href}
              target={isEmail ? undefined : '_blank'}
              rel={
                isEmail
                  ? undefined
                  : 'noopener noreferrer'
              }
              sx={footerStyles.socialLink}
            >
              <Box sx={footerStyles.socialIcon}>
                <IconComponent
                  aria-hidden="true"
                  sx={{ fontSize: 17 }}
                />
              </Box>

              <Typography
                component="span"
                sx={{
                  fontSize: '0.89rem',
                  fontWeight: 600,
                  color: 'inherit',
                }}
              >
                {link.label}
              </Typography>

              <NorthEastRoundedIcon
                className="footer-social-arrow"
                aria-hidden="true"
                sx={footerStyles.socialArrow}
              />
            </Box>
          );
        })
      )}
    </Stack>
  );
}