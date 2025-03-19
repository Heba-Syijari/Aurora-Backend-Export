import { Box, Chip, Stack, Typography } from '@mui/material';
import { FAQThreeData } from '../types';
import { FAQThreeContent } from './faq-three-content';
import { FAQThreeItem } from './faq-three-item';

export type FAQThreeProps = {
  data: FAQThreeData;
};

export default function FAQThree({ data }: FAQThreeProps) {
  const { title, description, config } = data;

  return (
    <FAQThreeContent>
      <Stack spacing={3} alignItems="flex-start">
        <Box>
          <Chip label="FAQs" />

          <Typography variant="h2" fontWeight={700} color={title.color} letterSpacing="-0.02em">
            {title.text}
          </Typography>
        </Box>

        <Typography variant="body1" fontSize={20} color={description.color}>
          {description.text}
        </Typography>
      </Stack>

      <Stack spacing={2.5} sx={{ mt: 5 }}>
        {(config.items || []).map((item, i) => (
          <FAQThreeItem
            key={i}
            data={item}
            answerColor={config.answerTextColor}
            questionColor={config.questionTextColor}
          />
        ))}
      </Stack>
    </FAQThreeContent>
  );
}
