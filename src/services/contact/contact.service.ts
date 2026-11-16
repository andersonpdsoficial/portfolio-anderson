import type { ContactMessage } from '@/schemas/contactSchema';

import { ContactSubmissionError } from './contact.errors';
import { extractFormspreeError, getFormspreeEndpoint } from '@/utils/contact.utils';


const REQUEST_TIMEOUT_MS = 20_000;

/**
 * Envia uma mensagem de contato ao Formspree.
 *
 * - Envio HTTP via POST
 * - Payload JSON
 * - Timeout de 20 segundos
 * - Tratamento de erros HTTP e de rede
 * - Retorno Promise<void>
 *
 * Não utiliza async/await.
 */
export function submitContactForm(
  formId: string,
  message: ContactMessage,
): Promise<void> {
  let endpoint: string;

  try {
    endpoint = getFormspreeEndpoint(formId);
  } catch {
    return Promise.reject(
      new ContactSubmissionError(
        'O formulário de contato não está configurado corretamente.',
      ),
    );
  }

  const controller = new AbortController();

  const timeoutId = setTimeout(() => {
    controller.abort();
  }, REQUEST_TIMEOUT_MS);

  return fetch(endpoint, {
    method: 'POST',

    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },

    body: JSON.stringify({
      ...message,

      _subject: `Portfólio: ${message.subject}`,

      _replyto: message.email,
    }),

    signal: controller.signal,
  })
    .then((response) =>
      response
        .json()
        .catch((): null => null)
        .then((payload: unknown): void => {
          if (!response.ok) {
            throw new ContactSubmissionError(
              extractFormspreeError(payload),
            );
          }
        }),
    )
    .catch((error: unknown): never => {
      if (error instanceof ContactSubmissionError) {
        throw error;
      }

      if (
        controller.signal.aborted ||
        (error instanceof DOMException &&
          error.name === 'AbortError')
      ) {
        throw new ContactSubmissionError(
          'O envio demorou mais que o esperado. Verifique sua conexão e tente novamente.',
        );
      }

      throw new ContactSubmissionError(
        'Não foi possível conectar ao serviço de contato. Verifique sua internet e tente novamente.',
      );
    })
    .finally(() => {
      clearTimeout(timeoutId);
    });
}