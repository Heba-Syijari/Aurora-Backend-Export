import { Box, Card, CardContent, Container, Grid, Stack, Typography } from '@mui/material';
import { TeamFourData } from '../types';
import TeamFourItem from './team-four-item';

export type TeamFourProps = {
  data: TeamFourData;
};

export default function TeamFour({ data }: TeamFourProps) {
  const { config, title } = data;
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
        </Stack>

        <Box sx={{ mt: 7 }}>
          <Card>
            <CardContent>
              <Grid container columnSpacing={4} rowSpacing={7} justifyContent="center">
                {(config?.team || []).map((item, i) => (
                  <Grid key={i} item xs={12} sm={12} md={6}>
                    <TeamFourItem {...config} data={item} />
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}
