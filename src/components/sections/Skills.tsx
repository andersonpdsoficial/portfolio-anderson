'use client';
import {
  Box,
  Chip,
  Container,
  Paper,
  Stack,
  Typography,
} from '@mui/material';

import {
  alpha,
  type Theme,
} from '@mui/material/styles';

import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import StorageRoundedIcon from '@mui/icons-material/StorageRounded';
import TerminalRoundedIcon from '@mui/icons-material/TerminalRounded';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';

import { portfolioData } from '@/data/portfolioData';
import { Reveal } from '@/components/ui/Reveal';

// ============================================================
// TIPOS E CONFIGURAÇÕES
// ============================================================

type SkillAccent =
  | 'primary'
  | 'info'
  | 'secondary'
  | 'warning';

// Ícones e cores por categoria.
// Os conteúdos continuam em portfolioData.ts.

const skillVisuals = {
  frontend: {
    icon: CodeRoundedIcon,
    accent: 'primary',
    number: '01',
  },

  backend: {
    icon: StorageRoundedIcon,
    accent: 'info',
    number: '02',
  },

  engineering: {
    icon: TerminalRoundedIcon,
    accent: 'secondary',
    number: '03',
  },

  ai: {
    icon: AutoAwesomeRoundedIcon,
    accent: 'warning',
    number: '04',
  },
} as const;

const fallbackVisual: {
  icon: typeof HubOutlinedIcon;
  accent: SkillAccent;
  number: string;
} = {
  icon: HubOutlinedIcon,
  accent: 'primary',
  number: '05',
};

// ============================================================
// ESTILOS COMPARTILHADOS
// ============================================================

const getSectionBackground = (theme: Theme) => ({
  backgroundColor: theme.palette.background.default,

  backgroundImage: `
    radial-gradient(
      ellipse at 8% 15%,
      ${alpha(theme.palette.primary.main, 0.11)},
      transparent 45%
    ),
    radial-gradient(
      ellipse at 92% 35%,
      ${alpha(theme.palette.info.main, 0.09)},
      transparent 47%
    ),
    radial-gradient(
      ellipse at 50% 100%,
      ${alpha(theme.palette.secondary.main, 0.07)},
      transparent 55%
    )
  `,
});

// ============================================================
// COMPONENTE PRINCIPAL
// ============================================================

