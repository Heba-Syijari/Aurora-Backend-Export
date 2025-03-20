import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { lighten, useTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { getPaletteColorsMap } from '../../common/colors';
import { OurSolutionTwoData } from '../types';
import OurSolutionTwoItem from './our-solution-two-item';

export type OurSolutionTwoProps = {
  data: OurSolutionTwoData;
};

export default function OurSolutionTwo({ data }: OurSolutionTwoProps) {
  const { title, config, postTitle } = data;
  const theme = useTheme();
  const paletteColorsMap = useMemo(() => getPaletteColorsMap(theme.palette), [theme.palette]);
  const baseColor = paletteColorsMap[title.color];
  const lighterColor = lighten(baseColor, 0.6);

  return (
    <Box
      sx={{
        backgroundColor: `${theme.palette.background.neutral}`,

        // backgroundColor: `${theme.palette.primary.darker}`,
        pt: 5,
        pb: { xs: 6, md: 11, lg: 11 },
        mb: -5,
        width: 1,
        my: 11,
      }}
    >
      <Stack spacing={1} marginY={0} alignItems="center" textAlign="center">
        <Typography
          variant="body2"
          // fontWeight={700}
          color={postTitle.color}
          letterSpacing="-0.02em"
          textTransform="capitalize"
        >
          {postTitle.text}
        </Typography>
      </Stack>
      <Stack spacing={2.5} alignItems="center" textAlign="center">
        <Typography
          variant="h2"
          fontWeight={700}
          color={title.color}
          sx={{
            background: `-webkit-linear-gradient(45deg, ${baseColor} 00%  , ${lighterColor} 90%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
          letterSpacing="-0.02em"
        >
          {title.text}
        </Typography>
      </Stack>

      <Container>
        <Box sx={{ mt: 7 }}>
          <Grid container columnSpacing={4} rowSpacing={4} justifyContent="center">
            {(config.content || []).map((item, i) => (
              <Grid key={i} item xs={12} sm={12} md={12}>
                <OurSolutionTwoItem
                  data={item}
                  index={i}
                  descriptionTextColor={config.descriptionColor}
                  // iconColor={config.iconColor}
                  titleTextColor={config.titleColor}
                  key={i}
                  // answerColor={config.answerTextColor}
                  // questionColor={config.questionTextColor}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
