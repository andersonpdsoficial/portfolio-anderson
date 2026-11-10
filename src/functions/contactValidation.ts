
import {
  contactMessageSchema,
  type ContactMessage,
} from '@/schemas/contactSchema';


export type ContactField = keyof ContactMessage;

export type ContactFieldErrors = Partial<
  Record<ContactField, string>
>;

export type ContactValidationResult =
  | {
    success: true;
    data: ContactMessage;
  }
  | {
    success: false;
    errors: ContactFieldErrors;
  };

const contactFields: readonly ContactField[] = [
  'name',
  'email',
  'company',
  'subject',
  'message',
];

function isContactField(
  value: unknown,
): value is ContactField {
  return (
    typeof value === 'string' &&
    contactFields.some((field) => field === value)
  );
}

export function validateContactMessage(
  value: unknown,
): ContactValidationResult {
  if (
    typeof value !== 'object' ||
    value === null ||
    Array.isArray(value)
  ) {
    return {
      success: false,
      errors: {
        name: 'Informe seus dados para entrar em contato.',
      },
    };
  }

  const result = contactMessageSchema.safeParse(value);


  if (result.success) {
    return {
      success: true,
      data: result.data,
    };
  }

  const errors: ContactFieldErrors = {};

  for (const issue of result.error.issues) {
    const field = issue.path[0];

    if (isContactField(field)) {
      errors[field] ??= issue.message;
    }
  }

  return {
    success: false,
    errors,
  };
}
export { ContactMessage };