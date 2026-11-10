import type { ContactMessage } from '@/schemas/contactSchema';

export class ContactSubmissionError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ContactSubmissionError';
  }
}

function extractFormspreeError(payload: unknown): string {
  const fallback = 'Não foi possível enviar. Tente novamente.';
  if (typeof payload !== 'object' || payload === null) return fallback;
  if ('errors' in payload && Array.isArray(payload.errors)) {
    const first: unknown = payload.errors[0];
    if (typeof first === 'object' && first !== null &&
        'message' in first && typeof first.message === 'string') {
      return first.message;
    }
  }
  if ('message' in payload && typeof payload.message === 'string') {
    return payload.message;
  }
  return fallback;
}

/** Envio tipado com tratamento explícito de erro, sem usar async/await. */
export function submitContactForm(
  formId: string,
  message: ContactMessage,
): Promise<void> {
  return fetch(`https://formspree.io/f/${formId}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      ...message,
      _subject: `Portfólio: ${message.subject}`,
      _replyto: message.email,
    }),
    signal: AbortSignal.timeout(20000),
  }).then((response) =>
    response.json().catch(() => null).then((payload: unknown) => {
      if (!response.ok) {
        throw new ContactSubmissionError(extractFormspreeError(payload));
      }
    }),
  );
}
