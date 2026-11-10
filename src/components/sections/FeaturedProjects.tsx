
'use client';

import {
  Box,
  Chip,
  Container,
  Stack,
  Typography,
} from '@mui/material';

import { alpha, type Theme } from '@mui/material/styles';

import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import { portfolioData } from '@/data/portfolioData';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { Reveal } from '@/components/ui/Reveal';

// ============================================================
// CONFIGURAÇÕES VISUAIS — MATERIAL UI
// ============================================================

const sectionBackground = (theme: Theme) => ({
  backgroundColor: theme.palette.background.default,

  backgroundImage: `
    radial-gradient(
      ellipse at 8% 12%,
      ${alpha(theme.palette.primary.main, 0.11)},
      transparent 43%
    ),
    radial-gradient(
      ellipse at 92% 55%,
      ${alpha(theme.palette.info.main, 0.09)},
      transparent 45%
    ),
    radial-gradient(
      ellipse at 45% 95%,
      ${alpha(theme.palette.secondary.main, 0.07)},
      transparent 50%
    )
  `,
});

const projectWrapperSx = (theme: Theme) => ({
  position: 'relative',
  isolation: 'isolate',
  height: '100%',
  minWidth: 0,
  borderRadius: '24px',
  transition:
    'transform 350ms cubic-bezier(.22,1,.36,1), box-shadow 350ms ease',

  '&::before': {
    content: '""',
    position: 'absolute',
    inset: -1,
    borderRadius: 'inherit',
    background: `linear-gradient(
      135deg,
      ${alpha(theme.palette.primary.main, 0.5)},
      ${alpha(theme.palette.info.main, 0.3)},
      transparent 85%
    )`,
    opacity: 0,
    transition: 'opacity 350ms ease',
    pointerEvents: 'none',
    zIndex: -1,
  },

  '&:hover': {
    transform: 'none',
    boxShadow:
      theme.palette.mode === 'dark'
        ? '0 28px 65px rgba(0,0,0,0.3)'
        : '0 28px 65px rgba(20,35,50,0.13)',
  },

  '&:hover::before': {
    opacity: 1,
  },

  '&:focus-within': {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: 4,
  },

  '@media (prefers-reduced-motion: reduce)': {
    transition: 'none',

    '&::before': {
      transition: 'none',
    },

    '&:hover': {
      transform: 'none',
    },
  },
});

// ============================================================
// COMPONENTE PRINCIPAL — PROJETOS EM DESTAQUE
// ============================================================

