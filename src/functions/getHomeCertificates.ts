import type { FreeCourse } from '@/data/portfolioData';

/** Quantidade máxima exibida no painel da página inicial. */
export const HOME_CERTIFICATE_LIMIT = 9;

/** Obtém apenas os primeiros certificados, sem alterar a lista original. */
export function getHomeCertificates(
  courses: readonly FreeCourse[],
): readonly FreeCourse[] {
  return courses.slice(0, HOME_CERTIFICATE_LIMIT);
}
