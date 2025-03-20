import { Box, List } from '@mui/material';

import { TermsAndServicesFiveData } from '../types';
import { TermsAndServicesItem } from './terms-and-services-item';

export type TermsAndServicesFiveProps = {
  data: TermsAndServicesFiveData;
};

export default function TermsAndServicesFour({ data }: TermsAndServicesFiveProps) {
  const { config } = data;

  return (
    <Box sx={{ pt: 11, pb: { xs: 6, md: 11 }, paddingX: 10 }}>
      <Box sx={{ mt: 8 }}>
        <List sx={{ pl: 2 }}>
          {(config.items || []).map((item, i) => (
            <li key={i} style={{ marginBottom: '16px' }}>
              <TermsAndServicesItem
                index={i}
                data={item}
                titleColor={config.titleTextColor}
                descriptionColor={config.descriptionTextColor}
              />
            </li>
          ))}
        </List>
      </Box>
    </Box>
  );
}
