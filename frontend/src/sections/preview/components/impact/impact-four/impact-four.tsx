import { Box, Chip, Container, Grid, Stack, Typography } from '@mui/material';
import { ImpactFourData } from '../types';
import { ImpactFourItem } from './impact-four-item';

export type ImpactFourProps = {
  data: ImpactFourData;
};

export default function ImpactFour({ data }: ImpactFourProps) {
  const { title, description, image, config } = data;

  return (
    <Box
      sx={{
        py: { xs: 6, md: 11 },
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.32) 0%, rgba(0, 0, 0, 0.32) 100%), url('${image.url}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container>
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Chip label="Impacts" />
        </Box>

        <Stack spacing={2.5} alignItems="center" textAlign="center">
          <Typography variant="h2" fontWeight={700} color={title.color} letterSpacing="-0.02em">
            {title.text}
          </Typography>

          <Typography variant="body1" fontSize={20} color={description.color} maxWidth={920}>
            {description.text}
          </Typography>
        </Stack>

        <Grid container columnSpacing={4} rowSpacing={7} justifyContent="center" sx={{ mt: 7 }}>
          {(config.impacts || []).map((item, i) => (
            <Grid key={i} item xs={12} sm={6} md={4}>
              <ImpactFourItem
                data={item}
                descriptionTextColor={config.descriptionTextColor}
                titleTextColor={config.titleTextColor}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
