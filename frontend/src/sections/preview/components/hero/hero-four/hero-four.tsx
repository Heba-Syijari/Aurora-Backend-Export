import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import Image from '@/components/image';
import { HeroFourData } from '../types';

type Props = {
  data: HeroFourData;
};

export default function HeroFour({ data }: Props) {
  const { button, description, title, image } = data;
  const theme = useTheme();
  return (
    <Box
      sx={{
        // bgcolor: 'common.neutral',
        backgroundColor: `${theme.palette.background.neutral}`,

        py: { xs: 20, lg: 0 },
        px: 1,
      }}
    >
      <Grid container rowSpacing={4} columnSpacing={5}>
        <Grid item xs={12} md={7}>
          <Stack
            spacing={3}
            alignItems="flex-start"
            justifyContent="center"
            sx={{
              maxWidth: 860,
              margin: 'auto',
              px: { xs: 1, sm: 4, lg: 9 },
              height: '100%',
            }}
          >
            <Typography
              variant="h1"
              fontWeight={700}
              fontSize={{ xs: 48 }}
              lineHeight="60px"
              letterSpacing="-0.02em"
              color={title.color}
            >
              {title.text}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 2,
                textOverflow: 'ellipsis',
                overflowY: 'hidden',
                textAlign: 'start',
              }}
              fontWeight={500}
              color={description.color}
            >
              {description.text}
            </Typography>

            <Box sx={{ mt: 1 }}>
              <Button
                variant="contained"
                href={button.linkTo}
                sx={{
                  padding: '10px 28px',
                  borderRadius: '6px',
                  color: button.color,
                  backgroundColor: button.backgroundColor,
                  fontSize: 18,
                }}
              >
                {button.text}
              </Button>
            </Box>
          </Stack>
        </Grid>

        <Grid item xs={12} md={5} display={{ xs: 'none', md: 'grid' }}>
          <Box
            sx={{
              width: '100%',
              height: '100%',
              maxHeight: 550,
              borderRadius: '24px',
              overflow: 'hidden',
              p: 2,
            }}
          >
            <Image
              alt={image.alt}
              src={image.url}
              sx={{
                height: '100%',
                width: '100%',
                objectFit: 'cover',
                borderRadius: '0px !important',
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
