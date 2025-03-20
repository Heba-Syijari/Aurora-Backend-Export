import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { OurSolutionThreeData } from '../types';
import OurSolutionThreeItem from './our-solution-three-item';

export type OurSolutionThreeProps = {
  data: OurSolutionThreeData;
};

export default function OurSolutionTwo({ data }: OurSolutionThreeProps) {
  const { title, config, postTitle } = data;
  const theme = useTheme();

  const renderTitle = (
    <Stack
      spacing={0.5}
      direction="row"
      textAlign="center"
      justifyContent="center"
      paddingBottom={5}
    >
      <Typography
        variant="h2"
        color={postTitle.color}
        letterSpacing="-0.02em"
        textTransform="capitalize"
      >
        {postTitle.text}
      </Typography>
      <Typography variant="h2" fontWeight={700} color={title.color} letterSpacing="-0.02em">
        {title.text}
      </Typography>
    </Stack>
  );
  return (
    <Box
      sx={{
        // backgroundColor: `${theme.palette.primary.darker}`,
        backgroundColor: theme.palette.background.neutral,

        pt: 5,
        mb: -5,
        pb: { xs: 6, md: 11, lg: 11 },
        width: 1,
        my: 11,
      }}
    >
      {renderTitle}
      <Container>
        <Box sx={{ mt: 7 }}>
          <Grid container columnSpacing={4} rowSpacing={4} justifyContent="center">
            {(config.content || []).map((item, i) => (
              <Grid key={i} item xs={12} sm={12} md={12}>
                <OurSolutionThreeItem
                  data={item}
                  index={i}
                  descriptionTextColor={config.descriptionColor}
                  titleTextColor={config.titleColor}
                  key={i}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
