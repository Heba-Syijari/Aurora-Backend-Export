import { Box, Container, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { PrivacyPolicyOneData } from '../types';
import { PrivacyPolicyItem } from './privacy-policy-item';

export type PrivacyPolicyOneProps = {
  data: PrivacyPolicyOneData;
};

export default function PrivacyPolicyOne({ data }: PrivacyPolicyOneProps) {
  const { title, description, config } = data;
  const theme = useTheme();
  return (
    <Box
      sx={{
        pt: 11,
        pb: { xs: 6, md: 11 },
        backgroundColor: `${theme.palette.background.neutral}`,

        // bgcolor: 'common.neutral'
      }}
    >
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
          <Stack spacing={4}>
            {(config.items || []).map((item, i) => (
              <PrivacyPolicyItem
                key={i}
                data={item}
                titleColor={config.titleTextColor}
                descriptionColor={config.descriptionTextColor}
              />
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
