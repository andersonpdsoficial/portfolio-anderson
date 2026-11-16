'use client';

import {
  useCallback,
  useRef,
  useState,
} from 'react';
import type { FormEvent } from 'react';
import {
  validateContactMessage,
  type ContactField,
  type ContactFieldErrors,
} from '@/functions/contactValidation';
import { CONTACT_ERRORS, EMPTY_CONTACT_FORM } from '@/functions/contactFunctions/contact.constants';
import { ContactDraft, ContactFeedback, ContactFormController } from '@/types/sections-types/about/contact.types';
import { ContactSubmissionError, submitContactForm } from '@/services/contact';

export function useContactForm(): ContactFormController {
  const [form, setForm] = useState<ContactDraft>(
    EMPTY_CONTACT_FORM,
  );

  const [website, setWebsite] = useState('');

  const [errors, setErrors] =
    useState<ContactFieldErrors>({});

  const [feedback, setFeedback] =
    useState<ContactFeedback>(null);

  const [isSending, setIsSending] = useState(false);

  const [isSuccessOpen, setIsSuccessOpen] =
    useState(false);

  const sendingRef = useRef(false);

  const setField = useCallback(
    (field: ContactField, value: string): void => {
      setForm((previous) => ({
        ...previous,
        [field]: value,
      }));

      setErrors((previous) => ({
        ...previous,
        [field]: undefined,
      }));

      setFeedback(null);
    },
    [],
  );

  const validateField = useCallback(
    (field: ContactField): void => {
      const result = validateContactMessage(form);

      setErrors((previous) => ({
        ...previous,
        [field]: result.success
          ? undefined
          : result.errors[field],
      }));
    },
    [form],
  );

  const closeSuccess = useCallback((): void => {
    setIsSuccessOpen(false);
  }, []);

  const resetForm = useCallback((): void => {
    setForm({ ...EMPTY_CONTACT_FORM });
    setWebsite('');
    setErrors({});
    setFeedback(null);
  }, []);

  const submitForm = useCallback(
    async (
      event: FormEvent<HTMLFormElement>,
    ): Promise<void> => {
      event.preventDefault();

      if (sendingRef.current) {
        return;
      }

      setFeedback(null);

      const result = validateContactMessage(form);

      if (!result.success) {
        setErrors(result.errors);

        setFeedback({
          severity: 'error',
          message: CONTACT_ERRORS.validation,
        });

        return;
      }

      if (website.trim()) {
        resetForm();
        setIsSuccessOpen(true);
        return;
      }

      const formId =
        process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID?.trim();

      if (
        !formId ||
        !/^[A-Za-z0-9]+$/.test(formId)
      ) {
        setFeedback({
          severity: 'error',
          message: CONTACT_ERRORS.configuration,
        });

        return;
      }

      sendingRef.current = true;
      setIsSending(true);
      setErrors({});

      try {
        await submitContactForm(
          formId,
          result.data,
        );

        resetForm();
        setIsSuccessOpen(true);
      } catch (error: unknown) {
        setFeedback({
          severity: 'error',
          message:
            error instanceof ContactSubmissionError
              ? error.message
              : CONTACT_ERRORS.connection,
        });
      } finally {
        sendingRef.current = false;
        setIsSending(false);
      }
    },
    [form, website, resetForm],
  );

  return {
    form,
    website,
    errors,
    feedback,
    isSending,
    isSuccessOpen,

    setField,
    validateField,
    setWebsite,
    submitForm,
    closeSuccess,
  };
}