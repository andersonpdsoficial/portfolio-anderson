
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

import { alpha, useTheme } from '@mui/material/styles';

import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import SouthRoundedIcon from '@mui/icons-material/SouthRounded';
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import LanOutlinedIcon from '@mui/icons-material/LanOutlined';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';

import { useMediaQuery } from '@mui/material';
import { Reveal } from '@/components/ui/Reveal';

import { portfolioData } from '@/data/portfolioData';

// ============================================================
// CONFIGURAÇÕES DO DIAGRAMA
// ============================================================

const systems = [
  {
    id: 'frontend',
    icon: CodeRoundedIcon,
    label: 'Interface',
    meta: 'React · Next.js',
    description: 'Experiência e apresentação',
    index: '01',
  },
  {
    id: 'backend',
    icon: LanOutlinedIcon,
    label: 'API / Domínio',
    meta: 'Django · REST',
    description: 'Regras e integrações',
    index: '02',
  },
  {
    id: 'database',
    icon: ShieldOutlinedIcon,
    label: 'Acesso & Dados',
    meta: 'Auth · PostgreSQL',
    description: 'Segurança e persistência',
    index: '03',
  },
] as const;

// ============================================================
// DIAGRAMA DE ARQUITETURA — MATERIAL UI
// ============================================================

