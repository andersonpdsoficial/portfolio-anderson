import { Box } from '@mui/material';
import { Reveal } from '@/components/ui/Reveal';
import { SkillsGridProps } from '@/types/sections-types/about/skills.types';
import { skillsStyles } from '@/styles/sections-styles/skills.styles';
import { FALLBACK_SKILL_VISUAL, SKILL_VISUALS, SKILLS_CONFIG } from '@/constants/skills.constants';
import { SkillCard } from './SkillCard';


export function SkillsGrid({
  groups,
}: SkillsGridProps) {
  return (
    <Box sx={skillsStyles.grid}>
      {groups.map((group, index) => {
        const visual =
          SKILL_VISUALS[group.id] ??
          FALLBACK_SKILL_VISUAL;

        const delay = Math.min(
          index * SKILLS_CONFIG.revealStep,
          SKILLS_CONFIG.maxRevealDelay,
        );

        return (
          <Reveal
            key={group.id}
            delay={delay}
          >
            <SkillCard
              group={group}
              visual={visual}
            />
          </Reveal>
        );
      })}
    </Box>
  );
}