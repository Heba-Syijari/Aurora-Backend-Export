import { Box, Chip, Grid, Stack, Typography } from '@mui/material';
import { SpecialTimesTwoData } from '../types';
import { SpecialTimesTwoContent } from './special-times-two-content';

export type SpecialTimesTwoProps = {
  data: SpecialTimesTwoData;
};

export default function SpecialTimesTwo({ data }: SpecialTimesTwoProps) {
  const { topic, title, description } = data;

  return (
    <Box sx={{ bgcolor: 'common.white' }}>
      <SpecialTimesTwoContent>
        <Grid container justifyContent="space-between" rowSpacing={{ xs: 5, md: 0 }}>
          <Grid item xs={12} md={6}>
            <Stack spacing={3} alignItems="center">
              <Chip label="Special times" />

              <Typography
                variant="h3"
                fontSize={{ sm: 40, md: 44, lg: 56 }}
                fontWeight={600}
                lineHeight="64px"
                color={topic.color}
              >
                {topic.text}
              </Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <Stack
              spacing={1}
              sx={{
                p: 3.5,
                textAlign: 'center',
                bgcolor: 'background.neutral',
                borderRadius: '12px',
              }}
            >
              <Typography variant="h4" fontWeight={600} color={title.color}>
                {title.text}
              </Typography>

              <Typography
                variant="body1"
                color={description.color}
                sx={{ letterSpacing: '0.32px' }}
              >
                {description.text}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </SpecialTimesTwoContent>
    </Box>
  );
}
