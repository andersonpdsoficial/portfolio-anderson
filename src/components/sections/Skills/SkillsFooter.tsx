import {
  Box,
  Stack,
  Typography,
} from '@mui/material';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import { Reveal } from '@/components/ui/Reveal';
import { skillsStyles } from '@/styles/sections-styles/skills.styles';
import { SKILLS_CONFIG } from '@/constants/skills.constants';

export function SkillsFooter() {
  return (
    <Reveal delay={0.15}>
      <Box sx={skillsStyles.sectionFooter}>
        <Stack
          direction={{
            xs: 'column',
            sm: 'row',
          }}
          alignItems={{
            xs: 'flex-start',
            sm: 'center',
          }}
          justifyContent="space-between"
          gap={2}
        >
          <Stack
            direction="row"
            alignItems="flex-start"
            spacing={1.5}
          >
            <AutoAwesomeRoundedIcon
              aria-hidden="true"
              sx={{
                fontSize: 21,
                color: 'primary.main',
                flexShrink: 0,
                mt: 0.3,
              }}
            />

            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
                lineHeight: 1.85,
                maxWidth: 820,
              }}
            >
              {SKILLS_CONFIG.footer}
            </Typography>
          </Stack>

          <Typography
            variant="caption"
            sx={{
              flexShrink: 0,
              fontWeight: 800,
              letterSpacing: '0.12em',
              color: 'primary.main',
            }}
          >
            LEARN · BUILD · EVOLVE
          </Typography>
        </Stack>
      </Box>
    </Reveal>
  );
}