import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { SubscriptionThreeData } from '../types';
import SubscriptionThreeItem from './subscription-three-item';

export type SubscriptionThreeProps = {
  data: SubscriptionThreeData;
};

export default function SubscriptionOne({ data }: SubscriptionThreeProps) {
  const { config, title, subtitle } = data;

  return (
    <Box
      sx={{
        py: 11,
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
          <Typography variant="body1" fontSize={20} color={subtitle.color} maxWidth={920}>
            {subtitle.text}
          </Typography>
        </Stack>
        <Grid
          container
          columnSpacing={2}
          rowSpacing={2}
          mt={5}
          justifyContent="center"
          alignItems="center"
        >
          <Grid container columnSpacing={4} rowSpacing={7} justifyContent="center">
            {(config?.subscriptions || []).map((item, i) => (
              <Grid key={i} item xs={12} sm={6} md={3}>
                <SubscriptionThreeItem config={config} index={i} data={item} key={i} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        {/* </Grid> */}
      </Container>
    </Box>
  );
}
