import {
  Box,
  Container,
  Stack,
  Typography,
} from '@mui/material';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import { RelatedProjectCard } from './RelatedProjectCard';
import { projectDetailStyles } from '../../../styles/projects/project-detailStyles/ProjectDetail.styles';
import { RelatedProjectsProps } from '@/types/projectsTypes/projectDetail.types';

export function RelatedProjects({
  projects,
}: RelatedProjectsProps) {
  if (projects.length === 0) {
    return null;
  }

  return (
    <Container
      component="section"
      maxWidth="lg"
      aria-labelledby="related-projects-title"
      sx={projectDetailStyles.relatedSection}
    >
      <Stack
        spacing={2}
        sx={{ mb: 4 }}
      >
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
        >
          <CodeRoundedIcon
            sx={{ color: 'primary.main' }}
          />

          <Typography
            variant="overline"
            sx={{
              color: 'primary.main',
              fontWeight: 800,
              letterSpacing: '0.13em',
            }}
          >
            PRÓXIMOS / CONTINUE EXPLORANDO
          </Typography>
        </Stack>

        <Typography
          id="related-projects-title"
          component="h2"
          sx={{
            fontSize: {
              xs: '2rem',
              md: '2.7rem',
            },
            fontWeight: 850,
            letterSpacing: '-0.05em',
            color: 'text.primary',
          }}
        >
          Mais projetos.
        </Typography>
      </Stack>

      <Box sx={projectDetailStyles.relatedGrid}>
        {projects.map((project) => (
          <RelatedProjectCard
            key={project.slug}
            project={project}
          />
        ))}
      </Box>
    </Container>
  );
}