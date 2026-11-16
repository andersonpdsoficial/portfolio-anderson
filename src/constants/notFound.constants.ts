export const NOT_FOUND_CONFIG = {
  contentId: 'conteudo',
  headingId: 'not-found-title',
  badge: '404 / ROTA NÃO ENCONTRADA',
  title: 'Esta página não está',
  titleHighlight: 'no mapa.',
  description:
    'O endereço solicitado não existe ou foi alterado. Mas não se preocupe: você pode voltar ao início e continuar explorando meus projetos.',
  technicalCode: 'HTTP 404 · NOT FOUND',
  technicalDescription:
    'Nenhuma página corresponde à rota solicitada.',
  signature: 'ANDERSON.DEV / ERROR 404',
} as const;

export const NOT_FOUND_LINKS = {
  home: '/',
  projects: '/#projetos',
} as const;