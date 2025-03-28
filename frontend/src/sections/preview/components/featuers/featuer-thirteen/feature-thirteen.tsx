import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { FeaureThirteenData } from '../types';
import FeatureThirteenItem from './feature-thirteen-item';

export type FeatureThirteenProps = {
  data: FeaureThirteenData;
};

export default function FeatureThirteen({ data }: FeatureThirteenProps) {
  const { config, title, description, subtitle } = data;

  return (
    <Box py={5}>
      <Container>
        <Stack spacing={2.5} alignItems="center" textAlign="center">
          <Typography
            variant="h2"
            fontWeight={700}
            color={title.color}
            letterSpacing="-0.02em"
            maxWidth={970}
            textTransform="capitalize"
          >
            {title.text}
          </Typography>
          <Typography
            variant="h6"
            fontWeight={700}
            color={subtitle.color}
            letterSpacing="-0.02em"
            maxWidth={970}
            textTransform="capitalize"
          >
            {subtitle.text}
          </Typography>
          <Typography
            variant="body2"
            fontWeight={700}
            color={description.color}
            textTransform="capitalize"
          >
            {description.text}
          </Typography>
        </Stack>

        <Box sx={{ mt: 7 }}>
          <Grid
            container
            columnSpacing={4}
            rowSpacing={4}
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            {(config?.features || []).map((item, i) => (
              <Grid key={i} item xs={12} sm={6} md={4}>
                <FeatureThirteenItem {...config} data={item} index={i} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
