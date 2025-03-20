import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { TeamThreeData } from '../types';
import TeamThreeItem from './team-three-item';

export type TeamThreeProps = {
  data: TeamThreeData;
};

export default function TeamThree({ data }: TeamThreeProps) {
  const { description, config, title } = data;
  return (
    <Box sx={{ py: 11 }}>
      <Container>
        <Stack
          spacing={2.5}
          alignItems="flex-start"
          textAlign="start"
          mx={{ md: 25, sm: 5, xs: 2 }}
        >
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
          <Grid container columnSpacing={4} rowSpacing={7} justifyContent="center" px={2}>
            {(config?.team || []).map((item, i) => (
              <Grid key={i} item xs={12} sm={6} md={4}>
                <TeamThreeItem {...config} data={item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
