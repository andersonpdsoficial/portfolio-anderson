import {
  Box,
  Stack,
  Typography,
} from '@mui/material';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import { SkillCardHeaderProps } from '@/types/sections-types/about/skills.types';
import { skillsStyles } from '@/styles/sections-styles/skills.styles';

export function SkillCardHeader({
  visual,
}: SkillCardHeaderProps) {
  const IconComponent = visual.icon;

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="flex-start"
      spacing={2}
      sx={{ mb: 3 }}
    >
      <Box
        className="skill-icon"
        sx={skillsStyles.cardIcon(visual.accent)}
      >
        <IconComponent
          sx={{
            fontSize: {
              xs: 29,
              sm: 32,
            },
          }}
        />
      </Box>

      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
      >
        <Typography
          variant="overline"
          sx={{
            fontWeight: 800,
            color: 'text.disabled',
            letterSpacing: '0.12em',
          }}
        >
          {visual.number}
        </Typography>

        <ArrowOutwardRoundedIcon
          className="skill-arrow"
          aria-hidden="true"
          sx={skillsStyles.cardArrow}
        />
      </Stack>
    </Stack>
  );
}