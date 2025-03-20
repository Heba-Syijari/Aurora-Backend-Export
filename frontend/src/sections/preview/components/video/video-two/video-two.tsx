import { IVideo } from '@/types/media';
import { Box, Container, Stack, Typography } from '@mui/material';
import { useMemo } from 'react';
import { VideoTwoData } from '../types';
import { VideoTwoItem } from './video-two-item';

export type VideoTwoProps = {
  data: VideoTwoData;
  videos: IVideo[];
};

export default function VideoTwo({ data, videos }: VideoTwoProps) {
  const video = useMemo(() => videos.find((v) => v.id === data.videoId), [data.videoId, videos]);

  if (!video) return null;

  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Stack spacing={1.5}>
          <Typography variant="h3" textAlign="start">
            {video.title}
          </Typography>
          <Box sx={{ width: '100%' }}>
            <VideoTwoItem video={video} height={600} />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
