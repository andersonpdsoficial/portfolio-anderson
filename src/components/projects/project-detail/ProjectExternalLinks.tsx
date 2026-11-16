import {
  Button,
  Divider,
  Stack,
  Typography,
} from '@mui/material';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import { ProjectExternalLinksProps } from '@/types/projectsTypes/projectDetail.types';
import { projectDetailStyles } from '../../../styles/projects/project-detailStyles/ProjectDetail.styles';

export function ProjectExternalLinks({
  links,
  accent,
}: ProjectExternalLinksProps) {
  if (links.length === 0) {
    return null;
  }

  return (
    <>
      <Divider />

      <Typography
        variant="overline"
        sx={{
          fontWeight: 800,
          color: 'primary.main',
          letterSpacing: '0.12em',
        }}
      >
        EXPLORAR
      </Typography>

      <Stack spacing={1.5}>
        {links.map(({ href, label }) => (
          <Button
            key={`${label}-${href}`}
            component="a"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            endIcon={<OpenInNewRoundedIcon />}
            sx={projectDetailStyles.externalButton(accent)}
          >
            {label}
          </Button>
        ))}
      </Stack>
    </>
  );
}