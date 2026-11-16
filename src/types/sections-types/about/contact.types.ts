import type {
  ChangeEvent,
  FormEvent,
} from 'react';
import type {
  ContactField,
  ContactFieldErrors,
  ContactMessage,
} from '@/functions/contactValidation';
import type { ContactSubject } from '@/data/contactData';
import { portfolioData } from '@/data/portfolioData';
export type ContactDraft = Omit<
  ContactMessage,
  'subject'
> & {
  subject: ContactSubject | '';
};

export type ContactFeedback = {
  readonly severity: 'error';
  readonly message: string;
} | null;

export type ContactSocialLink =
  (typeof portfolioData.identity.links)[number];

export interface ContactIntroProps {
  readonly email: string;
  readonly socialLinks: readonly ContactSocialLink[];
}

export interface ContactDirectEmailProps {
  readonly email: string;
}

export interface ContactSocialLinksProps {
  readonly links: readonly ContactSocialLink[];
}

export interface ContactFormState {
  readonly form: ContactDraft;
  readonly website: string;
  readonly errors: ContactFieldErrors;
  readonly feedback: ContactFeedback;
  readonly isSending: boolean;
  readonly isSuccessOpen: boolean;
}

export interface ContactFormActions {
  readonly setField: (
    field: ContactField,
    value: string,
  ) => void;

  readonly validateField: (
    field: ContactField,
  ) => void;

  readonly setWebsite: (
    value: string,
  ) => void;

  readonly submitForm: (
    event: FormEvent<HTMLFormElement>,
  ) => void;

  readonly closeSuccess: () => void;
}

export interface ContactFormController
  extends ContactFormState,
    ContactFormActions {}

export interface ContactFormCardProps {
  readonly controller: ContactFormController;
}

export interface ContactFormFieldsProps {
  readonly controller: ContactFormController;
}

export interface ContactTextFieldProps {
  readonly name: ContactField;
  readonly label: string;
  readonly value: string;
  readonly error?: string;
  readonly disabled: boolean;
  readonly required?: boolean;
  readonly placeholder?: string;
  readonly autoComplete?: string;
  readonly type?: string;
  readonly multiline?: boolean;
  readonly minRows?: number;
  readonly maxLength?: number;
  readonly onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  readonly onBlur: () => void;
}

export interface ContactHoneypotProps {
  readonly value: string;
  readonly onChange: (value: string) => void;
}

export interface ContactSubmitButtonProps {
  readonly isSending: boolean;
}

export interface ContactSuccessDialogProps {
  readonly open: boolean;
  readonly onClose: () => void;
}