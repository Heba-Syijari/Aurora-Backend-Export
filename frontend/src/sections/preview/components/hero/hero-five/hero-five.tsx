import { Box, Button, Chip, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { HeroFiveData } from '../types';

type Props = {
  data: HeroFiveData;
};

export default function HeroFive({ data }: Props) {
  const { button, description, tagline, title, image } = data;
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: `${theme.palette.background.neutral}`,

        height: 600,
        maxHeight: 600,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${image.url})`,
      }}
    >
      <Stack
        spacing={3}
        alignItems="center"
        justifyContent="center"
        height="100%"
        sx={{
          maxWidth: 860,
          margin: 'auto',
          px: { xs: 1, sm: 4, lg: 9 },
        }}
      >
        <Chip
          label={tagline.text}
          sx={{
            textTransform: 'capitalize',
            boxShadow: '0px 1px 2px 0px rgba(105, 81, 255, 0.05)',
          }}
        />
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
            textAlign: 'center',
            mx: 1,
            textTransform: 'capitalize',
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
    </Box>
  );
}
