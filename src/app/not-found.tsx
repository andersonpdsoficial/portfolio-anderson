import { NotFoundActions } from '@/components/not-found/NotFoundActions';
import { NotFoundBackground } from '@/components/not-found/NotFoundBackground';
import { NotFoundBadge } from '@/components/not-found/NotFoundBadge';
import { NotFoundIllustration } from '@/components/not-found/NotFoundIllustration';
import { NotFoundMessage } from '@/components/not-found/NotFoundMessage';
import { NotFoundSignature } from '@/components/not-found/NotFoundSignature';
import { NotFoundTechnicalInfo } from '@/components/not-found/NotFoundTechnicalInfo';
import { NOT_FOUND_CONFIG } from '@/constants/notFound.constants';
import { notFoundStyles } from '@/styles/notFoundStyles/notFound.styles';
import {  Box,  Container,  Stack,} from '@mui/material';


export function NotFoundPage() {
  return (
    <Box
      component="main"
      id={NOT_FOUND_CONFIG.contentId}
      tabIndex={-1}
      aria-labelledby={NOT_FOUND_CONFIG.headingId}
      sx={notFoundStyles.root}
    >
      <NotFoundBackground />

      <Container
        maxWidth="md"
        sx={notFoundStyles.container}
      >
        <Stack
          alignItems="center"
          spacing={3}
          sx={notFoundStyles.content}
        >
          <NotFoundBadge />
          <NotFoundIllustration />
          <NotFoundMessage />
          <NotFoundActions />
          <NotFoundTechnicalInfo />
          <NotFoundSignature />
        </Stack>
      </Container>
    </Box>
  );
}