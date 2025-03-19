import Iconify from '@/components/iconify';
import { IMenu } from '@/types/menu';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { darken, lighten, useTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { LogoType } from '../../types';
import { getPaletteColorsMap } from '../common/colors';
import Socials from '../common/socials/socials';
import FooterMenus from './common/footer-menus';
import { FooterElevenData } from './types';

export type FooterElevenProps = {
  data: FooterElevenData;
  menus: IMenu[];
  logoType: LogoType;
  logoValue: string;
};

export default function FooterEleven({ data, menus, logoType, logoValue }: FooterElevenProps) {
  const { button, title, subtitle, copyRights, menusCongig, socialsConfig } = data;

  const theme = useTheme();
  const paletteColorsMap = useMemo(() => getPaletteColorsMap(theme.palette), [theme.palette]);
  const baseColor = paletteColorsMap[button.color];
  const lighterColor = lighten(baseColor, 0.6);
  const backgroundColor = 'background.neutral';
  const bgColor = paletteColorsMap[backgroundColor];
  const darkenColor = darken(bgColor, 0.05);
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
      position="relative"
      sx={{
        py: 5,
        // mt: 5,
        background: `linear-gradient(to bottom, ${darkenColor} 50%, ${bgColor} 50%)`,
        overflow: 'hidden',
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '50%',
          left: 0,
          width: '100%',
          height: '100px',
          backgroundColor: bgColor,
          borderTopLeftRadius: '50%',
          borderTopRightRadius: '50%',
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
          <Stack
            spacing={2}
            alignItems="center"
            justifyContent="center"
            sx={{
              p: 2,
              borderRadius: 6,
              width: '70%',
              background: `linear-gradient(135deg,${lighterColor}, ${baseColor})`,
            }}
          >
            <Typography variant="h5" textTransform="capitalize" color={title.color}>
              {title.text}
            </Typography>
            <Typography variant="body1" textTransform="capitalize" color={subtitle.color}>
              {subtitle.text}
            </Typography>
            <Button
              variant="text"
              href={button.linkTo}
              endIcon={<Iconify icon={button.icon} color={button.color} />}
              sx={{
                padding: '10px 28px',
                borderRadius: '6px',
                width: 200,
                backgroundColor: button.backgroundColor,
                fontSize: 18,
                '&:hover': {
                  backgroundColor: button.backgroundColor,
                },
              }}
            >
              <Typography
                sx={{
                  background: `linear-gradient(135deg, ${baseColor}, ${lighterColor})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {button.text}
              </Typography>
            </Button>
          </Stack>

          <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 2 }}>{renderLogo}</Box>

          <FooterMenus
            menus={menus}
            menusCongig={menusCongig}
            isExpanded={false}
            // backgroundColor={backgroundColor}
          />
          <Socials
            socialsItems={socialsConfig.socials}
            socialIconsColor={darkenColor}
            isRectanguler
          />
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
