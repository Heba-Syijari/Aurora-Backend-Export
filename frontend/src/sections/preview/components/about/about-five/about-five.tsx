import Iconify from '@/components/iconify';
import Image from '@/components/image/image';
import { Box, Container, Grid, List, Stack, Typography } from '@mui/material';
import { AboutFiveData } from '../types';
import AboutFiveItem from './about-five-item';

export type AboutFiveProps = {
  data: AboutFiveData;
};

export default function AboutFive({ data }: AboutFiveProps) {
  const { title, postTitle, image, config } = data;
  return (
    <Box
      sx={{
        padding: 2,
        paddingY: 4,
      }}
    >
      <Container maxWidth="xl">
        <Grid container justifyContent="center" alignItems="center" rowGap={7} columnGap={3}>
          <Grid item sm={12} md={4} lg={4} textAlign="center" alignSelf="stretch">
            <Image
              alt={image.alt}
              src={image.url}
              sx={{
                maxWidth: '90% ',
                maxHeight: '100%',
              }}
            />
          </Grid>
          <Grid item sm={12} md={6} lg={6} textAlign="center">
            <Stack
              spacing={2}
              direction="row"
              textAlign="center"
              justifyContent="center"
              alignItems="center"
              paddingBottom={2}
            >
              <Iconify icon="mdi:stars" width={30} height={30} color="primary.main" />

              <Typography
                variant="h2"
                color={postTitle.color}
                letterSpacing="-0.02em"
                textTransform="capitalize"
              >
                {postTitle.text}
              </Typography>
              <Typography variant="h2" fontWeight={700} color={title.color} letterSpacing="-0.02em">
                {title.text}
              </Typography>
            </Stack>
            <Stack spacing={3} sx={{}}>
              <List
                sx={{
                  listStyleType: 'disc',
                  mx: 'auto',
                  '& .MuiListItem-root': {
                    display: 'list-item',
                    '&::marker': {
                      color: config.textColor,
                    },
                  },
                }}
              >
                {(config.items || []).map((item, i) => (
                  <AboutFiveItem data={item} textColor={config.textColor} key={i} />
                ))}
              </List>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
