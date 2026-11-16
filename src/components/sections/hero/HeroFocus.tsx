import { heroStyles } from '@/styles/sections-styles/hero.styles';
import { HeroFocusProps } from '@/types/sections-types/about/hero.types';
import {
  Chip,
  Stack,
} from '@mui/material';

export function HeroFocus({
  focus,
}: HeroFocusProps) {
  if (focus.length === 0) {
    return null;
  }

  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      useFlexGap
      gap={1}
      sx={{ pt: 1 }}
      aria-label="Áreas de atuação"
    >
      {focus.map((item, index) => (
        <Chip
          key={`${item}-${index}`}
          label={item}
          size="small"
          variant="outlined"
          sx={heroStyles.focusChip}
        />
      ))}
    </Stack>
  );
}