import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { FeatureElevenData } from '../types';
import FeaturElevenItem from './featuer-eleven-item';

export type FeatureElevenProps = {
  data: FeatureElevenData;
};

export default function FeatureSix({ data }: FeatureElevenProps) {
  const { config, title } = data;

  return (
    <Box
      sx={{
        py: 11,
        // bgcolor: 'common.white',
      }}
    >
      <Container maxWidth="lg">
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
          <Grid container columnSpacing={4} rowSpacing={7} justifyContent="center">
            {(config?.features || []).map((item, i) => (
              <Grid key={i} item xs={12} sm={6} md={4}>
                <FeaturElevenItem {...config} data={item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
