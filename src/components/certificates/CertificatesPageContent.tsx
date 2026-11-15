'use client';

import Link from 'next/link';

import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
} from '@mui/material';
import { alpha } from '@mui/material/styles';

import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';

import type { FreeCourse } from '@/data/portfolioData';
import { CertificateCard } from '@/components/certificates/CertificateCard';

type CertificatesPageContentProps = Readonly<{
  courses: readonly FreeCourse[];
}>;

export function CertificatesPageContent({ courses }: CertificatesPageContentProps) {
  return (
    <Box
      component="main"
      id="conteudo"
      tabIndex={-1}
      sx={(theme) => ({
        position: 'relative',
        minHeight: '70vh',
        overflow: 'hidden',
        bgcolor: 'background.default',
        backgroundImage: `radial-gradient(ellipse at 15% 3%, ${alpha(theme.palette.primary.main, 0.12)}, transparent 38%), radial-gradient(ellipse at 92% 38%, ${alpha(theme.palette.info.main, 0.095)}, transparent 42%)`,
        py: { xs: 5, sm: 6, md: 8 },
      })}
    >
      <Container maxWidth="lg">
        <Stack spacing={{ xs: 3, sm: 4 }}>
          <Box>
            <Button
              component={Link}
              href="/#experiencia"
              startIcon={<ArrowBackRoundedIcon />}
              sx={{ mb: 3, textTransform: 'none', fontWeight: 750 }}
            >
              Voltar à trajetória
            </Button>

            <Stack direction="row" alignItems="center" spacing={1.2} sx={{ mb: 1.5 }}>
              <WorkspacePremiumOutlinedIcon sx={{ color: 'primary.main' }} />
              <Typography
                variant="overline"
                color="primary.main"
                sx={{ fontWeight: 800, letterSpacing: '0.16em' }}
              >
                FORMAÇÃO CONTÍNUA
              </Typography>
            </Stack>

            <Typography
              component="h1"
              sx={{
                fontWeight: 850,
                color: 'text.primary',
                fontSize: { xs: '2.2rem', sm: '3.1rem', md: '3.65rem' },
                letterSpacing: '-0.055em',
                lineHeight: 1.13,
                mb: 1.5,
              }}
            >
              Cursos e{' '}
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(110deg, #A7DF69, #61CDB8 55%, #86A8FF)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                certificados.
              </Box>
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: 700, lineHeight: 1.8 }}
            >
              Minha formação complementar em tecnologia e áreas relacionadas.
              Consulte as informações de cada curso, visualize o certificado
              e acesse o endereço de validação disponibilizado.
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mt: 2, fontWeight: 700 }}
            >
              {courses.length} {courses.length === 1 ? 'certificado cadastrado' : 'certificados cadastrados'}
            </Typography>
          </Box>

          {courses.length === 0 ? (
            <Box
              sx={{
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: '18px',
                bgcolor: 'background.paper',
                p: 4,
              }}
            >
              <Typography variant="body1" color="text.secondary">
                Os certificados serão publicados em breve.
              </Typography>
            </Box>
          ) : (
            <Box
              aria-label="Lista completa dos certificados"
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: 'minmax(0, 1fr)',
                  sm: 'repeat(2, minmax(0, 1fr))',
                  md: 'repeat(3, minmax(0, 1fr))',
                },
                gap: { xs: 2, sm: 2.4, md: 3 },
                alignItems: 'stretch',
              }}
            >
              {courses.map((course, index) => (
                <CertificateCard
                  key={`${course.id}-${index}`}
                  course={course}
                  variant="full"
                />
              ))}
            </Box>
          )}
        </Stack>
      </Container>
    </Box>
  );
}
