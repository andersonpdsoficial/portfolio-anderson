
'use client';

import Link from 'next/link';

import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Typography,
} from '@mui/material';

import { alpha, useTheme } from '@mui/material/styles';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NorthEastRoundedIcon from '@mui/icons-material/NorthEastRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';

import { portfolioData } from '@/data/portfolioData';

export function Footer() {
  const theme = useTheme();

  const { identity, navigation } = portfolioData;

  const isDark = theme.palette.mode === 'dark';

  const currentYear = new Date().getFullYear();

  const primaryColor = theme.palette.primary.main;

  function scrollToTop(): void {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  }

  const headingSx = {
    color: 'text.primary',
    fontSize: '0.72rem',
    fontWeight: 800,
    letterSpacing: '0.16em',
    textTransform: 'uppercase' as const,
    mb: 2.5,
  };

  const linkSx = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 1,
    width: 'fit-content',
    maxWidth: '100%',
    minHeight: 30,

    color: 'text.secondary',
    textDecoration: 'none',
    fontSize: '0.89rem',
    fontWeight: 500,

    transition:
      'color 250ms ease, transform 250ms ease',

    '&:hover': {
      color: 'primary.main',
      transform: 'translateX(5px)',
    },

    '&:focus-visible': {
      outline: `2px solid ${primaryColor}`,
      outlineOffset: 4,
      borderRadius: '4px',
    },

    '@media (prefers-reduced-motion: reduce)': {
      transition: 'none',

      '&:hover': {
        transform: 'none',
      },
    },
  } as const;

  return (
    <Box
      component="footer"
      role="contentinfo"
      sx={{
        position: 'relative',
        isolation: 'isolate',
        overflow: 'hidden',
        bgcolor: 'background.paper',
        color: 'text.primary',
        borderTop: '1px solid',
        borderColor: 'divider',
        backgroundImage: `
          radial-gradient(
            ellipse at 5% 10%,
            ${alpha(primaryColor, isDark ? 0.13 : 0.09)},
            transparent 45%
          ),
          radial-gradient(
            ellipse at 95% 85%,
            ${alpha(theme.palette.info.main, 0.09)},
            transparent 48%
          ),
          linear-gradient(
            180deg,
            ${alpha(theme.palette.background.default, 0.2)},
            transparent
          )
        `,
      }}
    >
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          top: 0,
          left: '10%',
          right: '10%',
          height: '1px',
          background: `
            linear-gradient(
              90deg,
              transparent,
              ${alpha(primaryColor, 0.75)},
              ${alpha(theme.palette.info.main, 0.55)},
              transparent
            )
          `,
          pointerEvents: 'none',
        }}
      />
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          top: '-180px',
          left: '-180px',

          width: 460,
          height: 460,

          borderRadius: '50%',

          background: `
            radial-gradient(
              circle,
              ${alpha(primaryColor, 0.16)},
              transparent 70%
            )
          `,

          filter: 'blur(70px)',
          pointerEvents: 'none',
          zIndex: -1,
        }}
      />

      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          bottom: '-220px',
          right: '-170px',

          width: 500,
          height: 500,

          borderRadius: '50%',

          background: `
            radial-gradient(
              circle,
              ${alpha(theme.palette.info.main, 0.11)},
              transparent 70%
            )
          `,

          filter: 'blur(75px)',
          pointerEvents: 'none',
          zIndex: -1,
        }}
      />

      {/* ================================================
          GRID DECORATIVO
      ================================================ */}

      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          inset: 0,

          opacity: isDark ? 0.045 : 0.035,

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

          backgroundSize: '75px 75px',

          maskImage:
            'linear-gradient(to bottom, transparent, black 35%, transparent)',

          WebkitMaskImage:
            'linear-gradient(to bottom, transparent, black 35%, transparent)',

          pointerEvents: 'none',
          zIndex: -1,
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* ================================================
            CONTEÚDO PRINCIPAL DO FOOTER
        ================================================ */}

        <Box
          sx={{
            display: 'grid',

            gridTemplateColumns: {
              xs: 'minmax(0, 1fr)',
              sm: 'minmax(0, 1.3fr) minmax(0, 1fr)',
              md: 'minmax(0, 1.5fr) repeat(2, minmax(0, 0.75fr))',
            },

            gap: {
              xs: 5,
              sm: 5,
              md: 7,
            },

            py: {
              xs: 5,
              sm: 6,
              md: 7,
            },
          }}
        >
          {/* ================================================
              IDENTIDADE PROFISSIONAL
          ================================================ */}

          <Stack
            spacing={3}
            sx={{
              minWidth: 0,

              gridColumn: {
                xs: 'auto',
                sm: '1 / -1',
                md: 'auto',
              },

              maxWidth: 420,
            }}
          >
            {/* LOGOMARCA */}

            <Box
              component={Link}
              href="/"
              aria-label={`Voltar à página inicial de ${identity.shortName}`}
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',

                width: 68,
                height: 68,

                borderRadius: '19px',

                textDecoration: 'none',

                color: 'text.primary',

                background: `
                  linear-gradient(
                    135deg,
                    ${alpha(primaryColor, 0.15)},
                    ${alpha(theme.palette.info.main, 0.08)}
                  )
                `,

                border: `1px solid ${alpha(
                  primaryColor,
                  0.28,
                )}`,

                boxShadow: isDark
                  ? '0 12px 35px rgba(0,0,0,0.17)'
                  : '0 12px 35px rgba(20,30,45,0.07)',

                transition:
                  'transform 300ms ease, border-color 300ms ease, box-shadow 300ms ease',

                '&:hover': {
                  transform: 'translateY(-5px) rotate(-3deg)',
                  borderColor: 'primary.main',

                  boxShadow: `0 18px 42px ${alpha(
                    primaryColor,
                    0.18,
                  )}`,
                },

                '&:focus-visible': {
                  outline: `3px solid ${primaryColor}`,
                  outlineOffset: 4,
                },

                '@media (prefers-reduced-motion: reduce)': {
                  transition: 'none',

                  '&:hover': {
                    transform: 'none',
                  },
                },
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontSize: '1.75rem',
                  fontWeight: 900,
                  letterSpacing: '-0.09em',
                  lineHeight: 1,
                }}
              >
                {identity.monogram}

                <Box
                  component="span"
                  sx={{
                    color: 'primary.main',
                  }}
                >
                  .
                </Box>
              </Typography>
            </Box>

            {/* NOME E CARGO */}

            <Stack spacing={1}>
              <Typography
                component="h2"
                sx={{
                  fontWeight: 800,
                  fontSize: {
                    xs: '1.3rem',
                    sm: '1.45rem',
                  },

                  color: 'text.primary',

                  letterSpacing: '-0.035em',
                }}
              >
                {identity.shortName}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: 'primary.main',
                  fontWeight: 700,
                  letterSpacing: '0.01em',
                }}
              >
                {identity.role}
              </Typography>
            </Stack>

            {/* DESCRIÇÃO */}

            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
                maxWidth: 380,
                lineHeight: 1.9,
                fontSize: '0.92rem',
              }}
            >
              Projetando software com intenção, qualidade
              e atenção aos detalhes. Transformando
              desafios em soluções digitais.
            </Typography>

            {/* ASSINATURA VISUAL */}

            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              sx={{
                width: 'fit-content',

                px: 1.8,
                py: 1,

                borderRadius: '999px',

                border: `1px solid ${alpha(
                  primaryColor,
                  0.2,
                )}`,

                bgcolor: alpha(primaryColor, 0.065),
              }}
            >
              <AutoAwesomeRoundedIcon
                sx={{
                  fontSize: 16,
                  color: 'primary.main',
                }}
              />

              <Typography
                variant="caption"
                sx={{
                  fontWeight: 800,
                  fontSize: '0.66rem',

                  color: 'text.primary',

                  letterSpacing: '0.08em',
                }}
              >
                BUILD WITH PURPOSE
              </Typography>
            </Stack>
          </Stack>

          {/* ================================================
              NAVEGAÇÃO
          ================================================ */}

          <Stack
            component="nav"
            aria-label="Navegação do rodapé"
            spacing={2}
            sx={{
              minWidth: 0,
            }}
          >
            <Typography
              component="h3"
              sx={headingSx}
            >
              NAVEGAÇÃO
            </Typography>

            {navigation.map((item) => (
              <Box
                component={Link}
                key={item.href}
                href={item.href}
                sx={linkSx}
              >
                <Box
                  aria-hidden="true"
                  sx={{
                    width: 5,
                    height: 5,

                    borderRadius: '50%',
                    bgcolor: 'primary.main',

                    opacity: 0.65,
                    flexShrink: 0,
                  }}
                />

                <Typography
                  component="span"
                  sx={{
                    fontSize: 'inherit',
                    fontWeight: 'inherit',
                    color: 'inherit',
                  }}
                >
                  {item.label}
                </Typography>
              </Box>
            ))}
          </Stack>

          {/* ================================================
              REDES E CONTATOS
          ================================================ */}

          <Stack
            spacing={2}
            sx={{
              minWidth: 0,
            }}
          >
            <Typography
              component="h3"
              sx={headingSx}
            >
              CONECTE-SE
            </Typography>

            {identity.links.length > 0 ? (
              identity.links.map((link) => {
                const IconComponent =
                  link.type === 'github'
                    ? GitHubIcon
                    : link.type === 'linkedin'
                      ? LinkedInIcon
                      : MailOutlineIcon;

                const isEmail = link.type === 'email';

                return (
                  <Box
                    component="a"
                    key={link.href}
                    href={link.href}
                    target={
                      isEmail ? undefined : '_blank'
                    }
                    rel={
                      isEmail
                        ? undefined
                        : 'noopener noreferrer'
                    }
                    sx={{
                      ...linkSx,
                      gap: 1.2,

                      '&:hover .footer-social-arrow': {
                        transform: 'translate(3px, -3px)',
                        opacity: 1,
                      },
                    }}
                  >
                    {/* ÍCONE SOCIAL */}

                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',

                        width: 32,
                        height: 32,

                        flexShrink: 0,

                        borderRadius: '9px',

                        color: 'primary.main',

                        bgcolor: alpha(
                          primaryColor,
                          0.08,
                        ),

                        border: `1px solid ${alpha(
                          primaryColor,
                          0.12,
                        )}`,
                      }}
                    >
                      <IconComponent
                        sx={{
                          fontSize: 17,
                        }}
                      />
                    </Box>

                    {/* NOME DA REDE */}

                    <Typography
                      component="span"
                      sx={{
                        fontSize: '0.89rem',
                        fontWeight: 600,
                        color: 'inherit',
                      }}
                    >
                      {link.label}
                    </Typography>

                    {/* SETA ANIMADA */}

                    <NorthEastRoundedIcon
                      className="footer-social-arrow"
                      aria-hidden="true"
                      sx={{
                        fontSize: 15,
                        opacity: 0.65,

                        transition:
                          'transform 220ms ease, opacity 220ms ease',

                        '@media (prefers-reduced-motion: reduce)': {
                          transition: 'none',
                        },
                      }}
                    />
                  </Box>
                );
              })
            ) : (
              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',
                  fontStyle: 'italic',
                }}
              >
                Canais em configuração.
              </Typography>
            )}
          </Stack>
        </Box>

        {/* ================================================
            DIVISOR
        ================================================ */}

        <Divider
          sx={{
            borderColor: 'divider',
            opacity: 0.8,
          }}
        />

        {/* ================================================
            RODAPÉ INFERIOR
        ================================================ */}

        <Stack
          direction={{
            xs: 'column',
            md: 'row',
          }}
          justifyContent="space-between"
          alignItems={{
            xs: 'flex-start',
            md: 'center',
          }}
          gap={{
            xs: 2.5,
            md: 3,
          }}
          sx={{
            py: {
              xs: 3.5,
              md: 4,
            },
          }}
        >
          {/* COPYRIGHT */}

          <Stack spacing={0.7}>
            <Typography
              variant="caption"
              sx={{
                color: 'text.secondary',
                fontWeight: 600,
                lineHeight: 1.7,
              }}
            >
              © {currentYear} {identity.shortName}.
              Todos os direitos reservados.
            </Typography>

            <Typography
              variant="caption"
              sx={{
                color: 'text.disabled',
                fontSize: '0.72rem',
              }}
            >
              Feito com Next.js, TypeScript e Material UI.
            </Typography>
          </Stack>

          {/* LOCALIZAÇÃO */}

          <Typography
            variant="caption"
            sx={{
              color: 'text.secondary',
              fontWeight: 600,
              lineHeight: 1.7,
            }}
          >
            {identity.location}
          </Typography>

          {/* BOTÃO VOLTAR AO TOPO */}

          <Button
            type="button"
            onClick={scrollToTop}
            aria-label="Voltar ao topo da página"
            endIcon={
              <KeyboardArrowUpRoundedIcon
                sx={{
                  fontSize: 20,
                }}
              />
            }
            sx={{
              alignSelf: {
                xs: 'flex-start',
                md: 'center',
              },

              minHeight: 42,
              px: 2,

              borderRadius: '11px',

              color: 'text.primary',

              bgcolor: alpha(
                primaryColor,
                0.065,
              ),

              border: `1px solid ${alpha(
                primaryColor,
                0.23,
              )}`,

              textTransform: 'none',
              fontSize: '0.82rem',
              fontWeight: 800,

              transition:
                'transform 250ms ease, border-color 250ms ease, background-color 250ms ease',

              '&:hover': {
                transform: 'translateY(-3px)',

                bgcolor: alpha(
                  primaryColor,
                  0.12,
                ),

                borderColor: 'primary.main',
              },

              '&:focus-visible': {
                outline: `2px solid ${primaryColor}`,
                outlineOffset: 3,
              },

              '@media (prefers-reduced-motion: reduce)': {
                transition: 'none',

                '&:hover': {
                  transform: 'none',
                },
              },
            }}
          >
            Voltar ao topo
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
