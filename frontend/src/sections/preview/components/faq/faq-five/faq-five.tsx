import { Box, Container, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { FAQFiveData } from '../types';
import { FAQFiveItem } from './faq-five-item';

export type FAQFiveProps = {
  data: FAQFiveData;
};

export default function FAQFive({ data }: FAQFiveProps) {
  const { title, description, config } = data;
  const theme = useTheme();
  // const paletteColorsMap = useMemo(() => getPaletteColorsMap(theme.palette), [theme.palette]);
  // const baseColor = paletteColorsMap['common.neutral'];
  return (
    <Box
      sx={{
        paddingY: 5,
      }}
    >
      <Container>
        <Stack spacing={10} alignItems="center">
          <Box>
            <Stack spacing={2} alignItems="center">
              <Typography variant="body1" fontSize={20} color={description.color}>
                {description.text}
              </Typography>

              <Typography
                sx={{
                  backgroundImage: `linear-gradient(45deg,${theme.palette.primary.main} 0%,${theme.palette.secondary.main} 90%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
                variant="h2"
                fontWeight={700}
                color={title.color}
                letterSpacing="-0.02em"
              >
                {title.text}
              </Typography>
            </Stack>
          </Box>

          <Box
            sx={{
              display: 'grid',
              placeItems: 'center',
              bgcolor: 'background.secondary',
              maxWidth: '80%',
              maxHeight: '100%',
              p: 2,
              borderTop: 5,
              borderTopColor: 'secondary.main',
              borderRadius: 1,
            }}
          >
            <Stack
              spacing={2.5}
              sx={{
                height: '100%',
                // maxHeight: 374,
                overflowY: 'auto',
                transition: 'all ease-in-out 0.5s',
              }}
            >
              {(config.items || []).map((item, i) => (
                <FAQFiveItem
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
