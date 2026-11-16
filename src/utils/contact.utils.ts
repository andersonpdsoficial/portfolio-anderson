const DEFAULT_CONTACT_ERROR =
  'Não foi possível enviar. Tente novamente.';

/**
 * Extrai a mensagem de erro retornada pelo Formspree.
 *
 * Aceita payload desconhecido sem utilizar `any`.
 */
export function extractFormspreeError(
  payload: unknown,
): string {
  if (
    typeof payload !== 'object' ||
    payload === null
  ) {
    return DEFAULT_CONTACT_ERROR;
  }

  if (
    'errors' in payload &&
    Array.isArray(payload.errors)
  ) {
    const firstError: unknown = payload.errors[0];

    if (
      typeof firstError === 'object' &&
      firstError !== null &&
      'message' in firstError &&
      typeof firstError.message === 'string'
    ) {
      return firstError.message;
    }
  }

  if (
    'message' in payload &&
    typeof payload.message === 'string'
  ) {
    return payload.message;
  }

  return DEFAULT_CONTACT_ERROR;
}

/**
 * Constrói a URL de envio para o Formspree.
 */
export function getFormspreeEndpoint(
  formId: string,
): string {
  const normalizedId = formId.trim();

  if (!/^[a-zA-Z0-9]+$/.test(normalizedId)) {
    throw new Error(
      'Identificador do formulário Formspree inválido.',
    );
  }

  return `https://formspree.io/f/${normalizedId}`;
}