import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { TeamOneData } from '../types';
import TeamOneItem from './team-one-item';

export type TeamOneProps = {
  data: TeamOneData;
};

export default function TeamOne({ data }: TeamOneProps) {
  const { description, subTitle, config, title } = data;

  return (
    <Box sx={{ py: 11 }}>
      <Container>
        <Stack spacing={2.5} alignItems="center" textAlign="center">
          <Typography
            variant="h2"
            fontWeight={700}
            color={title.color}
            letterSpacing="-0.02em"
            maxWidth={970}
          >
            {title.text}
          </Typography>
          <Typography
            variant="h6"
            fontWeight={700}
            color={subTitle.color}
            letterSpacing="-0.02em"
            maxWidth={970}
          >
            {subTitle.text}
          </Typography>
          <Typography variant="body1" fontSize={20} color={description.color} maxWidth={920}>
            {description.text}
          </Typography>
        </Stack>

        <Box sx={{ mt: 7 }}>
          <Grid container columnSpacing={4} rowSpacing={7} justifyContent="center">
            {(config?.team || []).map((item, i) => (
              <Grid key={i} item xs={12} sm={6} md={6}>
                <TeamOneItem {...config} data={item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
