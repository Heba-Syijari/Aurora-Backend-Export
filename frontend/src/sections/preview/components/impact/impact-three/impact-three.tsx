import { Box, Chip, Container, Grid, Stack, Typography } from '@mui/material';
import { ImpactThreeData } from '../types';
import { ImpactThreeItem } from './impact-three-item';

export type ImpactThreeProps = {
  data: ImpactThreeData;
};

export default function ImpactThree({ data }: ImpactThreeProps) {
  const { title, description, config } = data;

  return (
    <Box sx={{ pt: 11, pb: { xs: 6, md: 11 } }}>
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
              <ImpactThreeItem
                data={item}
                index={i + 1}
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
