import { Box, Chip, Container, Stack, Typography } from '@mui/material';

import { CopyWriteOneData } from '../types';
import { CopyWriteItem } from './copy-writes-item';

export type CopyWriteOneProps = {
  data: CopyWriteOneData;
  editMode?: boolean;
};

export default function CopyWriteOne({ data, editMode }: CopyWriteOneProps) {
  const { title, description, config } = data;

  return (
    <Box sx={{ pt: 11, pb: { xs: 6, md: 11 }, bgcolor: 'common.neutral' }}>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Chip label="Privacy Policy" />
        </Box>

        <Stack spacing={2.5} alignItems="center" textAlign="center">
          <Typography variant="h2" fontWeight={700} color={title.color} letterSpacing="-0.02em">
            {title.text}
          </Typography>

          <Typography variant="body1" fontSize={20} color={description.color} maxWidth={920}>
            {description.text}
          </Typography>
        </Stack>

        <Box sx={{ mt: 8 }}>
          <Stack spacing={4}>
            {(config.items || []).map((item, i) => (
              <CopyWriteItem
                key={i}
                data={item}
                titleColor={config.titleTextColor}
                descriptionColor={config.descriptionTextColor}
              />
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
