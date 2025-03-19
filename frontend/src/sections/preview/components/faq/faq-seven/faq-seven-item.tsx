import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import React from 'react';
// eslint-disable-next-line import/extensions
import Iconify from '@/components/iconify';
import { FAQItemData } from '../types';

type Props = {
  data: FAQItemData;
  questionColor: string;
  answerColor: string;
};

export function FAQSevenItem({ data, answerColor, questionColor }: Props) {
  const { question, answer } = data;

  // to handle the Accordion status if it is expanded or not
  const [expanded, setExpanded] = React.useState<boolean>(false);
  const handleChange = () => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded);
  };
  const expandedIcon = (
    <Iconify icon="emojione-monotone:up-arrow" color="secondary.main" width={24} />
  );
  const unExpandedIcon = <Iconify icon="ei:arrow-right" color="secondary.main" width={35} />;

  return (
    <Accordion
      expanded={expanded}
      onChange={handleChange()}
      sx={{
        boxShadow: 1,
        backgroundColor: 'common.white',
        borderRadius: '15px!important',
        p: 1,
        '&:before': { display: 'none' },
        '&.Mui-expanded': {
          border: 2,
          borderColor: 'secondary.main',
          margin: 0,
        },
      }}
    >
      <AccordionSummary
        // {expanded ?:}
        expandIcon={expanded ? expandedIcon : unExpandedIcon}
      >
        <Typography variant="h5" fontWeight={500} color={questionColor}>
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
