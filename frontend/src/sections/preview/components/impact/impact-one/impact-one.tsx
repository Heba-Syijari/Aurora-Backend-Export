import Image from '@/components/image';
import { Box, Chip, Container, Grid, Stack, Typography } from '@mui/material';
import { ImpactOneData } from '../types';
import ImpactOneItem from './impact-one-item';

export type ImpactOneProps = {
  data: ImpactOneData;
};

export default function ImpactOne({ data }: ImpactOneProps) {
  const { title, description, image, config } = data;

  return (
    <Box sx={{ pt: 11, pb: { xs: 6, md: 11 } }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Stack spacing={2} alignItems="flex-start">
              <Chip label="Impact or individual’s lives" />

              <Typography variant="h2" fontWeight={700} color={title.color} letterSpacing="-0.02em">
                {title.text}
              </Typography>

              <Typography variant="body1" fontSize={20} color={description.color}>
                {description.text}
              </Typography>
            </Stack>
          </Grid>

          <Grid item xs={6} display={{ xs: 'none', md: 'block' }}>
            <Image
              alt={image.alt}
              src={image.url}
              sx={{
                maxHeight: 312,
                height: '100%',
                width: '100%',
                objectFit: 'cover',
                borderRadius: '24px',
              }}
            />
          </Grid>
        </Grid>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          {(config.impacts || []).map((item, i) => (
            <Grid key={i} item xs={12} sm={6} md={4}>
              <ImpactOneItem
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
