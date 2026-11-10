'use client';

import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';

import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import NorthEastRoundedIcon from '@mui/icons-material/NorthEastRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import type { Project, ProjectImage } from '@/types/portfolio';
import { ProjectGallery } from '@/components/projects/ProjectGallery';
import { Reveal } from '@/components/ui/Reveal';
import { getProjectAccentColor } from '@/functions/projectVisuals';
import { isPublicUrl } from '@/functions/isPublicUrl';

type RelatedProject = Pick<
  Project,
  'slug' | 'shortTitle' | 'category' | 'year' | 'accent'
>;

interface ProjectDetailContentProps {
  project: Project;
  relatedProjects: readonly RelatedProject[];
}

interface DetailSectionProps {
  index: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}

function DetailSection({ index, eyebrow, title, children }: DetailSectionProps) {
  const headingId = `case-detail-${index}`;
  return (
    <Box
      component="section"
      aria-labelledby={headingId}
      sx={{
        pb: { xs: 3, md: 3.5 },
        mb: { xs: 3, md: 3.5 },
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Stack spacing={2}>
        <Typography
          variant="overline"
          sx={{ fontWeight: 800, color: 'primary.main', letterSpacing: '0.16em' }}
        >
          {index} / {eyebrow}
        </Typography>
        <Typography
          id={headingId}
          component="h2"
          sx={{
            fontSize: { xs: '1.55rem', md: '1.95rem' },
            fontWeight: 800,
            letterSpacing: '-0.04em',
            lineHeight: 1.25,
            color: 'text.primary',
          }}
        >
          {title}
        </Typography>
        {children}
      </Stack>
    </Box>
  );
}

export function ProjectDetailContent({
  project,
  relatedProjects,
}: ProjectDetailContentProps) {
  const theme = useTheme();
  const dark = theme.palette.mode === 'dark';
  const accent = getProjectAccentColor(project.accent);
  const gallery: readonly ProjectImage[] = project.gallery?.length
    ? project.gallery
    : [{
        src: project.thumbnail,
        alt: project.thumbnailAlt,
        caption: 'Visão geral do projeto',
      }];

  const availableLinks = [
    { label: 'Visitar projeto real', href: project.links?.website },
    { label: 'Ver demonstração', href: project.links?.demo },
    { label: 'Código no GitHub', href: project.links?.repository },
  ].filter((link): link is { label: string; href: string } =>
    isPublicUrl(link.href),
  );

  return (
    <Box
      component="main"
      id="conteudo"
      tabIndex={-1}
      sx={{
        minHeight: '100vh',
        overflow: 'hidden',
        bgcolor: 'background.default',
        color: 'text.primary',
        backgroundImage: `
          radial-gradient(ellipse at 88% 5%, ${alpha(accent, 0.12)}, transparent 42%),
          radial-gradient(ellipse at 5% 42%, ${alpha(theme.palette.info.main, 0.08)}, transparent 48%)
        `,
      }}
    >
      <Container maxWidth="lg" sx={{ pt: { xs: 4, md: 6 } }}>
        {/* RETORNAR AOS PROJETOS */}
        <Button
          component={Link}
          href="/#projetos"
          startIcon={<ArrowBackRoundedIcon />}
          variant="text"
          sx={{
            color: 'text.secondary',
            fontWeight: 700,
            borderRadius: 2,
            px: 1.5,
            mb: { xs: 3, md: 4 },
            '&:hover': { color: 'primary.main', bgcolor: alpha(accent, 0.08) },
          }}
        >
          Voltar aos projetos
        </Button>

        {/* CABEÇALHO DO CASE */}
        <Reveal>
          <Stack spacing={3} sx={{ maxWidth: 900, mb: { xs: 5, md: 7 } }}>
            <Stack direction="row" flexWrap="wrap" useFlexGap gap={1.5} alignItems="center">
              <Typography
                variant="overline"
                sx={{ color: 'primary.main', fontWeight: 800, letterSpacing: '0.15em' }}
              >
                {project.eyebrow}
              </Typography>
              <Chip
                label={project.status}
                variant="outlined"
                size="small"
                sx={{ color: 'text.primary', borderColor: alpha(accent, 0.45), bgcolor: alpha(accent, 0.08) }}
              />
              <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 700 }}>
                {project.year}
              </Typography>
            </Stack>

            <Typography
              component="h1"
              sx={{
                fontSize: { xs: '2.25rem', sm: '3.2rem', md: '4.25rem' },
                lineHeight: 1.08,
                fontWeight: 900,
                letterSpacing: '-0.06em',
                backgroundImage: `linear-gradient(115deg, ${theme.palette.text.primary} 25%, ${accent} 105%)`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {project.title}
            </Typography>

            <Typography
              variant="body1"
              sx={{ maxWidth: 760, fontSize: { xs: '1rem', md: '1.15rem' }, color: 'text.secondary', lineHeight: 1.9 }}
            >
              {project.summary}
            </Typography>

            <Stack direction="row" flexWrap="wrap" useFlexGap gap={1} aria-label="Tecnologias do projeto">
              {project.stack.map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  size="small"
                  variant="outlined"
                  sx={{
                    color: 'text.secondary',
                    borderColor: 'divider',
                    fontWeight: 650,
                    bgcolor: alpha(theme.palette.background.paper, 0.65),
                    '&:hover': { borderColor: accent, bgcolor: alpha(accent, 0.1) },
                  }}
                />
              ))}
            </Stack>
          </Stack>
        </Reveal>

        {/* CAPA DO PROJETO COM FUNDO E MOLDURA */}
        <Reveal delay={0.08}>
          <Paper
            elevation={0}
            sx={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: { xs: 3, md: 5 },
              border: `1px solid ${alpha(accent, 0.3)}`,
              p: { xs: 2, sm: 4, md: 6 },
              bgcolor: dark ? '#101722' : '#eaf0f3',
              backgroundImage: `
                radial-gradient(ellipse at 10% 10%, ${alpha(accent, 0.3)}, transparent 58%),
                radial-gradient(ellipse at 95% 95%, ${alpha(theme.palette.info.main, 0.25)}, transparent 58%)
              `,
              boxShadow: dark ? '0 24px 65px rgba(0,0,0,0.23)' : '0 24px 65px rgba(20,35,50,0.09)',
            }}
          >
            <Box
              aria-hidden="true"
              sx={{
                position: 'absolute',
                inset: 0,
                pointerEvents: 'none',
                opacity: 0.16,
                backgroundImage: `linear-gradient(${accent} 1px, transparent 1px), linear-gradient(90deg, ${accent} 1px, transparent 1px)`,
                backgroundSize: '45px 45px',
                maskImage: 'linear-gradient(120deg, black, transparent 85%)',
              }}
            />

            <Paper
              elevation={0}
              sx={{
                position: 'relative',
                maxWidth: 980,
                mx: 'auto',
                overflow: 'hidden',
                borderRadius: { xs: 3, md: 4 },
                border: `1px solid ${alpha(accent, 0.35)}`,
                bgcolor: '#0c1420',
                boxShadow: '0 20px 65px rgba(0,0,0,0.28)',
                transition: 'transform 350ms ease',
                '&:hover': { transform: 'translateY(-5px)' },
                '@media (prefers-reduced-motion: reduce)': {
                  transition: 'none',
                  '&:hover': { transform: 'none' },
                },
              }}
            >
              <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ px: 2, py: 1.35, bgcolor: '#161f2d' }}>
                <Stack direction="row" gap={0.7} aria-hidden="true">
                  {['#F17C77', '#F2BF63', '#71D59A'].map((color) => (
                    <Box key={color} sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: color }} />
                  ))}
                </Stack>
                <Typography variant="caption" sx={{ fontSize: '0.66rem', letterSpacing: '0.1em', color: '#c5d0df' }}>
                  {project.shortTitle.toUpperCase()} / OVERVIEW
                </Typography>
              </Stack>
              <Box sx={{ position: 'relative', aspectRatio: '16 / 9', bgcolor: '#101722' }}>
                <Image
                  src={project.thumbnail}
                  alt={project.thumbnailAlt}
                  fill
                  priority
                  sizes="(max-width: 800px) 92vw, 1000px"
                  style={{ objectFit: 'contain' }}
                />
              </Box>
            </Paper>
            <Typography
              variant="caption"
              sx={{ display: 'block', mt: 2.5, textAlign: 'right', color: dark ? '#e7eef8' : '#293744', fontWeight: 800, letterSpacing: '0.13em' }}
            >
              CASE STUDY — {project.year}
            </Typography>
          </Paper>
        </Reveal>

        {/* CONTEÚDO TÉCNICO + PAINEL LATERAL */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: 'minmax(0,1fr)', md: 'minmax(0,0.35fr) minmax(0,0.65fr)' },
            alignItems: 'start',
            gap: { xs: 3, md: 4.5 },
            py: { xs: 5, md: 7 },
          }}
        >
          <Box component="aside" aria-label="Informações do projeto" sx={{ position: { md: 'sticky' }, top: { md: 115 } }}>
            <Reveal>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  border: '1px solid',
                  borderColor: 'divider',
                  bgcolor: 'background.paper',
                  backgroundImage: `radial-gradient(ellipse at 100% 0%, ${alpha(accent, 0.09)}, transparent 70%)`,
                }}
              >
                <Stack spacing={2.5}>
                  {[
                    ['TIPO', project.category],
                    ['FASE', project.status],
                    ['PERÍODO', project.year],
                  ].map(([label, value]) => (
                    <Box key={label}>
                      <Typography variant="overline" sx={{ color: 'text.secondary', fontWeight: 800, letterSpacing: '0.12em' }}>
                        {label}
                      </Typography>
                      <Typography sx={{ color: 'text.primary', fontWeight: 700, mt: 0.3, lineHeight: 1.5 }}>
                        {value}
                      </Typography>
                    </Box>
                  ))}

                  {availableLinks.length > 0 && (
                    <>
                      <Divider />
                      <Typography variant="overline" sx={{ fontWeight: 800, color: 'primary.main', letterSpacing: '0.12em' }}>
                        EXPLORAR
                      </Typography>
                      {availableLinks.map(({ href, label }) => (
                        <Button
                          key={href}
                          component="a"
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="outlined"
                          endIcon={<OpenInNewRoundedIcon />}
                          sx={{
                            justifyContent: 'space-between',
                            textAlign: 'left',
                            color: 'text.primary',
                            borderColor: alpha(accent, 0.35),
                            borderRadius: 2,
                            py: 1.25,
                            '&:hover': { borderColor: accent, bgcolor: alpha(accent, 0.09) },
                          }}
                        >
                          {label}
                        </Button>
                      ))}
                    </>
                  )}
                </Stack>
              </Paper>
            </Reveal>
          </Box>

          <Box sx={{ minWidth: 0 }}>
            <Reveal><DetailSection index="01" eyebrow="CONTEXTO" title="Visão do projeto">
              <Typography color="text.secondary" sx={{ lineHeight: 1.95 }}>{project.description}</Typography>
            </DetailSection></Reveal>

            <Reveal><DetailSection index="02" eyebrow="PROBLEMA" title="O desafio">
              <Typography color="text.secondary" sx={{ lineHeight: 1.95 }}>{project.challenge}</Typography>
            </DetailSection></Reveal>

            <Reveal><DetailSection index="03" eyebrow="ABORDAGEM" title="Solução e abordagem">
              <Typography color="text.secondary" sx={{ lineHeight: 1.95 }}>{project.solution}</Typography>
            </DetailSection></Reveal>

            <Reveal><DetailSection index="04" eyebrow="DECISÕES TÉCNICAS" title="O que orienta a arquitetura">
              <Stack component="ol" spacing={1.5} sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {project.engineeringDecisions.map((decision, index) => (
                  <Paper
                    component="li"
                    elevation={0}
                    key={`${index}-${decision}`}
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 2,
                      p: 2.2,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'divider',
                      bgcolor: 'background.paper',
                      transition: 'border-color 200ms ease, transform 200ms ease',
                      '&:hover': { borderColor: accent, transform: 'translateX(3px)' },
                      '@media (prefers-reduced-motion: reduce)': { transition: 'none', '&:hover': { transform: 'none' } },
                    }}
                  >
                    <Typography variant="caption" sx={{ fontWeight: 900, color: 'primary.main', pt: 0.3 }}>
                      {String(index + 1).padStart(2, '0')}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                      {decision}
                    </Typography>
                  </Paper>
                ))}
              </Stack>
            </DetailSection></Reveal>

            <Reveal><DetailSection index="05" eyebrow="ESCOPO" title="Áreas do produto">
              <Box component="ul" sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, listStyle: 'none', p: 0, m: 0 }}>
                {project.features.map((feature) => (
                  <Box component="li" key={feature}>
                    <Chip
                      icon={<CheckCircleOutlineRoundedIcon />}
                      label={feature}
                      variant="outlined"
                      sx={{
                        height: 'auto',
                        minHeight: 34,
                        color: 'text.primary',
                        bgcolor: alpha(accent, 0.065),
                        borderColor: alpha(accent, 0.28),
                        '& .MuiChip-label': { whiteSpace: 'normal', py: 0.8 },
                        '& .MuiChip-icon': { color: 'primary.main' },
                      }}
                    />
                  </Box>
                ))}
              </Box>
            </DetailSection></Reveal>

            <Paper
              variant="outlined"
              sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, p: 2.5, borderRadius: 2.5, bgcolor: alpha(theme.palette.info.main, 0.045), borderColor: 'divider' }}
            >
              <InfoOutlinedIcon sx={{ color: 'primary.main', mt: 0.25, flexShrink: 0 }} />
              <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Este case descreve o escopo e as decisões técnicas conhecidos. Métricas, repositórios e demonstrações são adicionados somente quando disponíveis e autorizados para divulgação.
              </Typography>
            </Paper>
          </Box>
        </Box>
      </Container>

      {/* COMPONENTE DE GALERIA JÁ EXISTENTE */}
      <ProjectGallery title={project.shortTitle} images={gallery} />

      {/* PROJETOS RELACIONADOS */}
      {relatedProjects.length > 0 && (
        <Container maxWidth="lg" sx={{ py: { xs: 5, md: 7 } }}>
          <Stack spacing={2} sx={{ mb: 4 }}>
            <Stack direction="row" spacing={1} alignItems="center">
              <CodeRoundedIcon sx={{ color: 'primary.main' }} />
              <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 800, letterSpacing: '0.13em' }}>
                PRÓXIMOS / CONTINUE EXPLORANDO
              </Typography>
            </Stack>
            <Typography component="h2" sx={{ fontSize: { xs: '2rem', md: '2.7rem' }, fontWeight: 850, letterSpacing: '-0.05em', color: 'text.primary' }}>
              Mais projetos.
            </Typography>
          </Stack>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2,minmax(0,1fr))', md: 'repeat(3,minmax(0,1fr))' }, gap: 2 }}>
            {relatedProjects.map((item) => (
              <Paper
                key={item.slug}
                component={Link}
                href={`/projetos/${item.slug}`}
                elevation={0}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 2,
                  p: 2.5,
                  textDecoration: 'none',
                  color: 'text.primary',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  bgcolor: 'background.paper',
                  transition: 'transform 250ms ease, border-color 250ms ease',
                  '&:hover': { transform: 'translateY(-4px)', borderColor: getProjectAccentColor(item.accent) },
                  '&:focus-visible': { outline: `2px solid ${getProjectAccentColor(item.accent)}`, outlineOffset: 3 },
                  '@media (prefers-reduced-motion: reduce)': { transition: 'none', '&:hover': { transform: 'none' } },
                }}
              >
                <Box sx={{ minWidth: 0 }}>
                  <Typography variant="caption" color="text.secondary">{item.category} · {item.year}</Typography>
                  <Typography sx={{ fontWeight: 800, mt: 0.75, lineHeight: 1.4 }}>{item.shortTitle}</Typography>
                </Box>
                <NorthEastRoundedIcon sx={{ color: getProjectAccentColor(item.accent), flexShrink: 0 }} />
              </Paper>
            ))}
          </Box>
        </Container>
      )}
    </Box>
  );
}
