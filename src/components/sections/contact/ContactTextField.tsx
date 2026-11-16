import { contactStyles } from '@/styles/sections-styles/contact.styles';
import { ContactTextFieldProps } from '@/types/sections-types/about/contact.types';
import { TextField } from '@mui/material';


export function ContactTextField({
  name,
  label,
  value,
  error,
  disabled,
  required = false,
  placeholder,
  autoComplete,
  type = 'text',
  multiline = false,
  minRows,
  maxLength,
  onChange,
  onBlur,
}: ContactTextFieldProps) {
  return (
    <TextField
      name={name}
      label={label}
      placeholder={placeholder}
      type={type}
      value={value}
      required={required}
      fullWidth
      size="small"
      autoComplete={autoComplete}
      multiline={multiline}
      minRows={minRows}
      onChange={onChange}
      onBlur={onBlur}
      inputProps={{
        maxLength,
      }}
      error={Boolean(error)}
      helperText={error}
      disabled={disabled}
      sx={contactStyles.field}
    />
  );
}