import { Box, Button, Stack, Typography } from '@mui/material';

import Iconify from '@/components/iconify/iconify';
import { HeroEightData } from '../types';

type Props = {
  data: HeroEightData;
};

export default function HeroEigth({ data }: Props) {
  // hsn edits : to get the theme color so I can use them inside the UI
  const { button, description, title, image } = data;

  return (
    <Box
      sx={{
        backgroundImage: `url('${image.url}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: 600,
        maxHeight: 600,
        margin: 2,
        padding: 2, // 4 * 8px matching to the layout by hsn
        borderRadius: 5, // matching to the layout by hsn
      }}
    >
      <Stack
        spacing={3}
        alignItems="center"
        justifyContent="center"
        height="100%"
        sx={{
          maxWidth: 860,
          margin: 'auto',
          textAlign: 'center',
          px: { xs: 1 },
          position: 'relative',
        }}
      >
        <Typography
          variant="h1"
          letterSpacing="-1.2px"
          fontWeight={700}
          fontSize={{ xs: 38, lg: 50 }}
          color={title.color}
          sx={{
            textTransform: 'capitalize',
          }}
        >
          {title.text}
        </Typography>
        <Typography
          variant="h5" // ? edit this if not ok
          fontWeight={500}
          color={description.color}
          maxWidth={720}
          sx={{
            textTransform: 'capitalize',
          }}
        >
          {description.text}
        </Typography>

        <Box sx={{ mt: 1 }}>
          <Button
            variant="contained"
            href={button.linkTo}
            startIcon={<Iconify icon={button.icon} width={25} height={25} color={button.color} />} // to add icon in the start of btn
            sx={{
              padding: '10px 28px',
              borderRadius: '6px',
              color: button.color,
              backgroundColor: button.backgroundColor,
              // background: `# FFFFFF `,
              fontSize: 18,
              '&:hover': {
                color: button.backgroundColor,
                // backgroundColor: button.color,
                // background: `-webkit-linear-gradient(45deg, ${theme.palette.primary.main}  30%, #FFFFFF  90%)`,
              },
            }}
          >
            {button.text}
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
