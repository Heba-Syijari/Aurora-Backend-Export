import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { OurClientsOneData } from '../types';
import { OurClientsOneItem } from './our-clients-one-item';

export type OurClientsOneProps = {
  data: OurClientsOneData;
};

export default function OurClientsOne({ data }: OurClientsOneProps) {
  const { config, titlePartOne, titlePartTwo, image } = data;
  const theme = useTheme();
  return (
    <Box
      sx={{
        py: 15,
        backgroundImage: `url('${image.url}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        // minHeight: 385, // ? edit this if not ok

        // ? height: 385, // edit this if not ok
        position: 'relative',
        '&::before': {
          content: "' '",
          position: 'absolute',
          opacity: 0.7,
          backgroundColor: theme.palette.background.neutral,

          // backgroundColor: 'background.neutral,', // edit this if not suitable
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        },
      }}
    >
      <Stack
        // direction="row"

        spacing={2}
        alignItems="center"
        justifyContent="center"
        // height="100%"
        sx={{
          // maxWidth: 385, // change it as much of the main Box hight
          // margin: 'auto',
          textAlign: 'center',
          minHeight: 385, // edit this if not ok

          px: { xs: 1 },
          position: 'relative',
        }}
      >
        {/* // ? stak direction row */}
        <Stack direction="row">
          <Typography
            variant="h1"
            letterSpacing="-1.2px"
            fontWeight={450}
            fontSize={{ xs: 35, lg: 55 }}
            color={titlePartOne.color}
            sx={{
              textTransform: 'capitalize',
              marginRight: { lg: '10', xs: '5' },
              // make Neon effacte
            }}
          >
            {`${titlePartOne.text}`}
          </Typography>
          <Typography
            variant="h1"
            letterSpacing="-1.2px"
            fontWeight={450}
            fontSize={{ xs: 35, lg: 55 }}
            color={titlePartTwo.color}
            sx={{
              textTransform: 'capitalize',
            }}
          >
            {titlePartTwo.text}
          </Typography>
        </Stack>
        <Box sx={{ mt: 1 }}>
          <Container>
            <Grid
              container
              columnSpacing={4}
              rowSpacing={3}
              justifyContent="center"
              alignItems="center"
            >
              {(config.clients || []).map((img , i) => (
                <Grid
                  key={`${i  }clien`}
                  item
                  xs={24 / config.clients.length}
                  sm={16 / config.clients.length}
                  md={12 / config.clients.length}
                  lg={12 / config.clients.length}
                  // xl={12 / config.clients.length}
                >
                  <OurClientsOneItem data={img} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Stack>
    </Box>
  );
}
