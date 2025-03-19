import { Box, Container, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { useMemo } from 'react';
import { getPaletteColorsMap } from '../../common/colors';
import { FAQEightData } from '../types';
import { FAQEightItem } from './faq-eight-item';

export type FAQEightProps = {
  data: FAQEightData;
};

export default function FAQEight({ data }: FAQEightProps) {
  const { title, config } = data;

  const theme = useTheme();
  const paletteColorsMap = useMemo(() => getPaletteColorsMap(theme.palette), [theme.palette]);

  const primaryColor = paletteColorsMap['primary.main'];
  const secondaryColor = paletteColorsMap['secondary.main'];

  return (
    <Box
      sx={{
        paddingY: 7,
      }}
    >
      <Container>
        <Stack spacing={10} alignItems="center">
          <Box>
            <Stack spacing={2} alignItems="center">
              <Stack
                textAlign="center"
                alignItems="center"
                sx={{
                  '&::after': {
                    content: "' '",
                    opacity: 0.8,
                    background: `linear-gradient(to left, ${primaryColor}, ${secondaryColor})`,
                    width: '100px',
                    height: '5px',
                    borderRadius: 5,
                  },
                }}
              >
                <Typography
                  variant="h2"
                  fontWeight={700}
                  color={title.color}
                  maxWidth={{ xs: 1, lg: 150 }}
                  textAlign="center"
                  sx={{
                    maxWidth: '1000px',
                    p: 0.5,
                  }}
                >
                  {title.text}
                </Typography>
              </Stack>
            </Stack>
          </Box>

          <Box
            sx={{
              display: 'grid',
              placeItems: 'center',
              bgcolor: 'background.secondary',
              width: '100%',
              maxHeight: '100%',
              p: 2,
              borderRadius: 5,
            }}
          >
            <Stack
              spacing={2.5}
              sx={{
                height: '100%',
                width: '100%',
                // maxHeight: 374,
                overflowY: 'auto',
                transition: 'all ease-in-out 0.5s',
              }}
            >
              {(config.items || []).map((item, i) => (
                <FAQEightItem
                  key={i}
                  data={item}
                  answerColor={config.answerTextColor}
                  questionColor={config.questionTextColor}
                />
              ))}
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