export function Skills() {
  const { skillGroups } = portfolioData;

  const totalSkills = new Set(
    skillGroups.flatMap((group) => group.skills),
  ).size;

  return (
    <Box
      component="section"
      id="stack"
      aria-labelledby="skills-title"
      sx={(theme) => ({
        position: 'relative',
        isolation: 'isolate',
        overflow: 'hidden',

        py: {
          xs: 7,
          sm: 8,
          md: 11,
        },

        ...getSectionBackground(theme),
      })}
    >
      {/* ================================================
          ELEMENTOS DECORATIVOS
      ================================================ */}

      <Box
        aria-hidden="true"
        sx={(theme) => ({
          position: 'absolute',
          top: '-180px',
          right: '-150px',

          width: {
            xs: 340,
            md: 580,
          },

          height: {
            xs: 340,
            md: 580,
          },

          borderRadius: '50%',

          background: `radial-gradient(
            circle,
            ${alpha(theme.palette.primary.main, 0.16)},
            transparent 70%
          )`,

          filter: 'blur(75px)',
          pointerEvents: 'none',
          zIndex: -1,
        })}
      />

      <Box
        aria-hidden="true"
        sx={(theme) => ({
          position: 'absolute',
          bottom: '-180px',
          left: '-160px',

          width: {
            xs: 340,
            md: 540,
          },

          height: {
            xs: 340,
            md: 540,
          },

          borderRadius: '50%',

          background: `radial-gradient(
            circle,
            ${alpha(theme.palette.info.main, 0.13)},
            transparent 70%
          )`,

          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: -1,
        })}
      />

      {/* GRID DECORATIVO */}

      <Box
        aria-hidden="true"
        sx={(theme) => ({
          position: 'absolute',
          inset: 0,

          opacity:
            theme.palette.mode === 'dark'
              ? 0.065
              : 0.04,

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

          backgroundSize: '76px 76px',

          maskImage:
            'linear-gradient(to bottom, transparent, black 40%, transparent)',

          WebkitMaskImage:
            'linear-gradient(to bottom, transparent, black 40%, transparent)',

          pointerEvents: 'none',
          zIndex: -1,
        })}
      />

      {/* ================================================
          CONTEÚDO
      ================================================ */}

      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* ================================================
            CABEÇALHO
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
            {/* IDENTIFICAÇÃO */}

            <Stack
              direction="row"
              alignItems="center"
              spacing={1.5}
            >
              <Box
                sx={(theme) => ({
                  width: 42,
                  height: 42,

                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',

                  borderRadius: '13px',

                  color: 'primary.main',

                  bgcolor: alpha(
                    theme.palette.primary.main,
                    0.1,
                  ),

                  border: `1px solid ${alpha(
                    theme.palette.primary.main,
                    0.2,
                  )}`,
                })}
              >
                <LayersOutlinedIcon
                  sx={{ fontSize: 23 }}
                />
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
                04 / STACK & FERRAMENTAS
              </Typography>
            </Stack>

            {/* TÍTULO */}

            <Typography
              id="skills-title"
              component="h2"
              sx={{
                maxWidth: 880,

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
              Ferramentas são meios.{' '}

              <Box
                component="span"
                sx={{
                  display: 'inline',

                  background:
                    'linear-gradient(110deg, #B7ED73 0%, #71DCCA 50%, #86A8FF 100%)',

                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Resultado é o foco.
              </Box>
            </Typography>

            {/* DESCRIÇÃO */}

            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                maxWidth: 760,
                lineHeight: 1.9,

                fontSize: {
                  xs: '1rem',
                  md: '1.07rem',
                },
              }}
            >
              Tecnologias com as quais trabalho ou venho
              construindo projetos. A escolha de cada
              ferramenta depende do contexto, da arquitetura
              e das necessidades reais do produto.
            </Typography>

            {/* INDICADORES */}

            <Stack
              direction="row"
              flexWrap="wrap"
              useFlexGap
              gap={1.2}
              sx={{ pt: 0.5 }}
            >
              <Chip
                icon={
                  <LayersOutlinedIcon
                    sx={{
                      color: 'primary.main !important',
                    }}
                  />
                }
                label={`${skillGroups.length} áreas de conhecimento`}
                variant="outlined"
                sx={(theme) => ({
                  minHeight: 40,
                  height: 'auto',
                  py: 0.5,
                  px: 0.5,

                  borderRadius: '11px',
                  fontWeight: 700,

                  color: 'text.primary',

                  borderColor: alpha(
                    theme.palette.primary.main,
                    0.25,
                  ),

                  bgcolor: alpha(
                    theme.palette.primary.main,
                    0.07,
                  ),
                })}
              />

              <Chip
                icon={
                  <AutoAwesomeRoundedIcon
                    sx={{
                      color: 'info.main !important',
                    }}
                  />
                }
                label={`${totalSkills} tecnologias e competências`}
                variant="outlined"
                sx={(theme) => ({
                  minHeight: 40,
                  height: 'auto',
                  py: 0.5,
                  px: 0.5,

                  borderRadius: '11px',
                  fontWeight: 700,

                  color: 'text.primary',

                  borderColor: alpha(
                    theme.palette.info.main,
                    0.25,
                  ),

                  bgcolor: alpha(
                    theme.palette.info.main,
                    0.07,
                  ),
                })}
              />
            </Stack>
          </Stack>
        </Reveal>

        {/* ================================================
            GRID DAS COMPETÊNCIAS
        ================================================ */}

        <Box
          sx={{
            display: 'grid',

            gridTemplateColumns: {
              xs: 'minmax(0, 1fr)',
              sm: 'repeat(2, minmax(0, 1fr))',
            },

            gap: {
              xs: 2.5,
              md: 3,
            },

            alignItems: 'stretch',
          }}
        >
          {skillGroups.map((group, index) => {
            const visual =
              skillVisuals[
                group.id as keyof typeof skillVisuals
              ] ?? fallbackVisual;

            const IconComponent = visual.icon;

            const accent: SkillAccent = visual.accent;

            return (
              <Reveal
                key={group.id}
                delay={Math.min(index * 0.08, 0.32)}
              >
                <Paper
                  component="article"
                  elevation={0}
                  aria-labelledby={`skill-group-${group.id}`}
                  sx={(theme) => {
                    const accentColor =
                      theme.palette[accent].main;

                    return {
                      position: 'relative',
                      isolation: 'isolate',
                      overflow: 'hidden',

                      display: 'flex',
                      flexDirection: 'column',

                      minWidth: 0,
                      height: '100%',

                      p: {
                        xs: 2.5,
                        sm: 3,
                        md: 3.25,
                      },

                      borderRadius: '23px',

                      bgcolor: 'background.paper',

                      border: '1px solid',
                      borderColor: 'divider',

                      backgroundImage: `
                        radial-gradient(
                          ellipse at 100% 0%,
                          ${alpha(accentColor, 0.11)},
                          transparent 60%
                        ),
                        linear-gradient(
                          145deg,
                          ${alpha(accentColor, 0.035)},
                          transparent 75%
                        )
                      `,

                      boxShadow:
                        theme.palette.mode === 'dark'
                          ? '0 15px 45px rgba(0,0,0,0.13)'
                          : '0 15px 45px rgba(20,30,45,0.045)',

                      transition:
                        'transform 350ms cubic-bezier(.22,1,.36,1), border-color 350ms ease, box-shadow 350ms ease',

                      '&:hover': {
                        transform: 'translateY(-8px)',

                        borderColor: alpha(
                          accentColor,
                          0.55,
                        ),

                        boxShadow:
                          theme.palette.mode === 'dark'
                            ? `0 28px 65px ${alpha(accentColor, 0.10)}`
                            : `0 28px 65px ${alpha(accentColor, 0.13)}`,
                      },

                      '&:hover .skill-arrow': {
                        transform: 'translate(4px, -4px)',
                        color: accentColor,
                      },

                      '&:hover .skill-icon': {
                        transform: 'scale(1.08) rotate(-4deg)',
                        boxShadow: `0 12px 30px ${alpha(
                          accentColor,
                          0.15,
                        )}`,
                      },

                      '@media (prefers-reduced-motion: reduce)': {
                        transition: 'none',

                        '&:hover': {
                          transform: 'none',
                        },

                        '&:hover .skill-icon': {
                          transform: 'none',
                        },

                        '&:hover .skill-arrow': {
                          transform: 'none',
                        },
                      },
                    };
                  }}
                >
                  {/* ========================================
                      BARRA SUPERIOR DO CARD
                  ======================================== */}

                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="flex-start"
                    spacing={2}
                    sx={{
                      mb: 3,
                    }}
                  >
                    {/* ÍCONE */}

                    <Box
                      className="skill-icon"
                      sx={(theme) => {
                        const color =
                          theme.palette[accent].main;

                        return {
                          width: {
                            xs: 58,
                            sm: 64,
                          },

                          height: {
                            xs: 58,
                            sm: 64,
                          },

                          flexShrink: 0,

                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',

                          borderRadius: '18px',

                          color,

                          bgcolor: alpha(color, 0.11),

                          border: `1px solid ${alpha(
                            color,
                            0.22,
                          )}`,

                          transition:
                            'transform 300ms ease, box-shadow 300ms ease',

                          '@media (prefers-reduced-motion: reduce)': {
                            transition: 'none',
                          },
                        };
                      }}
                    >
                      <IconComponent
                        sx={{
                          fontSize: {
                            xs: 29,
                            sm: 32,
                          },
                        }}
                      />
                    </Box>

                    {/* NUMERAÇÃO */}

                    <Stack
                      direction="row"
                      spacing={1}
                      alignItems="center"
                    >
                      <Typography
                        variant="overline"
                        sx={{
                          fontWeight: 800,
                          color: 'text.disabled',
                          letterSpacing: '0.12em',
                        }}
                      >
                        {visual.number}
                      </Typography>

                      <ArrowOutwardRoundedIcon
                        className="skill-arrow"
                        aria-hidden="true"
                        sx={{
                          fontSize: 21,
                          color: 'text.secondary',

                          transition:
                            'transform 300ms ease, color 300ms ease',

                          '@media (prefers-reduced-motion: reduce)': {
                            transition: 'none',
                          },
                        }}
                      />
                    </Stack>
                  </Stack>

                  {/* ========================================
                      TÍTULO
                  ======================================== */}

                  <Typography
                    id={`skill-group-${group.id}`}
                    component="h3"
                    sx={{
                      fontSize: {
                        xs: '1.3rem',
                        sm: '1.5rem',
                      },

                      fontWeight: 800,
                      letterSpacing: '-0.035em',
                      lineHeight: 1.3,

                      color: 'text.primary',

                      mb: 1.5,
                    }}
                  >
                    {group.label}
                  </Typography>

                  {/* DESCRIÇÃO */}

                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.85,

                      fontSize: {
                        xs: '0.89rem',
                        md: '0.94rem',
                      },

                      mb: 3,
                      maxWidth: 470,
                    }}
                  >
                    {group.description}
                  </Typography>

                  {/* ========================================
                      DIVISOR
                  ======================================== */}

                  <Box
                    sx={(theme) => ({
                      height: '1px',
                      width: '100%',

                      mb: 3,

                      background: `linear-gradient(
                        90deg,
                        ${alpha(
                          theme.palette[accent].main,
                          0.35,
                        )},
                        ${theme.palette.divider},
                        transparent
                      )`,
                    })}
                  />

                  {/* ========================================
                      LISTA DE TECNOLOGIAS
                  ======================================== */}

                  <Box
                    component="ul"
                    aria-label={`Tecnologias de ${group.label}`}
                    sx={{
                      listStyle: 'none',

                      display: 'flex',
                      flexWrap: 'wrap',

                      gap: 1,

                      p: 0,
                      m: 0,

                      flex: 1,
                      alignContent: 'flex-start',
                    }}
                  >
                    {group.skills.map((skill) => (
                      <Box
                        component="li"
                        key={skill}
                        sx={{
                          display: 'inline-flex',
                          maxWidth: '100%',
                        }}
                      >
                        <Chip
                          label={skill}
                          size="small"
                          variant="outlined"
                          sx={(theme) => {
                            const color =
                              theme.palette[accent].main;

                            return {
                              height: 'auto',
                              minHeight: 34,

                              maxWidth: '100%',

                              borderRadius: '9px',

                              fontWeight: 650,
                              fontSize: '0.76rem',

                              color: 'text.secondary',

                              borderColor:
                                theme.palette.divider,

                              bgcolor: alpha(
                                theme.palette.background.default,
                                theme.palette.mode === 'dark'
                                  ? 0.48
                                  : 0.7,
                              ),

                              transition:
                                'transform 220ms ease, border-color 220ms ease, background-color 220ms ease, color 220ms ease',

                              '& .MuiChip-label': {
                                px: 1.35,
                                py: 0.75,
                                whiteSpace: 'normal',
                                overflowWrap: 'anywhere',
                              },

                              '&:hover': {
                                transform:
                                  'translateY(-3px)',

                                color: 'text.primary',

                                borderColor: alpha(
                                  color,
                                  0.55,
                                ),

                                bgcolor: alpha(
                                  color,
                                  0.11,
                                ),
                              },

                              '@media (prefers-reduced-motion: reduce)': {
                                transition: 'none',

                                '&:hover': {
                                  transform: 'none',
                                },
                              },
                            };
                          }}
                        />
                      </Box>
                    ))}
                  </Box>

                  {/* ========================================
                      RODAPÉ DO CARD
                  ======================================== */}

                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{
                      mt: 3,
                      pt: 2.5,

                      borderTop: '1px solid',
                      borderColor: 'divider',
                    }}
                  >
                    <Stack
                      direction="row"
                      alignItems="center"
                      spacing={1}
                    >
                      <Box
                        aria-hidden="true"
                        sx={(theme) => ({
                          width: 7,
                          height: 7,

                          borderRadius: '50%',

                          bgcolor:
                            theme.palette[accent].main,

                          boxShadow: `0 0 11px ${alpha(
                            theme.palette[accent].main,
                            0.4,
                          )}`,
                        })}
                      />

                      <Typography
                        variant="caption"
                        sx={{
                          color: 'text.secondary',
                          fontWeight: 700,
                          letterSpacing: '0.025em',
                        }}
                      >
                        {group.skills.length}{' '}
                        {group.skills.length === 1
                          ? 'competência'
                          : 'competências'}
                      </Typography>
                    </Stack>

                    <Typography
                      variant="caption"
                      sx={(theme) => ({
                        fontWeight: 800,

                        color:
                          theme.palette[accent].main,

                        letterSpacing: '0.1em',
                        fontSize: '0.65rem',
                      })}
                    >
                      TECH STACK
                    </Typography>
                  </Stack>
                </Paper>
              </Reveal>
            );
          })}
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

              borderRadius: '17px',

              border: `1px solid ${alpha(
                theme.palette.primary.main,
                0.18,
              )}`,

              bgcolor: alpha(
                theme.palette.background.paper,
                0.7,
              ),

              backgroundImage: `
                linear-gradient(
                  120deg,
                  ${alpha(
                    theme.palette.primary.main,
                    0.06,
                  )},
                  transparent 75%
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
              gap={2}
            >
              <Stack
                direction="row"
                alignItems="flex-start"
                spacing={1.5}
              >
                <AutoAwesomeRoundedIcon
                  sx={{
                    fontSize: 21,
                    color: 'primary.main',
                    flexShrink: 0,
                    mt: 0.3,
                  }}
                />

                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.85,
                    maxWidth: 820,
                  }}
                >
                  Mais importante do que dominar uma ferramenta
                  é compreender quando, por que e como
                  utilizá-la. Priorizo soluções sustentáveis,
                  código organizado e decisões técnicas
                  alinhadas aos objetivos de cada projeto.
                </Typography>
              </Stack>

              <Typography
                variant="caption"
                sx={{
                  flexShrink: 0,

                  fontWeight: 800,
                  letterSpacing: '0.12em',

                  color: 'primary.main',
                }}
              >
                LEARN · BUILD · EVOLVE
              </Typography>
            </Stack>
          </Box>
        </Reveal>
      </Container>
    </Box>
  );
}
