import { Box, Chip, Grid, Stack, Typography } from '@mui/material';
import { FAQTwoData } from '../types';
import { FAQTwoContent } from './faq-two-content';
import { FAQTwoItem } from './faq-two-item';

export type FAQTwoProps = {
  data: FAQTwoData;
};

export default function FAQTwo({ data }: FAQTwoProps) {
  const { title, description, config } = data;

  return (
    <Box>
      <FAQTwoContent>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Stack spacing={2} alignItems="flex-start" sx={{ height: '100%' }}>
              <Chip label="FAQs" />

              <Typography variant="h2" fontWeight={700} color={title.color} letterSpacing="-0.02em">
                {title.text}
              </Typography>

              <Typography variant="body1" fontSize={20} color={description.color}>
                {description.text}
              </Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Stack spacing={2.5} sx={{ height: '100%', maxHeight: 374, overflowY: 'auto' }}>
              {(config.items || []).map((item, i) => (
                <FAQTwoItem
                  key={i}
                  data={item}
                  answerColor={config.answerTextColor}
                  questionColor={config.questionTextColor}
                />
              ))}
            </Stack>
          </Grid>
        </Grid>
      </FAQTwoContent>
    </Box>
  );
}
