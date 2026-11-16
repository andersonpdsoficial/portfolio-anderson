import { skillsStyles } from '@/styles/sections-styles/skills.styles';
import { SkillCardFooterProps } from '@/types/sections-types/about/skills.types';
import {
  Box,
  Stack,
  Typography,
} from '@mui/material';

export function SkillCardFooter({
  total,
  accent,
}: SkillCardFooterProps) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={skillsStyles.cardFooter}
    >
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
      >
        <Box
          aria-hidden="true"
          sx={skillsStyles.footerDot(accent)}
        />

        <Typography
          variant="caption"
          sx={{
            color: 'text.secondary',
            fontWeight: 700,
            letterSpacing: '0.025em',
          }}
        >
          {total} {total === 1 ? 'competência' : 'competências'}
        </Typography>
      </Stack>

      <Typography
        variant="caption"
        sx={skillsStyles.footerAccentText(accent)}
      >
        TECH STACK
      </Typography>
    </Stack>
  );
}