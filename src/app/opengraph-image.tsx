import { ImageResponse } from 'next/og';
import { portfolioData } from '@/data/portfolioData';

export const alt = 'Anderson Pereira — Engenheiro de Software Full Stack';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', padding: 82, background: '#090d13', color: '#ecf3ef', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden' }}>
      <div style={{ width: 550, height: 550, borderRadius: 550, position: 'absolute', right: -140, top: -200, background: 'radial-gradient(circle, rgba(184,247,128,.19) 0%, transparent 70%)' }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 17, fontSize: 28, fontWeight: 700, color: '#b8f780' }}>
        <div style={{ display: 'flex', border: '2px solid #b8f780', borderRadius: 10, width: 60, height: 60, alignItems: 'center', justifyContent: 'center' }}>AP</div>
        ANDERSON.PEREIRA
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div style={{ display: 'flex', fontSize: 22, color: '#b8f780', letterSpacing: 3 }}>SOFTWARE ENGINEERING / FULL STACK</div>
        <div style={{ display: 'flex', fontSize: 74, fontWeight: 800, lineHeight: 1.05, maxWidth: 980 }}>{portfolioData.identity.headline}</div>
        <div style={{ display: 'flex', fontSize: 22, color: '#a2b1ad' }}>Next.js · TypeScript · Django · Python · Arquitetura</div>
      </div>
      <div style={{ display: 'flex', borderTop: '1px solid #26332c', paddingTop: 22, fontSize: 20, color: '#93a99d' }}>PORTO VELHO · BRASIL</div>
    </div>,
    size,
  );
}
