import { Box, Chip, Grid, Stack, Typography } from '@mui/material';
import { SpecialTimesOneData } from '../types';
import { SpecialTimesOneContent } from './special-times-one-content';

export type SpecialTimesOneProps = {
  data: SpecialTimesOneData;
};

export default function SpecialTimesOne({ data }: SpecialTimesOneProps) {
  const { topic, title, description } = data;

  return (
    <Box sx={{ bgcolor: 'common.white' }}>
      <SpecialTimesOneContent>
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
              sx={{ p: 3.5, textAlign: 'center', bgcolor: 'common.white', borderRadius: '12px' }}
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
      </SpecialTimesOneContent>
    </Box>
  );
}
