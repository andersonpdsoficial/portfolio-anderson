'use client';

import Link from 'next/link';
import {
  Box,
  Button,
  Container,
} from '@mui/material';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { Reveal } from '@/components/ui/Reveal';
import { getProjectAccentColor } from '@/functions/projectVisuals';
import { ProjectDetailHeader } from './ProjectDetailHeader';
import { ProjectDetailSidebar } from './ProjectDetailSidebar';
import { ProjectDetailBody } from './ProjectDetailBody';
import { RelatedProjects } from './RelatedProjects';
import { projectDetailStyles } from '../../../styles/projects/project-detailStyles/ProjectDetail.styles';
import { ProjectDetailContentProps } from '@/types/projectsTypes/projectDetail.types';
import { getProjectDetailData } from '@/utils/projectDetail.utils';
import { ProjectDetailCover } from './ProjectDetailCover';
import { ProjectGallery } from '../project-gallery';

export function ProjectDetailContent({
  project,
  relatedProjects,
}: ProjectDetailContentProps) {
  const accent = getProjectAccentColor(project.accent);

  const { gallery, links } = getProjectDetailData(project);

  return (
    <Box
      component="main"
      id="conteudo"
      tabIndex={-1}
      sx={projectDetailStyles.main(accent)}
    >
      <Container
        maxWidth="lg"
        sx={{
          pt: { xs: 4, md: 6 },
        }}
      >
        <Button
          component={Link}
          href="/#projetos"
          startIcon={<ArrowBackRoundedIcon />}
          variant="text"
          sx={projectDetailStyles.backButton(accent)}
        >
          Voltar aos projetos
        </Button>

        <Reveal>
          <ProjectDetailHeader
            project={project}
            accent={accent}
          />
        </Reveal>

        <Reveal delay={0.08}>
          <ProjectDetailCover
            project={project}
            accent={accent}
          />
        </Reveal>

        <Box sx={projectDetailStyles.contentGrid}>
          <Box sx={projectDetailStyles.sidebar}>
            <Reveal>
              <ProjectDetailSidebar
                project={project}
                accent={accent}
                links={links}
              />
            </Reveal>
          </Box>

          <ProjectDetailBody
            project={project}
            accent={accent}
          />
        </Box>
      </Container>

      <ProjectGallery
        title={project.shortTitle}
        images={gallery}
      />

      <RelatedProjects
        projects={relatedProjects}
      />
    </Box>
  );
}