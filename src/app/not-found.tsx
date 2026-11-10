
'use client';

import Link from 'next/link';

import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from '@mui/material';

import { alpha, useTheme } from '@mui/material/styles';

import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchOffRoundedIcon from '@mui/icons-material/SearchOffRounded';
import TerminalRoundedIcon from '@mui/icons-material/TerminalRounded';

// ============================================================
// PÁGINA 404 — MATERIAL UI V5
// ============================================================

export default function NotFound() {
  const theme = useTheme();

  const isDark = theme.palette.mode === 'dark';
  const primaryColor = theme.palette.primary.main;
  const infoColor = theme.palette.info.main;

  return (
    <Box
      component="main"
      id="conteudo"
      tabIndex={-1}
      aria-labelledby="not-found-title"
      sx={{
        position: 'relative',
        isolation: 'isolate',
        overflow: 'hidden',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        minHeight: {
          xs: 'calc(100svh - 100px)',
          md: 'calc(100svh - 150px)',
        },

        py: {
          xs: 10,
          sm: 12,
          md: 15,
        },

        bgcolor: 'background.default',

        backgroundImage: `
          radial-gradient(
            ellipse at 15% 20%,
            ${alpha(primaryColor, isDark ? 0.15 : 0.11)},
            transparent 50%
          ),
          radial-gradient(
            ellipse at 85% 80%,
            ${alpha(infoColor, isDark ? 0.12 : 0.09)},
            transparent 52%
          )
        `,
      }}
    >
      {/* ======================================================
          GRID DECORATIVO
      ====================================================== */}

      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: -1,
          pointerEvents: 'none',

          opacity: isDark ? 0.065 : 0.045,

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

          backgroundSize: '70px 70px',

          maskImage:
            'radial-gradient(ellipse at center, black, transparent 80%)',

          WebkitMaskImage:
            'radial-gradient(ellipse at center, black, transparent 80%)',
        }}
      />

      {/* ======================================================
          EFEITOS DE ILUMINAÇÃO
      ====================================================== */}

      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          top: '-160px',
          left: '-160px',

          width: {
            xs: 330,
            md: 550,
          },

          height: {
            xs: 330,
            md: 550,
          },

          borderRadius: '50%',

          background: `
            radial-gradient(
              circle,
              ${alpha(primaryColor, 0.18)},
              transparent 70%
            )
          `,

          filter: 'blur(75px)',
          pointerEvents: 'none',
          zIndex: -1,
        }}
      />

      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          bottom: '-200px',
          right: '-170px',

          width: {
            xs: 350,
            md: 580,
          },

          height: {
            xs: 350,
            md: 580,
          },

          borderRadius: '50%',

          background: `
            radial-gradient(
              circle,
              ${alpha(infoColor, 0.15)},
              transparent 70%
            )
          `,

          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: -1,
        }}
      />

      {/* ======================================================
          CONTEÚDO PRINCIPAL
      ====================================================== */}

      <Container
        maxWidth="md"
        sx={{
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Stack
          alignItems="center"
          spacing={3}
          sx={{
            width: '100%',
            textAlign: 'center',
          }}
        >
          {/* ================================================
              IDENTIFICAÇÃO DA PÁGINA
          ================================================ */}

          <Stack
            direction="row"
            alignItems="center"
            spacing={1.2}
            sx={{
              px: 2,
              py: 1.1,

              borderRadius: '999px',

              border: `1px solid ${alpha(
                primaryColor,
                0.28,
              )}`,

              bgcolor: alpha(primaryColor, 0.07),
            }}
          >
            <Box
              aria-hidden="true"
              sx={{
                width: 8,
                height: 8,

                borderRadius: '50%',
                bgcolor: 'primary.main',

                boxShadow: `0 0 12px ${alpha(
                  primaryColor,
                  0.55,
                )}`,
              }}
            />

            <Typography
              variant="overline"
              sx={{
                color: 'primary.main',
                fontWeight: 800,
                letterSpacing: '0.16em',

                fontSize: {
                  xs: '0.62rem',
                  sm: '0.72rem',
                },
              }}
            >
              404 / ROTA NÃO ENCONTRADA
            </Typography>
          </Stack>

          {/* ================================================
              NÚMERO 404
          ================================================ */}

          <Box
            sx={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',

              width: '100%',
              py: 1,
            }}
          >
            <Typography
              component="span"
              aria-hidden="true"
              sx={{
                fontSize: {
                  xs: '8rem',
                  sm: '12rem',
                  md: '16rem',
                },

                fontWeight: 900,
                letterSpacing: '-0.095em',
                lineHeight: 0.95,

                background: `
                  linear-gradient(
                    120deg,
                    ${primaryColor} 0%,
                    ${infoColor} 95%
                  )
                `,

                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',

                filter: `drop-shadow(0 15px 40px ${alpha(
                  primaryColor,
                  0.13,
                )})`,
              }}
            >
              404
            </Typography>

            {/* ÍCONE FLUTUANTE */}

            <Paper
              elevation={0}
              aria-hidden="true"
              sx={{
                position: 'absolute',

                top: {
                  xs: 0,
                  sm: 12,
                },

                right: {
                  xs: '8%',
                  sm: '15%',
                },

                width: {
                  xs: 43,
                  sm: 58,
                },

                height: {
                  xs: 43,
                  sm: 58,
                },

                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',

                borderRadius: '16px',

                bgcolor: 'background.paper',
                color: 'primary.main',

                border: `1px solid ${alpha(
                  primaryColor,
                  0.3,
                )}`,

                boxShadow: `0 14px 36px ${alpha(
                  primaryColor,
                  0.12,
                )}`,
              }}
            >
              <SearchOffRoundedIcon
                sx={{
                  fontSize: {
                    xs: 23,
                    sm: 30,
                  },
                }}
              />
            </Paper>
          </Box>

          {/* ================================================
              TÍTULO E DESCRIÇÃO
          ================================================ */}

          <Stack
            spacing={2}
            alignItems="center"
          >
            <Typography
              id="not-found-title"
              component="h1"
              sx={{
                maxWidth: 750,

                color: 'text.primary',

                fontWeight: 850,
                letterSpacing: '-0.055em',
                lineHeight: 1.14,

                fontSize: {
                  xs: '2.15rem',
                  sm: '3.1rem',
                  md: '3.7rem',
                },
              }}
            >
              Esta página não está{' '}

              <Box
                component="span"
                sx={{
                  background: `
                    linear-gradient(
                      110deg,
                      ${primaryColor},
                      ${infoColor}
                    )
                  `,

                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                no mapa.
              </Box>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                maxWidth: 560,

                color: 'text.secondary',
                lineHeight: 1.9,

                fontSize: {
                  xs: '0.98rem',
                  sm: '1.08rem',
                },
              }}
            >
              O endereço solicitado não existe ou foi
              alterado. Mas não se preocupe: você pode
              voltar ao início e continuar explorando
              meus projetos.
            </Typography>
          </Stack>

          {/* ================================================
              BOTÕES DE NAVEGAÇÃO
          ================================================ */}

          <Stack
            direction={{
              xs: 'column',
              sm: 'row',
            }}
            spacing={1.5}
            sx={{
              width: {
                xs: '100%',
                sm: 'auto',
              },

              pt: 2,
            }}
          >
            <Button
              component={Link}
              href="/"
              variant="contained"
              color="primary"
              size="large"
              startIcon={<ArrowBackRoundedIcon />}
              sx={{
                minHeight: 54,
                px: 3,

                borderRadius: '13px',

                fontWeight: 800,
                fontSize: '0.94rem',
                textTransform: 'none',

                boxShadow: `0 12px 35px ${alpha(
                  primaryColor,
                  0.2,
                )}`,

                transition:
                  'transform 250ms ease, box-shadow 250ms ease',

                '&:hover': {
                  transform: 'translateY(-3px)',

                  boxShadow: `0 17px 42px ${alpha(
                    primaryColor,
                    0.3,
                  )}`,
                },

                '@media (prefers-reduced-motion: reduce)': {
                  transition: 'none',

                  '&:hover': {
                    transform: 'none',
                  },
                },
              }}
            >
              Voltar ao início
            </Button>

            <Button
              component={Link}
              href="/#projetos"
              variant="outlined"
              size="large"
              endIcon={<ArrowOutwardRoundedIcon />}
              sx={{
                minHeight: 54,
                px: 3,

                borderRadius: '13px',

                color: 'text.primary',

                borderColor: 'divider',

                bgcolor: alpha(
                  theme.palette.background.paper,
                  0.5,
                ),

                fontWeight: 750,
                fontSize: '0.94rem',
                textTransform: 'none',

                transition:
                  'transform 250ms ease, border-color 250ms ease, background-color 250ms ease',

                '&:hover': {
                  transform: 'translateY(-3px)',

                  borderColor: 'primary.main',

                  bgcolor: alpha(
                    primaryColor,
                    0.08,
                  ),
                },

                '@media (prefers-reduced-motion: reduce)': {
                  transition: 'none',

                  '&:hover': {
                    transform: 'none',
                  },
                },
              }}
            >
              Explorar projetos
            </Button>
          </Stack>

          {/* ================================================
              MENSAGEM TÉCNICA
          ================================================ */}

          <Paper
            elevation={0}
            sx={{
              width: '100%',
              maxWidth: 540,

              mt: 3,
              p: {
                xs: 2,
                sm: 2.5,
              },

              borderRadius: '15px',

              bgcolor: alpha(
                theme.palette.background.paper,
                0.7,
              ),

              border: '1px solid',
              borderColor: 'divider',

              backgroundImage: `
                linear-gradient(
                  120deg,
                  ${alpha(primaryColor, 0.055)},
                  transparent
                )
              `,
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              spacing={1.4}
              sx={{
                textAlign: 'left',
              }}
            >
              <Box
                sx={{
                  width: 42,
                  height: 42,

                  flexShrink: 0,

                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',

                  borderRadius: '12px',

                  color: 'primary.main',

                  bgcolor: alpha(primaryColor, 0.1),
                }}
              >
                <TerminalRoundedIcon
                  sx={{ fontSize: 22 }}
                />
              </Box>

              <Stack
                spacing={0.4}
                sx={{
                  minWidth: 0,
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color: 'primary.main',
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                  }}
                >
                  HTTP 404 · NOT FOUND
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.65,
                    fontSize: '0.8rem',
                  }}
                >
                  Nenhuma página corresponde à rota
                  solicitada.
                </Typography>
              </Stack>
            </Stack>
          </Paper>

          {/* ================================================
              RODAPÉ DA SEÇÃO
          ================================================ */}

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={1}
            sx={{
              pt: 2,
            }}
          >
            <HomeRoundedIcon
              sx={{
                fontSize: 17,
                color: 'primary.main',
              }}
            />

            <Typography
              variant="caption"
              sx={{
                color: 'text.disabled',
                fontWeight: 700,
                letterSpacing: '0.1em',
              }}
            >
              ANDERSON.DEV / ERROR 404
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
