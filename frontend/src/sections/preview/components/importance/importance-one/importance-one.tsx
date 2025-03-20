import { Box, Chip, Container, Grid, Stack, Typography } from '@mui/material';
import { ImportanceOneData } from '../types';
import { ImportanceOneItem } from './importance-one-item';

export type ImportanceOneProps = {
  data: ImportanceOneData;
};

export default function ImportanceOne({ data }: ImportanceOneProps) {
  const { topic, title, items } = data;

  return (
    <Box sx={{ bgcolor: 'common.white', py: 10 }}>
      <Container>
        <Stack spacing={2} alignItems="flex-start" sx={{ mb: 2.5 }}>
          <Chip label={topic.text} />

          <Typography
            variant="h3"
            fontSize={{ xs: 32, md: 42 }}
            fontWeight={500}
            lineHeight="52px"
            letterSpacing="-4px"
            color={title.color}
            maxWidth={500}
            sx={{
              textDecoration: 'underline',
              textDecorationColor: (theme) => theme.palette.primary.main,
            }}
          >
            {title.text}
          </Typography>
        </Stack>

        <Grid container columnSpacing={12} rowSpacing={{ xs: 4, md: 0 }}>
          {items.map((item, i) => (
            <Grid key={i} item xs={12} sm={6} md={4}>
              <ImportanceOneItem data={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
