
'use client';

import {
  Box,
  Stack,
} from '@mui/material';
import type { EducationItemProps } from '@/types/sections-types/about/experience.types';
import { experienceStyles } from '@/styles/sections-styles/experience.styles';
import { educationItemStyles } from '@/styles/sections-styles/education-item.styles';
import { EducationItemHeader } from './EducationItemHeader';
import { EducationItemMetadata } from './EducationItemMetadata';
import { EducationItemStatus } from './EducationItemStatus';


export function EducationItem({
  education,
}: EducationItemProps) {
  return (
    <Box
      sx={[
        experienceStyles.educationItem,
        educationItemStyles.card,
      ]}
    >
      {/* DETALHE DECORATIVO */}

      <Box
        aria-hidden="true"
        sx={educationItemStyles.topAccent}
      />

      <Stack spacing={2}>
        {/* FORMAÇÃO E TIPO */}

        <EducationItemHeader
          education={education}
        />

        {/* PERÍODO E CARGA HORÁRIA */}

        <EducationItemMetadata
          education={education}
        />

        {/* STATUS DA FORMAÇÃO */}

        <EducationItemStatus
          status={education.status}
        />
      </Stack>
    </Box>
  );
}

export default EducationItem;
