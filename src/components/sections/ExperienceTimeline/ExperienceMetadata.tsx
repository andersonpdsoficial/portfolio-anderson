import {
  Stack,
  Typography,
} from '@mui/material';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import { ExperienceMetadataProps } from '@/types/sections-types/about/experience.types';

export function ExperienceMetadata({
  period,
  location,
}: ExperienceMetadataProps) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      flexWrap="wrap"
      useFlexGap
      gap={1.5}
    >
      <Stack
        direction="row"
        alignItems="center"
        spacing={0.8}
        sx={{ color: 'primary.main' }}
      >
        <CalendarMonthRoundedIcon
          sx={{ fontSize: 17 }}
        />

        <Typography
          variant="caption"
          sx={{
            fontWeight: 800,
            letterSpacing: '0.015em',
            color: 'inherit',
          }}
        >
          {period}
        </Typography>
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        spacing={0.6}
      >
        <PlaceOutlinedIcon
          sx={{
            fontSize: 17,
            color: 'text.secondary',
          }}
        />

        <Typography
          variant="caption"
          sx={{ color: 'text.secondary' }}
        >
          {location}
        </Typography>
      </Stack>
    </Stack>
  );
}