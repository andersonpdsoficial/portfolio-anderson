import {
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { projectDetailStyles } from '../../../styles/projects/project-detailStyles/ProjectDetail.styles';
import { ProjectEngineeringDecisionsProps } from '@/types/projectsTypes/projectDetail.types';

export function ProjectEngineeringDecisions({
  decisions,
  accent,
}: ProjectEngineeringDecisionsProps) {
  return (
    <Stack
      component="ol"
      spacing={1.5}
      sx={{
        listStyle: 'none',
        p: 0,
        m: 0,
      }}
    >
      {decisions.map((decision, index) => (
        <Paper
          component="li"
          elevation={0}
          key={`${index}-${decision}`}
          sx={projectDetailStyles.decisionCard(accent)}
        >
          <Typography
            variant="caption"
            sx={{
              fontWeight: 900,
              color: 'primary.main',
              pt: 0.3,
            }}
          >
            {String(index + 1).padStart(2, '0')}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              lineHeight: 1.8,
              overflowWrap: 'anywhere',
            }}
          >
            {decision}
          </Typography>
        </Paper>
      ))}
    </Stack>
  );
}