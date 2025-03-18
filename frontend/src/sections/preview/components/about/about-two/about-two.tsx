import Image from '@/components/image';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import Socials from '../../common/socials/socials';
import { AboutTwoData } from '../types';

export type AboutTwoProps = {
  data: AboutTwoData;
};

export default function AboutTwo({ data }: AboutTwoProps) {
  const { title, description, subtitle, button, socialsConfig, image } = data;

  return (
    <Box my={5}>
      <Grid container columnSpacing={4} rowSpacing={1}>
        <Grid item xs={12} md={6}>
          <Stack
            spacing={3}
            alignItems={{ xs: 'center', lg: 'start' }}
            justifyContent="center"
            sx={{ height: '100%' }}
            p={4}
            px={6}
            width={{ xs: '100%', lg: '80%' }}
          >
            <Typography
              variant="h3"
              fontWeight={400}
              color={title.color}
              textAlign={{ xs: 'center', lg: 'start' }}
            >
              {title.text}
            </Typography>

            <Typography
              variant="h4"
              fontWeight={400}
              color={subtitle.color}
              textAlign={{ xs: 'center', lg: 'start' }}
            >
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
            <Socials
              socialsItems={socialsConfig.socials}
              socialIconsColor={socialsConfig.socialIconsColor}
              isCenter
            />

            <Button
              variant="text"
              href={button.linkTo}
              sx={{
                padding: '16px 25px',
                borderRadius: '6px',
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
          <Stack alignItems="end">
            <Image alt={image.alt} src={image.url} />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
