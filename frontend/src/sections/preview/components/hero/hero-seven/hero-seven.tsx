import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { lighten, useTheme } from '@mui/material/styles';

import Iconify from '@/components/iconify';
import Image from '@/components/image';
import { useMemo } from 'react';
import { getPaletteColorsMap } from '../../common/colors';
import { HeroSevenData } from '../types';

type Props = {
  data: HeroSevenData;
};

export default function HeroSeven({ data }: Props) {
  // const theme = useTheme(); // hsn edits : to get the theme color so I can use them inside the UI
  const { tagline, title, description, button, backGroundImage, mainImage, images } = data;

  const theme = useTheme();
  const paletteColorsMap = useMemo(() => getPaletteColorsMap(theme.palette), [theme.palette]);
  const baseColor = paletteColorsMap['primary.main'];
  const lighterColor = lighten(baseColor, 0.6);

  return (
    <Box
      sx={{
        mb: { lg: 5, sm: 5, xs: 3 },
        backgroundImage: `url('${backGroundImage.url}')`,
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        height: { sx: 1500, md: 1200, lg: 1130 },
        maxHeight: 1000,
        padding: 2, //
        borderRadius: 5,
        position: 'relative',
        '&::before': {
          content: "' '",
          position: 'absolute',
          opacity: 0.8,
          // backgroundColor: 'common.black',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        },
      }}
    >
      <Stack
        spacing={3}
        alignItems="center"
        py={5}
        sx={{
          maxWidth: '860',
          margin: 'auto',
          textAlign: 'center',
          px: { xs: 1 },
          position: 'relative',
        }}
      >
        <Box sx={{ mb: 1 }}>
          <Stack
            direction="row"
            justifyContent="center"
            sx={{
              p: 1.1,
              bgcolor: 'background.secondary',
              borderRadius: 5,
              px: 2,
            }}
          >
            <Iconify icon="bi:stars" color={lighterColor} width={24} />
            <Typography
              variant="body2"
              color={tagline.color}
              sx={{
                textTransform: 'capitalize',
                mx: 2,
              }}
            >
              {tagline.text}
            </Typography>
          </Stack>
        </Box>

        <Typography
          variant="h1"
          letterSpacing="-1.2px"
          fontWeight={700}
          fontSize={{ xs: 38, lg: 50 }}
          color={title.color}
          sx={{
            textTransform: 'capitalize',
          }}
        >
          {title.text}
        </Typography>

        <Typography
          variant="h6" // ? edit this if not ok
          fontWeight={500}
          color={description.color}
          maxWidth={650}
        >
          {description.text}
        </Typography>

        <Box
          sx={{
            mt: 1,
            // height: '100%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              // gap: 0,
              '&:hover': {
                '& .MuiButton-root , & .MuiButton-root, & .MuiButton-root::before , component-iconify ':
                  {
                    backgroundColor: 'background.secondary',
                  },
              },
            }}
          >
            <Box>
              <Button
                variant="contained"
                href={button.linkTo}
                sx={{
                  padding: '10px 50px',
                  borderRadius: '35px',
                  marginX: -0.1,
                  fontSize: 18,
                  color: button.color,
                  backgroundColor: button.backgroundColor,
                  transition: 'background-color 0.3s',
                }}
              >
                {button.text}
              </Button>
            </Box>

            <Box>
              <Button
                variant="contained"
                href={button.linkTo}
                sx={{
                  minWidth: '30px',
                  width: '40px',
                  height: '40px',
                  aspectRatio: '1',
                  borderRadius: '50%',
                  color: button.color,
                  backgroundColor: button.backgroundColor,
                  transition: 'background-color 0.3s',

                  '&::before': {
                    zIndex: 0,

                    content: '""',
                    position: 'absolute',
                    left: -20,
                    top: '%50',
                    width: '30px',
                    height: '20px',
                    backgroundColor: button.backgroundColor,
                    transition: 'background-color 0.3s',
                  },
                }}
              >
                <Iconify icon={button.icon} width={15} height={15} color={button.color} />
              </Button>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            backgroundColor: 'black',
            padding: 1,
            border: '5px solid gray',
            borderRadius: 5,
            mb: 2,
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden', // Prevent overflow
              maxWidth: { lg: '700px', sm: '400px', xs: '300px' },
            }}
          >
            {/* First Grid: Single Image */}
            <Grid item xs={12} md={6} alignSelf="stretch">
              <Image
                alt={mainImage.alt}
                src={mainImage.url}
                sx={{
                  height: 1,
                  width: 1,
                  objectFit: 'cover',
                  borderRadius: '2px',
                }}
              />
            </Grid>

            {/* Second Grid: 6 Images in 2x3 Layout */}
            <Grid item xs={12} md={6} alignSelf="stretch">
              <Grid container spacing={2}>
                {(images || []).map((item, i) => (
                  <Grid key={i} item xs={6} sm={6} md={6} lg={6}>
                    <Image
                      alt={item.alt}
                      src={item.url}
                      sx={{
                        height: '100%',
                        width: '100%',
                        maxHeight: 263,
                        maxWidth: '100%', // Prevent overflow
                        objectFit: 'contain',
                        borderRadius: '2px',
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </Box>
  );
}
