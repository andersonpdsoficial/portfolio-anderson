import {
  Button,
  CircularProgress,
} from '@mui/material';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { ContactSubmitButtonProps } from '@/types/sections-types/about/contact.types';
import { contactStyles } from '@/styles/sections-styles/contact.styles';

export function ContactSubmitButton({
  isSending,
}: ContactSubmitButtonProps) {
  return (
    <Button
      type="submit"
      variant="contained"
      color="primary"
      size="large"
      fullWidth
      disabled={isSending}
      startIcon={
        isSending ? (
          <CircularProgress
            size={18}
            color="inherit"
          />
        ) : (
          <SendRoundedIcon fontSize="small" />
        )
      }
      endIcon={
        !isSending ? (
          <ArrowOutwardRoundedIcon fontSize="small" />
        ) : undefined
      }
      sx={contactStyles.submitButton}
    >
      {isSending
        ? 'Enviando mensagem...'
        : 'Enviar mensagem'}
    </Button>
  );
}