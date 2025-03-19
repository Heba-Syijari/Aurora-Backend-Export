import { Box, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { HeroTenData } from '../types';

type Props = {
  data: HeroTenData;
};

export default function HeroTen({ data }: Props) {
  const theme = useTheme();
  const { title, image, tagline } = data;

  return (
    <Box
      sx={{
        mb: { lg: 10, sm: 6, xs: 8 },
        backgroundColor: 'background.neutral',
        backgroundImage: `url('${image.url}')`,
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
        <Typography
          variant="body1"
          letterSpacing="-0.02em"
          color={tagline.color}
          textTransform="uppercase"
        >
          {tagline.text}
        </Typography>

        <Typography
          variant="h1"
          fontWeight={700}
          fontSize={{ xs: 48 }}
          lineHeight="60px"
          letterSpacing="-0.02em"
          // color={title.color}
          sx={{
            textTransform: 'capitalize',
            background: `-webkit-repeating-linear-gradient(135deg,  ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {title.text}
        </Typography>
      </Stack>
    </Box>
  );
}
