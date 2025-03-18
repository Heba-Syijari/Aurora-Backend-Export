import { Box, Stack, Typography } from '@mui/material';

import Image from '@/components/image';
import { AboutItemData } from '../types';

type Props = {
  data: AboutItemData;
};

export default function AboutOneItem({ data }: Props) {
  const { title, description, image } = data;

  return (
    <Box sx={{ height: '100%', p: 4 }}>
      <Stack spacing={2} alignItems="center" textAlign="center">
        <Box sx={{ mb: 1 }}>
          <Image
            alt={image.alt}
            src={image.url}
            sx={{ height: 64, width: 64, borderRadius: '6px' }}
          />
        </Box>

        <Typography variant="h4" color={title.color}>
          {title.text}
        </Typography>

        <Typography variant="body1" color={description.color} maxWidth={295}>
          {description.text}
        </Typography>
      </Stack>
    </Box>
  );
}
