import { Box, Button, Divider, Grid, Stack, Typography } from '@mui/material';
import { AboutOneData } from '../types';

export type AboutOneProps = {
  data: AboutOneData;
};

export default function AboutOne({ data }: AboutOneProps) {
  const { title, description, subtitle, button } = data;

  return (
    <Box my={5}>
      <Grid container columnSpacing={4} rowSpacing={1}>
        <Grid item xs={12} md={6} bgcolor={button.backgroundColor}>
          <Stack
            spacing={3}
            alignItems="center"
            justifyContent="center"
            sx={{ height: '100%' }}
            p={4}
            width={{ xs: '100%', lg: '70%' }}
          >
            <Typography
              variant="h3"
              fontWeight={400}
              color={title.color}
              maxWidth={{ xs: 1, lg: 150 }}
              textAlign={{ xs: 'center', lg: 'start' }}
            >
              {title.text}
            </Typography>
            <Divider
              sx={{
                width: 50,
                height: '1px',
                bgcolor: '#ffff',
              }}
            />
            <Button
              variant="text"
              href={button.linkTo}
              sx={{
                padding: '5px',
                borderRadius: '0px',
                color: button.color,
                backgroundColor: button.backgroundColor,
                fontSize: 18,
              }}
            >
              {button.text}
            </Button>
          </Stack>
        </Grid>

        <Grid item xs={12} md={6}>
          <Stack
            spacing={3}
            alignItems={{ xs: 'center', lg: 'flex-start' }}
            justifyContent="center"
            sx={{ height: '100%' }}
            p={4}
            pb={{ xs: 4, lg: 8 }}
          >
            <Typography variant="h4" fontWeight={400} color={subtitle.color}>
              {subtitle.text}
            </Typography>
            <Typography
              variant="body1"
              fontWeight={400}
              color={description.color}
              sx={{
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 4,
                textOverflow: 'ellipsis',
                overflowY: 'hidden',
                textAlign: { xs: 'center', lg: 'start' },
                mx: 1,
              }}
            >
              {description.text}
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
