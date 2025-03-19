import Iconify from '@/components/iconify';
import Image from '@/components/image';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { HeroNineData } from '../types';
import { HeroNineImage } from './hero-nine-image';
import { HeroNineTitle } from './hero-two-title';

type Props = {
  data: HeroNineData;
};

export default function HeroNine({ data }: Props) {
  const { buttons, description, title, image } = data;

  return (
    <Box
      sx={{
        bgcolor: 'background.nuetral',
        height: { xs: 550, md: 700 },
        maxHeight: 700,
      }}
    >
      <Stack
        alignItems="center"
        justifyContent="center"
        height="100%"
        sx={{
          py: 2,
          px: { xs: 1, md: 4, sm: 4, lg: 4 },
        }}
      >
        <Grid
          container
          columnSpacing={4}
          rowSpacing={4}
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={12} md={6}>
            <Stack spacing={2}>
              <HeroNineTitle title={title} />

              <Typography
                variant="body1"
                sx={{
                  display: '-webkit-box',
                  overflow: 'hidden',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 3,
                  textOverflow: 'ellipsis',
                  overflowY: 'hidden',
                  textAlign: 'start',
                }}
                color={description.color}
              >
                {description.text}
              </Typography>

              <Stack direction="row" spacing={2}>
                <Button
                  variant="text"
                  href={buttons[0].linkTo}
                  startIcon={<Iconify icon={buttons[0].icon} color={buttons[0].color} />}
                  sx={{
                    padding: '10px 28px',
                    borderRadius: '6px',
                    color: buttons[0].color,
                    backgroundColor: buttons[0].backgroundColor,
                    fontSize: 18,
                  }}
                >
                  {buttons[0].text}
                </Button>
                <Button
                  variant="text"
                  href={buttons[1].linkTo}
                  sx={{
                    padding: '10px 28px',
                    borderRadius: '6px',
                    color: buttons[1].color,
                    backgroundColor: buttons[1].backgroundColor,
                    fontSize: 18,
                    border: '1px solid',
                    borderColor: buttons[1].color,
                  }}
                >
                  {buttons[1].text}
                </Button>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6} display={{ xs: 'none', md: 'grid' }}>
            <Box maxWidth={600} maxHeight={598}>
              {image.url !==
              'https://canvas-blocks.b-cdn.net/images/icon/2025-01/1738234707099.jpg' ? (
                <Image
                  alt={image?.alt}
                  src={image?.url}
                  sx={{
                    height: 1,
                    width: 1,
                    objectFit: 'cover',
                    borderRadius: '5px',
                  }}
                />
              ) : (
                <HeroNineImage />
              )}
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
}
