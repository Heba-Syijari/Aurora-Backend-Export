import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { IMenu } from '@/types/menu';
import { LogoType } from '../../types';
import Socials from '../common/socials/socials';
import FooterMenus from './common/footer-menus';
import { FooterFourteenData } from './types';

export type FooterFourteenProps = {
  data: FooterFourteenData;
  menus: IMenu[];
  logoType: LogoType;
  logoValue: string;
};

export default function FooterFourteen({ data, menus, logoType, logoValue }: FooterFourteenProps) {
  const { copyRights, menusCongig, socialsConfig } = data;
  const backgroundColor = 'background.neutral';
  const theme = useTheme();

  const renderLogo = (
    <>
      {logoType === 'text' && (
        <Typography variant="h6" component="span" fontWeight={600} color="common.white">
          {logoValue}
        </Typography>
      )}

      {logoType === 'image' && (
        <img
          src={logoValue}
          alt="logo"
          style={{
            display: 'block',
            height: 60,
            objectFit: 'fill',
          }}
        />
      )}
    </>
  );

  return (
    <Box
      sx={{
        p: 5,
        mt: 5,
        background: theme.palette.background.secondary,
      }}
    >
      <Container>
        <Stack
          spacing={3}
          justifyContent="space-between"
          alignItems="center"
          direction="row"
          textAlign="center"
        >
          <Box>
            {renderLogo}
            <Stack>
              <Typography
                variant="body2"
                mt={1}
                marginLeft={0}
                sx={{
                  display: '-webkit-box',
                  overflow: 'hidden',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 4,
                  textOverflow: 'ellipsis',
                  overflowY: 'hidden',
                  textAlign: 'center',
                  mx: { lg: -8, sm: -18 },
                  maxWidth: 600,
                }}
                color={copyRights.color}
              >
                {copyRights.text}
              </Typography>
            </Stack>
          </Box>
          <FooterMenus
            menus={menus}
            menusCongig={menusCongig}
            isExpanded
            backgroundColor={backgroundColor}
            // flexDirection="column"
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
      </Container>
    </Box>
  );
}
