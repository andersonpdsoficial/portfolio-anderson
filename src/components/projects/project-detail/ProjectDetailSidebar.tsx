import {
  Box,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { ProjectExternalLinks } from './ProjectExternalLinks';
import { projectDetailStyles } from '../../../styles/projects/project-detailStyles/ProjectDetail.styles';
import { ProjectDetailSidebarProps } from '@/types/projectsTypes/projectDetail.types';

export function ProjectDetailSidebar({
  project,
  accent,
  links,
}: ProjectDetailSidebarProps) {
  const metadata = [
    { label: 'TIPO', value: project.category },
    { label: 'FASE', value: project.status },
    { label: 'PERÍODO', value: project.year },
  ];

  return (
    <Box
      component="aside"
      aria-label="Informações do projeto"
      sx={projectDetailStyles.sidebar}
    >
      <Paper
        elevation={0}
        sx={projectDetailStyles.sidebarPaper(accent)}
      >
        <Stack spacing={2.5}>
          {metadata.map(({ label, value }) => (
            <Box key={label}>
              <Typography
                variant="overline"
                sx={projectDetailStyles.metadataLabel}
              >
                {label}
              </Typography>

              <Typography
                sx={projectDetailStyles.metadataValue}
              >
                {value}
              </Typography>
            </Box>
          ))}

          <ProjectExternalLinks
            links={links}
            accent={accent}
          />
        </Stack>
      </Paper>
    </Box>
  );
}