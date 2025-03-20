import { Box, Container, List, Stack, Typography } from '@mui/material';
import { PrivacyPolicyFourData } from '../types';
import { PrivacyPolicyItem } from './privacy-policy-item';

export type PrivacyPolicyFourProps = {
  data: PrivacyPolicyFourData;
};

export default function PrivacyPolicyFour({ data }: PrivacyPolicyFourProps) {
  const { title, description, config } = data;

  return (
    <Box sx={{ pt: 11, pb: { xs: 6, md: 11 }, bgcolor: 'common.neutral' }}>
      <Container>
        <Stack spacing={2.5} alignItems="center" textAlign="center">
          <Typography variant="h2" fontWeight={700} color={title.color} letterSpacing="-0.02em">
            {title.text}
          </Typography>
          <Typography variant="body1" fontSize={20} color={description.color} maxWidth={920}>
            {description.text}
          </Typography>
        </Stack>

        <Box sx={{ mt: 8 }}>
          <List sx={{ pl: 2 }}>
            {(config.items || []).map((item, i) => (
              <li key={i} style={{ marginBottom: '16px' }}>
                <PrivacyPolicyItem
                  index={i}
                  data={item}
                  titleColor={config.titleTextColor}
                  descriptionColor={config.descriptionTextColor}
                />
              </li>
            ))}
          </List>
        </Box>
      </Container>
    </Box>
  );
}
