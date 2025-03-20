import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { TeamTwoData } from '../types';
import TeamTwoItem from './team-two-item';

export type TeamTwoProps = {
  data: TeamTwoData;
};

export default function TeamTwo({ data }: TeamTwoProps) {
  const { description, config, title } = data;
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
          <Typography variant="body1" fontSize={20} color={description.color} maxWidth={920}>
            {description.text}
          </Typography>
        </Stack>

        <Box sx={{ mt: 7 }}>
          <Grid container columnSpacing={4} rowSpacing={7} justifyContent="center">
            {(config?.team || []).map((item, i) => (
              <Grid key={i} item xs={12} sm={6} md={4}>
                <TeamTwoItem {...config} data={item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
