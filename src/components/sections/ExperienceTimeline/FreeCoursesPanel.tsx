import Link from 'next/link';

import {
  Box,
  Button,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { Reveal } from '@/components/ui/Reveal';
import { CertificateCard } from '@/components/certificates/CertificateCard';
import { getHomeCertificates } from '@/functions/getHomeCertificates';
import { FreeCoursesPanelProps } from '@/types/sections-types/about/experience.types';
import { experienceStyles } from '@/styles/sections-styles/experience.styles';

export function FreeCoursesPanel({
  courses,
}: FreeCoursesPanelProps) {
  const homeCourses = getHomeCertificates(courses);

  return (
    <Reveal delay={0.18}>
      <Paper
        component="aside"
        aria-labelledby="free-courses-title"
        elevation={0}
        sx={experienceStyles.coursesPaper}
      >
        <Stack
          direction="row"
          spacing={1.3}
          alignItems="center"
          sx={{ mb: 2.3 }}
        >
          <Box sx={experienceStyles.coursesIcon}>
            <WorkspacePremiumOutlinedIcon />
          </Box>

          <Box sx={{ minWidth: 0 }}>
            <Typography
              id="free-courses-title"
              component="h3"
              sx={experienceStyles.panelTitle}
            >
              CURSOS LIVRES
            </Typography>

            <Typography
              variant="caption"
              color="text.secondary"
            >
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
                sx={experienceStyles.coursesButton}
              >
                Listar todos
              </Button>

              <Typography
                variant="caption"
                color="text.secondary"
                sx={{
                  display: 'block',
                  mt: 1,
                  textAlign: 'center',
                }}
              >
                Exibindo {homeCourses.length} de{' '}
                {courses.length} certificados
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