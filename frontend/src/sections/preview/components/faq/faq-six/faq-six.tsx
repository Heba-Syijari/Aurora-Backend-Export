import { Container, Grid, Stack, Typography } from '@mui/material';
import { FAQSixData } from '../types';
import { FAQSixItem } from './faq-six-item';

export type FAQSixProps = {
  data: FAQSixData;
};

export default function FAQSix({ data }: FAQSixProps) {
  const { title, description, config } = data;

  return (
    <Container
      sx={{
        paddingY: 5,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Stack spacing={2} alignItems="flex-start" sx={{ height: '100%', paddingRight: 7 }}>
            <Typography variant="h2" fontWeight={700} color={title.color} letterSpacing="-0.02em">
              {title.text}
            </Typography>
            <Typography variant="body1" fontSize={20} color={description.color}>
              {description.text}
            </Typography>
          </Stack>
        </Grid>

        <Grid item xs={12} md={6}>
          <Stack
            spacing={2.5}
            sx={{
              height: '100%',
              // maxHeight: 374,
              overflowY: 'auto',
            }}
          >
            {(config.items || []).map((item, i) => (
              <FAQSixItem
                key={i}
                data={item}
                answerColor={config.answerTextColor}
                questionColor={config.questionTextColor}
              />
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
