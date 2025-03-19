import { IMenu } from '@/types/menu';
import { LoadingButton } from '@mui/lab';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { darken, useTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { getPaletteColorsMap } from '../common/colors';
import Socials from '../common/socials/socials';
import FooterMenus from './common/footer-menus';
import { FooterFiveData } from './types';

export type FooterFiveProps = {
  data: FooterFiveData;
  menus: IMenu[];
};

export default function FooterFive({ data, menus }: FooterFiveProps) {
  const { copyRights, menusCongig, button, subtitle, title, socialsConfig } = data;
  const backgroundColor = 'background.neutral';
  const theme = useTheme();
  const paletteColorsMap = useMemo(() => getPaletteColorsMap(theme.palette), [theme.palette]);
  const bgColor = paletteColorsMap[backgroundColor];
  const renderTopSerction = (
    <Stack
      sx={{
        position: 'relative',
      }}
    >
      <Box
        sx={{
          pb: 2,
          mt: 2,
          borderTopRightRadius: '5px',
          borderTopLeftRadius: '5px',
          height: 100,
          boxShadow: '0px 1px 9px rgba(0, 0, 0, 0.1)',
        }}
      />
      <Box
        sx={{
          bgcolor: darken(bgColor, 0.1),
          borderRadius: '5px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '16px 24px',
          maxWidth: '900px',
          width: '70%',
          position: 'absolute',
          bottom: -50,
          left: '50%',
          transform: 'translateX(-50%)',
          boxShadow: '-18px -20px 0px rgba(0, 0, 0, 0.6)',
        }}
      >
        <Box>
          <Typography
            variant="h6"
            sx={{
              display: '-webkit-box',
              overflow: 'hidden',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 1,
              textOverflow: 'ellipsis',
              overflowY: 'hidden',
              textAlign: 'left',
            }}
            color={title.color}
          >
            {title.text}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              display: '-webkit-box',
              overflow: 'hidden',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 1,
              textOverflow: 'ellipsis',
              overflowY: 'hidden',
              textAlign: 'left',
            }}
            color={subtitle.color}
          >
            {subtitle.text}
          </Typography>
        </Box>
        <LoadingButton
          variant="contained"
          type="submit"
          sx={{
            padding: '10px 5px',
            color: button.color,
            backgroundColor: button.backgroundColor,
            maxWidth: 150,
            '&:hover': {
              backgroundColor: button.color,
              color: button.backgroundColor,
              outline: `1px solid`,
              outlineColor: button.backgroundColor,
              outlineOffset: -1,
            },
            width: '100%',
          }}
        >
          {button.text}
        </LoadingButton>
      </Box>
    </Stack>
  );
  return (
    <>
      {renderTopSerction}
      <Box sx={{ pt: 10, pb: 5, bgcolor: backgroundColor }}>
        <Container>
          <Stack
            spacing={3}
            justifyContent="center"
            alignItems="flex-start"
            direction="row"
            textAlign="center"
          >
            <Typography
              variant="body1"
              mt={0.7}
              sx={{
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 4,
                textOverflow: 'ellipsis',
                overflowY: 'hidden',
                textAlign: 'center',
                mx: 1,
                maxWidth: 100,
                textTransform: 'capitalize',
              }}
              color={copyRights.color}
            >
              {copyRights.text}
            </Typography>

            <FooterMenus menus={menus} menusCongig={menusCongig} isExpanded />
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
                Follow US
              </Button>
              <Socials
                socialsItems={socialsConfig.socials}
                socialIconsColor={socialsConfig.socialIconsColor}
              />
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
