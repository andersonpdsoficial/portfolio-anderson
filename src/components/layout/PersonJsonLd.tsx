
import {
  getPersonStructuredData,
  serializeJsonLd,
} from '@/config/seo/structuredData';

export function PersonJsonLd() {
  const structuredData = getPersonStructuredData();

  const jsonLd = serializeJsonLd(structuredData);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: jsonLd,
      }}
    />
  );
}
