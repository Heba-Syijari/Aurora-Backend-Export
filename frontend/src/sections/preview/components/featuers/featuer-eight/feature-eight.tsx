import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { FeaureEightData } from '../types';
import FeatureEightItem from './feature-eight-item';

export type FeatureEightProps = {
  data: FeaureEightData;
};

export default function FeatureOne({ data }: FeatureEightProps) {
  const { config, title } = data;

  return (
    <Box py={11}>
      <Container maxWidth="md">
        <Stack spacing={2.5} alignItems="center" textAlign="center">
          <Typography
            variant="h2"
            fontWeight={700}
            color={title.color}
            letterSpacing="-0.02em"
            maxWidth={970}
            textTransform="uppercase"
          >
            {title.text}
          </Typography>
        </Stack>

        <Box sx={{ mt: 7 }}>
          <Grid container columnSpacing={4} rowSpacing={7} justifyContent="center">
            {(config?.features || []).map((item, i) => (
              <Grid key={i} item xs={12} sm={6} md={6}>
                <FeatureEightItem {...config} data={item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