function SystemVisual() {
  const theme = useTheme();

  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  const isDark = theme.palette.mode === 'dark';

  return (
    <Paper
      component="aside"
      aria-label="Diagrama ilustrativo de arquitetura web conectando interface, API e dados"
      elevation={0}
      sx={{
        position: 'relative',
        isolation: 'isolate',
        overflow: 'hidden',
        width: '100%',
        borderRadius: {
          xs: '22px',
          sm: '28px',
        },
        border: '1px solid',
        borderColor: alpha(
          theme.palette.primary.main,
          0.24,
        ),
        bgcolor: 'background.paper',
        backgroundImage: `
          radial-gradient(
            ellipse at 90% 0%,
            ${alpha(theme.palette.primary.main, 0.14)},
            transparent 55%
          ),
          radial-gradient(
            ellipse at 0% 95%,
            ${alpha(theme.palette.info.main, 0.10)},
            transparent 55%
          )
        `,
        boxShadow: isDark
          ? '0 30px 90px rgba(0,0,0,0.30)'
          : '0 30px 90px rgba(20,35,55,0.12)',
        transition:
          'transform 400ms ease, box-shadow 400ms ease',
        '&:hover': {
          transform: reducedMotion
            ? 'none'
            : 'translateY(-5px)',
          boxShadow: isDark
            ? '0 40px 100px rgba(0,0,0,0.38)'
            : '0 40px 100px rgba(20,35,55,0.17)',
        },
        '@media (prefers-reduced-motion: reduce)': {
          transition: 'none',
        },
      }}
    >
      {/* GRID DECORATIVO */}

      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: -1,
          pointerEvents: 'none',
          opacity: isDark ? 0.09 : 0.055,
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
          backgroundSize: '36px 36px',
          maskImage:
            'linear-gradient(to bottom, black, transparent 90%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, black, transparent 90%)',
        }}
      />

      {/* BARRA SUPERIOR */}

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          px: {
            xs: 2.5,
            sm: 3,
          },
          py: 2,
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          spacing={1.1}
        >
          <Box
            aria-hidden="true"
            sx={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              bgcolor: 'success.main',
              boxShadow: `0 0 14px ${alpha(
                theme.palette.success.main,
                0.65,
              )}`,
              animation: reducedMotion
                ? 'none'
                : 'heroPulse 2.6s ease-in-out infinite',
              '@keyframes heroPulse': {
                '0%, 100%': {
                  opacity: 1,
                  transform: 'scale(1)',
                },
                '50%': {
                  opacity: 0.55,
                  transform: 'scale(0.8)',
                },
              },
            }}
          />

          <Typography
            variant="overline"
            sx={{
              fontSize: '0.7rem',
              fontWeight: 800,
              letterSpacing: '0.15em',
              color: 'text.secondary',
            }}
          >
            SYSTEM DESIGN
          </Typography>
        </Stack>

        <Typography
          variant="caption"
          sx={{
            fontWeight: 700,
            color: 'text.disabled',
            letterSpacing: '0.12em',
          }}
        >
          V 1.0
        </Typography>
      </Stack>

      {/* APRESENTAÇÃO DO DIAGRAMA */}

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        sx={{
          px: {
            xs: 2.5,
            sm: 3.5,
          },
          pt: 3.5,
          pb: 2.5,
        }}
      >
        <Stack spacing={0.8}>
          <Typography
            variant="overline"
            sx={{
              color: 'primary.main',
              fontWeight: 800,
              letterSpacing: '0.17em',
              fontSize: '0.68rem',
            }}
          >
            FULL STACK
          </Typography>

          <Typography
            component="h2"
            sx={{
              fontSize: {
                xs: '1.28rem',
                sm: '1.55rem',
              },
              color: 'text.primary',
              fontWeight: 800,
              letterSpacing: '-0.035em',
            }}
          >
            Conectando as camadas.
          </Typography>
        </Stack>

        <Box
          sx={{
            width: 52,
            height: 52,
            flexShrink: 0,
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: alpha(
              theme.palette.primary.main,
              0.10,
            ),
            border: `1px solid ${alpha(
              theme.palette.primary.main,
              0.20,
            )}`,
            color: 'primary.main',
          }}
        >
          <HubOutlinedIcon sx={{ fontSize: 29 }} />
        </Box>
      </Stack>

      {/* NÓS DA ARQUITETURA */}

      <Box
        role="list"
        aria-label="Camadas do sistema"
        sx={{
          position: 'relative',
          px: {
            xs: 2.5,
            sm: 3.5,
          },
          py: 2,
        }}
      >
        {/* LINHA DE CONEXÃO */}

        <Box
          aria-hidden="true"
          sx={{
            position: 'absolute',
            top: 65,
            bottom: 65,
            left: {
              xs: 50,
              sm: 54,
            },
            width: 2,
            borderRadius: '999px',
            background: `linear-gradient(
              180deg,
              ${theme.palette.primary.main},
              ${theme.palette.info.main}
            )`,
            opacity: 0.45,
            zIndex: 0,
          }}
        />

        <Stack spacing={1.5}>
          {systems.map((system, index) => {
            const IconComponent = system.icon;

            const accentColor =
              index === 0
                ? theme.palette.primary.main
                : index === 1
                  ? theme.palette.info.main
                  : theme.palette.secondary.main;

            return (
              <Box
                role="listitem"
                key={system.id}
                sx={{
                  position: 'relative',
                  zIndex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  gap: {
                    xs: 1.5,
                    sm: 2,
                  },
                  minHeight: 92,
                  px: {
                    xs: 1.5,
                    sm: 2,
                  },
                  py: 1.6,
                  borderRadius: '15px',
                  border: '1px solid',
                  borderColor: 'divider',
                  bgcolor: alpha(
                    theme.palette.background.paper,
                    isDark ? 0.85 : 0.93,
                  ),
                  backdropFilter: 'blur(12px)',
                  boxShadow: isDark
                    ? '0 8px 25px rgba(0,0,0,0.12)'
                    : '0 8px 25px rgba(20,30,45,0.035)',
                  transition:
                    'transform 280ms ease, border-color 280ms ease, box-shadow 280ms ease',
                  '&:hover': {
                    transform: reducedMotion
                      ? 'none'
                      : 'translateX(6px)',
                    borderColor: accentColor,
                    boxShadow: `0 12px 35px ${alpha(
                      accentColor,
                      0.12,
                    )}`,
                  },
                  '@media (prefers-reduced-motion: reduce)': {
                    transition: 'none',
                  },
                }}
              >
                {/* ÍCONE */}

                <Box
                  sx={{
                    flexShrink: 0,
                    width: {
                      xs: 43,
                      sm: 49,
                    },
                    height: {
                      xs: 43,
                      sm: 49,
                    },
                    borderRadius: '13px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: accentColor,
                    bgcolor: alpha(accentColor, 0.11),
                    border: `1px solid ${alpha(
                      accentColor,
                      0.18,
                    )}`,
                  }}
                >
                  <IconComponent sx={{ fontSize: 24 }} />
                </Box>

                {/* INFORMAÇÕES */}

                <Stack
                  spacing={0.4}
                  sx={{
                    flex: 1,
                    minWidth: 0,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: '0.91rem',
                        sm: '1rem',
                      },
                      fontWeight: 800,
                      color: 'text.primary',
                    }}
                  >
                    {system.label}
                  </Typography>

                  <Typography
                    variant="caption"
                    sx={{
                      color: 'text.secondary',
                      fontWeight: 600,
                    }}
                  >
                    {system.meta}
                  </Typography>

                  <Typography
                    variant="caption"
                    sx={{
                      color: 'text.disabled',
                      fontSize: '0.69rem',
                    }}
                  >
                    {system.description}
                  </Typography>
                </Stack>

                {/* NUMERAÇÃO */}

                <Typography
                  variant="caption"
                  sx={{
                    color: accentColor,
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                    alignSelf: 'flex-start',
                  }}
                >
                  {system.index}
                </Typography>
              </Box>
            );
          })}
        </Stack>
      </Box>

      {/* RODAPÉ DO DIAGRAMA */}

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
        gap={1.5}
        sx={{
          mt: 2,
          px: {
            xs: 2.5,
            sm: 3.5,
          },
          py: 2.5,
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
        >
          <AutoAwesomeRoundedIcon
            sx={{
              color: 'primary.main',
              fontSize: 18,
            }}
          />

          <Typography
            variant="caption"
            sx={{
              fontWeight: 700,
              color: 'text.secondary',
            }}
          >
            Pensamento sistêmico
          </Typography>
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          spacing={0.7}
        >
          <Typography
            variant="caption"
            sx={{
              fontSize: '0.66rem',
              fontWeight: 800,
              color: 'primary.main',
              letterSpacing: '0.09em',
            }}
          >
            BUILD WITH PURPOSE
          </Typography>

          <ArrowOutwardRoundedIcon
            sx={{
              color: 'primary.main',
              fontSize: 17,
            }}
          />
        </Stack>
      </Stack>
    </Paper>
  );
}

