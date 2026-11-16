import {
  Box,
  Paper,
  Typography,
} from '@mui/material';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import { AboutPhotoHeader } from './AboutPhotoHeader';
import { AboutMeetingImage } from './AboutMeetingImage';
import { AboutProfileHighlight } from './AboutProfileHighlight';
import { AboutPhotoCardProps } from '@/types/sections-types/about/about.types';
import { aboutStyles } from '@/styles/sections-styles/about.styles';


export function AboutPhotoCard({
  meetingImage,
  profileImage,
}: AboutPhotoCardProps) {
  return (
    <Box sx={aboutStyles.photoContainer}>
      <Box
        aria-hidden="true"
        sx={aboutStyles.photoGlow}
      />

      <Paper
        component="figure"
        elevation={0}
        sx={aboutStyles.photoPaper}
      >
        <AboutPhotoHeader />

        <AboutMeetingImage
          src={meetingImage}
        />

        <AboutProfileHighlight
          src={profileImage}
        />
      </Paper>

      <Box
        aria-hidden="true"
        sx={aboutStyles.floatingLabel}
      >
        <Typography
          variant="caption"
          sx={{
            fontWeight: 800,
            letterSpacing: '0.09em',
            color: 'text.primary',
          }}
        >
          BUILD TOGETHER
        </Typography>

        <ArrowOutwardRoundedIcon
          sx={{
            fontSize: 18,
            color: 'primary.main',
          }}
        />
      </Box>
    </Box>
  );
}