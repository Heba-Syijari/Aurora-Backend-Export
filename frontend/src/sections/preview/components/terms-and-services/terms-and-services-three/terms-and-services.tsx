import { Box, Container, Stack, Tab, Tabs, Typography } from '@mui/material';
import { useState } from 'react';
import { TermsAndServicesThreeData } from '../types';

type TabPanelProps = {
  children?: React.ReactNode;
  index: number;
  value: number;
};

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export type TermsAndServicesThreeProps = {
  data: TermsAndServicesThreeData;
};

export default function TermsAndServicesThree({ data }: TermsAndServicesThreeProps) {
  const { title, description, config } = data;
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

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

        <Box sx={{ mt: 8, display: 'flex' }}>
          <Tabs
            orientation="vertical"
            value={selectedTab}
            onChange={handleTabChange}
            sx={{ borderRight: 1, borderColor: 'divider', minWidth: 200 }}
          >
            {(config.items || []).map((item, index) => (
              <Tab
                key={index}
                label={item.title}
                {...a11yProps(index)}
                sx={{ textAlign: 'left', alignItems: 'flex-start' }}
              />
            ))}
          </Tabs>

          <Box sx={{ flexGrow: 1, pl: 3 }}>
            {(config.items || []).map((item, index) => (
              <TabPanel key={index} value={selectedTab} index={index}>
                <Typography variant="body1" color={config.descriptionTextColor}>
                  {item.description}
                </Typography>
              </TabPanel>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
