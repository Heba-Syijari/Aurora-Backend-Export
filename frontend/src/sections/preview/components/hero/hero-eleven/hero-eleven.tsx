import { Box, Stack, Typography } from '@mui/material';

import Image from '@/components/image';
import { HeroElevenData } from '../types';

type Props = {
  data: HeroElevenData;
};

export default function HeroEleven({ data }: Props) {
  const { title, image, backgroundImage } = data;

  return (
    <Box
      sx={{
        mb: { lg: 10, sm: 6, xs: 8 },
        backgroundColor: 'background.neutral',
        backgroundImage: `url('${backgroundImage.url}')`,
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        height: 600,
        maxHeight: 600,
        position: 'relative',
        '&::before': {
          content: "' '",
          position: 'absolute',
          opacity: 0.5,
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        },
      }}
    >
      <Stack
        spacing={0}
        alignItems="center"
        justifyContent="center"
        height="100%"
        sx={{
          margin: 'auto',
          textAlign: 'center',
          px: { xs: 1 },
          position: 'relative',
        }}
      >
        <Stack sx={{ textAlign: 'center', mb: 2 }}>
          <Image
            alt={image.alt}
            src={image.url}
            sx={{
              height: 1,
              width: 1,
              maxHeight: '70px',
              objectFit: 'cover',
              borderRadius: '2px',
            }}
          />
        </Stack>

        <Typography
          variant="h1"
          fontWeight={700}
          fontSize={{ xs: 48 }}
          lineHeight="60px"
          letterSpacing="-0.02em"
          color={title.color}
          sx={{ textTransform: 'capitalize' }}
        >
          {title.text}
        </Typography>
      </Stack>
    </Box>
  );
}
