import Iconify from '@/components/iconify';
import { IMenu } from '@/types/menu';
import { Box, Button, Container, Divider, Stack, TextField, Typography } from '@mui/material';
import { lighten, useTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { LogoType } from '../../types';
import { getPaletteColorsMap } from '../common/colors';
import Socials from '../common/socials/socials';
import FooterMenus from './common/footer-menus';
import { FooterTwelveData } from './types';

export type FooterTwelveProps = {
  data: FooterTwelveData;
  menus: IMenu[];
  logoType: LogoType;
  logoValue: string;
};

export default function FooterTwelve({ data, logoType, logoValue, menus }: FooterTwelveProps) {
  const { button, title, subtitle, copyRights, menusCongig, socialsConfig } = data;

  const theme = useTheme();
  const paletteColorsMap = useMemo(() => getPaletteColorsMap(theme.palette), [theme.palette]);
  const baseColor = paletteColorsMap[button.backgroundColor];
  const lighterColor = lighten(baseColor, 0.6);
  const backgroundColor = 'background.neutral';

  const renderLogo = (
    <>
      {logoType === 'text' && (
        <Typography variant="h6" component="span" fontWeight={600} color="common.white">
          {logoValue}
        </Typography>
      )}

      {logoType === 'image' && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={logoValue}
          alt="logo"
          style={{ display: 'block', height: 35, objectFit: 'cover' }}
        />
      )}
    </>
  );
  return (
    <Box
      sx={{
        pt: 5,
        pb: 2,
        mt: 5,
        backgroundColor,
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <Stack
          spacing={2}
          justifyContent="center"
          alignItems="center"
          direction="column"
          textAlign="center"
          minHeight={300}
        >
          <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 2 }}>{renderLogo}</Box>
          <Typography variant="h5" textTransform="capitalize" color={title.color}>
            {title.text}
          </Typography>
          <Typography variant="body2" textTransform="capitalize" color={subtitle.color}>
            {subtitle.text}
          </Typography>

          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            sx={{
              backgroundColor: '#fff',
              borderRadius: 2,
              padding: '6px',
              width: '100%',
              maxWidth: 500,
            }}
          >
            <TextField
              placeholder="Your Mail"
              variant="standard"
              InputProps={{
                disableUnderline: true,
              }}
              sx={{
                flex: 1,
                marginLeft: '8px',
              }}
            />
            <Button
              variant="text"
              href={button.linkTo}
              endIcon={<Iconify icon={button.icon} />}
              sx={{
                padding: '5px 28px',
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
          <Divider
            variant="middle"
            sx={{
              bgcolor: 'common.white',
              height: '1px',
              width: 1,
              mt: 2,
            }}
          />
          <Stack direction="row" justifyContent="space-between" width={1} alignItems="center">
            <Socials
              socialsItems={socialsConfig.socials}
              socialIconsColor={socialsConfig.socialIconsColor}
              isRectanguler
            />

            <FooterMenus
              menus={menus}
              menusCongig={menusCongig}
              isExpanded={false}
              // backgroundColor={backgroundColor}
            />
          </Stack>

          <Typography
            variant="body2"
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
      </Container>
    </Box>
  );
}
