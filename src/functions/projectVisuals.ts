import type { Project } from '@/types/portfolio';

/** Identidade cromática compartilhada entre cards e cases. */
export const projectAccentColors: Readonly<Record<Project['accent'], string>> = {
  lime: '#9BD76A',
  green: '#63D3AC',
  blue: '#76B5F8',
  violet: '#AC9AFF',
  yellow: '#E8C266',
};

export function getProjectAccentColor(accent: Project['accent']): string {
  return projectAccentColors[accent];
}

export function formatProjectIndex(value: number): string {
  return String(value).padStart(2, '0');
}
