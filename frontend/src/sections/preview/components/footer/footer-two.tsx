import { IMenu } from '@/types/menu';
import { Box, Button, Container, Divider, Stack, Typography } from '@mui/material';
import { lighten, useTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { getPaletteColorsMap } from '../common/colors';
import Socials from '../common/socials/socials';
import FooterMenus from './common/footer-menus';
import { FooterTwoData } from './types';

export type FooterTwoProps = {
  data: FooterTwoData;
  menus: IMenu[];
};

export default function FooterTwo({ data, menus }: FooterTwoProps) {
  const { copyRights, menusCongig, socialsConfig } = data;
  const backgroundColor = 'background.neutral';
  const theme = useTheme();
  const paletteColorsMap = useMemo(() => getPaletteColorsMap(theme.palette), [theme.palette]);
  const baseColor = paletteColorsMap[backgroundColor];
  const lighterColor1 = lighten(baseColor, 0.2);
  const lighterColor2 = lighten(baseColor, 0.4);
  return (
    <Box
      sx={{
        pt: 5,
        mt: 5,
        background: `linear-gradient(to left, ${baseColor}, ${lighterColor1}, ${lighterColor2})`,
      }}
    >
      <Container>
        <Stack
          spacing={3}
          justifyContent="center"
          alignItems="flex-start"
          direction="row"
          textAlign="center"
        >
          <FooterMenus
            menus={menus}
            menusCongig={menusCongig}
            isExpanded
            backgroundColor={backgroundColor}
          />
          <Stack>
            <Button
              sx={{
                color: menusCongig.headingColor,
              }}
              variant="text"
            >
              Follow Us
            </Button>
            <Socials
              socialsItems={socialsConfig.socials}
              socialIconsColor={socialsConfig.socialIconsColor}
            />
          </Stack>
        </Stack>
        <Divider
          variant="middle"
          sx={{
            bgcolor: 'common.white',
            height: '1px',
            width: 1,
            mt: 2,
          }}
        />
      </Container>
      <Box sx={{ pb: 2 }}>
        <Stack alignItems="center" textAlign={{ xs: 'center', md: 'left' }}>
          <Typography
            variant="body2"
            mt={2}
            sx={{
              display: '-webkit-box',
              overflow: 'hidden',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 4,
              textOverflow: 'ellipsis',
              overflowY: 'hidden',
              textAlign: 'center',
              mx: 1,
              maxWidth: 600,
            }}
            color={copyRights.color}
          >
            {copyRights.text}
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}
