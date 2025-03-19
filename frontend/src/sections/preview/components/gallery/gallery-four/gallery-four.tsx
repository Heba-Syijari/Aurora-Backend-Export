import { Box, Container, Grid, Stack, Typography } from '@mui/material';

import Image from '@/components/image';
import { GalleryFourData } from '../types';

export type GalleryFourProps = {
  data: GalleryFourData;
};

export default function GalleryFour({ data }: GalleryFourProps) {
  const { images, title } = data;
  const renderTopSection = (
    <Grid container columnSpacing={1} rowSpacing={1} justifyContent="center" alignItems="center">
      <Grid item xs={12} sm={4} alignSelf="stretch">
        <Image
          alt={images[0].alt}
          src={images[0].url}
          sx={{ height: 1, width: 1, maxHeight: 300, objectFit: 'cover', borderRadius: '2px' }}
        />
      </Grid>
      <Grid item xs={12} sm={7} alignSelf="stretch">
        <Image
          alt={images[1].alt}
          src={images[1].url}
          sx={{ height: 1, width: 1, maxHeight: 300, objectFit: 'cover', borderRadius: '2px' }}
        />
      </Grid>
      <Grid
        item
        sx={{
          display: { xs: 'none', sm: 'none', md: 'grid' },
        }}
        sm={1}
        alignSelf="stretch"
      />
    </Grid>
  );
  const renderTitleSection = (
    <Grid
      container
      direction={{ xs: 'row', sm: 'column', md: 'column' }}
      item
      xs={12}
      sm={6}
      alignSelf="stretch"
    >
      <Grid item container xs={12} sm={6} alignSelf="stretch">
        <Grid
          item
          sx={{
            display: { xs: 'none', sm: 'grid', md: 'grid' },
          }}
          sm={6}
          xs={12}
          alignSelf="stretch"
        />
        <Grid item xs={12} sm={6} alignSelf="stretch">
          <Image
            alt={images[3].alt}
            src={images[3].url}
            sx={{
              width: 1,
              height: 1,
              objectFit: 'cover',
              borderRadius: '2px',
            }}
          />
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} alignSelf="stretch">
        <Stack alignItems="center" justifyContent="flex-end" height={1} p={2}>
          <Typography
            variant="h2"
            fontWeight={700}
            color={title.color}
            letterSpacing="-0.02em"
            maxWidth={970}
          >
            {title.text}
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
  const renderBottomSection = (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={1}
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      {renderTitleSection}
      <Grid item xs={12} sm={6} alignSelf="stretch">
        <Image
          alt={images[2].alt}
          src={images[2].url}
          sx={{
            height: 1,
            width: 1,
            objectFit: 'cover',
            borderRadius: '2px',
          }}
        />
      </Grid>
    </Grid>
  );
  return (
    <Box sx={{ py: 11 }}>
      <Container maxWidth="md">
        <Box sx={{ mt: 7 }}>
          <Stack spacing={1} alignItems="center" textAlign="center">
            {renderTopSection}
            {renderBottomSection}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
