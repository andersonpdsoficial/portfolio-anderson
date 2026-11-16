import { ContactDraft } from "@/types/sections-types/about/contact.types";

export const SUCCESS_POPUP_DURATION = 6500;

export const EMPTY_CONTACT_FORM: ContactDraft = {
  name: '',
  email: '',
  company: '',
  subject: '',
  message: '',
};

export const CONTACT_BENEFITS = [
  'Recrutamento e vagas',
  'Projetos e colaboração',
  'Conversas sobre tecnologia',
] as const;

export const CONTACT_FIELD_LIMITS = {
  name: 100,
  email: 254,
  company: 120,
  message: 3000,
} as const;

export const CONTACT_ERRORS = {
  validation:
    'Confira os campos sinalizados antes de enviar.',

  configuration:
    'O contato está em configuração. Use o e-mail direto abaixo.',

  connection:
    'Falha de conexão no envio. Tente novamente ou escreva para o e-mail direto.',
} as const;