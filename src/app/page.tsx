import { About } from '@/components/sections/about';
import { Contact } from '@/components/sections/contact';
import { ExperienceTimeline } from '@/components/sections/ExperienceTimeline';
import { FeaturedProjects } from '@/components/sections/FeaturedProjects';
import { Hero } from '@/components/sections/hero';
import { Skills } from '@/components/sections/Skills';
import { homePageStyles } from '@/styles/page.styles';
import Box from '@mui/material/Box';



// ============================================================
// HOME PAGE — NEXT.JS APP ROUTER
// ============================================================

export default function HomePage() {
  return (
    <Box
      component="main"
      id="conteudo"
      tabIndex={-1}
      aria-label="Conteúdo principal do portfólio"
      sx={homePageStyles.main}
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