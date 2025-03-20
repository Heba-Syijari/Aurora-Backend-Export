import { Badge, Card, Chip, Stack, Typography } from '@mui/material';

import Iconify from '@/components/iconify';
import { LoadingButton } from '@mui/lab';

import { SubscriptionOneConfig, SubscriptionOneItemData } from '../types';

type Props = {
  data: SubscriptionOneItemData;
  config: SubscriptionOneConfig;
  index: number;
};

export default function SubscriptionOneItem({ data, index, config }: Props) {
  const { description, title, button, features, period, price } = data;
  const {
    descriptionTextColor,
    titleTextColor,
    featuresTextColor,
    periodTextColor,
    priceTextColor,
  } = config;

  const renderFeatures = (
    <Stack alignItems="flex-start" justifyContent="flex-start" mt={2} width={1}>
      {features.map((feature, i) => (
        <Stack
          key={`${i}feature `}
          spacing={2}
          direction="row"
          alignItems="flex-start"
          justifyContent="flex-start"
          width={1}
          px={4}
          py={1}
          bgcolor={i % 2 !== 0 ? 'transparent' : 'common.neutral'}
        >
          <Iconify icon="si:check-fill" color="primary.main" />
          <Typography variant="caption" color={featuresTextColor}>
            {feature}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
  return (
    <Stack alignItems="center" width={1} height={1} position="relative">
      <Chip
        label={
          <Typography variant="body1" fontWeight={700} color={titleTextColor}>
            {title}
          </Typography>
        }
        sx={{
          borderRadius: 0,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          width: 1,
          maxWidth: 150,
          bgcolor :'common.neutral',
          py: 3,
        }}
      />
      <Card
        sx={{
          borderRadius: 6,
          boxShadow: 3,
          py: 4,
          pb: 12,
          minWidth: 280,
          height: 1,
        }}
      >
        <Stack direction="column" alignItems="center" spacing={3} justifyContent="center">
          <Stack spacing={0} alignItems="center" px={4}>
            <Badge
              badgeContent={
                <Typography variant="h6" fontWeight={700} color={priceTextColor} textAlign="center">
                  $
                </Typography>
              }
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <Typography variant="h3" color={priceTextColor} textAlign="center">
                {price}
              </Typography>
            </Badge>
            <Typography
              variant="body1"
              fontWeight={500}
              textAlign="center"
              color={periodTextColor}
              mt={-1}
            >
              {period}
            </Typography>
          </Stack>
          <Typography
            variant="body2"
            textAlign="center"
            color={descriptionTextColor}
            px={4}
            sx={{
              display: '-webkit-box',
              overflow: 'hidden',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 4,
              textOverflow: 'ellipsis',
              overflowY: 'hidden',
            }}
          >
            {description}
          </Typography>
          {renderFeatures}
        </Stack>
      </Card>
      <Stack
        width={1}
        position="absolute"
        maxWidth={200}
        sx={{
          bottom: -20,
        }}
      >
        {button && (
          <LoadingButton
            variant="contained"
            type="submit"
            sx={{
              padding: '10px 20px',
              color: button.color,
              backgroundColor: button.backgroundColor,
              '&:hover': {
                backgroundColor: button.color,
                color: button.backgroundColor,
                outline: `1px solid`,
                outlineColor: button.backgroundColor,
                outlineOffset: -1,
              },
              borderRadius: 20,
            }}
          >
            {button.text}
          </LoadingButton>
        )}
      </Stack>
    </Stack>
  );
}
