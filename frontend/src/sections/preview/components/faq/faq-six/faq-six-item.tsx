import Iconify from '@/components/iconify';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { getPaletteColorsMap } from '../../common/colors';
import { FAQItemData } from '../types';

type Props = {
  data: FAQItemData;
  questionColor: string;
  answerColor: string;
};

export function FAQSixItem({ data, answerColor, questionColor }: Props) {
  const { question, answer } = data;
  const theme = useTheme();
  const paletteColorsMap = useMemo(() => getPaletteColorsMap(theme.palette), [theme.palette]);
  const baseColor = paletteColorsMap['common.neutral'];
  const lighterColor = alpha(baseColor, 0.5);

  return (
    <Accordion
      sx={{
        background: 'none',
        '&:before': { display: 'none' },
        borderBottom: 1,
        borderBottomColor: lighterColor,

        paddingY: 1,
      }}
      elevation={0}
      disableGutters
    >
      <AccordionSummary
        expandIcon={<Iconify icon="uil:arrow-circle-up" color="common.white" width={24} />}
      >
        <Typography
          variant="h5"
          color={questionColor}
          sx={{
            '&::before': {
              content: '"."',
              backgroundColor: questionColor,
              color: questionColor,
              borderRadius: '5px',
              marginRight: 5,
            },
          }}
        >
          {question}
        </Typography>
      </AccordionSummary>

      <AccordionDetails>
        <Typography variant="body1" color={answerColor}>
          {answer}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
