import { Box, Chip, Container, Stack, Typography } from '@mui/material';
import { FAQFourData } from '../types';
import { FAQFourItem } from './faq-four-item';

export type FAQFourProps = {
  data: FAQFourData;
};

export default function FAQFour({ data }: FAQFourProps) {
  const { title, description, config } = data;

  return (
    <Box sx={{ pt: 11, pb: { xs: 6, md: 11 }, bgcolor: 'common.neutral' }}>
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

        <Stack spacing={4} sx={{ mt: 8 }}>
          {(config.items || []).map((item, i) => (
            <FAQFourItem
              key={i}
              data={item}
              answerColor={config.answerTextColor}
              questionColor={config.questionTextColor}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
