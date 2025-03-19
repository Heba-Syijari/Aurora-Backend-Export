import { Stack, Typography } from '@mui/material';
import { HowItWorksOneItemData } from '../types';
import { StageImage, StageType } from './stage-image';

type Props = {
  data: HowItWorksOneItemData[];
  index: number;
};

export default function HowItWorksOneDataItem({ data, index }: Props) {
  const { description, title } = data[index];

  const stagesEnum: Record<number, StageType> = {
    0: 'one',
    1: 'two',
    2: 'three',
    3: 'four',
  };
  return (
    <Stack spacing={1} alignItems="center" justifyContent="center" minHeight={210}>
      <StageImage stage={stagesEnum[index]} />
      <Typography
        variant="body1"
        color={title.color}
        fontWeight={600}
        sx={{
          display: '-webkit-box',
          overflow: 'hidden',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: 1,
          textOverflow: 'ellipsis',
          overflowY: 'hidden',
          textTransform: 'capitalize',
        }}
      >
        {title.text}
      </Typography>

      <Typography
        variant="body2"
        color={description.color}
        sx={{
          display: '-webkit-box',
          overflow: 'hidden',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: 3,
          textOverflow: 'ellipsis',
          overflowY: 'hidden',
          textAlign: 'center',
        }}
      >
        {description.text}
      </Typography>
    </Stack>
  );
}
