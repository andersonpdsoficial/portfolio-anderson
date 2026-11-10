
import Box from '@mui/material/Box';

import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { FeaturedProjects } from '@/components/sections/FeaturedProjects';
import { ExperienceTimeline } from '@/components/sections/ExperienceTimeline';
import { Skills } from '@/components/sections/Skills';
import { Contact } from '@/components/sections/Contact';

// ============================================================
// PÁGINA INICIAL — NEXT.JS APP ROUTER + MATERIAL UI V5
// ============================================================

export default function HomePage() {
  return (
    <Box
      component="main"
      id="conteudo"
      tabIndex={-1}
      aria-label="Conteúdo principal do portfólio"
      sx={{
        position: 'relative',
        display: 'block',
        width: '100%',
        minWidth: 0,
        minHeight: '100vh',
        overflowX: 'clip',
        bgcolor: 'background.default',

        // Compensa a altura do Header fixo/sticky
        // quando o usuário navega pelas âncoras.
        '& > section[id]': {
          scrollMarginTop: {
            xs: '72px',
            sm: '78px',
            md: '86px',
          },
        },
      }}
    >
      {/* 01 — APRESENTAÇÃO */}
      <Hero />

      {/* 02 — SOBRE MIM */}
      <About />

      {/* 03 — PROJETOS EM DESTAQUE */}
      <FeaturedProjects />

      {/* 04 — EXPERIÊNCIA E FORMAÇÃO */}
      <ExperienceTimeline />

      {/* 05 — COMPETÊNCIAS TÉCNICAS */}
      <Skills />

      {/* 06 — CONTATO */}
      <Contact />
    </Box>
  );
}
