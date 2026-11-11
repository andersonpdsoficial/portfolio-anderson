'use client';

import Link from 'next/link';

import {
  Box,
  Button,
  Chip,
  Container,
  Paper,
  Stack,
  Typography,
} from '@mui/material';

import { alpha, type Theme } from '@mui/material/styles';

import WorkOutlineRoundedIcon from '@mui/icons-material/WorkOutlineRounded';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';

import { portfolioData, type FreeCourse } from '@/data/portfolioData';
import { Reveal } from '@/components/ui/Reveal';
import { CertificateCard } from '@/components/certificates/CertificateCard';
import { getHomeCertificates } from '@/functions/getHomeCertificates';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

// ============================================================
// ESTILOS COMPARTILHADOS — MATERIAL UI
// ============================================================

const sectionBackground = (theme: Theme) => ({
  backgroundColor: theme.palette.background.default,

  backgroundImage: `
    radial-gradient(
      ellipse at 5% 15%,
      ${alpha(theme.palette.primary.main, 0.1)},
      transparent 45%
    ),
    radial-gradient(
      ellipse at 95% 65%,
      ${alpha(theme.palette.info.main, 0.08)},
      transparent 45%
    )
  `,
});

const cardHoverSx = {
  transition:
    'transform 350ms cubic-bezier(.22,1,.36,1), border-color 350ms ease, box-shadow 350ms ease',

  '&:hover': {
    transform: 'translateY(-6px)',
    borderColor: 'primary.main',
    boxShadow: '0 20px 55px rgba(0,0,0,0.13)',
  },

  '@media (prefers-reduced-motion: reduce)': {
    transition: 'none',

    '&:hover': {
      transform: 'none',
    },
  },
} as const;

// ============================================================
// CURSOS LIVRES — CARTÕES COM CERTIFICADO
// ============================================================

function FreeCoursesPanel({ courses }: { courses: readonly FreeCourse[] }) {
  const homeCourses = getHomeCertificates(courses);

  return (
    <Reveal delay={0.18}>
      <Paper
        component="aside"
        aria-labelledby="free-courses-title"
        elevation={0}
        sx={(theme) => ({
          mt: 2.5,
          p: { xs: 2.5, sm: 3 },
          borderRadius: '20px',
          bgcolor: 'background.paper',
          border: '1px solid',
          borderColor: 'divider',
          backgroundImage: `radial-gradient(ellipse at 100% 0%, ${alpha(
            theme.palette.info.main,
            0.1,
          )}, transparent 65%)`,
          boxShadow:
            theme.palette.mode === 'dark'
              ? '0 14px 36px rgba(0,0,0,0.12)'
              : '0 14px 36px rgba(20,30,45,0.045)',
        })}
      >
        <Stack direction="row" spacing={1.3} alignItems="center" sx={{ mb: 2.3 }}>
          <Box
            sx={(theme) => ({
              width: 42,
              height: 42,
              borderRadius: '12px',
              flexShrink: 0,
              display: 'grid',
              placeItems: 'center',
              color: 'primary.main',
              bgcolor: alpha(theme.palette.primary.main, 0.1),
            })}
          >
            <WorkspacePremiumOutlinedIcon />
          </Box>
          <Box sx={{ minWidth: 0 }}>
            <Typography
              component="h3"
              id="free-courses-title"
              sx={{
                fontSize: '0.88rem',
                fontWeight: 800,
                color: 'text.primary',
                letterSpacing: '0.07em',
              }}
            >
              CURSOS LIVRES
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Cursos e certificados de conclusão
            </Typography>
          </Box>
        </Stack>

        {courses.length > 0 ? (
          <Stack spacing={1.15}>
            {homeCourses.map((course, index) => (
              <CertificateCard
                key={`${course.id}-${index}`}
                course={course}
                variant="compact"
              />
            ))}

            <Box sx={{ pt: 1.2 }}>
              <Button
                component={Link}
                href="/certificados"
                variant="outlined"
                color="primary"
                fullWidth
                endIcon={<ArrowForwardRoundedIcon />}
                sx={{
                  minHeight: 44,
                  borderRadius: '12px',
                  fontWeight: 750,
                  textTransform: 'none',
                  '&:focus-visible': {
                    outline: '2px solid',
                    outlineOffset: 3,
                  },
                }}
              >
                Listar todos
              </Button>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ display: 'block', mt: 1, textAlign: 'center' }}
              >
                Exibindo {homeCourses.length} de {courses.length} certificados
              </Typography>
            </Box>
          </Stack>
        ) : (
          <Typography
            variant="body2"
            sx={{
              py: 0.5,
              color: 'text.secondary',
              fontSize: '0.85rem',
              lineHeight: 1.7,
            }}
          >
            Certificados em atualização.
          </Typography>
        )}
      </Paper>
    </Reveal>
  );
}

