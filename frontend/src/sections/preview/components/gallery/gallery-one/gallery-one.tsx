import { Box, Container, Grid, Stack, Typography } from '@mui/material';

import Image from '@/components/image';
import { GalleryOneData } from '../types';

export type GalleryOneProps = {
  data: GalleryOneData;
};

export default function GalleryOne({ data }: GalleryOneProps) {
  const { subtitle, images, title } = data;

  return (
    <Box sx={{ py: 11, position: 'relative' }}>
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
          <Typography
            variant="h6"
            fontWeight={700}
            color={subtitle.color}
            letterSpacing="-0.02em"
            maxWidth={970}
          >
            {subtitle.text}
          </Typography>
        </Stack>

        <Box sx={{ mt: 7, position: 'relative' }}>
          <Box
            sx={{
              position: 'absolute',
              top: '15%',
              left: '-10%',
              width: { lg: '120%', md: '100%' },
              height: '70%',
              bgcolor: 'common.neutral',
              zIndex: 1,
              borderRadius: '2px',
              display: { xs: 'none', md: 'block', sm: 'block' },
            }}
          />
          <Grid
            container
            columnSpacing={2}
            rowSpacing={2}
            justifyContent="center"
            alignItems="center"
            sx={{
              position: 'relative',
              zIndex: 2,
            }}
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
