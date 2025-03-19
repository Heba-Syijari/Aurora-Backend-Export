import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { lighten, useTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { getPaletteColorsMap } from '../../common/colors';
import { FeatureTwelveData } from '../types';
import FeaturTwelveItem from './featuer-twelve-item';

export type FeatureTwelveProps = {
  data: FeatureTwelveData;
};

export default function FeatureTwelve({ data }: FeatureTwelveProps) {
  const theme = useTheme();
  const { config, title, postTitle } = data;
  const paletteColorsMap = useMemo(() => getPaletteColorsMap(theme.palette), [theme.palette]);
  const baseColor = paletteColorsMap[title.color];
  const lighterColor = lighten(baseColor, 0.6);

  ///
  //      background: linear-gradient(135deg, ${baseColor}, ${lighterColor}),

  // ///

  //      background: linear-gradient(to bottom, ${baseColor}, ${lighterColor}),

  return (
    <Box
      sx={{
        py: 11,
        // backgroundColor: `${theme.palette.background.neutral}`,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Typography
            variant="body1"
            // fontWeight={700}
            color={postTitle.color}
            letterSpacing="0.1em"
            // maxWidth={970}
            textTransform="uppercase"
          >
            {postTitle.text}
          </Typography>
        </Box>

        <Stack spacing={2.5} alignItems="center" textAlign="center">
          <Typography
            variant="h2"
            fontWeight={700}
            // color={title.color}
            letterSpacing="-0.02em"
            maxWidth={970}
            textTransform="capitalize"
            sx={{
              background: `linear-gradient(to right,  ${lighterColor},${baseColor})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {title.text}
          </Typography>
        </Stack>

        <Box sx={{ mt: 7 }}>
          <Grid container columnSpacing={4} rowSpacing={7} justifyContent="center">
            {(config?.features || []).map((item, i) => (
              <Grid key={i} item xs={12} sm={6} md={4}>
                <FeaturTwelveItem {...config} data={item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
