import {
  Stack,
  Typography,
} from '@mui/material';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import { LightboxNavigation } from './LightboxNavigation';
import { LightboxFooterProps } from '@/types/projectsTypes/gallery';


export function LightboxFooter({
  image,
  showNavigation,
  onPrevious,
  onNext,
}: LightboxFooterProps) {
  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      alignItems={{
        xs: 'stretch',
        sm: 'center',
      }}
      justifyContent="space-between"
      gap={2}
      sx={{
        px: { xs: 2, sm: 3 },
        py: 2.5,
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Stack
        direction="row"
        spacing={1}
        alignItems="flex-start"
        sx={{
          minWidth: 0,
          maxWidth: 720,
        }}
      >
        <CollectionsOutlinedIcon
          sx={{
            color: 'primary.main',
            fontSize: 20,
            flexShrink: 0,
            mt: 0.2,
          }}
        />

        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            lineHeight: 1.7,
            overflowWrap: 'anywhere',
          }}
        >
          {image.caption || image.alt}
        </Typography>
      </Stack>

      {showNavigation && (
        <LightboxNavigation
          onPrevious={onPrevious}
          onNext={onNext}
        />
      )}
    </Stack>
  );
}