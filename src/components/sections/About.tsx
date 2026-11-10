
import Image from 'next/image';

import {
  Box,
  Chip,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from '@mui/material';

import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';

import { portfolioData } from '@/data/portfolioData';
import { Reveal } from '@/components/ui/Reveal';

export function About() {
  const { identity, capabilities } = portfolioData;

  return (
    <Box
      component="section"
      id="sobre"
      aria-labelledby="about-title"
      sx={{
        position: 'relative',
        isolation: 'isolate',
        overflow: 'hidden',
        py: {
          xs: 7,
          sm: 8,
          md: 11,
        },
        bgcolor: 'background.default',
        backgroundImage: `
          radial-gradient(
            ellipse at 85% 15%,
            rgba(159, 234, 115, 0.11),
            transparent 40%
          ),
          radial-gradient(
            ellipse at 5% 85%,
            rgba(100, 130, 255, 0.09),
            transparent 45%
          )
        `,
      }}
    >
      {/* ILUMINAÇÃO DECORATIVA */}

      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          width: 480,
          height: 480,
          top: 30,
          right: '-12%',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(159,234,115,0.12), transparent 70%)',
          filter: 'blur(65px)',
          pointerEvents: 'none',
          zIndex: -1,
        }}
      />

      <Container maxWidth="lg">
        {/* ================================================
            APRESENTAÇÃO PROFISSIONAL
        ================================================ */}

        <Grid
          container
          spacing={{
            xs: 3.5,
            md: 4.5,
          }}
          alignItems="center"
        >
          {/* COLUNA ESQUERDA */}

          <Grid item xs={12} md={6}>
            <Reveal>
              <Stack spacing={2.5}>
                <Typography
                  variant="overline"
                  sx={{
                    color: 'primary.main',
                    fontWeight: 800,
                    letterSpacing: '0.2em',
                  }}
                >
                  01 / QUEM SOU EU
                </Typography>

                <Typography
                  id="about-title"
                  component="h2"
                  sx={{
                    fontWeight: 800,
                    color: 'text.primary',
                    letterSpacing: '-0.055em',
                    lineHeight: 1.12,
                    fontSize: {
                      xs: '2.35rem',
                      sm: '3rem',
                      md: '3.4rem',
                      lg: '3.85rem',
                    },
                  }}
                >
                  Construindo com lógica.{' '}

                  <Box
                    component="span"
                    sx={{
                      display: 'inline',
                      background:
                        'linear-gradient(110deg, #B7ED73, #71DCCA, #86A8FF)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Pensando em pessoas.
                  </Box>
                </Typography>

                <Stack spacing={1.8} sx={{ maxWidth: 590 }}>
                  {identity.about.split('\n\n').map((paragraph, index) => (
                    <Typography
                      key={index}
                      component="p"
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        fontSize: { xs: '0.94rem', md: '1rem' },
                        lineHeight: 1.8,
                        m: 0,
                      }}
                    >
                      {paragraph}
                    </Typography>
                  ))}
                </Stack>

                {/* VALORES PROFISSIONAIS */}

                <Stack
                  direction="row"
                  flexWrap="wrap"
                  gap={1.5}
                  sx={{
                    pt: 1,
                  }}
                >
                  <Chip
                    icon={
                      <AutoAwesomeRoundedIcon
                        sx={{
                          fontSize: 18,
                          color: 'primary.main !important',
                        }}
                      />
                    }
                    label="Tecnologia com propósito"
                    variant="outlined"
                    sx={{
                      height: 'auto',
                      minHeight: 44,
                      py: 0.6,
                      px: 0.5,
                      fontWeight: 600,
                      borderRadius: '12px',
                      color: 'text.primary',
                      borderColor: 'divider',
                      bgcolor: 'background.paper',
                      transition:
                        'transform 250ms ease, border-color 250ms ease',

                      '&:hover': {
                        transform: 'translateY(-4px)',
                        borderColor: 'primary.main',
                      },

                      '@media (prefers-reduced-motion: reduce)': {
                        transition: 'none',
                        '&:hover': {
                          transform: 'none',
                        },
                      },
                    }}
                  />

                  <Chip
                    icon={
                      <GroupsOutlinedIcon
                        sx={{
                          fontSize: 18,
                          color: 'primary.main !important',
                        }}
                      />
                    }
                    label="Colaboração e visão de produto"
                    variant="outlined"
                    sx={{
                      height: 'auto',
                      minHeight: 44,
                      py: 0.6,
                      px: 0.5,
                      fontWeight: 600,
                      borderRadius: '12px',
                      color: 'text.primary',
                      borderColor: 'divider',
                      bgcolor: 'background.paper',
                      transition:
                        'transform 250ms ease, border-color 250ms ease',

                      '&:hover': {
                        transform: 'translateY(-4px)',
                        borderColor: 'primary.main',
                      },

                      '@media (prefers-reduced-motion: reduce)': {
                        transition: 'none',
                        '&:hover': {
                          transform: 'none',
                        },
                      },
                    }}
                  />
                </Stack>
              </Stack>
            </Reveal>
          </Grid>

          {/* ================================================
              COLUNA DIREITA — FOTO PROFISSIONAL
          ================================================ */}

          <Grid item xs={12} md={6}>
            <Reveal delay={0.14}>
              <Box
                sx={{
                  position: 'relative',
                  maxWidth: 530,
                  mx: 'auto',
                  transition:
                    'transform 400ms cubic-bezier(.22,1,.36,1)',

                  '&:hover': {
                    transform: 'translateY(-7px)',
                  },

                  '@media (prefers-reduced-motion: reduce)': {
                    transition: 'none',
                    '&:hover': {
                      transform: 'none',
                    },
                  },
                }}
              >
                {/* AURA ATRÁS DA FOTO */}

                <Box
                  aria-hidden="true"
                  sx={{
                    position: 'absolute',
                    inset: -18,
                    borderRadius: '36px',
                    background:
                      'linear-gradient(135deg, rgba(159,234,115,0.22), rgba(100,150,255,0.15), rgba(160,90,255,0.16))',
                    filter: 'blur(34px)',
                    opacity: 0.85,
                    pointerEvents: 'none',
                  }}
                />

                <Paper
                  component="figure"
                  elevation={0}
                  sx={{
                    position: 'relative',
                    m: 0,
                    overflow: 'hidden',
                    borderRadius: {
                      xs: '22px',
                      md: '28px',
                    },
                    bgcolor: 'background.paper',
                    border: '1px solid',
                    borderColor: 'divider',
                    boxShadow:
                      '0 25px 75px rgba(0, 0, 0, 0.16)',
                  }}
                >
                  {/* CABEÇALHO DA APRESENTAÇÃO */}

                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{
                      px: 2.5,
                      py: 2,
                      borderBottom: '1px solid',
                      borderColor: 'divider',
                    }}
                  >
                    <Stack
                      direction="row"
                      spacing={1}
                      alignItems="center"
                    >
                      <Box
                        aria-hidden="true"
                        sx={{
                          width: 9,
                          height: 9,
                          borderRadius: '50%',
                          bgcolor: 'success.main',
                          boxShadow:
                            '0 0 14px rgba(100,230,140,0.5)',
                        }}
                      />

                      <Typography
                        variant="caption"
                        sx={{
                          fontWeight: 800,
                          letterSpacing: '0.12em',
                          color: 'text.secondary',
                        }}
                      >
                        EM CONTEXTO
                      </Typography>
                    </Stack>

                    <Typography
                      variant="caption"
                      sx={{
                        color: 'text.secondary',
                        letterSpacing: '0.1em',
                      }}
                    >
                      DEV / 2026
                    </Typography>
                  </Stack>

                  {/* CAPTURA DA REUNIÃO ONLINE */}

                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      height: {
                        xs: 190,
                        sm: 235,
                        md: 215,
                      },
                      overflow: 'hidden',
                      borderRadius: '0 0 16px 16px',
                      bgcolor: '#10151c',
                      '& img': { transition: 'transform 650ms cubic-bezier(.2,.8,.2,1)' },
                      '&:hover img': { transform: 'scale(1.035)' },
                      '@media (prefers-reduced-motion: reduce)': { '& img': { transition: 'none' }, '&:hover img': { transform: 'none' } },
                    }}
                  >
                    <Image
                      src="/about/reuniao-apresentacao.webp"
                      alt="Apresentação de uma interface digital durante uma reunião online"
                      fill
                      sizes="(max-width: 900px) 90vw, 530px"
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                      }}
                    />

                    {/* GRADIENTE SOBRE A IMAGEM */}

                    <Box
                      aria-hidden="true"
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        background:
                          'linear-gradient(180deg, transparent 35%, rgba(7,12,20,0.78) 100%)',
                        pointerEvents: 'none',
                      }}
                    />

                    <Typography
                      variant="caption"
                      sx={{
                        position: 'absolute',
                        bottom: 16,
                        left: 20,
                        zIndex: 2,
                        color: '#FFFFFF',
                        fontSize: '0.68rem',
                        letterSpacing: '0.12em',
                        fontWeight: 800,
                      }}
                    >
                      VISÃO DE PRODUTO · COLABORAÇÃO
                    </Typography>
                  </Box>

                  {/* ÁREA INFERIOR COM FOTO EM DESTAQUE */}

                  <Box
                    sx={{
                      position: 'relative',
                      minHeight: {
                        xs: 220,
                        sm: 245,
                        md: 240,
                      },
                      background:
                        'linear-gradient(125deg, rgba(120,220,150,0.12), rgba(80,120,230,0.09), transparent)',
                    }}
                  >
                    {/* DETALHE DECORATIVO */}

                    <Box
                      aria-hidden="true"
                      sx={{
                        position: 'absolute',
                        width: 190,
                        height: 190,
                        right: -40,
                        bottom: -70,
                        borderRadius: '50%',
                        background:
                          'radial-gradient(circle, rgba(120,220,140,0.21), transparent 70%)',
                        filter: 'blur(20px)',
                      }}
                    />

                    {/* FOTO DO USUÁRIO */}

                    <Box
                      sx={{
                        position: 'absolute',
                        top: -65,
                        right: {
                          xs: 15,
                          sm: 25,
                          md: 20,
                        },
                        width: {
                          xs: '57%',
                          sm: '57%',
                          md: '58%',
                        },
                        aspectRatio: '4 / 3',
                        overflow: 'hidden',
                        borderRadius: { xs: '18px', sm: '24px' },
                        bgcolor: '#111827',
                        border: '4px solid',
                        borderColor: 'background.paper',
                        boxShadow:
                          '0 18px 45px rgba(0,0,0,0.24)',
                        transition:
                          'transform 350ms ease, box-shadow 350ms ease',

                        '&:hover': {
                          transform: 'scale(1.035)',
                          boxShadow:
                            '0 25px 60px rgba(0,0,0,0.3)',
                        },

                        '@media (prefers-reduced-motion: reduce)': {
                          transition: 'none',
                          '&:hover': {
                            transform: 'none',
                          },
                        },
                      }}
                    >
                      <Image
                        src="/about/reuniao.jpeg"
                        alt="Anderson Pereira participando de uma reunião online"
                        fill
                        sizes="(max-width: 600px) 55vw, 310px"
                        style={{
                          objectFit: 'cover',
                          objectPosition: 'center',
                        }}
                      />
                    </Box>

                    {/* IDENTIFICAÇÃO PROFISSIONAL */}

                    <Stack
                      spacing={1.2}
                      sx={{
                        position: 'absolute',
                        left: {
                          xs: 17,
                          sm: 25,
                        },
                        bottom: {
                          xs: 23,
                          sm: 28,
                        },
                        maxWidth: '45%',
                      }}
                    >
                      <AutoAwesomeRoundedIcon
                        sx={{
                          fontSize: 27,
                          color: 'primary.main',
                        }}
                      />

                      <Typography
                        sx={{
                          fontWeight: 800,
                          color: 'text.primary',
                          lineHeight: 1.35,
                          fontSize: {
                            xs: '0.86rem',
                            sm: '1rem',
                          },
                        }}
                      >
                        Por trás de cada entrega, uma conversa.
                      </Typography>

                      <Typography
                        variant="caption"
                        sx={{
                          color: 'text.secondary',
                          lineHeight: 1.5,
                        }}
                      >
                        Engenharia · Produto · Pessoas
                      </Typography>
                    </Stack>
                  </Box>
                </Paper>

                {/* ETIQUETA FLUTUANTE */}

                <Box
                  sx={{
                    position: 'absolute',
                    right: -8,
                    bottom: -18,
                    zIndex: 3,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    px: 2.5,
                    py: 1.4,
                    borderRadius: '12px',
                    bgcolor: 'background.paper',
                    border: '1px solid',
                    borderColor: 'divider',
                    boxShadow:
                      '0 12px 35px rgba(0,0,0,0.14)',
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 800,
                      letterSpacing: '0.09em',
                      color: 'text.primary',
                    }}
                  >
                    BUILD TOGETHER
                  </Typography>

                  <ArrowOutwardRoundedIcon
                    sx={{
                      fontSize: 18,
                      color: 'primary.main',
                    }}
                  />
                </Box>
              </Box>
            </Reveal>
          </Grid>
        </Grid>

        {/* ================================================
            COMPETÊNCIAS
        ================================================ */}

        <Box
          sx={{
            mt: {
              xs: 11,
              md: 15,
            },
          }}
        >
          <Reveal>
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
              spacing={2}
              sx={{
                mb: 4,
              }}
            >
              <Typography
                variant="overline"
                sx={{
                  color: 'primary.main',
                  fontWeight: 800,
                  letterSpacing: '0.17em',
                }}
              >
                O QUE ME MOVE / COMPETÊNCIAS
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',
                  maxWidth: 400,
                  lineHeight: 1.75,
                }}
              >
                Do problema ao produto — decisões técnicas
                que geram valor.
              </Typography>
            </Stack>
          </Reveal>

          <Grid container spacing={2.5}>
            {capabilities.map((capability, index) => (
              <Grid
                item
                xs={12}
                md={4}
                key={capability.index}
              >
                <Reveal delay={index * 0.08}>
                  <Paper
                    component="article"
                    elevation={0}
                    sx={{
                      position: 'relative',
                      height: '100%',
                      minHeight: 255,
                      p: {
                        xs: 3,
                        md: 3.5,
                      },
                      overflow: 'hidden',
                      borderRadius: '20px',
                      border: '1px solid',
                      borderColor: 'divider',
                      bgcolor: 'background.paper',
                      backgroundImage:
                        'linear-gradient(145deg, rgba(159,234,115,0.045), transparent 70%)',
                      transition:
                        'transform 300ms ease, border-color 300ms ease, box-shadow 300ms ease',

                      '&:hover': {
                        transform: 'translateY(-8px)',
                        borderColor: 'primary.main',
                        boxShadow:
                          '0 20px 50px rgba(0,0,0,0.12)',
                      },

                      '&:hover .capability-arrow': {
                        transform:
                          'translate(4px, -4px) rotate(8deg)',
                        color: 'primary.main',
                      },

                      '@media (prefers-reduced-motion: reduce)': {
                        transition: 'none',
                        '&:hover': {
                          transform: 'none',
                        },
                      },
                    }}
                  >
                    <Stack spacing={2}>
                      <Typography
                        variant="overline"
                        sx={{
                          fontSize: '0.8rem',
                          color: 'primary.main',
                          fontWeight: 800,
                          letterSpacing: '0.14em',
                        }}
                      >
                        {capability.index}
                      </Typography>

                      <Typography
                        component="h3"
                        sx={{
                          fontSize: '1.25rem',
                          fontWeight: 800,
                          letterSpacing: '-0.025em',
                          color: 'text.primary',
                        }}
                      >
                        {capability.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          lineHeight: 1.8,
                          pr: 2,
                        }}
                      >
                        {capability.description}
                      </Typography>
                    </Stack>

                    <ArrowOutwardRoundedIcon
                      className="capability-arrow"
                      aria-hidden="true"
                      sx={{
                        position: 'absolute',
                        bottom: 22,
                        right: 22,
                        fontSize: 22,
                        color: 'text.secondary',
                        transition:
                          'transform 300ms ease, color 300ms ease',
                      }}
                    />
                  </Paper>
                </Reveal>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
