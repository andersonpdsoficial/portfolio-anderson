
import {
    Box,
    Chip,
    Tooltip,
} from '@mui/material';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
import type { EducationItemProps } from '@/types/sections-types/about/experience.types';
import { experienceStyles } from '@/styles/sections-styles/experience.styles';
import { educationItemStyles } from '@/styles/sections-styles/education-item.styles';
import { isEducationCompleted } from '@/utils/education.utils';

type EducationItemStatusProps = Readonly<{
    status: EducationItemProps['education']['status'];
}>;

export function EducationItemStatus({
    status,
}: EducationItemStatusProps) {
    if (!status) {
        return null;
    }

    const completed = isEducationCompleted(
        String(status),
    );

    return (
        <Box>
            <Tooltip
                title={
                    completed
                        ? 'Formação concluída'
                        : 'Situação da formação'
                }
                arrow
            >
                <Chip
                    size="small"
                    label={status}
                    icon={
                        completed ? (
                            <CheckCircleRoundedIcon />
                        ) : (
                            <PendingOutlinedIcon />
                        )
                    }
                    sx={[
                        experienceStyles.educationStatus,
                        educationItemStyles.statusChip(completed),
                    ]}
                />
            </Tooltip>
        </Box>
    );
}
