import Image from '@/components/image/image';

import { Box, Card, CardContent, Container, Grid, Stack, Typography } from '@mui/material';
import { lighten, useTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { getPaletteColorsMap } from '../../common/colors';
import { AboutFourData } from '../types';

export type AboutFourProps = {
  data: AboutFourData;
};

export default function AboutFour({ data }: AboutFourProps) {
  const {
    title,
    description,
    subtitle,
    image,
    cardOneDescription,
    cardOneImage,
    cardOneTitle,
    cardTwoTitle,
    cardTwoImage,
    cardTwoDescription,
  } = data;
  const theme = useTheme();
  const paletteColorsMap = useMemo(() => getPaletteColorsMap(theme.palette), [theme.palette]);

  const primaryColor = paletteColorsMap['primary.main'];
  const secondaryColor = paletteColorsMap['secondary.main'];
  const lighterColorPrimary = lighten(primaryColor, 0.9);

  const renderTitle = (
    <Stack
      textAlign="center"
      alignItems="center"
      sx={{
        '&::after': {
          content: "' '",
          opacity: 0.8,
          background: `linear-gradient(to left, ${primaryColor}, ${secondaryColor})`,
          width: '100px',
          height: '3px',
          borderRadius: 5,
        },
      }}
    >
      <Typography
        variant="h3"
        fontWeight={700}
        color={title.color}
        maxWidth={{ xs: 1, lg: 150 }}
        textAlign="center"
        sx={{
          maxWidth: '1000px',
        }}
      >
        {title.text}
      </Typography>
    </Stack>
  );

  const renderUpSection = (
    <Grid container justifyContent="center" alignItems="center" rowGap={5}>
      <Grid item xs={12} lg={6} textAlign="center">
        <Image
          alt={image.alt}
          src={image.url}
          sx={{
            // width: 64,
            // height: 64,
            maxWidth: { lg: '100%', md: '80%', sm: '80%', xs: '100%' },
            borderRadius: '6px',
          }}
        />
      </Grid>
      <Grid item xs={12} lg={6} textAlign="center" p={3}>
        <Stack spacing={3}>
          <Typography
            variant="h4"
            letterSpacing="-1.2px"
            textAlign="start"
            textTransform="capitalize"
            color={subtitle.color}
            sx={{
              background: `linear-gradient(to right, ${primaryColor}, ${lighterColorPrimary})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {subtitle.text}
          </Typography>
          <Typography
            variant="body2"
            // letterSpacing="-1.2px"
            // fontWeight={700}
            textAlign="start"
            // fontSize={{ xs: 48, lg: 60 }}
            color={description.color}
          >
            {description.text}
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );

  const renderCardOne = (
    <Card
      sx={{
        mx: 3,
        minHeight: 300,
        // bgcolor: theme.palette.common.neutral,
        // background: `linear-gradient(to left, ${primaryColor}, ${secondaryColor})`,
        background: lighten(primaryColor, 0.5),
        borderRadius: 4,
        // position: 'relative',
        overflow: 'hidden',
      }}
    >
      <CardContent>
        <Stack spacing={2} alignItems="center" justifyContent="center" p={1}>
          <Box
            sx={{
              mb: 2,
              borderRadius: 2,
              // color: 'common.white',
              display: 'grid',
              placeItems: 'center',
            }}
            width={{ xs: 200, sm: 200, md: 250 }}
            height={{ xs: 200, sm: 200, md: 250 }}
          >
            <Image
              alt={cardOneImage.alt}
              src={cardOneImage.url}
              sx={{
                // width: 64,
                // height: 64,
                maxWidth: '100%',
                borderRadius: '6px',
              }}
            />
          </Box>
          <Typography
            variant="h5"
            color={cardOneTitle.color}
            sx={{
              display: '-webkit-box',
              overflow: 'hidden',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 1,
              textOverflow: 'ellipsis',
              overflowY: 'hidden',
              textTransform: 'capitalize',
            }}
          >
            {cardOneTitle.text}
          </Typography>
          <Typography
            variant="body2"
            color={cardOneDescription.color}
            sx={{
              display: '-webkit-box',
              overflow: 'hidden',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2,
              textOverflow: 'ellipsis',
              overflowY: 'hidden',
              textAlign: 'center',
            }}
          >
            {cardOneDescription.text}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
  const renderCardTwo = (
    <Card
      sx={{
        mx: 3,
        minHeight: 300,
        // bgcolor: theme.palette.common.neutral,
        // background: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})`,
        background: lighten(secondaryColor, 0.5),
        borderRadius: 4,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <CardContent>
        <Stack spacing={2} alignItems="center" justifyContent="center" p={1}>
          <Box
            sx={{
              mb: 2,
              // background: `linear-gradient(to left, ${primaryColor}, ${lighterColorPrimary})`,
              borderRadius: 2,
              color: 'common.white',
              display: 'grid',
              placeItems: 'center',
            }}
            width={{ xs: 200, md: 250 }}
            height={{ xs: 200, md: 250 }}
          >
            <Image
              alt={cardTwoImage.alt}
              src={cardTwoImage.url}
              sx={{
                // width: 64,
                // height: 64,
                maxWidth: '100%',
                borderRadius: '6px',
              }}
            />
          </Box>
          <Typography
            variant="h5"
            color={cardTwoTitle.color}
            sx={{
              display: '-webkit-box',
              overflow: 'hidden',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 1,
              textOverflow: 'ellipsis',
              overflowY: 'hidden',
              textTransform: 'capitalize',
            }}
          >
            {cardTwoTitle.text}
          </Typography>
          <Typography
            variant="body2"
            color={cardTwoDescription.color}
            sx={{
              display: '-webkit-box',
              overflow: 'hidden',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2,
              textOverflow: 'ellipsis',
              overflowY: 'hidden',
              textAlign: 'center',
            }}
          >
            {cardTwoDescription.text}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );

  return (
    <Container>
      <Stack
        sx={{
          padding: 2,
        }}
        spacing={{ xs: 5, md: 8, lg: 10 }}
      >
        {renderTitle}
        {renderUpSection}
        <Grid container justifyContent="center" alignItems="center" rowGap={3}>
          <Grid item xs={12} sm={6} md={6} lg={6} textAlign="center">
            {renderCardOne}
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} textAlign="center">
            {renderCardTwo}
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
}
