import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { getPaletteColorsMap } from '../../common/colors';
import { SubscriptionOneData } from '../types';
import SubscriptionOneItem from './subscription-one-item';

export type SubscriptionOneProps = {
  data: SubscriptionOneData;
};

export default function SubscriptionOne({ data }: SubscriptionOneProps) {
  const { config, title } = data;
  const theme = useTheme();
  const paletteColorsMap = useMemo(() => getPaletteColorsMap(theme.palette), [theme.palette]);
  const firstColor = paletteColorsMap['common.white'];
  const secondColor = paletteColorsMap['common.neutral'];
  return (
    <Box
      sx={{
        py: 11,
        background: `linear-gradient(to bottom,${firstColor} 50%, ${secondColor}  50%)`,
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
                <SubscriptionOneItem config={config} index={i} data={item} key={i} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
