import { Box, Container, Grid, Stack, Typography } from '@mui/material';

import Image from '@/components/image';
import { GalleryFiveData } from '../types';

export type GalleryFiveProps = {
  data: GalleryFiveData;
};

export default function GalleryFive({ data }: GalleryFiveProps) {
  const { images, title } = data;

  return (
    <Box sx={{ py: 11 }}>
      <Container maxWidth="md">
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
            columnSpacing={1}
            rowSpacing={1}
            justifyContent="center"
            alignItems="center"
          >
            {(images || []).map((item, i) => (
              <Grid
                key={i}
                item
                xs={12}
                sm={6}
                md={4}
                alignSelf="stretch"
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <Image
                  alt={item.alt}
                  src={item.url}
                  sx={{
                    height: 1,
                    width: 1,
                    maxHeight: 263,
                    objectFit: 'cover',
                    borderRadius: '2px',
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
