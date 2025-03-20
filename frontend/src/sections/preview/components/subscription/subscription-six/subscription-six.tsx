import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { SubscriptionSixData } from '../types';
import SubscriptionSixItem from './subscription-six-item';

export type SubscriptionSixProps = {
  data: SubscriptionSixData;
};

export default function SubscriptionSix({ data }: SubscriptionSixProps) {
  const { config, title, description, subtitle } = data;

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
          <Stack>
            <Typography variant="h6" color={subtitle.color} maxWidth={920}>
              {subtitle.text}
            </Typography>
            <Typography variant="body1" color={description.color} maxWidth={920}>
              {description.text}
            </Typography>
          </Stack>
        </Stack>
        <Grid
          container
          columnSpacing={4}
          rowSpacing={4}
          mt={5}
          justifyContent="center"
          alignItems="center"
          px={2}
        >
          {(config?.subscriptions || []).map((item, i) => (
            <Grid key={i} item xs={12} sm={6} md={4} alignSelf="stretch">
              <SubscriptionSixItem config={config} index={i} data={item} key={i} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
