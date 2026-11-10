
'use client';

import Image from 'next/image';
import Link from 'next/link';

import {
  Box,
  Chip,
  Paper,
  Stack,
  Typography,
} from '@mui/material';

import {
  alpha,
  useTheme,
} from '@mui/material/styles';

import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';


import type { Project } from '@/types/portfolio';
import { getProjectAccentColor, formatProjectIndex } from '@/functions/projectVisuals';

// ============================================================
// TIPOS
// ============================================================

interface ProjectCardProps {
  project: Project;
  index: number;
}

// ============================================================
// CORES PERSONALIZADAS POR PROJETO
// ============================================================


// ============================================================
// COMPONENTE PRINCIPAL
// ============================================================

export function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  const theme = useTheme();

  const isDark = theme.palette.mode === 'dark';

  const accentColor = getProjectAccentColor(project.accent);

  const projectNumber = formatProjectIndex(index + 1);

  const projectUrl = `/projetos/${project.slug}`;

  return (
    <Box
      component="article"
      sx={{
        height: '100%',
        minWidth: 0,
        transition: 'transform 300ms ease',
        '&:hover': { transform: 'translateY(-5px)' },
        '@media (prefers-reduced-motion: reduce)': { transition: 'none', '&:hover': { transform: 'none' } },
      }}
    >
      <Paper
        component={Link}
        href={projectUrl}
        elevation={0}
        aria-label={`Ver estudo de caso: ${project.title}`}
        sx={{
          position: 'relative',
          isolation: 'isolate',
          overflow: 'hidden',

          display: 'flex',
          flexDirection: 'column',

          height: '100%',
          minWidth: 0,

          textDecoration: 'none',
          color: 'text.primary',

          bgcolor: 'background.paper',

          border: '1px solid',
          borderColor: 'divider',

          borderRadius: {
            xs: '22px',
            md: '26px',
          },

          boxShadow: isDark
            ? '0 14px 40px rgba(0,0,0,0.16)'
            : '0 14px 40px rgba(20,35,50,0.06)',

          transition:
            'border-color 300ms ease, box-shadow 300ms ease',

          '&:hover': {
            borderColor: alpha(accentColor, 0.65),

            boxShadow: isDark
              ? `0 24px 65px ${alpha(accentColor, 0.13)}`
              : `0 24px 65px ${alpha(accentColor, 0.19)}`,
          },

          '&:hover img': {
            transform: 'scale(1.065)',
          },

          '&:hover [data-project-arrow]': {
            transform: 'translate(3px, -3px)',
          },

          '&:hover [data-project-cta]': {
            color: accentColor,
          },

          '&:focus-visible': {
            outline: `3px solid ${accentColor}`,
            outlineOffset: 4,
          },

          '@media (prefers-reduced-motion: reduce)': {
            transition: 'none',

            '&:hover img': {
              transform: 'none',
            },
          },
        }}
      >
        {/* ==================================================
            THUMBNAIL COM FUNDO EM GRADIENTE
        ================================================== */}

        <Box
          sx={{
            position: 'relative',
            isolation: 'isolate',

            width: '100%',
            aspectRatio: '16 / 11',

            minHeight: 0,
            overflow: 'hidden',

            p: {
              xs: 2,
              sm: 2.5,
            },

            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

            backgroundColor: isDark
              ? '#10151D'
              : '#E9EEF5',

            backgroundImage: `
              radial-gradient(
                ellipse at 15% 10%,
                ${alpha(accentColor, isDark ? 0.27 : 0.3)},
                transparent 55%
              ),
              radial-gradient(
                ellipse at 90% 90%,
                ${alpha(theme.palette.info.main, 0.2)},
                transparent 55%
              ),
              linear-gradient(
                135deg,
                ${alpha(accentColor, 0.11)},
                transparent 75%
              )
            `,
          }}
        >
          {/* GRID DECORATIVO */}

          <Box
            aria-hidden="true"
            sx={{
              position: 'absolute',
              inset: 0,

              opacity: isDark ? 0.13 : 0.1,

              backgroundImage: `
                linear-gradient(
                  ${accentColor} 1px,
                  transparent 1px
                ),
                linear-gradient(
                  90deg,
                  ${accentColor} 1px,
                  transparent 1px
                )
              `,

              backgroundSize: '35px 35px',

              maskImage:
                'linear-gradient(135deg, black, transparent 85%)',

              WebkitMaskImage:
                'linear-gradient(135deg, black, transparent 85%)',

              pointerEvents: 'none',
              zIndex: -1,
            }}
          />

          {/* AURA DECORATIVA */}

          <Box
            aria-hidden="true"
            sx={{
              position: 'absolute',

              width: '65%',
              aspectRatio: '1',

              top: '-30%',
              right: '-20%',

              borderRadius: '50%',

              background: `radial-gradient(
                circle,
                ${alpha(accentColor, 0.3)},
                transparent 70%
              )`,

              filter: 'blur(35px)',
              pointerEvents: 'none',
              zIndex: -1,
            }}
          />

          {/* ================================================
              MOLDURA DA CAPTURA DO PROJETO
          ================================================ */}

          <Box
            sx={{
              position: 'relative',

              width: '100%',
              maxWidth: 510,

              borderRadius: {
                xs: '16px',
                sm: '20px',
              },

              overflow: 'hidden',

              border: `1px solid ${alpha(
                accentColor,
                0.38,
              )}`,

              bgcolor: '#101620',

              boxShadow: `
                0 18px 45px rgba(0,0,0,0.23),
                0 0 30px ${alpha(accentColor, 0.13)}
              `,

              transform: 'perspective(900px) rotateX(1deg)',

              transition:
                'box-shadow 350ms ease, border-color 350ms ease',

              '&:hover': {
                borderColor: alpha(accentColor, 0.7),

                boxShadow: `
                  0 24px 55px rgba(0,0,0,0.28),
                  0 0 45px ${alpha(accentColor, 0.2)}
                `,
              },
            }}
          >
            {/* BARRA SUPERIOR DA JANELA */}

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{
                height: 33,

                px: 1.6,

                bgcolor: '#171E29',

                borderBottom:
                  '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <Stack
                direction="row"
                spacing={0.65}
                alignItems="center"
                aria-hidden="true"
              >
                {[
                  '#FF6B6B',
                  '#FFC76A',
                  '#72DA95',
                ].map((color) => (
                  <Box
                    key={color}
                    sx={{
                      width: 7,
                      height: 7,

                      borderRadius: '50%',
                      bgcolor: color,
                    }}
                  />
                ))}
              </Stack>

              <Typography
                variant="caption"
                sx={{
                  color: 'rgba(255,255,255,0.58)',

                  fontSize: '0.58rem',
                  fontWeight: 800,

                  letterSpacing: '0.12em',
                }}
              >
                PROJECT / {projectNumber}
              </Typography>
            </Stack>

            {/* IMAGEM DO PROJETO */}

            <Box
              sx={{
                position: 'relative',

                width: '100%',
                aspectRatio: '16 / 9',

                overflow: 'hidden',

                bgcolor: '#0E1520',

                '& img': {
                  transition:
                    'transform 500ms cubic-bezier(.22,1,.36,1)',
                },

                '@media (prefers-reduced-motion: reduce)': {
                  '& img': {
                    transition: 'none',
                  },
                },
              }}
            >
              <Image
                src={project.thumbnail}
                alt={project.thumbnailAlt}
                fill
                loading="lazy"
                sizes="(max-width: 600px) 90vw, (max-width: 1200px) 45vw, 30vw"
                style={{
                  objectFit: 'contain',
                  objectPosition: 'center',
                }}
              />

              {/* DEGRADÊ INFERIOR */}

              <Box
                aria-hidden="true"
                sx={{
                  position: 'absolute',
                  inset: 0,

                  background: `
                    linear-gradient(
                      180deg,
                      transparent 50%,
                      rgba(7,12,20,0.26) 100%
                    )
                  `,

                  pointerEvents: 'none',
                }}
              />
            </Box>
          </Box>

          {/* ================================================
              IDENTIFICAÇÃO INFERIOR DA CAPA
          ================================================ */}

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{
              position: 'absolute',

              bottom: 12,
              left: 17,
              right: 17,

              zIndex: 2,

              pointerEvents: 'none',
            }}
          >
            <Typography
              variant="caption"
              sx={{
                fontSize: '0.62rem',
                fontWeight: 800,

                color: isDark
                  ? 'rgba(255,255,255,0.72)'
                  : '#263347',

                letterSpacing: '0.12em',
              }}
            >
              CASE STUDY / {projectNumber}
            </Typography>

            <Box
              data-project-arrow
              sx={{
                width: 33,
                height: 33,

                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',

                borderRadius: '10px',

                bgcolor: accentColor,
                color: '#152015',

                boxShadow: `0 6px 18px ${alpha(
                  accentColor,
                  0.28,
                )}`,

                transition: 'transform 250ms ease',

                '@media (prefers-reduced-motion: reduce)': {
                  transition: 'none',
                },
              }}
            >
              <ArrowOutwardRoundedIcon
                sx={{ fontSize: 19 }}
              />
            </Box>
          </Stack>
        </Box>

        {/* ==================================================
            CONTEÚDO DO CARD
        ================================================== */}

        <Stack
          spacing={2}
          sx={{
            flex: 1,

            p: {
              xs: 2.5,
              sm: 3,
            },
          }}
        >
          {/* CATEGORIA E ANO */}

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={1.5}
          >
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{ minWidth: 0 }}
            >
              <Box
                aria-hidden="true"
                sx={{
                  width: 7,
                  height: 7,

                  flexShrink: 0,

                  borderRadius: '50%',

                  bgcolor: accentColor,

                  boxShadow: `0 0 11px ${alpha(
                    accentColor,
                    0.5,
                  )}`,
                }}
              />

              <Typography
                variant="caption"
                sx={{
                  color: 'text.secondary',

                  fontSize: '0.72rem',
                  fontWeight: 800,

                  lineHeight: 1.5,
                }}
              >
                {project.category}
              </Typography>
            </Stack>

            <Typography
              variant="caption"
              sx={{
                color: 'text.disabled',

                fontWeight: 700,
                fontSize: '0.73rem',

                flexShrink: 0,
              }}
            >
              {project.year}
            </Typography>
          </Stack>

          {/* NOME DO PROJETO */}

          <Typography
            component="h3"
            sx={{
              color: 'text.primary',

              fontSize: {
                xs: '1.25rem',
                sm: '1.4rem',
              },

              fontWeight: 800,
              lineHeight: 1.3,

              letterSpacing: '-0.035em',

              transition: 'color 250ms ease',

              '&:hover': {
                color: accentColor,
              },
            }}
          >
            {project.shortTitle}
          </Typography>

          {/* DESCRIÇÃO */}

          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',

              fontSize: '0.9rem',
              lineHeight: 1.85,

              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 3,

              overflow: 'hidden',
              minHeight: '4.9em',
            }}
          >
            {project.summary}
          </Typography>

          {/* TECNOLOGIAS */}

          <Stack
            direction="row"
            flexWrap="wrap"
            useFlexGap
            gap={0.8}
            sx={{
              pt: 0.5,
              pb: 1,
            }}
          >
            {project.stack.slice(0, 4).map((tech) => (
              <Chip
                key={tech}
                label={tech}
                size="small"
                variant="outlined"
                sx={{
                  height: 'auto',
                  minHeight: 29,

                  borderRadius: '8px',

                  fontSize: '0.68rem',
                  fontWeight: 650,

                  color: 'text.secondary',
                  borderColor: 'divider',

                  bgcolor: alpha(
                    theme.palette.background.default,
                    0.45,
                  ),

                  '& .MuiChip-label': {
                    px: 1.1,
                    py: 0.4,
                  },

                  transition:
                    'border-color 220ms ease, background-color 220ms ease',

                  '&:hover': {
                    borderColor: alpha(accentColor, 0.5),
                    bgcolor: alpha(accentColor, 0.09),
                  },
                }}
              />
            ))}
          </Stack>

          {/* ==================================================
              RODAPÉ / EXPLORAR CASE
          ================================================== */}

          <Box
            sx={{
              mt: 'auto',
              pt: 2,

              borderTop: '1px solid',
              borderColor: 'divider',
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
              >
                <CodeRoundedIcon
                  sx={{
                    fontSize: 18,
                    color: accentColor,
                  }}
                />

                <Typography
                  data-project-cta
                  variant="body2"
                  sx={{
                    color: 'text.primary',

                    fontSize: '0.86rem',
                    fontWeight: 800,

                    transition: 'color 250ms ease',
                  }}
                >
                  Explorar case
                </Typography>
              </Stack>

              <ArrowOutwardRoundedIcon
                data-project-arrow
                sx={{
                  color: accentColor,

                  fontSize: 20,

                  transition: 'transform 250ms ease',

                  '@media (prefers-reduced-motion: reduce)': {
                    transition: 'none',
                  },
                }}
              />
            </Stack>
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
}
