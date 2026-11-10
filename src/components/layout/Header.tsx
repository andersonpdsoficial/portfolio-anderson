
'use client';

import { useState } from 'react';
import Link from 'next/link';

import {
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';

import {
  alpha,
  useTheme,
} from '@mui/material/styles';

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NorthEastRoundedIcon from '@mui/icons-material/NorthEastRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

import { portfolioData } from '@/data/portfolioData';
import { useColorMode } from '@/hooks/useColorMode';

// ============================================================
// COMPONENTE HEADER — MATERIAL UI V5
// ============================================================

export function Header() {
  const theme = useTheme();

  const { mode, toggleMode } = useColorMode();

  const [open, setOpen] = useState(false);

  const { identity, navigation } = portfolioData;

  const isDark = mode === 'dark';

  const primaryColor = theme.palette.primary.main;

  // ==========================================================
  // CONTROLE DO MENU
  // ==========================================================

  function openMenu(): void {
    setOpen(true);
  }

  function closeMenu(): void {
    setOpen(false);
  }

  // ==========================================================
  // CONFIGURAÇÃO DE TEMA
  // ==========================================================

  const themeLabel = isDark
    ? 'Ativar tema claro'
    : 'Ativar tema escuro';

  // ==========================================================
  // ESTILOS COMPARTILHADOS
  // ==========================================================

  const navLinkSx = {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 44,
    px: 1.5,

    color: 'text.secondary',
    textDecoration: 'none',

    fontSize: '0.875rem',
    fontWeight: 650,
    whiteSpace: 'nowrap',

    transition:
      'color 250ms ease, transform 250ms ease',

    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 5,
      left: '50%',
      width: 0,
      height: 2,
      borderRadius: '999px',
      bgcolor: 'primary.main',
      transform: 'translateX(-50%)',

      transition: 'width 250ms ease',
    },

    '&:hover': {
      color: 'text.primary',
      transform: 'translateY(-2px)',
    },

    '&:hover::after': {
      width: '55%',
    },

    '&:focus-visible': {
      outline: `2px solid ${primaryColor}`,
      outlineOffset: 3,
      borderRadius: '6px',
    },

    '@media (prefers-reduced-motion: reduce)': {
      transition: 'none',

      '&::after': {
        transition: 'none',
      },

      '&:hover': {
        transform: 'none',
      },
    },
  } as const;

  // ==========================================================
  // INTERFACE PRINCIPAL
  // ==========================================================

  return (
    <>
      <Box
        component="header"
        sx={{
          position: 'sticky',
          top: 0,
          left: 0,
          right: 0,

          width: '100%',

          zIndex: theme.zIndex.appBar,

          isolation: 'isolate',

          bgcolor: alpha(
            theme.palette.background.default,
            isDark ? 0.88 : 0.9,
          ),

          backdropFilter: 'blur(22px)',
          WebkitBackdropFilter: 'blur(22px)',

          borderBottom: '1px solid',
          borderColor: 'divider',

          backgroundImage: `
            linear-gradient(
              115deg,
              ${alpha(primaryColor, 0.055)},
              transparent 42%,
              ${alpha(theme.palette.info.main, 0.035)}
            )
          `,

          boxShadow: isDark
            ? '0 8px 35px rgba(0,0,0,0.15)'
            : '0 8px 35px rgba(20,30,45,0.045)',
        }}
      >
        {/* LINHA SUPERIOR EM GRADIENTE */}

        <Box
          aria-hidden="true"
          sx={{
            position: 'absolute',
            top: 0,
            left: '12%',
            right: '12%',
            height: '1px',

            background: `
              linear-gradient(
                90deg,
                transparent,
                ${alpha(primaryColor, 0.65)},
                ${alpha(theme.palette.info.main, 0.4)},
                transparent
              )
            `,

            pointerEvents: 'none',
          }}
        />

        {/* ILUMINAÇÃO DECORATIVA */}

        <Box
          aria-hidden="true"
          sx={{
            position: 'absolute',
            inset: 0,
            overflow: 'hidden',
            pointerEvents: 'none',
            zIndex: -1,

            backgroundImage: `
              radial-gradient(
                ellipse at 15% 0%,
                ${alpha(primaryColor, 0.08)},
                transparent 40%
              )
            `,
          }}
        />

        {/* ================================================
            CONTEÚDO DO CABEÇALHO
        ================================================ */}

        <Container maxWidth="lg">
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={2}
            sx={{
              minHeight: {
                xs: 72,
                sm: 78,
                md: 86,
              },
            }}
          >
            {/* ============================================
                LOGOMARCA / IDENTIDADE
            ============================================ */}

            <Box
              component={Link}
              href="/"
              onClick={closeMenu}
              aria-label={`${identity.shortName}, página inicial`}
              sx={{
                display: 'inline-flex',
                alignItems: 'center',

                gap: {
                  xs: 1.2,
                  sm: 1.5,
                },

                minWidth: 0,
                flexShrink: 0,

                textDecoration: 'none',
                color: 'text.primary',

                transition: 'transform 280ms ease',

                '&:hover': {
                  transform: 'translateY(-2px)',
                },

                '&:hover .header-brand-mark': {
                  transform: 'rotate(-5deg) scale(1.04)',

                  borderColor: 'primary.main',

                  boxShadow: `0 10px 30px ${alpha(
                    primaryColor,
                    0.2,
                  )}`,
                },

                '&:focus-visible': {
                  outline: `2px solid ${primaryColor}`,
                  outlineOffset: 5,
                  borderRadius: '10px',
                },

                '@media (prefers-reduced-motion: reduce)': {
                  transition: 'none',

                  '&:hover': {
                    transform: 'none',
                  },

                  '&:hover .header-brand-mark': {
                    transform: 'none',
                  },
                },
              }}
            >
              {/* MONOGRAMA */}

              <Box
                className="header-brand-mark"
                sx={{
                  position: 'relative',

                  width: {
                    xs: 42,
                    sm: 46,
                  },

                  height: {
                    xs: 42,
                    sm: 46,
                  },

                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',

                  flexShrink: 0,

                  borderRadius: '13px',

                  border: `1px solid ${alpha(
                    primaryColor,
                    0.3,
                  )}`,

                  background: `
                    linear-gradient(
                      135deg,
                      ${alpha(primaryColor, 0.17)},
                      ${alpha(theme.palette.info.main, 0.09)}
                    )
                  `,

                  boxShadow: isDark
                    ? '0 6px 22px rgba(0,0,0,0.15)'
                    : '0 6px 22px rgba(20,35,50,0.06)',

                  transition:
                    'transform 300ms ease, border-color 300ms ease, box-shadow 300ms ease',
                }}
              >
                <Typography
                  component="span"
                  sx={{
                    fontSize: {
                      xs: '1.17rem',
                      sm: '1.28rem',
                    },

                    fontWeight: 900,
                    letterSpacing: '-0.08em',
                    lineHeight: 1,

                    color: 'text.primary',
                  }}
                >
                  {identity.monogram}
                </Typography>

                {/* DETALHE VERDE */}

                <Box
                  aria-hidden="true"
                  sx={{
                    position: 'absolute',
                    right: 7,
                    bottom: 7,

                    width: 6,
                    height: 6,

                    borderRadius: '50%',
                    bgcolor: 'primary.main',

                    boxShadow: `0 0 10px ${alpha(
                      primaryColor,
                      0.6,
                    )}`,
                  }}
                />
              </Box>

              {/* NOME DO SITE */}

              <Typography
                component="span"
                sx={{
                  fontWeight: 850,

                  fontSize: {
                    xs: '1.05rem',
                    sm: '1.25rem',
                  },

                  letterSpacing: '-0.055em',
                  whiteSpace: 'nowrap',

                  color: 'text.primary',
                }}
              >
                anderson

                <Box
                  component="span"
                  sx={{
                    color: 'primary.main',
                  }}
                >
                  .dev
                </Box>
              </Typography>
            </Box>

            {/* ============================================
                NAVEGAÇÃO DESKTOP
            ============================================ */}

            <Stack
              component="nav"
              aria-label="Navegação principal"
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={{
                md: 0,
                lg: 0.7,
              }}
              sx={{
                display: {
                  xs: 'none',
                  md: 'flex',
                },

                minWidth: 0,
                flex: 1,
              }}
            >
              {navigation.slice(0, 4).map((item) => (
                <Box
                  component={Link}
                  key={item.href}
                  href={item.href}
                  sx={navLinkSx}
                >
                  {item.label}
                </Box>
              ))}
            </Stack>

            {/* ============================================
                AÇÕES DO HEADER
            ============================================ */}

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="flex-end"
              spacing={{
                xs: 0.8,
                sm: 1.2,
              }}
              sx={{
                flexShrink: 0,
              }}
            >
              {/* BOTÃO LIGHT / DARK */}

              <Tooltip
                title={themeLabel}
                arrow
              >
                <IconButton
                  type="button"
                  onClick={toggleMode}
                  aria-label={themeLabel}
                  size="medium"
                  sx={{
                    width: {
                      xs: 42,
                      sm: 44,
                    },

                    height: {
                      xs: 42,
                      sm: 44,
                    },

                    borderRadius: '12px',

                    color: 'text.primary',

                    bgcolor: alpha(
                      theme.palette.background.paper,
                      0.7,
                    ),

                    border: '1px solid',
                    borderColor: 'divider',

                    transition:
                      'transform 280ms ease, border-color 280ms ease, background-color 280ms ease',

                    '&:hover': {
                      transform: 'rotate(12deg)',

                      borderColor: 'primary.main',

                      bgcolor: alpha(
                        primaryColor,
                        0.1,
                      ),
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
                  {isDark ? (
                    <LightModeOutlinedIcon
                      sx={{
                        fontSize: 21,
                        color: 'primary.main',
                      }}
                    />
                  ) : (
                    <DarkModeOutlinedIcon
                      sx={{
                        fontSize: 21,
                        color: 'text.primary',
                      }}
                    />
                  )}
                </IconButton>
              </Tooltip>

              {/* BOTÃO CONTATO */}

              <Button
                component={Link}
                href="/#contato"
                variant="contained"
                color="primary"
                endIcon={
                  <NorthEastRoundedIcon
                    sx={{ fontSize: 18 }}
                  />
                }
                sx={{
                  display: {
                    xs: 'none',
                    sm: 'inline-flex',
                  },

                  minHeight: 44,

                  px: {
                    sm: 2,
                    lg: 2.5,
                  },

                  borderRadius: '12px',

                  fontSize: '0.82rem',
                  fontWeight: 800,

                  whiteSpace: 'nowrap',
                  textTransform: 'none',

                  boxShadow: `0 8px 25px ${alpha(
                    primaryColor,
                    0.16,
                  )}`,

                  transition:
                    'transform 250ms ease, box-shadow 250ms ease',

                  '&:hover': {
                    transform: 'translateY(-3px)',

                    boxShadow: `0 13px 32px ${alpha(
                      primaryColor,
                      0.28,
                    )}`,
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
                Vamos conversar
              </Button>

              {/* BOTÃO MENU MOBILE */}

              <Tooltip title="Abrir menu">
                <IconButton
                  type="button"
                  onClick={openMenu}
                  aria-label="Abrir menu de navegação"
                  aria-expanded={open}
                  aria-controls="mobile-navigation"
                  sx={{
                    display: {
                      xs: 'inline-flex',
                      md: 'none',
                    },

                    width: 44,
                    height: 44,

                    borderRadius: '12px',

                    color: 'text.primary',

                    border: '1px solid',
                    borderColor: 'divider',

                    bgcolor: alpha(
                      theme.palette.background.paper,
                      0.7,
                    ),

                    transition:
                      'border-color 220ms ease, background-color 220ms ease',

                    '&:hover': {
                      borderColor: 'primary.main',

                      bgcolor: alpha(
                        primaryColor,
                        0.1,
                      ),
                    },

                    '&:focus-visible': {
                      outline: `2px solid ${primaryColor}`,
                      outlineOffset: 3,
                    },
                  }}
                >
                  <MenuRoundedIcon
                    sx={{
                      fontSize: 25,
                    }}
                  />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* ======================================================
          MENU MOBILE — MATERIAL UI DRAWER
      ====================================================== */}

      <Drawer
        anchor="right"
        open={open}
        onClose={closeMenu}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: {
            width: {
              xs: 'min(100vw, 360px)',
              sm: 390,
            },

            maxWidth: '100vw',
            height: '100dvh',

            display: 'flex',
            flexDirection: 'column',

            overflowX: 'hidden',

            color: 'text.primary',

            bgcolor: 'background.paper',

            borderLeft: '1px solid',
            borderColor: 'divider',

            backgroundImage: `
              radial-gradient(
                ellipse at 100% 0%,
                ${alpha(primaryColor, 0.13)},
                transparent 50%
              ),
              radial-gradient(
                ellipse at 0% 95%,
                ${alpha(theme.palette.info.main, 0.1)},
                transparent 50%
              )
            `,

            boxShadow:
              '-25px 0 80px rgba(0,0,0,0.22)',
          },
        }}
        BackdropProps={{
          sx: {
            bgcolor: 'rgba(5,10,18,0.65)',
            backdropFilter: 'blur(7px)',
            WebkitBackdropFilter: 'blur(7px)',
          },
        }}
      >
        {/* ================================================
            CABEÇALHO DO DRAWER
        ================================================ */}

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={2}
          sx={{
            px: 3,
            py: 3,

            borderBottom: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            spacing={1.3}
          >
            <Box
              sx={{
                width: 41,
                height: 41,

                borderRadius: '12px',

                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',

                color: 'primary.main',

                bgcolor: alpha(primaryColor, 0.11),

                border: `1px solid ${alpha(
                  primaryColor,
                  0.23,
                )}`,
              }}
            >
              <CodeRoundedIcon />
            </Box>

            <Stack spacing={0.3}>
              <Typography
                sx={{
                  color: 'text.primary',

                  fontSize: '0.83rem',
                  fontWeight: 800,

                  letterSpacing: '0.11em',
                }}
              >
                NAVEGAÇÃO
              </Typography>

              <Typography
                variant="caption"
                sx={{
                  color: 'text.secondary',
                  fontSize: '0.69rem',
                }}
              >
                Explore o portfólio
              </Typography>
            </Stack>
          </Stack>

          {/* FECHAR DRAWER */}

          <IconButton
            type="button"
            aria-label="Fechar menu de navegação"
            onClick={closeMenu}
            sx={{
              width: 42,
              height: 42,

              borderRadius: '12px',

              color: 'text.primary',

              border: '1px solid',
              borderColor: 'divider',

              bgcolor: alpha(
                theme.palette.text.primary,
                0.045,
              ),

              transition:
                'transform 250ms ease, background-color 250ms ease',

              '&:hover': {
                transform: 'rotate(90deg)',

                bgcolor: alpha(
                  theme.palette.error.main,
                  0.1,
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
            <CloseRoundedIcon />
          </IconButton>
        </Stack>

        {/* ================================================
            LINKS DE NAVEGAÇÃO MOBILE
        ================================================ */}

        <Stack
          component="nav"
          id="mobile-navigation"
          aria-label="Navegação para dispositivos móveis"
          spacing={1.2}
          sx={{
            flex: 1,

            px: 2.5,
            py: 3,

            overflowY: 'auto',
          }}
        >
          {navigation.map((item, index) => (
            <Box
              component={Link}
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              sx={{
                display: 'flex',
                alignItems: 'center',

                gap: 1.8,

                minHeight: 63,

                px: 2,
                py: 1.3,

                borderRadius: '14px',

                textDecoration: 'none',
                color: 'text.primary',

                border: '1px solid',
                borderColor: 'divider',

                bgcolor: alpha(
                  theme.palette.background.default,
                  0.3,
                ),

                transition:
                  'transform 250ms ease, border-color 250ms ease, background-color 250ms ease, box-shadow 250ms ease',

                '&:hover': {
                  transform: 'translateX(5px)',

                  borderColor: alpha(
                    primaryColor,
                    0.55,
                  ),

                  bgcolor: alpha(
                    primaryColor,
                    0.08,
                  ),

                  boxShadow: `0 8px 25px ${alpha(
                    primaryColor,
                    0.07,
                  )}`,
                },

                '&:hover .mobile-nav-arrow': {
                  transform: 'translate(3px, -3px)',
                  color: 'primary.main',
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
              {/* NUMERAÇÃO */}

              <Typography
                variant="caption"
                sx={{
                  minWidth: 25,

                  color: 'primary.main',

                  fontSize: '0.73rem',
                  fontWeight: 800,

                  letterSpacing: '0.08em',
                }}
              >
                {String(index + 1).padStart(2, '0')}
              </Typography>

              {/* NOME DA SEÇÃO */}

              <Typography
                component="span"
                sx={{
                  flex: 1,

                  fontSize: '1rem',
                  fontWeight: 750,

                  letterSpacing: '-0.02em',

                  color: 'inherit',
                }}
              >
                {item.label}
              </Typography>

              {/* ÍCONE */}

              <NorthEastRoundedIcon
                className="mobile-nav-arrow"
                aria-hidden="true"
                sx={{
                  fontSize: 19,

                  color: 'text.secondary',

                  transition:
                    'transform 250ms ease, color 250ms ease',

                  '@media (prefers-reduced-motion: reduce)': {
                    transition: 'none',
                  },
                }}
              />
            </Box>
          ))}
        </Stack>

        {/* ================================================
            ÁREA INFERIOR DO DRAWER
        ================================================ */}

        <Box
          sx={{
            mt: 'auto',

            px: 3,
            pt: 3,
            pb: 3.5,
          }}
        >
          {/* BOTÃO VAMOS CONVERSAR */}

          <Button
            component={Link}
            href="/#contato"
            onClick={closeMenu}
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            endIcon={<ArrowForwardRoundedIcon />}
            sx={{
              minHeight: 54,

              borderRadius: '13px',

              fontSize: '0.95rem',
              fontWeight: 800,

              textTransform: 'none',

              boxShadow: `0 10px 30px ${alpha(
                primaryColor,
                0.22,
              )}`,

              transition:
                'transform 250ms ease, box-shadow 250ms ease',

              '&:hover': {
                transform: 'translateY(-3px)',

                boxShadow: `0 15px 38px ${alpha(
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
            Vamos conversar
          </Button>

          <Divider
            sx={{
              my: 3,
              borderColor: 'divider',
            }}
          />

          {/* LOCALIZAÇÃO */}

          <Stack
            direction="row"
            spacing={1.2}
            alignItems="center"
          >
            <PlaceOutlinedIcon
              sx={{
                fontSize: 19,
                color: 'primary.main',
                flexShrink: 0,
              }}
            />

            <Typography
              variant="caption"
              sx={{
                color: 'text.secondary',

                fontSize: '0.78rem',
                fontWeight: 600,

                lineHeight: 1.6,
              }}
            >
              {identity.location}
            </Typography>
          </Stack>

          {/* ASSINATURA */}

          <Typography
            variant="caption"
            sx={{
              display: 'block',

              mt: 2,

              color: 'text.disabled',

              fontSize: '0.65rem',
              fontWeight: 800,

              letterSpacing: '0.13em',
            }}
          >
            AP · SOFTWARE ENGINEERING
          </Typography>
        </Box>
      </Drawer>
    </>
  );
}
