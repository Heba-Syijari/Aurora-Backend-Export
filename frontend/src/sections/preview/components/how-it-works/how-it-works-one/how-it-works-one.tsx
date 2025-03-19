import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { HowItWorksOneData } from '../types';
import HowItWorksOneDataItem from './how-it-works-one-item';

export type HowItWorksOneProps = {
  data: HowItWorksOneData;
};

export default function HowItWorksOne({ data }: HowItWorksOneProps) {
  const { stages, title } = data;

  return (
    <Box py={11}>
      <Container>
        <Stack spacing={2.5} alignItems="center" textAlign="center">
          <Typography
            variant="h2"
            fontWeight={700}
            color={title.color}
            letterSpacing="-0.02em"
            maxWidth={970}
            textTransform="capitalize"
          >
            {title.text}
          </Typography>
        </Stack>

        <Box sx={{ mt: 7 }}>
          <Grid
            container
            columnSpacing={4}
            rowSpacing={4}
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            {stages.map((item, i) => (
              <Grid key={i} item xs={12} sm={6} md={3}>
                <HowItWorksOneDataItem index={i} data={stages} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
