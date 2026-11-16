'use client';

import {
  Box,
  Container,
  Divider,
} from '@mui/material';
import { portfolioData } from '@/data/portfolioData';
import { FooterBackground } from './FooterBackground';
import { FooterIdentity } from './FooterIdentity';
import { FooterNavigation } from './FooterNavigation';
import { FooterSocialLinks } from './FooterSocialLinks';
import { FooterBottom } from './FooterBottom';
import { footerStyles } from '@/styles/layoutStyles/footerStyles/footer.styles';

export function Footer() {
  const {
    identity,
    navigation,
  } = portfolioData;

  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      role="contentinfo"
      sx={footerStyles.root}
    >
      <FooterBackground />

      <Container
        maxWidth="lg"
        sx={footerStyles.container}
      >
        <Box sx={footerStyles.mainGrid}>
          <FooterIdentity identity={identity} />

          <FooterNavigation
            navigation={navigation}
          />

          <FooterSocialLinks
            links={identity.links}
          />
        </Box>

        <Divider sx={footerStyles.divider} />

        <FooterBottom
          shortName={identity.shortName}
          location={identity.location}
          year={currentYear}
        />
      </Container>
    </Box>
  );
}