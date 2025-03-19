import { Box, Chip, Container, Grid, Stack, Typography } from '@mui/material';
import { FAQOneData } from '../types';
import { FAQOneItem } from './faq-one-item';

export type FAQOneProps = {
  data: FAQOneData;
};

export default function FAQOne({ data }: FAQOneProps) {
  const { title, description, config } = data;

  return (
    <Box sx={{ pt: 11, pb: { xs: 6, md: 11 } }}>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Chip label="FAQs" />
        </Box>

        <Stack spacing={2.5} alignItems="center" textAlign="center">
          <Typography variant="h2" fontWeight={700} color={title.color} letterSpacing="-0.02em">
            {title.text}
          </Typography>

          <Typography variant="body1" fontSize={20} color={description.color} maxWidth={920}>
            {description.text}
          </Typography>
        </Stack>

        <Grid container columnSpacing={4} rowSpacing={7} justifyContent="center" sx={{ mt: 7 }}>
          {(config.items || []).map((item, i) => (
            <Grid key={i} item xs={12} sm={6} md={4}>
              <FAQOneItem
                data={item}
                answerColor={config.answerTextColor}
                questionColor={config.questionTextColor}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