// ============================================================
// COMPONENTE PRINCIPAL
// ============================================================

export function ExperienceTimeline() {
  const { experiences, education, freeCourses } = portfolioData;

  return (
    <Box
      component="section"
      id="experiencia"
      aria-labelledby="experience-title"
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
      {/* ILUMINAÇÃO DECORATIVA */}

      <Box
        aria-hidden="true"
        sx={(theme) => ({
          position: 'absolute',
          top: '10%',
          left: '-180px',
          width: 420,
          height: 420,
          borderRadius: '50%',
          background: `radial-gradient(
            circle,
            ${alpha(theme.palette.primary.main, 0.11)},
            transparent 70%
          )`,
          filter: 'blur(65px)',
          pointerEvents: 'none',
          zIndex: -1,
        })}
      />

      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',

            gridTemplateColumns: {
              xs: 'minmax(0, 1fr)',
              md: 'minmax(0, 0.85fr) minmax(0, 1.15fr)',
            },

            gap: {
              xs: 4,
              md: 4,
              lg: 6,
            },

            alignItems: 'start',
          }}
        >
          {/* ==================================================
              COLUNA ESQUERDA — APRESENTAÇÃO E FORMAÇÃO
          ================================================== */}

          <Box
            sx={{
              minWidth: 0,

              // Cresce com os cursos; sem sticky para não ocultar certificados.
              position: 'relative',
            }}
          >
            <Reveal>
              <Stack spacing={3}>
                {/* IDENTIFICADOR */}

                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1.5}
                >
                  <Box
                    sx={(theme) => ({
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 38,
                      height: 38,
                      borderRadius: '12px',

                      color: 'primary.main',

                      backgroundColor: alpha(
                        theme.palette.primary.main,
                        0.1,
                      ),

                      border: `1px solid ${alpha(
                        theme.palette.primary.main,
                        0.2,
                      )}`,
                    })}
                  >
                    <WorkOutlineRoundedIcon
                      sx={{ fontSize: 20 }}
                    />
                  </Box>

                  <Typography
                    variant="overline"
                    sx={{
                      fontWeight: 800,
                      letterSpacing: '0.18em',
                      color: 'primary.main',
                    }}
                  >
                    03 / TRAJETÓRIA
                  </Typography>
                </Stack>

                {/* TÍTULO */}

                <Typography
                  id="experience-title"
                  component="h2"
                  sx={{
                    color: 'text.primary',
                    fontWeight: 800,
                    letterSpacing: '-0.055em',
                    lineHeight: 1.12,

                    fontSize: {
                      xs: '2.35rem',
                      sm: '3rem',
                      md: '3.3rem',
                      lg: '3.65rem',
                    },
                  }}
                >
                  Experiência que{' '}

                  <Box
                    component="span"
                    sx={{
                      display: 'inline',

                      background:
                        'linear-gradient(110deg, #A7DF69, #61CDB8, #86A8FF)',

                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    constrói repertório.
                  </Box>
                </Typography>

                {/* DESCRIÇÃO */}

                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.9,
                    maxWidth: 470,
                    fontSize: {
                      xs: '1rem',
                      md: '1.06rem',
                    },
                  }}
                >
                  Cada etapa acrescenta uma perspectiva:
                  tecnologia, colaboração e entendimento
                  das necessidades reais dos usuários.
                </Typography>
              </Stack>
            </Reveal>

            {/* ================================================
                FORMAÇÃO ACADÊMICA
            ================================================ */}

            <Reveal delay={0.12}>
              <Paper
                component="aside"
                aria-labelledby="education-title"
                elevation={0}
                sx={(theme) => ({
                  position: 'relative',
                  overflow: 'hidden',

                  mt: {
                    xs: 5,
                    md: 7,
                  },

                  p: {
                    xs: 3,
                    sm: 3.5,
                  },

                  borderRadius: '22px',

                  bgcolor: 'background.paper',

                  border: '1px solid',
                  borderColor: 'divider',

                  backgroundImage: `
                    radial-gradient(
                      ellipse at 100% 0%,
                      ${alpha(theme.palette.primary.main, 0.09)},
                      transparent 65%
                    )
                  `,

                  boxShadow:
                    theme.palette.mode === 'dark'
                      ? '0 15px 45px rgba(0,0,0,0.16)'
                      : '0 15px 45px rgba(20,30,45,0.045)',

                  ...cardHoverSx,
                })}
              >
                {/* CABEÇALHO */}

                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1.5}
                  sx={{ mb: 3 }}
                >
                  <Box
                    sx={(theme) => ({
                      width: 43,
                      height: 43,

                      borderRadius: '13px',

                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',

                      color: 'primary.main',

                      bgcolor: alpha(
                        theme.palette.primary.main,
                        0.1,
                      ),
                    })}
                  >
                    <SchoolOutlinedIcon />
                  </Box>

                  <Box>
                    <Typography
                      id="education-title"
                      component="h3"
                      sx={{
                        fontSize: '0.88rem',
                        fontWeight: 800,
                        letterSpacing: '0.085em',
                        color: 'text.primary',
                      }}
                    >
                      FORMAÇÃO ACADÊMICA
                    </Typography>

                    <Typography
                      variant="caption"
                      sx={{
                        color: 'text.secondary',
                      }}
                    >
                      Educação e especialização
                    </Typography>
                  </Box>
                </Stack>

                {/* FORMAÇÕES */}

                <Stack spacing={2}>
                  {education.map((item, index) => (
                    <Box
                      key={`${item.title}-${index}`}
                      sx={{
                        position: 'relative',

                        pl: 2.5,
                        py: 0.5,

                        borderLeft: '2px solid',
                        borderColor: 'primary.main',

                        transition:
                          'padding-left 250ms ease',

                        '&:hover': {
                          pl: 3,
                        },

                        '@media (prefers-reduced-motion: reduce)': {
                          transition: 'none',
                          '&:hover': {
                            pl: 2.5,
                          },
                        },
                      }}
                    >
                      <Typography
                        component="h4"
                        sx={{
                          fontSize: '0.98rem',
                          fontWeight: 750,
                          color: 'text.primary',
                          lineHeight: 1.5,
                        }}
                      >
                        {item.title}
                      </Typography>

                      <Stack
                        direction="row"
                        alignItems="center"
                        flexWrap="wrap"
                        useFlexGap
                        spacing={1}
                        sx={{ mt: 1 }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'text.secondary',
                          }}
                        >
                          {item.type}
                        </Typography>

                        <Chip
                          size="small"
                          label={item.status}
                          icon={
                            <CheckCircleOutlineRoundedIcon
                              sx={{ fontSize: 15 }}
                            />
                          }
                          sx={(theme) => ({
                            height: 26,
                            fontWeight: 700,
                            fontSize: '0.7rem',
                            color: 'success.main',

                            bgcolor: alpha(
                              theme.palette.success.main,
                              0.09,
                            ),

                            '& .MuiChip-icon': {
                              color: 'success.main',
                            },
                          })}
                        />
                      </Stack>
                    </Box>
                  ))}
                </Stack>
              </Paper>
            </Reveal>

            {/* CURSOS LIVRES — ABAIXO DA FORMAÇÃO ACADÊMICA */}
            <FreeCoursesPanel courses={freeCourses} />
          </Box>

          {/* ==================================================
              COLUNA DIREITA — TIMELINE PROFISSIONAL
          ================================================== */}

          <Box
            aria-label="Linha do tempo profissional"
            sx={{
              position: 'relative',
              minWidth: 0,

              // Linha vertical
              '&::before': {
                content: '""',
                position: 'absolute',
                left: '15px',
                top: 27,
                bottom: 28,
                width: '2px',

                background:
                  'linear-gradient(180deg, #A7DF69 0%, #69CCB9 45%, #8594E8 80%, transparent 100%)',

                opacity: 0.75,
                borderRadius: '999px',
              },
            }}
          >
            {experiences.map((experience, index) => (
              <Reveal
                key={`${experience.id}-${index}`}
                delay={Math.min(index * 0.09, 0.36)}
              >
                <Box
                  sx={{
                    position: 'relative',

                    pl: {
                      xs: 5,
                      sm: 6,
                    },

                    mb:
                      index === experiences.length - 1
                        ? 0
                        : 3,

                    // Marcador da timeline
                    '&::before': {
                      content: '""',
                      position: 'absolute',

                      left: '8px',
                      top: '28px',

                      width: 16,
                      height: 16,

                      borderRadius: '50%',

                      backgroundColor: 'primary.main',

                      border: '4px solid',
                      borderColor: 'background.default',

                      boxSizing: 'border-box',

                      boxShadow:
                        '0 0 0 3px rgba(159,234,115,0.18)',

                      zIndex: 2,
                    },
                  }}
                >
                  <Paper
                    component="article"
                    elevation={0}
                    sx={(theme) => ({
                      position: 'relative',
                      overflow: 'hidden',

                      p: {
                        xs: 2.5,
                        sm: 3,
                        md: 3.5,
                      },

                      borderRadius: '22px',

                      bgcolor: 'background.paper',

                      border: '1px solid',
                      borderColor: 'divider',

                      backgroundImage: `
                        radial-gradient(
                          ellipse at 100% 0%,
                          ${alpha(theme.palette.primary.main, 0.07)},
                          transparent 55%
                        )
                      `,

                      boxShadow:
                        theme.palette.mode === 'dark'
                          ? '0 12px 40px rgba(0,0,0,0.12)'
                          : '0 12px 40px rgba(20,30,45,0.045)',

                      ...cardHoverSx,
                    })}
                  >
                    <Stack spacing={2.5}>
                      {/* PERÍODO E LOCALIZAÇÃO */}

                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        flexWrap="wrap"
                        useFlexGap
                        gap={1.5}
                      >
                        <Stack
                          direction="row"
                          alignItems="center"
                          spacing={0.8}
                          sx={{
                            color: 'primary.main',
                          }}
                        >
                          <CalendarMonthRoundedIcon
                            sx={{ fontSize: 17 }}
                          />

                          <Typography
                            variant="caption"
                            sx={{
                              fontWeight: 800,
                              letterSpacing: '0.015em',
                              color: 'inherit',
                            }}
                          >
                            {experience.period}
                          </Typography>
                        </Stack>

                        <Stack
                          direction="row"
                          alignItems="center"
                          spacing={0.6}
                        >
                          <PlaceOutlinedIcon
                            sx={{
                              fontSize: 17,
                              color: 'text.secondary',
                            }}
                          />

                          <Typography
                            variant="caption"
                            sx={{
                              color: 'text.secondary',
                            }}
                          >
                            {experience.location}
                          </Typography>
                        </Stack>
                      </Stack>

                      {/* CARGO E ORGANIZAÇÃO */}

                      <Stack spacing={0.8}>
                        <Typography
                          component="h3"
                          sx={{
                            color: 'text.primary',
                            fontWeight: 800,
                            lineHeight: 1.35,
                            letterSpacing: '-0.025em',

                            fontSize: {
                              xs: '1.15rem',
                              sm: '1.3rem',
                            },
                          }}
                        >
                          {experience.role}
                        </Typography>

                        <Typography
                          component="h4"
                          sx={{
                            color: 'primary.main',
                            fontSize: '0.95rem',
                            fontWeight: 700,
                            lineHeight: 1.5,
                          }}
                        >
                          {experience.organization}
                        </Typography>
                      </Stack>

                      {/* DESCRIÇÃO */}

                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          lineHeight: 1.85,
                          fontSize: '0.91rem',
                        }}
                      >
                        {experience.description}
                      </Typography>

                      {/* ATIVIDADES REALIZADAS */}

                      {experience.highlights.length > 0 && (
                        <Box
                          component="ul"
                          aria-label="Atividades e responsabilidades"
                          sx={{
                            listStyle: 'none',
                            m: 0,
                            p: 0,

                            display: 'grid',
                            gap: 1.35,
                          }}
                        >
                          {experience.highlights.map(
                            (highlight, highlightIndex) => (
                              <Box
                                component="li"
                                key={`${index}-${highlightIndex}`}
                                sx={{
                                  display: 'flex',
                                  alignItems: 'flex-start',
                                  gap: 1.3,
                                }}
                              >
                                <CheckCircleOutlineRoundedIcon
                                  aria-hidden="true"
                                  sx={{
                                    color: 'primary.main',
                                    fontSize: 18,
                                    flexShrink: 0,
                                    mt: '3px',
                                  }}
                                />

                                <Typography
                                  variant="body2"
                                  sx={{
                                    color: 'text.secondary',
                                    lineHeight: 1.7,
                                    fontSize: '0.87rem',
                                  }}
                                >
                                  {highlight}
                                </Typography>
                              </Box>
                            ),
                          )}
                        </Box>
                      )}

                      {/* TECNOLOGIAS */}

                      {experience.technologies &&
                        experience.technologies.length > 0 && (
                          <Box
                            sx={{
                              pt: 2.3,
                              borderTop: '1px solid',
                              borderColor: 'divider',
                            }}
                          >
                            <Stack
                              direction="row"
                              alignItems="center"
                              spacing={0.8}
                              sx={{ mb: 1.5 }}
                            >
                              <AutoAwesomeRoundedIcon
                                sx={{
                                  fontSize: 15,
                                  color: 'primary.main',
                                }}
                              />

                              <Typography
                                variant="caption"
                                sx={{
                                  color: 'text.secondary',
                                  fontWeight: 800,
                                  letterSpacing: '0.1em',
                                }}
                              >
                                TECNOLOGIAS
                              </Typography>
                            </Stack>

                            <Stack
                              direction="row"
                              useFlexGap
                              flexWrap="wrap"
                              gap={0.8}
                            >
                              {experience.technologies.map(
                                (tech, techIndex) => (
                                  <Chip
                                    key={`${tech}-${techIndex}`}
                                    label={tech}
                                    size="small"
                                    variant="outlined"
                                    sx={(theme) => ({
                                      height: 29,
                                      borderRadius: '8px',

                                      fontWeight: 600,
                                      fontSize: '0.72rem',

                                      color: 'text.secondary',

                                      borderColor:
                                        theme.palette.divider,

                                      bgcolor: alpha(
                                        theme.palette.primary.main,
                                        0.035,
                                      ),

                                      transition:
                                        'background-color 200ms ease, border-color 200ms ease, transform 200ms ease',

                                      '&:hover': {
                                        color: 'text.primary',
                                        borderColor: 'primary.main',

                                        bgcolor: alpha(
                                          theme.palette.primary.main,
                                          0.1,
                                        ),

                                        transform:
                                          'translateY(-2px)',
                                      },

                                      '@media (prefers-reduced-motion: reduce)': {
                                        transition: 'none',

                                        '&:hover': {
                                          transform: 'none',
                                        },
                                      },
                                    })}
                                  />
                                ),
                              )}
                            </Stack>
                          </Box>
                        )}
                    </Stack>
                  </Paper>
                </Box>
              </Reveal>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
