import {
  Chip,
  Stack,
} from '@mui/material';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import { aboutStyles } from '@/styles/sections-styles/about.styles';


export function AboutValues() {
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      gap={1.5}
      sx={{ pt: 1 }}
    >
      <Chip
        icon={<AutoAwesomeRoundedIcon />}
        label="Tecnologia com propósito"
        variant="outlined"
        sx={aboutStyles.valueChip}
      />

      <Chip
        icon={<GroupsOutlinedIcon />}
        label="Colaboração e visão de produto"
        variant="outlined"
        sx={aboutStyles.valueChip}
      />
    </Stack>
  );
}