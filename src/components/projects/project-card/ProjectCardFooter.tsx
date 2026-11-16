import {
  Box,
  Stack,
  Typography,
} from '@mui/material';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import type { ProjectCardFooterProps } from '../../../types/projectsTypes/projectCard.types';
import { projectCardStyles } from '../../../styles/projects/project-cardStyles/projectCard.styles';

export function ProjectCardFooter({
  accentColor,
}: ProjectCardFooterProps) {
  return (
    <Box sx={projectCardStyles.footer}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
        >
          <CodeRoundedIcon
            sx={{
              fontSize: 18,
              color: accentColor,
            }}
          />
          <Typography
            data-project-cta
            variant="body2"
            sx={projectCardStyles.footerCta}
          >
            Explorar case
          </Typography>
        </Stack>
        <ArrowOutwardRoundedIcon
          data-project-arrow
          aria-hidden="true"
          sx={projectCardStyles.footerArrow(accentColor)}
        />
      </Stack>
    </Box>
  );
}