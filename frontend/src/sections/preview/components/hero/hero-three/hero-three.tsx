import { Box, Button, Stack, Typography } from '@mui/material';
import { HeroThreeData } from '../types';

type Props = {
  data: HeroThreeData;
};

export default function HeroThree({ data }: Props) {
  const { button, description, title } = data;

  return (
    <Box
      sx={{
        bgcolor: 'background.nuteral',
        height: 600,
        maxHeight: 768,
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
          textAlign: 'center',
          px: { xs: 1 },
        }}
      >
        <Typography
          variant="h1"
          letterSpacing="-1.2px"
          fontWeight={700}
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
          maxWidth={720}
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
