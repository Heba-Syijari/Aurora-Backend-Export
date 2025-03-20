import Image from '@/components/image';
import { Box, Stack, Typography } from '@mui/material';
import { ImportanceItemData } from '../types';

type Props = {
  data: ImportanceItemData;
};

export function ImportanceTwoItem({ data }: Props) {
  const { title, description, image } = data;

  return (
    <Stack sx={{ borderRadius: '22px', overflow: 'hidden', height: '100%' }}>
      <Box>
        <Image alt={image.alt} src={image.url} sx={{ width: '100%', height: 218 }} />
      </Box>

      <Stack spacing={1} sx={{ p: 2, bgcolor: 'background.neutral', flex: 1 }}>
        <Typography variant="h5" fontWeight={500} color={title.color}>
          {title.text}
        </Typography>

        <Typography variant="body1" fontWeight={400} color={description.color}>
          {description.text}
        </Typography>
      </Stack>
    </Stack>
  );
}
