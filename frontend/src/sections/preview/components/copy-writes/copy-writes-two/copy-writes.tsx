import { Box, Chip, Container, Stack, Typography } from '@mui/material';

import { CopyWriteTwoData } from '../types';

export type CopyWriteTwoProps = {
  data: CopyWriteTwoData;
};

export default function CopyWriteTwo({ data }: CopyWriteTwoProps) {
  const { title, parabraph1, parabraph2, subtitle } = data;
  // console.log(data);

  return (
    <Box sx={{ pt: 11, pb: { xs: 6, md: 11 }, bgcolor: 'common.neutral' }}>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Chip label="Privacy Policy" />
        </Box>

        <Stack spacing={2.5} alignItems="flex-start" textAlign="left">
          <Typography
            variant="h2"
            textTransform="capitalize"
            fontWeight={700}
            color={title.color}
            letterSpacing="-0.02em"
          >
            {title.text}
          </Typography>

          <Typography variant="body1" fontSize={20} color={parabraph1.color} maxWidth={920}>
            {parabraph1.text}
          </Typography>
        </Stack>
        <br />
        <Stack spacing={2.5} alignItems="flex-start" textAlign="left">
          <Typography
            variant="h3"
            fontWeight={700}
            color={subtitle.color}
            letterSpacing="-0.02em"
            textTransform="capitalize"
          >
            {subtitle.text}
          </Typography>

          <Typography variant="body1" fontSize={20} color={parabraph2.color} maxWidth={920}>
            {parabraph1.text}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
