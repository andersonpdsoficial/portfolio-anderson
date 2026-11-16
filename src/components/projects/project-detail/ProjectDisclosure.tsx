import {
  Paper,
  Typography,
} from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { projectDetailStyles } from '../../../styles/projects/project-detailStyles/ProjectDetail.styles';

export function ProjectDisclosure() {
  return (
    <Paper
      variant="outlined"
      sx={projectDetailStyles.disclosure}
    >
      <InfoOutlinedIcon
        sx={{
          color: 'primary.main',
          mt: 0.25,
          flexShrink: 0,
        }}
      />

      <Typography
        variant="body2"
        sx={{
          color: 'text.secondary',
          lineHeight: 1.8,
        }}
      >
        Este case descreve o escopo e as decisões técnicas
        conhecidos. Métricas, repositórios e demonstrações
        são adicionados somente quando disponíveis e
        autorizados para divulgação.
      </Typography>
    </Paper>
  );
}