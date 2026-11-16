
import {
    Stack,
    Typography,
} from '@mui/material';

import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import ScheduleRoundedIcon from '@mui/icons-material/ScheduleRounded';
import type { EducationItemProps } from '@/types/sections-types/about/experience.types';
import { educationItemStyles } from '@/styles/sections-styles/education-item.styles';
type EducationItemMetadataProps = Readonly<{
    education: EducationItemProps['education'];
}>;

export function EducationItemMetadata({
    education,
}: EducationItemMetadataProps) {
    const hasPeriod = Boolean(education.date_inicio_fim);
    const hasHours = Boolean(education.totalHours);

    if (!hasPeriod && !hasHours) {
        return null;
    }

    return (
        <Stack
            direction="row"
            alignItems="center"
            flexWrap="wrap"
            useFlexGap
            sx={educationItemStyles.metadata}
        >
            {hasPeriod && (
                <Stack
                    direction="row"
                    alignItems="center"
                    spacing={0.7}
                >
                    <CalendarMonthRoundedIcon
                        aria-hidden="true"
                        sx={educationItemStyles.metadataIcon}
                    />

                    <Typography
                        variant="caption"
                        sx={educationItemStyles.metadataText}
                    >
                        {education.date_inicio_fim}
                    </Typography>
                </Stack>
            )}

            {hasHours && (
                <Stack
                    direction="row"
                    alignItems="center"
                    spacing={0.7}
                >
                    <ScheduleRoundedIcon
                        aria-hidden="true"
                        sx={educationItemStyles.metadataIcon}
                    />
                    <Typography
                        variant="caption"
                        sx={educationItemStyles.metadataText}
                    >
                        {education.totalHours}
                    </Typography>
                </Stack>
            )}
        </Stack>
    );
}
