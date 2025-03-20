import Iconify from '@/components/iconify';
import Image from '@/components/image';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { lighten, useTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { LogoType } from '../../types';
import { getPaletteColorsMap } from '../common/colors';
import { MessageWithActionOneData } from './types';

export type MessageWithActionOneProps = {
  data: MessageWithActionOneData;

  logoType: LogoType;
  logoValue: string;
};

export default function MessageWithActionOne({
  data,
  logoType,
  logoValue,
}: MessageWithActionOneProps) {
  const { button, backgroundImage, projectDescription, projectTitle, image } = data;
  const theme = useTheme();
  const paletteColorsMap = useMemo(() => getPaletteColorsMap(theme.palette), [theme.palette]);
  const baseColor = paletteColorsMap[button.backgroundColor];
  const lighterColor = lighten(baseColor, 0.6);
  return (
    <Box
      position="relative"
      sx={{
        py: 8,
        my: 7,
        marginX: 4,
        borderRadius: 10,
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${backgroundImage.url})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(60%)',
          zIndex: 0,
        },
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <Stack
          spacing={3}
          justifyContent="center"
          alignItems="center"
          direction="column"
          textAlign="center"
          minHeight={300}
        >
          <Stack sx={{ textAlign: 'center', mb: 2 }}>
            <Image
              alt={image.alt}
              src={image.url}
              sx={{
                height: 1,
                width: 1,
                maxHeight: '150px',
                objectFit: 'cover',
                borderRadius: '2px',
              }}
            />
          </Stack>

          <Typography variant="h3" textTransform="capitalize" color={projectTitle.color}>
            {projectTitle.text}
          </Typography>

          <Typography
            variant="h4"
            fontWeight={400}
            maxWidth={700}
            textTransform="capitalize"
            color={projectDescription.color}
          >
            {projectDescription.text}
          </Typography>

          <Button
            variant="text"
            href={button.linkTo}
            endIcon={<Iconify icon={button.icon} />}
            sx={{
              padding: '10px 28px',
              borderRadius: '6px',
              color: button.color,
              background: `linear-gradient(135deg, ${baseColor}, ${lighterColor})`,
              fontSize: 18,
              '&:hover': {
                background: `linear-gradient(135deg, ${baseColor}, ${lighterColor})`,
              },
            }}
          >
            {button.text}
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
