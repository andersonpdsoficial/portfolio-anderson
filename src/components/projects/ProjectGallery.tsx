
'use client';

import { useId, useState, type KeyboardEvent } from 'react';
import Image from 'next/image';

import {
  Box,
  Chip,
  Container,
  Dialog,
  IconButton,
  Paper,
  Stack,
  Typography,
} from '@mui/material';

import { alpha, useTheme } from '@mui/material/styles';

import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ZoomInRoundedIcon from '@mui/icons-material/ZoomInRounded';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import PhotoLibraryOutlinedIcon from '@mui/icons-material/PhotoLibraryOutlined';
import OpenInFullRoundedIcon from '@mui/icons-material/OpenInFullRounded';

import type { ProjectImage } from '@/types/portfolio';
import { formatProjectIndex } from '@/functions/projectVisuals';

// ============================================================
// TIPOS
// ============================================================

interface ProjectGalleryProps {
  images: readonly ProjectImage[];
  title: string;
}

// ============================================================
// CONFIGURAÇÕES
// ============================================================


// ============================================================
// COMPONENTE
// ============================================================

export function ProjectGallery({
  images,
  title,
}: ProjectGalleryProps) {
  const theme = useTheme();
  const galleryTitleId = useId();
  const dialogTitleId = useId();

  const [activeIndex, setActiveIndex] = useState<number | null>(
    null,
  );

  const isDark = theme.palette.mode === 'dark';
  const accentColor = theme.palette.primary.main;

  const currentImage =
    activeIndex !== null
      ? images[activeIndex] ?? null
      : null;

  const isOpen = currentImage !== null;

  // ==========================================================
  // CONTROLES
  // ==========================================================

  function openGallery(index: number): void {
    if (index >= 0 && index < images.length) {
      setActiveIndex(index);
    }
  }

  function closeGallery(): void {
    setActiveIndex(null);
  }

  function changeImage(delta: number): void {
    setActiveIndex((previous) => {
      if (previous === null || images.length === 0) {
        return null;
      }

      return (
        (previous + delta + images.length) % images.length
      );
    });
  }

  function handleGalleryKeyDown(
    event: KeyboardEvent<HTMLDivElement>,
  ): void {
    if (!isOpen || images.length <= 1) {
      return;
    }

    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      changeImage(-1);
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      changeImage(1);
    }
  }

  if (images.length === 0) {
    return null;
  }

  return (
    <>
      {/* ======================================================
          SEÇÃO PRINCIPAL
      ====================================================== */}

      <Box
        component="section"
        aria-labelledby={galleryTitleId}
        sx={{
          position: 'relative',
          isolation: 'isolate',
          overflow: 'hidden',
          py: {
            xs: 7,
            md: 10,
          },
          bgcolor: 'background.default',
          backgroundImage: `
            radial-gradient(
              ellipse at 10% 10%,
              ${alpha(accentColor, 0.1)},
              transparent 45%
            ),
            radial-gradient(
              ellipse at 90% 85%,
              ${alpha(theme.palette.info.main, 0.09)},
              transparent 50%
            )
          `,
        }}
      >
        {/* ILUMINAÇÃO DECORATIVA */}

        <Box
          aria-hidden="true"
          sx={{
            position: 'absolute',
            top: -120,
            right: -150,
            width: 450,
            height: 450,
            borderRadius: '50%',
            background: `radial-gradient(
              circle,
              ${alpha(accentColor, 0.14)},
              transparent 70%
            )`,
            filter: 'blur(70px)',
            pointerEvents: 'none',
            zIndex: -1,
          }}
        />

        <Container maxWidth="lg">
          {/* ================================================
              CABEÇALHO
          ================================================ */}

          <Stack
            spacing={2.5}
            sx={{
              mb: {
                xs: 4,
                md: 5,
              },
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              spacing={1.5}
            >
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '13px',
                  color: 'primary.main',
                  bgcolor: alpha(accentColor, 0.1),
                  border: `1px solid ${alpha(
                    accentColor,
                    0.2,
                  )}`,
                }}
              >
                <CollectionsOutlinedIcon />
              </Box>

              <Typography
                variant="overline"
                sx={{
                  color: 'primary.main',
                  fontWeight: 800,
                  letterSpacing: '0.17em',
                }}
              >
                06 / VISÃO VISUAL
              </Typography>
            </Stack>

            <Stack
              direction={{
                xs: 'column',
                sm: 'row',
              }}
              alignItems={{
                xs: 'flex-start',
                sm: 'flex-end',
              }}
              justifyContent="space-between"
              gap={2.5}
            >
              <Box>
                <Typography
                  id={galleryTitleId}
                  component="h2"
                  sx={{
                    fontWeight: 800,
                    color: 'text.primary',
                    letterSpacing: '-0.05em',
                    lineHeight: 1.15,
                    fontSize: {
                      xs: '2rem',
                      sm: '2.7rem',
                      md: '3.3rem',
                    },
                  }}
                >
                  Por dentro do{' '}
                  <Box
                    component="span"
                    sx={{
                      background:
                        'linear-gradient(110deg, #B7ED73, #71DCCA, #86A8FF)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    projeto.
                  </Box>
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    mt: 1.5,
                    color: 'text.secondary',
                    lineHeight: 1.8,
                    maxWidth: 650,
                  }}
                >
                  Explore as imagens e interfaces deste
                  projeto. Clique em uma imagem para
                  visualizar seus detalhes.
                </Typography>
              </Box>

              <Chip
                icon={
                  <PhotoLibraryOutlinedIcon
                    sx={{
                      color: 'primary.main !important',
                    }}
                  />
                }
                label={`${formatProjectIndex(images.length)} VISUAIS`}
                variant="outlined"
                sx={{
                  height: 42,
                  borderRadius: '12px',
                  fontWeight: 800,
                  letterSpacing: '0.06em',
                  color: 'text.primary',
                  borderColor: alpha(accentColor, 0.3),
                  bgcolor: alpha(accentColor, 0.07),
                  flexShrink: 0,
                }}
              />
            </Stack>
          </Stack>

          {/* ================================================
              GRID DE IMAGENS
          ================================================ */}

          <Box
            component="ul"
            aria-label={`Galeria visual de ${title}`}
            sx={{
              display: 'grid',
              gridTemplateColumns:
                images.length === 1
                  ? 'minmax(0, 1fr)'
                  : {
                      xs: 'minmax(0, 1fr)',
                      sm: 'repeat(2, minmax(0, 1fr))',
                    },
              gap: {
                xs: 2.5,
                md: 3,
              },
              listStyle: 'none',
              p: 0,
              m: 0,
            }}
          >
            {images.map((item, index) => (
              <Box
                component="li"
                key={`${item.src}-${index}`}
                sx={{ minWidth: 0 }}
              >
                <Paper
                  component="button"
                  type="button"
                  onClick={() => openGallery(index)}
                  aria-label={`Ampliar imagem ${index + 1} de ${images.length}: ${item.alt}`}
                  elevation={0}
                  sx={{
                    position: 'relative',
                    display: 'block',
                    width: '100%',
                    p: 0,
                    m: 0,
                    textAlign: 'left',
                    cursor: 'pointer',
                    appearance: 'none',
                    overflow: 'hidden',
                    borderRadius: '24px',
                    border: '1px solid',
                    borderColor: 'divider',
                    bgcolor: 'background.paper',
                    color: 'text.primary',
                    boxShadow: isDark
                      ? '0 14px 45px rgba(0,0,0,0.17)'
                      : '0 14px 45px rgba(20,35,50,0.07)',
                    transition:
                      'transform 300ms ease, border-color 300ms ease, box-shadow 300ms ease',

                    '&:hover': {
                      transform: 'translateY(-6px)',
                      borderColor: alpha(accentColor, 0.6),
                      boxShadow: `0 24px 60px ${alpha(
                        accentColor,
                        0.13,
                      )}`,
                    },

                    '&:hover img': {
                      transform: 'scale(1.06)',
                    },

                    '&:hover [data-zoom-icon]': {
                      transform: 'scale(1.1)',
                      bgcolor: 'primary.main',
                      color: 'primary.contrastText',
                    },

                    '&:focus-visible': {
                      outline: `3px solid ${accentColor}`,
                      outlineOffset: 4,
                    },

                    '@media (prefers-reduced-motion: reduce)': {
                      transition: 'none',
                      '&:hover': {
                        transform: 'none',
                      },
                      '&:hover img': {
                        transform: 'none',
                      },
                    },
                  }}
                >
                  {/* FUNDO GRADIENTE */}

                  <Box
                    sx={{
                      position: 'relative',
                      overflow: 'hidden',
                      p: {
                        xs: 2,
                        md: 3,
                      },
                      bgcolor: isDark
                        ? '#111821'
                        : '#E8EEF3',
                      backgroundImage: `
                        radial-gradient(
                          ellipse at 15% 10%,
                          ${alpha(accentColor, 0.25)},
                          transparent 60%
                        ),
                        radial-gradient(
                          ellipse at 90% 90%,
                          ${alpha(theme.palette.info.main, 0.2)},
                          transparent 60%
                        )
                      `,
                    }}
                  >
                    {/* MOLDURA DA IMAGEM */}

                    <Box
                      sx={{
                        position: 'relative',
                        width: '100%',
                        aspectRatio: '16 / 10',
                        overflow: 'hidden',
                        borderRadius: '18px',
                        bgcolor: '#111827',
                        border: `1px solid ${alpha(
                          accentColor,
                          0.3,
                        )}`,
                        boxShadow: `0 18px 40px rgba(0,0,0,0.25), 0 0 28px ${alpha(accentColor, 0.12)}`,
                        outline: `1px solid ${alpha(accentColor, 0.25)}`,
                        outlineOffset: -1,

                        '& img': {
                          transition:
                            'transform 450ms cubic-bezier(.22,1,.36,1)',
                        },

                        '@media (prefers-reduced-motion: reduce)': {
                          '& img': {
                            transition: 'none',
                          },
                        },
                      }}
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes={
                          images.length === 1
                            ? '(max-width: 1200px) 90vw, 1100px'
                            : '(max-width: 600px) 90vw, (max-width: 1200px) 45vw, 550px'
                        }
                        style={{
                          objectFit: 'contain',
                        }}
                      />

                      {/* GRADIENTE DA MOLDURA */}

                      <Box
                        aria-hidden="true"
                        sx={{
                          position: 'absolute',
                          inset: 0,
                          background: `linear-gradient(135deg, ${alpha(accentColor, 0.10)}, transparent 48%), linear-gradient(180deg, transparent 65%, rgba(0,0,0,0.36))`,
                          pointerEvents: 'none',
                        }}
                      />

                      {/* BOTÃO VISUAL DE AMPLIAR */}

                      <Box
                        data-zoom-icon
                        aria-hidden="true"
                        sx={{
                          position: 'absolute',
                          top: 14,
                          right: 14,
                          width: 40,
                          height: 40,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: '12px',
                          bgcolor: 'rgba(15,20,30,0.78)',
                          color: '#FFFFFF',
                          backdropFilter: 'blur(12px)',
                          border:
                            '1px solid rgba(255,255,255,0.15)',
                          transition:
                            'transform 250ms ease, background-color 250ms ease',
                        }}
                      >
                        <ZoomInRoundedIcon />
                      </Box>
                    </Box>
                  </Box>

                  {/* RODAPÉ DO CARD */}

                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    gap={2}
                    sx={{
                      px: {
                        xs: 2.2,
                        md: 2.7,
                      },
                      py: 2.2,
                    }}
                  >
                    <Stack
                      direction="row"
                      spacing={1.5}
                      alignItems="center"
                      sx={{ minWidth: 0 }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          color: 'primary.main',
                          fontWeight: 800,
                          flexShrink: 0,
                        }}
                      >
                        {formatProjectIndex(index + 1)}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.primary',
                          fontWeight: 700,
                          lineHeight: 1.5,
                          overflowWrap: 'anywhere',
                        }}
                      >
                        {item.caption ||
                          `Tela ${index + 1}`}
                      </Typography>
                    </Stack>

                    <OpenInFullRoundedIcon
                      sx={{
                        fontSize: 18,
                        color: 'primary.main',
                        flexShrink: 0,
                      }}
                    />
                  </Stack>
                </Paper>
              </Box>
            ))}
          </Box>

          {/* INFORMAÇÃO ADICIONAL */}

          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            sx={{
              mt: 3,
              color: 'text.secondary',
            }}
          >
            <ZoomInRoundedIcon sx={{ fontSize: 17 }} />

            <Typography
              variant="caption"
              sx={{ lineHeight: 1.7 }}
            >
              Clique para ampliar. Utilize as setas do
              teclado para navegar entre as imagens.
            </Typography>
          </Stack>
        </Container>
      </Box>

      {/* ======================================================
          LIGHTBOX — POPUP MATERIAL UI
      ====================================================== */}

      <Dialog
        open={isOpen}
        onClose={closeGallery}
        onKeyDown={handleGalleryKeyDown}
        maxWidth="lg"
        fullWidth
        aria-labelledby={dialogTitleId}
        PaperProps={{
          sx: {
            position: 'relative',
            overflow: 'hidden',
            borderRadius: {
              xs: '14px',
              sm: '22px',
            },
            bgcolor: 'background.paper',
            color: 'text.primary',
            border: '1px solid',
            borderColor: alpha(accentColor, 0.25),
            backgroundImage: `
              radial-gradient(
                ellipse at 50% 0%,
                ${alpha(accentColor, 0.08)},
                transparent 65%
              )
            `,
            boxShadow:
              '0 35px 100px rgba(0,0,0,0.35)',
            m: {
              xs: 1,
              sm: 2,
            },
            width: {
              xs: 'calc(100% - 16px)',
              sm: 'calc(100% - 32px)',
            },
            maxHeight: 'calc(100dvh - 24px)',
          },
        }}
        BackdropProps={{
          sx: {
            bgcolor: 'rgba(4,9,17,0.82)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
          },
        }}
      >
        {currentImage && (
          <Stack
            sx={{
              width: '100%',
              minWidth: 0,
              overflow: 'hidden',
            }}
          >
            {/* CABEÇALHO DO POPUP */}

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              gap={2}
              sx={{
                px: {
                  xs: 2,
                  sm: 3,
                },
                py: 2,
                borderBottom: '1px solid',
                borderColor: 'divider',
              }}
            >
              <Stack spacing={0.4} sx={{ minWidth: 0 }}>
                <Typography
                  id={dialogTitleId}
                  variant="subtitle2"
                  sx={{
                    fontWeight: 800,
                    color: 'text.primary',
                    overflowWrap: 'anywhere',
                  }}
                >
                  {title}
                </Typography>

                <Typography
                  variant="caption"
                  aria-live="polite"
                  sx={{
                    color: 'primary.main',
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                  }}
                >
                  {formatProjectIndex((activeIndex ?? 0) + 1)}
                  {' / '}
                  {formatProjectIndex(images.length)}
                </Typography>
              </Stack>

              <IconButton
                aria-label="Fechar galeria"
                onClick={closeGallery}
                sx={{
                  flexShrink: 0,
                  width: 42,
                  height: 42,
                  borderRadius: '12px',
                  color: 'text.primary',
                  bgcolor: alpha(
                    theme.palette.text.primary,
                    0.06,
                  ),
                  transition:
                    'background-color 200ms ease, transform 200ms ease',
                  '&:hover': {
                    bgcolor: alpha(
                      theme.palette.error.main,
                      0.13,
                    ),
                    transform: 'rotate(90deg)',
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

            {/* IMAGEM AMPLIADA */}

            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: {
                  xs: '52dvh',
                  sm: '65dvh',
                },
                maxHeight: 760,
                minHeight: 200,
                bgcolor: isDark
                  ? '#080D14'
                  : '#E6EBF1',
                backgroundImage: `
                  radial-gradient(
                    ellipse at center,
                    ${alpha(accentColor, 0.08)},
                    transparent 70%
                  )
                `,
              }}
            >
              <Image
                key={currentImage.src}
                src={currentImage.src}
                alt={currentImage.alt}
                fill
                sizes="(max-width: 1200px) 95vw, 1100px"
                style={{
                  objectFit: 'contain',
                  padding: '12px',
                }}
              />
            </Box>

            {/* RODAPÉ DO POPUP */}

            <Stack
              direction={{
                xs: 'column',
                sm: 'row',
              }}
              alignItems={{
                xs: 'stretch',
                sm: 'center',
              }}
              justifyContent="space-between"
              gap={2}
              sx={{
                px: {
                  xs: 2,
                  sm: 3,
                },
                py: 2.5,
                borderTop: '1px solid',
                borderColor: 'divider',
              }}
            >
              <Stack
                direction="row"
                spacing={1}
                alignItems="flex-start"
                sx={{
                  minWidth: 0,
                  maxWidth: 720,
                }}
              >
                <CollectionsOutlinedIcon
                  sx={{
                    color: 'primary.main',
                    fontSize: 20,
                    flexShrink: 0,
                    mt: 0.2,
                  }}
                />

                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.7,
                    overflowWrap: 'anywhere',
                  }}
                >
                  {currentImage.caption ||
                    currentImage.alt}
                </Typography>
              </Stack>

              {/* NAVEGAÇÃO */}

              {images.length > 1 && (
                <Stack
                  direction="row"
                  spacing={1}
                  justifyContent={{
                    xs: 'flex-end',
                    sm: 'center',
                  }}
                  sx={{
                    flexShrink: 0,
                  }}
                >
                  <IconButton
                    aria-label="Imagem anterior"
                    onClick={() => changeImage(-1)}
                    sx={{
                      width: 45,
                      height: 45,
                      borderRadius: '12px',
                      color: 'text.primary',
                      border: '1px solid',
                      borderColor: 'divider',
                      transition:
                        'background-color 200ms ease, border-color 200ms ease',

                      '&:hover': {
                        borderColor: 'primary.main',
                        bgcolor: alpha(
                          accentColor,
                          0.1,
                        ),
                      },
                    }}
                  >
                    <ArrowBackIosNewRoundedIcon
                      sx={{ fontSize: 18 }}
                    />
                  </IconButton>

                  <IconButton
                    aria-label="Próxima imagem"
                    onClick={() => changeImage(1)}
                    sx={{
                      width: 45,
                      height: 45,
                      borderRadius: '12px',
                      color: 'text.primary',
                      border: '1px solid',
                      borderColor: 'divider',
                      transition:
                        'background-color 200ms ease, border-color 200ms ease',

                      '&:hover': {
                        borderColor: 'primary.main',
                        bgcolor: alpha(
                          accentColor,
                          0.1,
                        ),
                      },
                    }}
                  >
                    <ArrowForwardIosRoundedIcon
                      sx={{ fontSize: 18 }}
                    />
                  </IconButton>
                </Stack>
              )}
            </Stack>
          </Stack>
        )}
      </Dialog>
    </>
  );
}
