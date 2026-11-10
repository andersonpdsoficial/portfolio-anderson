
import { z } from 'zod';
import {
    contactSubjects,
    type ContactSubject,
} from '@/data/contactData';

function normalizeString(value: unknown): string {
    return typeof value === 'string'
        ? value.trim()
        : '';
}

const normalizedString = z.preprocess(
    normalizeString,
    z.string(),
);

function isSingleLine(value: string): boolean {
    return Array.from(value).every(
        (character) => character.charCodeAt(0) >= 32,
    );
}

export const contactMessageSchema = z.object({
    name: normalizedString.pipe(
        z
            .string()
            .min(2, {
                error: 'Informe um nome válido (2 a 100 caracteres).',
            })
            .max(100, {
                error: 'O nome deve ter no máximo 100 caracteres.',
            })
            .refine(isSingleLine, {
                error: 'O nome contém caracteres inválidos.',
            }),
    ),

    email: normalizedString.pipe(
        z.email({
            error: 'Informe um endereço de e-mail válido.',
        }).max(254, {
            error: 'O e-mail deve ter no máximo 254 caracteres.',
        }),
    ),

    company: normalizedString.pipe(
        z
            .string()
            .max(120, {
                error: 'A empresa deve ter no máximo 120 caracteres.',
            })
            .refine(isSingleLine, {
                error: 'Use até 120 caracteres, sem quebras de linha.',
            }),
    ),

    subject: normalizedString
        .refine(
            (value) =>
                contactSubjects.some(
                    (option) => option === value,
                ),
            {
                error: 'Selecione o assunto do contato.',
            },
        )
        .transform(
            (value): ContactSubject =>
                value as ContactSubject,
        ),

    message: normalizedString.pipe(
        z
            .string()
            .min(20, {
                error: 'Escreva uma mensagem com pelo menos 20 caracteres.',
            })
            .max(3000, {
                error: 'A mensagem deve ter no máximo 3.000 caracteres.',
            }),
    ),
});


export type ContactMessage = z.infer<
    typeof contactMessageSchema
>;

export type ContactMessageInput = z.input<
    typeof contactMessageSchema
>;
