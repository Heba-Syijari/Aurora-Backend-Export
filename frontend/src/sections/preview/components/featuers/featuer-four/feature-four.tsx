import { Box, Card, Container, Grid, Stack, Typography } from '@mui/material';
import { FeaureFourData } from '../types';
import FeatureFourItem from './feature-four-item';

export type FeatureFourProps = {
  data: FeaureFourData;
};

export default function FeatureThree({ data }: FeatureFourProps) {
  const { config, title, images } = data;
  const featuresNumber = config?.features.length;
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
            textTransform="capitalize"
          >
            {title.text}
          </Typography>
        </Stack>

        <Box sx={{ mt: 7 }}>
          <Card>
            <Grid container rowSpacing={7} justifyContent="center">
              <Grid item xs={12} sm={6} md={6}>
                <FeatureFourItem
                  {...config}
                  data={config?.features.slice(0, featuresNumber / 2)}
                  image={images[0]}
                  index={0}
                  images={images}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <FeatureFourItem
                  {...config}
                  data={config?.features.slice(featuresNumber / 2, featuresNumber)}
                  image={images[1]}
                  index={1}
                  images={images}
                />
              </Grid>
            </Grid>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}
