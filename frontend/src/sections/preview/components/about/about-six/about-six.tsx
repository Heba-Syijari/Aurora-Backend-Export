import Image from '@/components/image/image';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { AboutSixData } from '../types';

export type AboutSixProps = {
  data: AboutSixData;
};

export default function AboutSix({ data }: AboutSixProps) {
  const { descriptionOne, descriptionTwo, descriptionThree, image } = data;
  const theme = useTheme();
  return (
    <Box
      sx={{
        padding: 2,
        py: 8,
        backgroundColor: `${theme.palette.background.neutral}`,
      }}
    >
      <Container maxWidth="lg">
        <Grid container justifyContent="center" alignItems="center" rowGap={3} columnGap={2}>
          <Grid item xs={12} textAlign="center">
            <Image
              alt={image.alt}
              src={image.url}
              sx={{
                maxWidth: { xs: '100%', sm: '75%', lg: '50%' },
                maxHeight: '50%',
              }}
            />
          </Grid>
          <Grid item xs={12} textAlign="center">
            <Stack spacing={5}>
              <Typography
                variant="body1"
                textAlign="center"
                textTransform="capitalize"
                color={descriptionOne.color}
                lineHeight={2}
              >
                {descriptionOne.text}
              </Typography>

              <Typography
                variant="body1"
                lineHeight={2}
                textAlign="center"
                color={descriptionTwo.color}
              >
                {descriptionTwo.text}
              </Typography>

              <Typography
                variant="body1"
                lineHeight={2}
                textAlign="center"
                color={descriptionThree.color}
              >
                {descriptionThree.text}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
