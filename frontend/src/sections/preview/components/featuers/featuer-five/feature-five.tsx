import { Box, Container, Grid, Stack, Typography } from '@mui/material';
// import { EditFeatureConfig } from 'src/sections/builder/editors/team';
import { useResponsive } from '@/hooks/use-responsive';
import { FeaureFiveData } from '../types';
import FeatureFiveItem from './feature-five-item';

export type FeatureFiveProps = {
  data: FeaureFiveData;
};

export default function FeatureFive({ data }: FeatureFiveProps) {
  const { config, title } = data;
  const mdUp = useResponsive('up', 'md');
  return (
    <Box py={11}>
      <Container maxWidth={mdUp ? 'md' : 'lg'}>
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
        </Stack>

        <Box sx={{ mt: 7 }}>
          <Grid
            container
            columnSpacing={4}
            rowSpacing={4}
            alignItems="flex-start"
            justifyContent="center"
          >
            {(config?.features || []).map((item, i) => (
              <Grid key={i} item xs={12} sm={4} md={4}>
                <FeatureFiveItem {...config} data={item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
