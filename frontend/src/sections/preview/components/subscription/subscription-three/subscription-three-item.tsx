import Iconify from '@/components/iconify';
import { LoadingButton } from '@mui/lab';
import { Card, CardContent, Stack, Typography } from '@mui/material';
import { lighten, useTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { getPaletteColorsMap } from '../../common/colors';
import { SubscriptionThreeConfig, SubscriptionThreeItemData } from '../types';

type Props = {
  data: SubscriptionThreeItemData;
  config: SubscriptionThreeConfig;
  index: number;
};

export default function SubscriptionThreeItem({ data, index, config }: Props) {
  const { title, button, features, period, price } = data;
  const { titleTextColor, featuresTextColor, periodTextColor, priceTextColor } = config;

  const theme = useTheme();
  const paletteColorsMap = useMemo(() => getPaletteColorsMap(theme.palette), [theme.palette]);
  const baseColor = paletteColorsMap[priceTextColor];
  const lighterColor1 = lighten(baseColor, 0.3);
  const lighterColor2 = lighten(baseColor, 0.6);
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
        >
          <Iconify icon="mdi:rhombus" color="primary.main" />
          <Typography variant="caption" color={featuresTextColor}>
            {feature}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );

  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow:
          ' rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;',
        py: 4,
        px: 2,
        minWidth: 280,
        height: 1,
        mx: 1,
      }}
    >
      <CardContent>
        <Stack
          direction="column"
          height={1}
          alignItems="center"
          spacing={2}
          justifyContent="center"
        >
          <Typography variant="h3" color={titleTextColor} textAlign="center">
            {title}
          </Typography>
          <Stack
            width={1}
            mx={3}
            alignItems="center"
            py={2}
            borderRadius={2}
            bgcolor={priceTextColor}
            sx={{
              boxShadow: 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px',
              background: `linear-gradient(to right, ${baseColor}, ${lighterColor1}, ${lighterColor2})`,
            }}
          >
            <Typography variant="h3" fontWeight={100} color="common.white" textAlign="center">
              $ {price}
            </Typography>
          </Stack>

          {renderFeatures}
          <Stack mt="auto" mb={3}>
            <Typography variant="h3" fontWeight={100} textAlign="center" color={periodTextColor}>
              {period}
            </Typography>

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
                  borderRadius: 2,
                }}
              >
                {button.text}
              </LoadingButton>
            )}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
