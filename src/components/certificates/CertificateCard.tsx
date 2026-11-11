'use client';

import { useState } from 'react';
import Image from 'next/image';

import {
  Box,
  Button,
  Chip,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { alpha } from '@mui/material/styles';

import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';

import type { FreeCourse } from '@/data/portfolioData';

type CertificateCardProps = Readonly<{
  course: FreeCourse;
  variant?: 'compact' | 'full';
}>;

function CertificateMeta({ course }: Readonly<{ course: FreeCourse }>) {
  return (
    <Stack direction="row" flexWrap="wrap" useFlexGap gap={1.5}>
      <Stack direction="row" alignItems="center" spacing={0.5}>
        <CalendarMonthRoundedIcon
          aria-hidden="true"
          sx={{ fontSize: 16, color: 'primary.main' }}
        />
        <Typography variant="caption" color="text.secondary">
          {course.date}
        </Typography>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={0.5}>
        <AccessTimeRoundedIcon
          aria-hidden="true"
          sx={{ fontSize: 16, color: 'primary.main' }}
        />
        <Typography variant="caption" color="text.secondary">
          {course.totalHours} h
        </Typography>
      </Stack>
    </Stack>
  );
}

function CertificateActions({
  course,
  compact,
}: Readonly<{ course: FreeCourse; compact: boolean }>) {
  return (
    <Stack direction="row" flexWrap="wrap" useFlexGap gap={compact ? 0.8 : 1}>
      {course.certificateImage && (
        <Button
          component="a"
          href={course.certificateImage}
          target="_blank"
          rel="noopener noreferrer"
          variant={compact ? 'text' : 'outlined'}
          size="small"
          endIcon={<OpenInNewRoundedIcon sx={{ fontSize: '15px !important' }} />}
          aria-label={`Ver imagem do certificado de ${course.title} em nova aba`}
          sx={{
            px: compact ? 0.5 : 1.3,
            minHeight: 34,
            borderRadius: '9px',
            fontSize: compact ? '0.73rem' : '0.78rem',
            fontWeight: 700,
            textTransform: 'none',
            '&:focus-visible': { outline: '2px solid', outlineOffset: 3 },
          }}
        >
          Ver certificado
        </Button>
      )}

      {course.certificateUrl && (
        <Button
          component="a"
          href={course.certificateUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant="text"
          size="small"
          endIcon={<VerifiedOutlinedIcon sx={{ fontSize: '15px !important' }} />}
          aria-label={`Acessar validação do certificado de ${course.title} em nova aba`}
          sx={{
            px: compact ? 0.5 : 1,
            minHeight: 34,
            borderRadius: '9px',
            fontSize: compact ? '0.73rem' : '0.78rem',
            fontWeight: 700,
            textTransform: 'none',
            '&:focus-visible': { outline: '2px solid', outlineOffset: 3 },
          }}
        >
          Validação
        </Button>
      )}
    </Stack>
  );
}

/**
 * O mesmo componente atende às duas apresentações:
 * - compact: lista da página inicial, sem miniaturas;
 * - full: catálogo completo, com a imagem do certificado.
 */
export function CertificateCard({
  course,
  variant = 'compact',
}: CertificateCardProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const compact = variant === 'compact';

  return (
    <Paper
      component="article"
      elevation={0}
      sx={(theme) => ({
        minWidth: 0,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        p: compact ? 1.5 : 0,
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: compact ? '14px' : '20px',
        bgcolor: 'background.paper',
        backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.055)}, transparent 75%)`,
        transition: 'transform 280ms ease, border-color 280ms ease, box-shadow 280ms ease',
        '&:hover': {
          transform: 'translateY(-3px)',
          borderColor: alpha(theme.palette.primary.main, 0.48),
          boxShadow: theme.palette.mode === 'dark'
            ? `0 18px 38px ${alpha('#000000', 0.24)}`
            : `0 18px 38px ${alpha('#16243a', 0.09)}`,
        },
        '@media (prefers-reduced-motion: reduce)': {
          transition: 'none',
          '&:hover': { transform: 'none' },
        },
      })}
    >
      {!compact && (
        <Box
          component={course.certificateImage ? 'a' : 'div'}
          {...(course.certificateImage
            ? {
                href: course.certificateImage,
                target: '_blank',
                rel: 'noopener noreferrer',
                'aria-label': `Abrir imagem do certificado de ${course.title}`,
              }
            : {})}
          sx={(theme) => ({
            position: 'relative',
            display: 'block',
            aspectRatio: '16 / 10',
            bgcolor: alpha(theme.palette.info.main, 0.06),
            backgroundImage: `radial-gradient(ellipse at 30% 10%, ${alpha(theme.palette.primary.main, 0.17)}, transparent 68%), linear-gradient(135deg, ${alpha(theme.palette.background.default, 0.9)}, ${alpha(theme.palette.background.paper, 0.8)})`,
            overflow: 'hidden',
            cursor: course.certificateImage ? 'zoom-in' : 'default',
            '& img': {
              objectFit: 'contain',
              padding: '14px',
              transition: 'transform 350ms ease',
            },
            '&:hover img': { transform: 'scale(1.025)' },
            '&:focus-visible': { outline: '3px solid', outlineColor: 'primary.main', outlineOffset: -3 },
            '@media (prefers-reduced-motion: reduce)': {
              '& img': { transition: 'none' },
              '&:hover img': { transform: 'none' },
            },
          })}
        >
          {course.certificateImage && !imageFailed ? (
            <Image
              src={course.certificateImage}
              alt={`Imagem do certificado do curso ${course.title}`}
              fill
              sizes="(max-width: 599px) 100vw, (max-width: 899px) 50vw, 33vw"
              onError={() => setImageFailed(true)}
            />
          ) : (
            <Stack
              spacing={1}
              alignItems="center"
              justifyContent="center"
              sx={{ position: 'absolute', inset: 0, px: 2 }}
            >
              <WorkspacePremiumOutlinedIcon
                aria-hidden="true"
                sx={{ fontSize: 46, color: 'text.disabled' }}
              />
              <Typography variant="caption" color="text.secondary" textAlign="center">
                Imagem não disponível
              </Typography>
            </Stack>
          )}
          <Chip
            label="CERTIFICADO"
            size="small"
            sx={(theme) => ({
              position: 'absolute',
              left: 14,
              top: 14,
              pointerEvents: 'none',
              bgcolor: alpha(theme.palette.background.paper, 0.92),
              color: 'text.primary',
              fontSize: '0.65rem',
              fontWeight: 800,
              letterSpacing: '0.06em',
              backdropFilter: 'blur(12px)',
            })}
          />
        </Box>
      )}

      <Stack spacing={compact ? 1 : 1.6} sx={{ flex: 1, p: compact ? 0 : 2.3 }}>
        <Typography
          component={compact ? 'h4' : 'h2'}
          sx={{
            fontSize: compact ? '0.87rem' : '1.05rem',
            fontWeight: 750,
            lineHeight: 1.45,
            color: 'text.primary',
            overflowWrap: 'anywhere',
          }}
        >
          {course.title}
        </Typography>

        <CertificateMeta course={course} />

        <Box sx={{ mt: 'auto', pt: compact ? 0.15 : 0.8 }}>
          <CertificateActions course={course} compact={compact} />
        </Box>
      </Stack>
    </Paper>
  );
}