export function FeaturedProjects() {
  const projects = portfolioData.projects.filter(
    (project) => project.featured,
  );

  return (
    <Box
      component="section"
      id="projetos"
      aria-labelledby="featured-projects-title"
      sx={(theme) => ({
        position: 'relative',
        isolation: 'isolate',
        overflow: 'hidden',

        py: {
          xs: 7,
          sm: 8,
          md: 11,
        },

        ...sectionBackground(theme),
      })}
    >
      {/* ================================================
          ELEMENTOS DECORATIVOS
      ================================================ */}

      <Box
        aria-hidden="true"
        sx={(theme) => ({
          position: 'absolute',
          top: '-150px',
          right: '-120px',
          width: 480,
          height: 480,
          borderRadius: '50%',

          background: `radial-gradient(
            circle,
            ${alpha(theme.palette.primary.main, 0.14)},
            transparent 70%
          )`,

          filter: 'blur(70px)',
          pointerEvents: 'none',
          zIndex: -1,
        })}
      />

      <Box
        aria-hidden="true"
        sx={(theme) => ({
          position: 'absolute',
          bottom: '-180px',
          left: '-130px',
          width: 500,
          height: 500,
          borderRadius: '50%',

          background: `radial-gradient(
            circle,
            ${alpha(theme.palette.info.main, 0.12)},
            transparent 70%
          )`,

          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: -1,
        })}
      />

      {/* GRID DECORATIVO DE FUNDO */}

      <Box
        aria-hidden="true"
        sx={(theme) => ({
          position: 'absolute',
          inset: 0,
          opacity: theme.palette.mode === 'dark' ? 0.1 : 0.06,

          backgroundImage: `
            linear-gradient(
              ${theme.palette.text.primary} 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              ${theme.palette.text.primary} 1px,
              transparent 1px
            )
          `,

          backgroundSize: '80px 80px',
          maskImage:
            'linear-gradient(to bottom, transparent, black 35%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to bottom, transparent, black 35%, transparent)',

          pointerEvents: 'none',
          zIndex: -1,
        })}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* ================================================
            CABEÇALHO DA SEÇÃO
        ================================================ */}

        <Reveal>
          <Stack
            spacing={3}
            sx={{
              mb: {
                xs: 5,
                md: 7,
              },
            }}
          >
            {/* IDENTIFICADOR */}

            <Stack
              direction="row"
              alignItems="center"
              spacing={1.5}
            >
              <Box
                sx={(theme) => ({
                  width: 40,
                  height: 40,
                  borderRadius: '13px',

                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',

                  color: 'primary.main',

                  backgroundColor: alpha(
                    theme.palette.primary.main,
                    0.11,
                  ),

                  border: `1px solid ${alpha(
                    theme.palette.primary.main,
                    0.2,
                  )}`,
                })}
              >
                <CodeRoundedIcon sx={{ fontSize: 22 }} />
              </Box>

              <Typography
                variant="overline"
                sx={{
                  color: 'primary.main',
                  fontWeight: 800,
                  letterSpacing: '0.18em',

                  fontSize: {
                    xs: '0.68rem',
                    sm: '0.75rem',
                  },
                }}
              >
                02 / TRABALHOS EM DESTAQUE
              </Typography>
            </Stack>

            {/* TÍTULO E CONTADOR */}

            <Stack
              direction={{
                xs: 'column',
                md: 'row',
              }}
              justifyContent="space-between"
              alignItems={{
                xs: 'flex-start',
                md: 'flex-end',
              }}
              gap={3}
            >
              <Box sx={{ maxWidth: 760 }}>
                <Typography
                  id="featured-projects-title"
                  component="h2"
                  sx={{
                    fontWeight: 800,
                    color: 'text.primary',
                    letterSpacing: '-0.055em',
                    lineHeight: 1.12,

                    fontSize: {
                      xs: '2.35rem',
                      sm: '3.1rem',
                      md: '3.8rem',
                      lg: '4.1rem',
                    },
                  }}
                >
                  Ideias que viram{' '}

                  <Box
                    component="span"
                    sx={{
                      background:
                        'linear-gradient(110deg, #B7ED73 0%, #71DCCA 50%, #86A8FF 100%)',

                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    sistemas.
                  </Box>
                </Typography>
              </Box>

              {/* INDICADOR DE PROJETOS */}

              <Chip
                icon={
                  <AutoAwesomeRoundedIcon
                    sx={{
                      fontSize: 18,
                      color: 'primary.main !important',
                    }}
                  />
                }
                label={`${projects.length} projetos em destaque`}
                variant="outlined"
                sx={(theme) => ({
                  height: 43,
                  px: 1,
                  borderRadius: '12px',

                  fontWeight: 700,
                  color: 'text.primary',

                  borderColor: alpha(
                    theme.palette.primary.main,
                    0.28,
                  ),

                  backgroundColor: alpha(
                    theme.palette.primary.main,
                    0.07,
                  ),

                  '& .MuiChip-label': {
                    px: 1.2,
                  },
                })}
              />
            </Stack>

            {/* DESCRIÇÃO */}

            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                maxWidth: 700,
                lineHeight: 1.9,

                fontSize: {
                  xs: '1rem',
                  md: '1.07rem',
                },
              }}
            >
              Uma seleção de projetos e estudos técnicos
              que demonstram minha abordagem em arquitetura
              de software, desenvolvimento full stack,
              interfaces modernas e implementação de regras
              de negócio.
            </Typography>

            {/* IDENTIFICADOR DE CATEGORIA */}

            <Stack
              direction="row"
              alignItems="center"
              flexWrap="wrap"
              useFlexGap
              gap={1.5}
              sx={{ pt: 0.5 }}
            >
              {[
                'Full Stack',
                'Arquitetura',
                'APIs',
                'Sistemas de Gestão',
              ].map((category) => (
                <Box
                  key={category}
                  sx={(theme) => ({
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,

                    px: 1.5,
                    py: 0.85,

                    borderRadius: '9px',
                    border: '1px solid',
                    borderColor: 'divider',

                    bgcolor: alpha(
                      theme.palette.background.paper,
                      0.6,
                    ),

                    transition:
                      'border-color 220ms ease, transform 220ms ease',

                    '&:hover': {
                      borderColor: 'primary.main',
                      transform: 'translateY(-2px)',
                    },

                    '@media (prefers-reduced-motion: reduce)': {
                      transition: 'none',

                      '&:hover': {
                        transform: 'none',
                      },
                    },
                  })}
                >
                  <Box
                    aria-hidden="true"
                    sx={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      bgcolor: 'primary.main',
                    }}
                  />

                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 700,
                      color: 'text.secondary',
                      letterSpacing: '0.025em',
                    }}
                  >
                    {category}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Stack>
        </Reveal>

        {/* ================================================
            GRID DE PROJETOS — MOBILE FIRST
        ================================================ */}

        <Box
          component="ul"
          aria-label="Lista de projetos em destaque"
          sx={{
            display: 'grid',

            gridTemplateColumns: {
              xs: 'minmax(0, 1fr)',
              sm: 'repeat(2, minmax(0, 1fr))',
              lg: 'repeat(3, minmax(0, 1fr))',
            },

            columnGap: {
              xs: 2.5,
              md: 3,
            },

            rowGap: {
              xs: 2,
              md: 2.5,
            },

            alignItems: 'stretch',

            listStyle: 'none',
            p: 0,
            m: 0,
          }}
        >
          {projects.map((project, index) => (
            <Box
              component="li"
              key={project.slug}
              sx={{
                minWidth: 0,
                height: '100%',
              }}
            >
              <Reveal
                delay={Math.min(index * 0.07, 0.35)}
              >
                <Box
                  sx={(theme) => ({
                    ...projectWrapperSx(theme),

                    '& > *': {
                      minWidth: 0,
                    },
                  })}
                >
                  {/* CARD EXISTENTE DO PROJETO */}

                  <ProjectCard
                    project={project}
                    index={index}
                  />
                </Box>
              </Reveal>
            </Box>
          ))}
        </Box>

        {/* ================================================
            RODAPÉ DA SEÇÃO
        ================================================ */}

        <Reveal delay={0.15}>
          <Box
            sx={(theme) => ({
              mt: {
                xs: 6,
                md: 8,
              },

              p: {
                xs: 2.5,
                sm: 3,
              },

              borderRadius: '16px',

              border: `1px solid ${alpha(
                theme.palette.primary.main,
                0.16,
              )}`,

              bgcolor: alpha(
                theme.palette.background.paper,
                0.65,
              ),

              backgroundImage: `
                linear-gradient(
                  120deg,
                  ${alpha(theme.palette.primary.main, 0.045)},
                  transparent 70%
                )
              `,
            })}
          >
            <Stack
              direction={{
                xs: 'column',
                sm: 'row',
              }}
              alignItems={{
                xs: 'flex-start',
                sm: 'center',
              }}
              justifyContent="space-between"
              gap={2.5}
            >
              {/* INFORMAÇÃO */}

              <Stack
                direction="row"
                spacing={1.5}
                alignItems="flex-start"
                sx={{
                  minWidth: 0,
                  maxWidth: 850,
                }}
              >
                <InfoOutlinedIcon
                  sx={{
                    fontSize: 21,
                    color: 'primary.main',
                    flexShrink: 0,
                    mt: 0.25,
                  }}
                />

                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.8,
                    fontSize: '0.85rem',
                  }}
                >
                  Os cases apresentados incluem projetos
                  profissionais e estudos técnicos. O estágio
                  de cada desenvolvimento é informado em
                  seus detalhes. Links para sistemas reais,
                  repositórios e demonstrações são exibidos
                  somente quando estiverem configurados.
                </Typography>
              </Stack>

              {/* ASSINATURA VISUAL */}

              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                sx={{
                  flexShrink: 0,
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color: 'primary.main',
                    fontWeight: 800,
                    letterSpacing: '0.11em',
                  }}
                >
                  EXPLORE OS CASES
                </Typography>

                <ArrowOutwardRoundedIcon
                  sx={{
                    color: 'primary.main',
                    fontSize: 19,
                  }}
                />
              </Stack>
            </Stack>
          </Box>
        </Reveal>
      </Container>
    </Box>
  );
}
