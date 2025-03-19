import { Box, Card, Container, Grid, Stack, Typography } from '@mui/material';
// import { EditFeatureConfig } from 'src/sections/builder/editors/team';
import { FeatureThreeData } from '../types';
import FeatureThreeItem from './feature-three-item';

export type FeatureThreeProps = {
  data: FeatureThreeData;
};

export default function FeatureThree({ data }: FeatureThreeProps) {
  const { config, title, subTitle } = data;

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
          {subTitle && (
            <Typography
              variant="h6"
              fontWeight={700}
              color={subTitle.color}
              letterSpacing="-0.02em"
              maxWidth={970}
              textTransform="capitalize"
            >
              {subTitle.text}
            </Typography>
          )}
        </Stack>

        <Box sx={{ mt: 7 }}>
          <Card>
            <Grid container rowSpacing={7} justifyContent="center">
              {(config?.features || []).map((item, i) => (
                <Grid key={i} item xs={12} sm={6} md={4}>
                  <FeatureThreeItem {...config} data={item} index={i} />
                </Grid>
              ))}
            </Grid>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}
