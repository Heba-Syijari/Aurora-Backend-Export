import { Box, Container, Stack, Typography } from '@mui/material';
import { lighten, useTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { getPaletteColorsMap } from '../../common/colors';
import { FAQSevenData } from '../types';
import { FAQSevenItem } from './faq-seven-item';

export type FAQSevenProps = {
  data: FAQSevenData;
};

export default function FAQSeven({ data }: FAQSevenProps) {
  const { title, config } = data;

  const theme = useTheme();
  const paletteColorsMap = useMemo(() => getPaletteColorsMap(theme.palette), [theme.palette]);
  const backgroundColor = paletteColorsMap['background.neutral'];
  const lighterbackgroundColor = lighten(backgroundColor, 0.8);

  return (
    <Box
      sx={{
        pt: 11,
        pb: { xs: 6, md: 11 },
        paddingX: { lg: 15, md: 8, sm: 5, xs: 3 },
      }}
    >
      <Container
        id="FAQ"
        maxWidth="xl"
        sx={{
          borderRadius: 5,
          background: lighterbackgroundColor,
          padding: 5,
        }}
      >
        <Stack spacing={2.5} alignItems="center" textAlign="center">
          <Typography variant="h2" fontWeight={700} color={title.color} letterSpacing="-0.02em">
            {title.text}
          </Typography>
        </Stack>

        <Box sx={{ mt: 3 }}>
          <Stack spacing={4} justifyContent="space-evenly">
            {(config.items || []).map((item, i) => (
              <FAQSevenItem
                key={i}
                data={item}
                answerColor={config.answerTextColor}
                questionColor={config.questionTextColor}
              />
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
