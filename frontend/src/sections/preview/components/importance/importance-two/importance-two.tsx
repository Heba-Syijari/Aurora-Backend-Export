import { Box, Chip, Container, Grid, Stack, Tab, Tabs, Typography } from '@mui/material';
import { useState } from 'react';
import { ImportanceTwoData } from '../types';
import { ImportanceTwoItem } from './importance-two-item';

export type ImportanceTwoProps = {
  data: ImportanceTwoData;
};

export default function ImportanceTwo({ data }: ImportanceTwoProps) {
  const { topic, title, items } = data;

  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTabIndex(newValue);
  };

  return (
    <Box sx={{ bgcolor: 'common.white', py: 10 }}>
      <Container>
        <Grid container justifyContent="space-between" rowSpacing={{ xs: 4, md: 0 }}>
          <Grid item xs={12} md={8}>
            <Stack spacing={5} alignItems={{ xs: 'center', md: 'flex-start' }}>
              <Chip label={topic.text} />

              <Typography
                variant="h3"
                fontWeight={500}
                color={title.color}
                textAlign={{ xs: 'center', md: 'initial' }}
              >
                {title.text}
              </Typography>

              <Box>
                <Tabs
                  value={selectedTabIndex}
                  onChange={handleChange}
                  variant="scrollable"
                  TabIndicatorProps={{ sx: { display: 'none' } }}
                  sx={{ bgcolor: 'primary.main', borderRadius: '48px', p: 1.5 }}
                >
                  {items.map((feature, i) => (
                    <Tab
                      key={i}
                      label={feature.title.text}
                      sx={{
                        py: 2,
                        px: 3,
                        borderRadius: '32px',
                        color: 'common.white',
                        transition: 'all .15s',
                        '&.Mui-selected': {
                          bgcolor: 'common.white',
                          color: 'primary.main',
                        },
                      }}
                    />
                  ))}
                </Tabs>
              </Box>
            </Stack>
          </Grid>

          <Grid item xs={12} md={3}>
            {items.map((item, i) => (
              <Box key={i} sx={{ display: selectedTabIndex !== i ? 'none' : 'block' }}>
                <ImportanceTwoItem data={item} />
              </Box>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
