import { Box, Container, Grid, Stack, Typography } from '@mui/material';

import Image from '@/components/image';
import { GalleryTwoData } from '../types';

export type GalleryTwoProps = {
  data: GalleryTwoData;
};

export default function GalleryTwo({ data }: GalleryTwoProps) {
  const { description, images, title } = data;
  const renderTopSection = (
    <Grid container columnSpacing={1} rowSpacing={1} justifyContent="center" alignItems="center">
      <Grid item xs={12} sm={8} alignSelf="stretch">
        <Image
          alt={images[0].alt}
          src={images[0].url}
          sx={{ height: 1, width: 1, maxHeight: 300, objectFit: 'cover', borderRadius: '2px' }}
        />
      </Grid>
      <Grid item xs={12} sm={4} alignSelf="stretch">
        <Image
          alt={images[1].alt}
          src={images[1].url}
          sx={{ height: 1, width: 1, maxHeight: 300, objectFit: 'cover', borderRadius: '2px' }}
        />
      </Grid>
    </Grid>
  );

  const renderTitleSection = (
    <Grid
      container
      columnSpacing={2}
      rowSpacing={1}
      mt={{ xs: 0.2, md: 0 }}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={8} alignSelf="stretch">
        <Stack height={1} width={1} alignItems="center" justifyContent="center" textAlign="center">
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
      <Grid item xs={4} alignSelf="stretch">
        <Image
          alt={images[2].alt}
          src={images[2].url}
          sx={{
            height: 1,
            width: 1,
            maxHeight: 150,
            maxWidth: 150,
            objectFit: 'cover',
            borderRadius: '2px',
          }}
        />
      </Grid>
    </Grid>
  );

  const renderBottomSection = (
    <Grid container justifyContent="flex-start" alignItems="flex-start">
      <Grid item xs={12} sm={4} alignSelf="stretch">
        <Image
          alt={images[3].alt}
          src={images[3].url}
          sx={{ height: 1, width: 1, maxHeight: 300, objectFit: 'cover', borderRadius: '2px' }}
        />
      </Grid>
      <Grid item xs={12} sm={8} alignItems="center" alignSelf="stretch">
        <Stack
          spacing={2.5}
          height={1}
          width={1}
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          {renderTitleSection}
          <Typography
            variant="caption"
            color={description.color}
            sx={{
              display: '-webkit-box',
              overflow: 'hidden',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 4,
              textOverflow: 'ellipsis',
              overflowY: 'hidden',
              textAlign: 'center',
              mx: 1,
            }}
          >
            {description.text}
          </Typography>
        </Stack>
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
