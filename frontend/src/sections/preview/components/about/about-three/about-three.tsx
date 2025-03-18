import { Box, Button, Card, Stack, Typography } from '@mui/material';
import { AboutThreeData } from '../types';

export type AboutThreeProps = {
  data: AboutThreeData;
};

export default function AboutThree({ data }: AboutThreeProps) {
  const { button, description, title, image } = data;

  return (
    <Box my={5}>
      <Box
        sx={{
          height: 600,
          maxHeight: 600,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: `url(${image.url})`,
        }}
      >
        <Stack
          height="100%"
          alignItems="center"
          justifyContent="center"
          sx={{
            maxWidth: 860,
            margin: 'auto',
          }}
        >
          <Card sx={{ p: 8, boxShadow: 0 }}>
            <Stack spacing={3} alignItems="center" justifyContent="center">
              <Typography variant="h3" fontWeight={700} textAlign="center" color={title.color}>
                {title.text}
              </Typography>

              <Typography
                variant="h6"
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
                    padding: '16px 28px',
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
    </Box>
  );
}
