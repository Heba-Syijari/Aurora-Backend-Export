import Carousel, { CarouselArrows, CarouselDots, useCarousel } from '@/components/carousel';
import { Box, Chip, Container, Stack, Typography } from '@mui/material';
import { lighten, useTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { getPaletteColorsMap } from '../../common/colors';
import { SliderOneData } from '../types';
import SliderOneDataItem from './slider-item';
import SliderOneImage from './slider-one-image';

export type SliderOneProps = {
  data: SliderOneData;
};

export default function SliderOne({ data }: SliderOneProps) {
  const theme = useTheme();
  const paletteColorsMap = useMemo(() => getPaletteColorsMap(theme.palette), [theme.palette]);
  const bgColor = paletteColorsMap['background.neutral'];
  const lightBackground = lighten(bgColor, 0.8);
  const { config, title } = data;
  const carousel = useCarousel({
    slidesToShow: 1,
    ...CarouselDots({
      rounded: true,
      sx: { mt: 1 },
    }),
    arrows: true,
    centerMode: true,
    centerPadding: '5px',
  });
  return (
    <Box py={15} bgcolor={lightBackground}>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Chip label="Slider" />
        </Box>

        <Stack spacing={2.5} alignItems="center" textAlign="center">
          <Typography
            variant="h2"
            fontWeight={700}
            color={title.color}
            letterSpacing="-0.02em"
            maxWidth={970}
            textTransform="capitalize"
          >
            {title.text}
          </Typography>
        </Stack>

        <Box sx={{ mt: 7, position: 'relative' }}>
          <Box sx={{ position: 'absolute', right: 50 }}>
            <SliderOneImage />
          </Box>
          <Box
            sx={{
              overflowX: 'hidden',
              position: 'relative',
            }}
          >
            <CarouselArrows
              filled
              icon="ooui:previous-rtl"
              onNext={carousel.onPrev}
              onPrev={carousel.onNext}
            >
              <Carousel
                ref={carousel.carouselRef}
                {...carousel.carouselSettings}
                className="slider-container"
              >
                {(config.slides || []).map((item, i) => (
                  <SliderOneDataItem key={`${i  }slide`} {...config} data={item} />
                ))}
              </Carousel>
            </CarouselArrows>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
