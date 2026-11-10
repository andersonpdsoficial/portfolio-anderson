/** seção de contato e opções do formulário. */
export const contactData = {
  recipientEmail: 'andersonengsoft@gmail.com',
  label: '05 / CONEXÕES',
  eyebrow: 'CONTATO PROFISSIONAL',
  headline: 'Vamos conversar sobre',
  headlineAccent: 'a próxima oportunidade.',
  description:
    'Está recrutando, montando um time de engenharia ou pensando em um produto digital? Conte um pouco sobre sua proposta. Sua mensagem chegará diretamente ao meu e-mail.',
  formTitle: 'Envie uma mensagem',
  formDescription: 'Preencha os campos abaixo. Responderei pelo e-mail informado.',
} as const;

export const contactSubjects = [
  'Oportunidade profissional',
  'Proposta de projeto',
  'Parceria / Networking',
  'Outro assunto',
] as const;

export type ContactSubject = (typeof contactSubjects)[number];
