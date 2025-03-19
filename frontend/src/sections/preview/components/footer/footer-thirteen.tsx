import Iconify from '@/components/iconify';
import { IMenu } from '@/types/menu';
import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { darken, useTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { LogoType } from '../../types';
import { getPaletteColorsMap } from '../common/colors';
import Socials from '../common/socials/socials';
import FooterMenus from './common/footer-menus';
import { FooterThirteenData } from './types';

export type FooterThirteenProps = {
  data: FooterThirteenData;
  menus: IMenu[];
  logoType: LogoType;
  logoValue: string;
};

export default function FooterThirteen({ data, menus, logoType, logoValue }: FooterThirteenProps) {
  const { title, subtitle, copyRights, menusCongig, socialsConfig } = data;

  const theme = useTheme();
  const paletteColorsMap = useMemo(() => getPaletteColorsMap(theme.palette), [theme.palette]);
  const secondary = paletteColorsMap['secondary.main'];
  const darkenSecondary = darken(secondary, 0.75);
  const primary = paletteColorsMap['primary.main'];
  const darkenPrimary = darken(primary, 0.75);
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
          style={{ display: 'block', height: 30, objectFit: 'cover' }}
        />
      )}
    </>
  );
  return (
    <Box
      position="relative"
      sx={{
        py: 5,
        mt: 5,
        background: darkenSecondary,
        overflow: 'hidden',
      }}
    >
      <Container>
        <Stack
          spacing={3}
          justifyContent="center"
          alignItems="center"
          direction="column"
          textAlign="center"
          minHeight={300}
        >
          <Grid
            width={1}
            container
            spacing={1}
            alignItems="center"
            justifyContent="center"
            maxWidth={900}
          >
            <Grid item sm={12} md={8} alignSelf="stretch">
              <FooterMenus
                menus={menus}
                menusCongig={menusCongig}
                isExpanded
                // backgroundColor={backgroundColor}
              />
            </Grid>

            <Grid item sm={12} md={3} alignSelf="stretch">
              <Stack
                spacing={2}
                alignItems="center"
                justifyContent="center"
                sx={{
                  p: 2,
                  width: 338,
                  height: 258,
                  borderRadius: 6,
                  background: darkenPrimary,
                }}
              >
                <Typography variant="body1" textTransform="capitalize" color={title.color}>
                  {title.text}
                </Typography>
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  sx={{
                    backgroundColor: '#fff',
                    borderRadius: 2,
                    padding: '1px',
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
                  <IconButton
                    sx={{
                      padding: '10px 10px',
                      borderRadius: '6px',
                      bgcolor: darkenSecondary,
                      color: 'common.white',
                    }}
                  >
                    <Iconify icon="mingcute:arrow-right-line" />
                  </IconButton>
                </Stack>
                <Typography variant="caption" textTransform="capitalize" color={subtitle.color}>
                  {subtitle.text}
                </Typography>
              </Stack>
            </Grid>
          </Grid>
          <Divider
            variant="middle"
            sx={{
              bgcolor: 'common.white',
              height: '1px',
              width: 1,
              mt: 2,
            }}
          />
          <Stack direction="row" alignItems="center" width={1} justifyContent="space-between">
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 2 }}>{renderLogo}</Box>
            <Socials
              socialsItems={socialsConfig.socials}
              socialIconsColor={darkenSecondary}
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
        </Stack>
      </Container>
    </Box>
  );
}
