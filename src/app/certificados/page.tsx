import type { Metadata } from 'next';

import { portfolioData } from '@/data/portfolioData';
import { CertificatesPageContent } from '@/components/certificates/CertificatesPageContent';

export const metadata: Metadata = {
  title: 'Cursos livres e certificados',
  description:
    'Formação complementar, cursos livres e certificados de Anderson Pereira, com imagens e links de validação.',
  alternates: {
    canonical: '/certificados',
  },
};

export default function CertificatesPage() {
  return <CertificatesPageContent courses={portfolioData.freeCourses} />;
}
