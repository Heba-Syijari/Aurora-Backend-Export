import { Box, Container, Grid, Stack, Typography } from '@mui/material';

import Image from '@/components/image';
import { ImageData } from '@/sections/preview/types';
import { GalleryThreeData } from '../types';

export type GalleryThreeProps = {
  data: GalleryThreeData;
};

export default function GalleryThree({ data }: GalleryThreeProps) {
  const { description, title, images } = data;
  const renderImage = (i: number, item: ImageData) => (
    <Grid key={i} item xs={12} sm={6} md={2.4} alignSelf="stretch">
      <Image
        alt={item.alt}
        src={item.url}
        sx={{ width: 1, height: 1, objectFit: 'cover', borderRadius: '2px' }}
      />
    </Grid>
  );

  const renderDescription = (
    <Grid item xs={12} sm={12} md={2.4} alignSelf="stretch">
      <Stack
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'common.neutral',
        }}
        height={1}
        p={2}
      >
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
          }}
        >
          {description.text}
        </Typography>
      </Stack>
    </Grid>
  );
  return (
    <Box sx={{ py: 11 }}>
      <Container>
        <Stack spacing={2.5} alignItems="center" textAlign="center">
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
        <Box sx={{ mt: 7 }}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            rowSpacing={{ md: 0, sm: 2, xs: 2 }}
            columnSpacing={{ md: 0, sm: 2, xs: 2 }}
            alignSelf="stretch"
          >
            {(images || []).map((item, i) => renderImage(i, item))}
            {renderDescription}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
