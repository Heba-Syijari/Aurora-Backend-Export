import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useMemo } from 'react';

import { getPaletteColorsMap } from '../../common/colors';
import { FeaureSevenData } from '../types';
import FeatureSevenItem from './feature-seven-item';

export type FeatureSevenProps = {
  data: FeaureSevenData;
};

export default function FeatureSeven({ data }: FeatureSevenProps) {
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
      <Container>
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
              <Grid key={i} item xs={12} sm={6} md={3}>
                <FeatureSevenItem {...config} data={item} index={i} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