// ============================================================
// HERO PRINCIPAL
// ============================================================

export function Hero() {
  const theme = useTheme();

  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  const { identity } = portfolioData;

  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      component="section"
      id="inicio"
      aria-labelledby="hero-title"
      sx={{
        position: 'relative',
        isolation: 'isolate',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: {
          xs: 'auto',
          md: 'min(780px, 92svh)',
        },
        bgcolor: 'background.default',
        backgroundImage: `
          radial-gradient(
            ellipse at 10% 15%,
            ${alpha(theme.palette.primary.main, isDark ? 0.14 : 0.11)},
            transparent 43%
          ),
          radial-gradient(
            ellipse at 92% 35%,
            ${alpha(theme.palette.info.main, isDark ? 0.11 : 0.08)},
            transparent 48%
          ),
          radial-gradient(
            ellipse at 50% 100%,
            ${alpha(theme.palette.secondary.main, 0.07)},
            transparent 55%
          )
        `,
        pt: {
          xs: 9,
          sm: 10,
          md: 11,
        },
        pb: {
          xs: 6,
          md: 4,
        },
      }}
    >
      {/* ======================================================
          FUNDO DECORATIVO
      ====================================================== */}

      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: -1,
          opacity: isDark ? 0.075 : 0.045,
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
          backgroundSize: '74px 74px',
          maskImage:
            'linear-gradient(to bottom, black, transparent 90%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, black, transparent 90%)',
        }}
      />

      {/* ORBE VERDE */}

      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          top: '-160px',
          left: '-170px',
          width: {
            xs: 350,
            md: 600,
          },
          height: {
            xs: 350,
            md: 600,
          },
          borderRadius: '50%',
          background: `radial-gradient(
            circle,
            ${alpha(theme.palette.primary.main, 0.16)},
            transparent 70%
          )`,
          filter: 'blur(65px)',
          pointerEvents: 'none',
          zIndex: -1,
        }}
      />

      {/* ORBE AZUL */}

      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          right: '-190px',
          bottom: '-130px',
          width: {
            xs: 350,
            md: 620,
          },
          height: {
            xs: 350,
            md: 620,
          },
          borderRadius: '50%',
          background: `radial-gradient(
            circle,
            ${alpha(theme.palette.info.main, 0.14)},
            transparent 70%
          )`,
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: -1,
        }}
      />

      {/* ======================================================
          CONTEÚDO CENTRAL
      ====================================================== */}

      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 1,
          flex: 1,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'grid',
            gridTemplateColumns: {
              xs: 'minmax(0, 1fr)',
              md: 'minmax(0, 1.05fr) minmax(0, 0.95fr)',
            },
            alignItems: 'center',
            columnGap: {
              md: 5,
              lg: 8,
            },
            rowGap: {
              xs: 7,
              md: 4,
            },
          }}
        >
          {/* ==================================================
              APRESENTAÇÃO — COLUNA ESQUERDA
          ================================================== */}

          <Reveal>
            <Stack
              spacing={{
                xs: 3,
                md: 3.5,
              }}
              sx={{
                minWidth: 0,
                maxWidth: 670,
              }}
            >
              {/* IDENTIFICAÇÃO */}

              <Stack
                direction="row"
                alignItems="center"
                spacing={1.2}
                sx={{
                  width: 'fit-content',
                  maxWidth: '100%',
                  px: 1.8,
                  py: 1.1,
                  border: '1px solid',
                  borderColor: alpha(
                    theme.palette.primary.main,
                    0.25,
                  ),
                  borderRadius: '999px',
                  bgcolor: alpha(
                    theme.palette.primary.main,
                    0.075,
                  ),
                }}
              >
                <Box
                  aria-hidden="true"
                  sx={{
                    width: 8,
                    height: 8,
                    flexShrink: 0,
                    borderRadius: '50%',
                    bgcolor: 'success.main',
                    boxShadow: `0 0 12px ${alpha(
                      theme.palette.success.main,
                      0.6,
                    )}`,
                  }}
                />

                <Typography
                  variant="caption"
                  sx={{
                    color: 'text.primary',
                    fontSize: {
                      xs: '0.62rem',
                      sm: '0.7rem',
                    },
                    fontWeight: 800,
                    letterSpacing: '0.1em',
                    lineHeight: 1.5,
                  }}
                >
                  ENGENHARIA DE SOFTWARE · PORTO VELHO, BR
                </Typography>
              </Stack>

              {/* TÍTULO PRINCIPAL */}

              <Typography
                id="hero-title"
                component="h1"
                sx={{
                  fontWeight: 900,
                  letterSpacing: '-0.07em',
                  lineHeight: {
                    xs: 1.06,
                    md: 1.03,
                  },
                  color: 'text.primary',
                  fontSize: {
                    xs: '3.15rem',
                    sm: '4.7rem',
                    md: '4.6rem',
                    lg: '5.5rem',
                  },
                }}
              >
                Tecnologia
                <Box
                  component="span"
                  sx={{ display: 'block' }}
                >
                  com{' '}
                  <Box
                    component="span"
                    sx={{
                      display: 'inline',
                      backgroundImage: `
                        linear-gradient(
                          110deg,
                          ${theme.palette.primary.main} 0%,
                          ${theme.palette.info.main} 85%
                        )
                      `,
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    propósito.
                  </Box>

                  <Box
                    component="span"
                    aria-hidden="true"
                    sx={{
                      color: 'primary.main',
                      fontWeight: 500,
                      ml: 0.3,
                      animation: reducedMotion
                        ? 'none'
                        : 'heroCursor 1.1s steps(1) infinite',
                      '@keyframes heroCursor': {
                        '0%, 49%': {
                          opacity: 1,
                        },
                        '50%, 100%': {
                          opacity: 0,
                        },
                      },
                    }}
                  >
                    _
                  </Box>
                </Box>
              </Typography>

              {/* NOME E FUNÇÃO */}

              <Typography
                component="p"
                sx={{
                  fontSize: {
                    xs: '1.12rem',
                    sm: '1.3rem',
                  },
                  color: 'text.primary',
                  lineHeight: 1.7,
                }}
              >
                Olá, sou{' '}
                <Box
                  component="strong"
                  sx={{
                    fontWeight: 800,
                    color: 'primary.main',
                  }}
                >
                  {identity.shortName}.
                </Box>{' '}
                {identity.role}.
              </Typography>

              {/* DESCRIÇÃO */}

              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  maxWidth: 560,
                  lineHeight: 1.95,
                  fontSize: {
                    xs: '0.98rem',
                    md: '1.06rem',
                  },
                }}
              >
                {identity.intro}
              </Typography>

              {/* BOTÕES PRINCIPAIS */}

              <Stack
                direction={{
                  xs: 'column',
                  sm: 'row',
                }}
                spacing={1.5}
                sx={{
                  pt: 1,
                }}
              >
                <Button
                  component={Link}
                  href="/#projetos"
                  variant="contained"
                  color="primary"
                  size="large"
                  endIcon={<ArrowForwardRoundedIcon />}
                  sx={{
                    minHeight: 54,
                    px: 3,
                    borderRadius: '13px',
                    fontWeight: 800,
                    textTransform: 'none',
                    fontSize: '0.95rem',
                    boxShadow: `0 12px 35px ${alpha(
                      theme.palette.primary.main,
                      0.19,
                    )}`,
                    transition:
                      'transform 250ms ease, box-shadow 250ms ease',
                    '&:hover': {
                      transform: reducedMotion
                        ? 'none'
                        : 'translateY(-3px)',
                      boxShadow: `0 18px 42px ${alpha(
                        theme.palette.primary.main,
                        0.28,
                      )}`,
                    },
                    '@media (prefers-reduced-motion: reduce)': {
                      transition: 'none',
                    },
                  }}
                >
                  Explorar projetos
                </Button>

                <Button
                  component={Link}
                  href="/#sobre"
                  variant="outlined"
                  size="large"
                  endIcon={<SouthRoundedIcon />}
                  sx={{
                    minHeight: 54,
                    px: 3,
                    borderRadius: '13px',
                    fontWeight: 700,
                    textTransform: 'none',
                    fontSize: '0.95rem',
                    color: 'text.primary',
                    borderColor: 'divider',
                    bgcolor: alpha(
                      theme.palette.background.paper,
                      0.5,
                    ),
                    transition:
                      'transform 250ms ease, border-color 250ms ease, background-color 250ms ease',
                    '&:hover': {
                      borderColor: 'primary.main',
                      bgcolor: alpha(
                        theme.palette.primary.main,
                        0.07,
                      ),
                      transform: reducedMotion
                        ? 'none'
                        : 'translateY(-3px)',
                    },
                    '@media (prefers-reduced-motion: reduce)': {
                      transition: 'none',
                    },
                  }}
                >
                  Conheça meu trabalho
                </Button>
              </Stack>

              {/* ÁREAS DE ATUAÇÃO */}

              <Stack
                direction="row"
                flexWrap="wrap"
                useFlexGap
                gap={1}
                sx={{
                  pt: 1,
                }}
                aria-label="Áreas de atuação"
              >
                {identity.focus.map((item) => (
                  <Chip
                    key={item}
                    label={item}
                    size="small"
                    variant="outlined"
                    sx={{
                      height: 32,
                      px: 0.5,
                      borderRadius: '9px',
                      fontWeight: 600,
                      fontSize: '0.72rem',
                      color: 'text.secondary',
                      borderColor: 'divider',
                      bgcolor: alpha(
                        theme.palette.background.paper,
                        0.4,
                      ),
                      transition:
                        'transform 200ms ease, border-color 200ms ease',
                      '&:hover': {
                        transform: reducedMotion
                          ? 'none'
                          : 'translateY(-2px)',
                        borderColor: 'primary.main',
                        color: 'text.primary',
                      },
                      '@media (prefers-reduced-motion: reduce)': {
                        transition: 'none',
                      },
                    }}
                  />
                ))}
              </Stack>
            </Stack>
          </Reveal>

          {/* ==================================================
              VISUAL — COLUNA DIREITA
          ================================================== */}

          <Reveal delay={0.14}>
            <Box
              sx={{
                position: 'relative',
                maxWidth: 510,
                mx: 'auto',
              }}
            >
              {/* ETIQUETA SUPERIOR */}

              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                  mb: 2,
                  px: 1,
                }}
              >
                <Typography
                  variant="overline"
                  sx={{
                    color: 'text.secondary',
                    fontSize: '0.68rem',
                    letterSpacing: '0.15em',
                    fontWeight: 800,
                  }}
                >
                  / ARQUITETURA EM CAMADAS
                </Typography>

                <AutoAwesomeRoundedIcon
                  sx={{
                    fontSize: 19,
                    color: 'primary.main',
                  }}
                />
              </Stack>

              {/* AURA ATRÁS DO CARD */}

              <Box
                aria-hidden="true"
                sx={{
                  position: 'absolute',
                  inset: '12% -8%',
                  zIndex: -1,
                  borderRadius: '50%',
                  background: `radial-gradient(
                    ellipse,
                    ${alpha(theme.palette.primary.main, 0.20)},
                    ${alpha(theme.palette.info.main, 0.09)} 45%,
                    transparent 75%
                  )`,
                  filter: 'blur(55px)',
                  pointerEvents: 'none',
                }}
              />

              <SystemVisual />

              {/* RODAPÉ VISUAL */}

              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                  mt: 1,
                  px: 1,
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color: 'text.secondary',
                    fontSize: '0.67rem',
                    fontWeight: 800,
                    letterSpacing: '0.13em',
                  }}
                >
                  DESIGN. BUILD. EVOLVE.
                </Typography>

                <Typography
                  variant="caption"
                  sx={{
                    color: 'primary.main',
                    fontWeight: 800,
                    letterSpacing: '0.12em',
                  }}
                >
                  ↗ 001
                </Typography>
              </Stack>
            </Box>
          </Reveal>
        </Box>
      </Container>

      {/* ======================================================
          RODAPÉ HERO
      ====================================================== */}

      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 1,
          mt: {
            xs: 7,
            md: 9,
          },
          pt: 3,
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Stack
            direction="row"
            alignItems="center"
            spacing={1.5}
          >
            <Box
              aria-hidden="true"
              sx={{
                width: 24,
                height: 1,
                bgcolor: 'primary.main',
              }}
            />

            <Typography
              variant="caption"
              sx={{
                color: 'text.secondary',
                fontWeight: 700,
                letterSpacing: '0.12em',
                fontSize: {
                  xs: '0.61rem',
                  sm: '0.68rem',
                },
              }}
            >
              SCROLL PARA EXPLORAR
            </Typography>

            <SouthRoundedIcon
              sx={{
                fontSize: 15,
                color: 'primary.main',
                animation: reducedMotion
                  ? 'none'
                  : 'heroScroll 2s ease-in-out infinite',
                '@keyframes heroScroll': {
                  '0%, 100%': {
                    transform: 'translateY(0)',
                  },
                  '50%': {
                    transform: 'translateY(5px)',
                  },
                },
              }}
            />
          </Stack>

          <Typography
            variant="caption"
            sx={{
              color: 'text.disabled',
              fontWeight: 700,
              letterSpacing: '0.12em',
            }}
          >
            AP / 2026
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
