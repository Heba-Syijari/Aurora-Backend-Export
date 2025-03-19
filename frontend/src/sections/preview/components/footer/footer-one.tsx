import { IMenu } from '@/types/menu';
import { Box, Container, Divider, Stack, Typography } from '@mui/material';
import { darken, useTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { getPaletteColorsMap } from '../common/colors';
import Socials from '../common/socials/socials';
import FooterMenus from './common/footer-menus';
import { FooterOneData } from './types';

export type FooterOneProps = {
  data: FooterOneData;
  menus: IMenu[];
};

export default function FooterOne({ data, menus }: FooterOneProps) {
  const { copyRights, menusCongig, projectDescription, socialsConfig } = data;
  const backgroundColor = 'background.neutral';
  const theme = useTheme();
  const paletteColorsMap = useMemo(() => getPaletteColorsMap(theme.palette), [theme.palette]);
  const bgColor = paletteColorsMap[backgroundColor];

  return (
    <Box sx={{ pt: 5, mt: 25, bgcolor: backgroundColor }}>
      <Container>
        <Stack spacing={3} alignItems="center" textAlign={{ xs: 'center', md: 'left' }}>
          <FooterMenus
            menus={menus}
            menusCongig={menusCongig}
            isExpanded={false}
            backgroundColor={backgroundColor}
          />
          <Divider
            variant="middle"
            sx={{
              bgcolor: 'common.white',
              height: '1px',
              width: 1,
            }}
          />
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
            color={projectDescription?.color}
          >
            {projectDescription?.text}
          </Typography>
          <Socials
            socialsItems={socialsConfig?.socials}
            socialIconsColor={socialsConfig?.socialIconsColor}
          />
        </Stack>
      </Container>
      <Box sx={{ py: 2, mt: 4, bgcolor: darken(bgColor, 0.1) }}>
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
            color={copyRights?.color}
          >
            {copyRights?.text}
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}
