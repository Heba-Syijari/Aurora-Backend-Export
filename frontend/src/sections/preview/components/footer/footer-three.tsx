import Iconify from '@/components/iconify';
import { IMenu } from '@/types/menu';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { darken, useTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { TextData } from '../../types';
import { getPaletteColorsMap } from '../common/colors';
import Socials from '../common/socials/socials';
import FooterMenus from './common/footer-menus';
import { FooterThreeData } from './types';

export type FooterThreeProps = {
  data: FooterThreeData;
  menus: IMenu[];
};

export default function FooterTwo({ data, menus }: FooterThreeProps) {
  const { copyRights, menusCongig, address, email, number, socialsConfig } = data;
  const backgroundColor = 'background.neutral';
  const theme = useTheme();
  const paletteColorsMap = useMemo(() => getPaletteColorsMap(theme.palette), [theme.palette]);
  const bgColor = paletteColorsMap[backgroundColor];
  const contactInfo = (icon: string, info: TextData, label: string, itemType: string) => (
    <Stack spacing={2} direction="row" alignItems="center" justifyContent="center">
      <Iconify icon={icon} width={15} color="text.secondary" />
      <Typography variant="body2" color={info.color} textAlign="left" minWidth={100}>
        {info.text}
      </Typography>
    </Stack>
  );
  return (
    <>
      <Box sx={{ px: 2, pb: 0, pt: 2, bgcolor: 'primary.main', mt: 5 }}>
        <Stack
          alignItems="center"
          spacing={4}
          justifyContent="space-between"
          direction={{ xs: 'column', lg: 'row', md: 'row', sm: 'row' }}
          textAlign={{ xs: 'center', md: 'left' }}
        >
          <Typography variant="body2" color="common.white" mt={-1}>
            Get connected with us on social networks!
          </Typography>
          <Socials
            socialsItems={socialsConfig.socials}
            socialIconsColor={socialsConfig.socialIconsColor}
          />
        </Stack>
      </Box>
      <Box sx={{ pt: 5, bgcolor: backgroundColor }}>
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
              underLineColor="primary.main"
            />
            <Stack alignItems="flex-start" spacing={2} justifyContent="center">
              <Button
                sx={{
                  color: menusCongig.headingColor,
                  textAlign: 'left',
                  ml: -1.3,
                  position: 'relative',
                  display: 'inline-block',
                }}
                variant="text"
              >
                Contact
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: '-1px',
                    width: '50%',
                    height: '2px',
                    backgroundColor: 'primary.main',
                  }}
                />
              </Button>
              {contactInfo('maki:home', address, 'Address', 'address')}
              {contactInfo('mdi:email', email, 'Email', 'email')}
              {contactInfo('entypo:phone', number, 'Number', 'number')}
            </Stack>
          </Stack>
        </Container>
        <Box sx={{ pb: 2, mt: 2, bgcolor: darken(bgColor, 0.1) }}>
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
    </>
  );
}
