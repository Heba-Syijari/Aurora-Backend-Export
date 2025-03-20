import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { lighten, useTheme } from '@mui/material/styles';
import { OurSolutionFourData } from '../types';

export type OurSolutionFourProps = {
  data: OurSolutionFourData;
};

export default function OurSolutionFour({ data }: OurSolutionFourProps) {
  const { title, description, image, solutions_1, solutions_2, solutions_3, solutions_4 } = data;

  const theme = useTheme();

  // const baseColor1 = theme.palette.primary.main;
  // const baseColor2 = theme.palette.primary.light;
  const primaryColor = lighten(theme.palette.primary.main, 0.5);
  const secondaryColor = lighten(theme.palette.secondary.light, 0.5);

  const renderTxt = (
    <Stack
      spacing={0.5}
      // direction="row"
      textAlign="start"
      justifyContent="center"
      paddingBottom={5}
    >
      <Typography
        variant="h2"
        fontWeight={500}
        color={title.color}
        letterSpacing="-0.02em"
        sx={{
          maxWidth: '90%',
        }}
      >
        {title.text}
      </Typography>
      <Typography
        variant="body1"
        color={description.color}
        letterSpacing="-0.02em"
        sx={{
          maxWidth: { lg: '500px' },
        }}
      >
        {description.text}
      </Typography>
    </Stack>
  );
  return (
    <Box
      sx={{
        backgroundColor: `${theme.palette.background.neutral}`,

        // marginY: 5,
        backgroundImage: `url('${image.url}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        maxHeight: '100%',
        maxWidth: '100%',
        my: 11,
      }}
    >
      <Box
        sx={{
          width: 1,
          paddingY: { lg: 10, xs: 10 },
        }}
      >
        <Container>
          <Grid container justifyContent="space-between">
            <Grid item xs={12} sm={6} md={6} lg={6} display="flex" alignItems="center">
              {renderTxt}
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Typography
                variant="body2"
                fontWeight={400}
                color={solutions_1.color}
                letterSpacing="-0.02em"
                textAlign="start"
                sx={{
                  borderRadius: 5,
                  background: `linear-gradient(to left, ${primaryColor}, ${secondaryColor})`,
                  maxWidth: '400px',
                  padding: 3,
                  marginLeft: 8,
                  marginY: 2,
                }}
              >
                {solutions_1.text}
              </Typography>
              <Typography
                variant="body2"
                fontWeight={400}
                color={solutions_2.color}
                letterSpacing="-0.02em"
                textAlign="start"
                sx={{
                  borderRadius: 5,
                  background: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})`,
                  maxWidth: '400px',
                  padding: 3,
                  marginLeft: 0,
                  marginY: 2,
                }}
              >
                {solutions_2.text}
              </Typography>
              <Typography
                variant="body2"
                fontWeight={400}
                color={solutions_3.color}
                letterSpacing="-0.02em"
                textAlign="start"
                sx={{
                  borderRadius: 5,
                  background: `linear-gradient(to left, ${primaryColor}, ${secondaryColor})`,
                  maxWidth: '400px',
                  padding: 3,
                  marginLeft: 8,
                  marginY: 2,
                }}
              >
                {solutions_3.text}
              </Typography>
              <Typography
                variant="body2"
                fontWeight={400}
                color={solutions_4.color}
                letterSpacing="-0.02em"
                textAlign="start"
                sx={{
                  borderRadius: 5,
                  background: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})`,
                  maxWidth: '400px',
                  padding: 3,
                  marginLeft: 0,
                  marginY: 2,
                }}
              >
                {solutions_2.text}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
