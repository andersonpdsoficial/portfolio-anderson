import {
  Box,
  Typography,
} from '@mui/material';
import { Reveal } from '@/components/ui/Reveal';
import { ProjectEngineeringDecisions } from './ProjectEngineeringDecisions';
import { ProjectFeatures } from './ProjectFeatures';
import { ProjectDisclosure } from './ProjectDisclosure';
import { projectDetailStyles } from '../../../styles/projects/project-detailStyles/ProjectDetail.styles';
import { ProjectDetailBodyProps } from '@/types/projectsTypes/projectDetail.types';
import { ProjectDetailSection } from './projectDetailSection';

export function ProjectDetailBody({
  project,
  accent,
}: ProjectDetailBodyProps) {
  return (
    <Box sx={{ minWidth: 0 }}>
      <Reveal>
        <ProjectDetailSection
          index="01"
          eyebrow="CONTEXTO"
          title="Visão do projeto"
        >
          <Typography sx={projectDetailStyles.detailText}>
            {project.description}
          </Typography>
        </ProjectDetailSection>
      </Reveal>

      <Reveal>
        <ProjectDetailSection
          index="02"
          eyebrow="PROBLEMA"
          title="O desafio"
        >
          <Typography sx={projectDetailStyles.detailText}>
            {project.challenge}
          </Typography>
        </ProjectDetailSection>
      </Reveal>

      <Reveal>
        <ProjectDetailSection
          index="03"
          eyebrow="ABORDAGEM"
          title="Solução e abordagem"
        >
          <Typography sx={projectDetailStyles.detailText}>
            {project.solution}
          </Typography>
        </ProjectDetailSection>
      </Reveal>

      <Reveal>
        <ProjectDetailSection
          index="04"
          eyebrow="DECISÕES TÉCNICAS"
          title="O que orienta a arquitetura"
        >
          <ProjectEngineeringDecisions
            decisions={project.engineeringDecisions}
            accent={accent}
          />
        </ProjectDetailSection>
      </Reveal>

      <Reveal>
        <ProjectDetailSection
          index="05"
          eyebrow="ESCOPO"
          title="Áreas do produto"
        >
          <ProjectFeatures
            features={project.features}
            accent={accent}
          />
        </ProjectDetailSection>
      </Reveal>

      <ProjectDisclosure />
    </Box>
  );
}