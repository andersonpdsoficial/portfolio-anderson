const COMPLETED_STATUSES = new Set([
    'concluído',
    'concluída',
    'concluido',
    'concluida',
    'finalizado',
    'finalizada',
    'completo',
    'completa',
]);

export function isEducationCompleted(
    status: string | null | undefined,
): boolean {
    const normalized = String(status ?? '')
        .trim()
        .toLocaleLowerCase('pt-BR');

    return COMPLETED_STATUSES.has(normalized);
}