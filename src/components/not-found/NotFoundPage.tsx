
'use client';

import {
  Box,
  Container,
  Stack,
} from '@mui/material';
import { NotFoundBackground } from './NotFoundBackground';
import { NotFoundBadge } from './NotFoundBadge';
import { NotFoundIllustration } from './NotFoundIllustration';
import { NotFoundMessage } from './NotFoundMessage';
import { NotFoundActions } from './NotFoundActions';
import { NotFoundTechnicalInfo } from './NotFoundTechnicalInfo';
import { NotFoundSignature } from './NotFoundSignature';
import { NOT_FOUND_CONFIG } from '@/constants/notFound.constants';
import { notFoundStyles } from '@/styles/notFoundStyles/notFound.styles';

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
          {/* IDENTIFICAÇÃO DA ROTA */}
          <NotFoundBadge />

          {/* NÚMERO 404 E ÍCONE FLUTUANTE */}
          <NotFoundIllustration />

          {/* TÍTULO E DESCRIÇÃO */}
          <NotFoundMessage />

          {/* BOTÕES DE NAVEGAÇÃO */}
          <NotFoundActions />

          {/* INFORMAÇÃO TÉCNICA HTTP 404 */}
          <NotFoundTechnicalInfo />

          {/* ASSINATURA VISUAL */}
          <NotFoundSignature />
        </Stack>
      </Container>
    </Box>
  );
}

export default NotFoundPage;
