import {
  Box,
  Chip,
} from '@mui/material';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import { projectDetailStyles } from '../../../styles/projects/project-detailStyles/ProjectDetail.styles';
import { ProjectFeaturesProps } from '@/types/projectsTypes/projectDetail.types';

export function ProjectFeatures({
  features,
  accent,
}: ProjectFeaturesProps) {
  return (
    <Box
      component="ul"
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 1,
        listStyle: 'none',
        p: 0,
        m: 0,
      }}
    >
      {features.map((feature, index) => (
        <Box
          component="li"
          key={`${feature}-${index}`}
        >
          <Chip
            icon={<CheckCircleOutlineRoundedIcon />}
            label={feature}
            variant="outlined"
            sx={projectDetailStyles.featureChip(accent)}
          />
        </Box>
      ))}
    </Box>
  );
}