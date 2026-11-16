import {
  Box,
  Paper,
  Typography,
} from '@mui/material';
import { SkillCardHeader } from './SkillCardHeader';
import { SkillTags } from './SkillTags';
import { SkillCardFooter } from './SkillCardFooter';
import { SkillCardProps } from '@/types/sections-types/about/skills.types';
import { skillsStyles } from '@/styles/sections-styles/skills.styles';

export function SkillCard({
  group,
  visual,
}: SkillCardProps) {
  const headingId = `skill-group-${group.id}`;

  return (
    <Paper
      component="article"
      elevation={0}
      aria-labelledby={headingId}
      sx={skillsStyles.card(visual.accent)}
    >
      <SkillCardHeader visual={visual} />

      <Typography
        id={headingId}
        component="h3"
        sx={skillsStyles.cardTitle}
      >
        {group.label}
      </Typography>

      <Typography
        variant="body2"
        sx={skillsStyles.cardDescription}
      >
        {group.description}
      </Typography>

      <Box
        aria-hidden="true"
        sx={skillsStyles.cardDivider(visual.accent)}
      />

      <SkillTags
        skills={group.skills}
        accent={visual.accent}
        groupLabel={group.label}
      />

      <SkillCardFooter
        total={group.skills.length}
        accent={visual.accent}
      />
    </Paper>
  );
}