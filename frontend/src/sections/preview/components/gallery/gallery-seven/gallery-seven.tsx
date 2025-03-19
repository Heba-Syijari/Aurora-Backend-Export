import Carousel, { CarouselBottomArrows, useCarousel } from '@/components/carousel';
import { Box, Container, Stack, Typography } from '@mui/material';
import { GallerySevenData } from '../types';
import GallerySevenItem from './gallery-seven-item';

export type GallerySevenProps = {
  data: GallerySevenData;
};

export default function OurSolutionOne({ data }: GallerySevenProps) {
  const { title, config, image } = data;
  const carousel = useCarousel({
    slidesToShow: 3,
    // ...CarouselDots({
    //   rounded: true,
    //   sx: { mt: 1 },
    // }),
    arrows: false,
    centerMode: true,
    centerPadding: '5px',
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 800,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, centerPadding: '20px' },
      },
    ],
  });

  return (
    <Box py={11}>
      <Box
        sx={{
          backgroundImage: `url('${image.url}')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          borderRadius: 7,
          paddingY: { xs: 5, sm: 10, md: 8, lg: 8 },
          m: { xs: 2, lg: 4 },
          height: { xs: '200px', sm: '300px', md: '300px', lg: '350px' },
          mb: { xs: 45, sm: 37, md: 37, lg: 35 },
          mt: { xs: 6, sm: 6, md: 8, lg: 10 },
        }}
      >
        <Container maxWidth="xl">
          <Stack
            spacing={0.5}
            alignItems="center"
            textAlign="center"
            sx={{
              '&::after': {
                content: "' '",
                opacity: 0.8,
                backgroundColor: title.color,
                width: '100px',
                height: '3px',
                borderRadius: 5,
              },
            }}
          >
            <Typography variant="h2" fontWeight={700} color={title.color} letterSpacing="-0.02em">
              {title.text}
            </Typography>
          </Stack>

          <Stack sx={{ paddingX: 0, position: 'relative' }}>
            <Box
              sx={{
                position: 'relative',
              }}
            >
              <CarouselBottomArrows
                filled
                icon="ooui:previous-rtl"
                onNext={carousel.onPrev}
                onPrev={carousel.onNext}
                sx={{
                  paddingX: 0,
                }}
              >
                <Carousel
                  ref={carousel.carouselRef}
                  {...carousel.carouselSettings}
                  className="slider-container"
                >
                  {(config.slides || []).map((item, i) => (
                    <GallerySevenItem
                    key={`${i}slide`}
                      {...config}
                      data={item}
                      currentIndex={carousel.currentIndex}
                      index={i}
                    />
                  ))}
                </Carousel>
              </CarouselBottomArrows>
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
