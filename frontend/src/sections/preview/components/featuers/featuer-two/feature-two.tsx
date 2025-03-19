import { Box, Container, Grid, Stack, Typography } from '@mui/material';
// import { EditFeatureConfig } from 'src/sections/builder/editors/team';
import Iconify from '@/components/iconify';
import { LoadingButton } from '@mui/lab';
import { FeaureTwoData } from '../types';
import FeatureTwoItem from './feature-two-item';

export type FeatureTwoProps = {
  data: FeaureTwoData;
};

export default function FeatureTwo({ data }: FeatureTwoProps) {
  const { config, title, button, servicesCongig, servicesTitle } = data;

  return (
    <Box
      sx={{
        py: 11,
      }}
    >
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
        </Stack>

        <Grid
          container
          columnSpacing={{ md: 4, xs: 1 }}
          rowSpacing={7}
          mt={5}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={6} md={7}>
            <Grid container columnSpacing={4} rowSpacing={7} justifyContent="center">
              {(config?.features || []).map((item, i) => (
                <Grid key={i} item xs={12} md={6}>
                  <FeatureTwoItem {...config} data={item} />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid
            item
            container
            xs={12}
            sm={6}
            md={4}
            alignItems={{ md: 'flex-start', xs: 'center' }}
          >
            <Stack spacing={2} alignItems="flex-start" textAlign="start">
              <Typography
                variant="h3"
                textAlign={{ md: 'start', xs: 'center' }}
                fontWeight={700}
                color={servicesTitle.color}
                textTransform="capitalize"
              >
                {servicesTitle.text}
              </Typography>
              {servicesCongig.services.map((service, i) => (
                <Stack
                  key={`${i  }service`}
                  spacing={2}
                  direction="row"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                >
                  <Iconify icon="si:check-fill" color="primary.main" />
                  <Typography variant="body2" color={servicesCongig.servicesColor}>
                    {service}
                  </Typography>
                </Stack>
              ))}
              <LoadingButton
                variant="contained"
                type="submit"
                sx={{
                  padding: '16px 28px',
                  color: button.color,
                  backgroundColor: button.backgroundColor,
                  '&:hover': {
                    backgroundColor: button.color,
                    color: button.backgroundColor,
                    outline: `1px solid`,
                    outlineColor: button.backgroundColor,
                    outlineOffset: -1,
                  },
                  width: 250,
                  borderRadius: 20,
                  mt: 2,
                }}
              >
                {button.text}
              </LoadingButton>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
