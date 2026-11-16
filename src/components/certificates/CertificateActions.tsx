'use client';

import { Stack, Button } from '@mui/material';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import { FreeCourse } from '@/data/portfolioData';

export  function CertificateActions({
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
