import { IVideo } from '@/types/media';
import { Box, Chip, Container, Grid, Stack, Typography } from '@mui/material';
import { useMemo } from 'react';
import { VideoOneData } from '../types';
import { VideoOneItem } from './video-one-item';

export type VideoOneProps = {
  data: VideoOneData;
  videos: IVideo[];
};

export default function VideoOne({ data, videos }: VideoOneProps) {
  const { descriptionTextColor, titleTextColor } = data;

  const video = useMemo(() => videos.find((v) => v.id === data.videoId), [data.videoId, videos]);

  if (!video) return null;

  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Grid container spacing={3} sx={{ mt: 0 }}>
          <Grid item xs={12} md={6}>
            <Stack alignItems="flex-start" spacing={1}>
              <Chip label="Video" sx={{ mb: 1 }} />

              <Typography
                variant="h2"
                fontWeight={700}
                color={titleTextColor}
                letterSpacing="-0.02em"
              >
                {video.title}
              </Typography>

              <Typography variant="body1" color={descriptionTextColor}>
                {video.description}
              </Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <VideoOneItem video={video} height={312} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
