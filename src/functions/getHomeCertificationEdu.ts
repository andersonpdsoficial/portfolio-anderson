import type { CursoEdu } from '@/data/portfolioData';

/** Quantidade máxima exibida no painel da página inicial. */
export const HOME_CERTIFICATE_LIMIT_EDU = 3;

/** Obtém apenas os primeiros certificados, sem alterar a lista original. */
export function getHomeCertificatesEdu(
  education: readonly CursoEdu[],
): readonly CursoEdu[] {
  return education.slice(0, HOME_CERTIFICATE_LIMIT_EDU);
}
