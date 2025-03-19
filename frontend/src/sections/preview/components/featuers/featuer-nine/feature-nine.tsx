import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { FeaureNineData } from '../types';
import { FeatureNineContent } from './feature-nine-content';
import FeatureNineItem from './feature-nine-item';

export type FeatureNineProps = {
  data: FeaureNineData;
};

export default function FeatureSeven({ data }: FeatureNineProps) {
  const { config, title } = data;

  return (
    <Box py={11}>
      <FeatureNineContent>
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
            <Grid container columnSpacing={4} rowSpacing={7} justifyContent="center">
              {(config?.features || []).map((item, i) => (
                <Grid key={i} item xs={12} sm={6} md={3}>
                  <FeatureNineItem {...config} data={item} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </FeatureNineContent>
    </Box>
  );
}
