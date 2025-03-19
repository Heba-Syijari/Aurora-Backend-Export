import { Box, Chip, Container, Grid, Stack, Typography } from '@mui/material';
import { ImpactTwoData } from '../types';
import { ImpactTwoImage } from './impact-two-image';
import ImpactTwoItem from './impact-two-item';

export type ImpactTwoProps = {
  data: ImpactTwoData;
};

export default function ImpactTwo({ data }: ImpactTwoProps) {
  const { title, description, image, config } = data;

  return (
    <Box sx={{ py: { xs: 8, md: 11 } }}>
      <Container>
        <Grid
          container
          columnSpacing={8}
          rowSpacing={12}
          flexDirection={{ xs: 'row', lg: 'row-reverse' }}
        >
          <Grid item xs={12} lg={6}>
            <Stack spacing={2} alignItems="flex-start">
              <Chip label="Impact or individual’s lives" />

              <Typography variant="h2" fontWeight={700} color={title.color} letterSpacing="-0.02em">
                {title.text}
              </Typography>

              <Typography variant="body1" fontSize={20} color={description.color}>
                {description.text}
              </Typography>
            </Stack>

            <Grid container spacing={4} sx={{ mt: 4 }}>
              {(config.impacts || []).map((item, i) => (
                <Grid key={i} item xs={12} sm={6}>
                  <ImpactTwoItem
                    index={i + 1}
                    data={item}
                    titleTextColor={item.title}
                    descriptionTextColor={item.description}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={12} lg={6}>
            <Stack sx={{ height: '100%', justifyContent: 'center' }}>
              <ImpactTwoImage image={image} />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
