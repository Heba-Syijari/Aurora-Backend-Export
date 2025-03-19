import { Box, Button, Card, Stack, Typography } from '@mui/material';
import { HeroOneData } from '../types';

type Props = {
  data: HeroOneData;
};

export default function HeroOne({ data }: Props) {
  const { button, description, title, image } = data;

  return (
    <Box
      sx={{
        height: 768,
        maxHeight: 768,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${image.url})`,
        mb: 2,
        // position: 'relative',
      }}
    >
      {/* <Box position="absolute" sx={{ top: 0, width: 1, height: 1, zIndex: 4 }}>
        <BackgroundImage />
      </Box> */}
      <Stack
        height="100%"
        alignItems="center"
        justifyContent="center"
        sx={{
          maxWidth: { xs: 300, sm: 600, md: 860 },
          margin: 'auto',
          // position: 'relative',
          // zIndex: 10,
        }}
      >
        <Card sx={{ p: 8, boxShadow: 0 }}>
          <Stack spacing={3} alignItems="center" justifyContent="center">
            <Typography
              variant="h1"
              letterSpacing="-1.2px"
              fontWeight={700}
              textAlign="center"
              fontSize={{ xs: 48, lg: 60 }}
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
                textAlign: 'center',
                mx: 1,
              }}
              fontWeight={500}
              color={description.color}
            >
              {description.text}
            </Typography>

            <Box sx={{ mt: 1 }}>
              <Button
                variant="text"
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
        </Card>
      </Stack>
    </Box>
  );
}
