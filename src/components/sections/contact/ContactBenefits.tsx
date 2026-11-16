import {
  Stack,
  Typography,
} from '@mui/material';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import { CONTACT_BENEFITS } from '@/functions/contactFunctions/contact.constants';

export function ContactBenefits() {
  return (
    <Stack spacing={1.3} sx={{ pt: 0.5 }}>
      {CONTACT_BENEFITS.map((benefit) => (
        <Stack
          key={benefit}
          direction="row"
          spacing={1.3}
          alignItems="center"
        >
          <CheckCircleOutlineRoundedIcon
            color="primary"
            sx={{ fontSize: 19 }}
          />

          <Typography
            variant="body2"
            sx={{
              fontWeight: 600,
              color: 'text.secondary',
            }}
          >
            {benefit}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
}