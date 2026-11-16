import {
    Box,
    Stack,
    Typography,
} from '@mui/material';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';
import type { EducationItemProps } from '@/types/sections-types/about/experience.types';
import { experienceStyles } from '@/styles/sections-styles/experience.styles';
import { educationItemStyles } from '@/styles/sections-styles/education-item.styles';

type EducationItemHeaderProps = Readonly<{
    education: EducationItemProps['education'];
}>;

export function EducationItemHeader({
    education,
}: EducationItemHeaderProps) {
    return (
        <Stack
            direction="row"
            alignItems="flex-start"
            spacing={1.5}
            sx={educationItemStyles.header}
        >
            <Box sx={educationItemStyles.titleContainer}>
                <Typography
                    component="h4"
                    sx={[
                        experienceStyles.educationTitle,
                        educationItemStyles.title,
                    ]}
                >
                    {education.title}
                </Typography>

                {education.type && (
                    <Stack
                        direction="row"
                        alignItems="center"
                        spacing={0.65}
                        sx={educationItemStyles.typeContainer}
                    >
                        <WorkspacePremiumRoundedIcon
                            aria-hidden="true"
                            sx={educationItemStyles.typeIcon}
                        />
                        <Typography
                            variant="body2"
                            sx={educationItemStyles.typeText}
                        >
                            {education.type}
                        </Typography>
                    </Stack>
                )}
            </Box>
        </Stack>
    );
}
