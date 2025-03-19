import Iconify from '@/components/iconify';
import Image from '@/components/image';
import { IMenu } from '@/types/menu';
import { Box, Button, Container, Divider, Grid, Stack, Typography } from '@mui/material';
import { TextData } from '../../types';
import Socials from '../common/socials/socials';
import FooterMenus from './common/footer-menus';
import { FooterFourData } from './types';

export type FooterFourProps = {
  data: FooterFourData;
  menus: IMenu[];
};

export default function FooterFour({ data, menus }: FooterFourProps) {
  const { copyRights, menusCongig, address, email, images, latestNews, number, socialsConfig } =
    data;
  const backgroundColor = 'background.neutral';

  const contactInfo = (icon: string, info: TextData, label: string, itemType: string) => (
    <Stack spacing={2} direction="row" alignItems="center" justifyContent="center">
      <Iconify icon={icon} width={15} color="text.secondary" />
      <Typography variant="body1" color={info.color} textAlign="left" minWidth={100}>
        {info.text}
      </Typography>
    </Stack>
  );

  // eslint-disable-next-line react/no-unstable-nested-components
  const CustomIcon = (icon: string) => (
    <Stack spacing={1} alignItems="center" textAlign="center">
      <Box
        sx={{
          border: '1px solid',
          bordercolor: 'primary.main',
          borderRadius: '50%',
          color: 'primary.main',
          width: 20,
          height: 20,
          display: 'grid',
          placeItems: 'center',
          textDecoration: 'none',
        }}
      >
        <Iconify icon={icon} width={14} />
      </Box>
    </Stack>
  );
  return (
    <>
      <Box sx={{ px: 4, pb: 0, pt: 2, bgcolor: 'primary.main', mt: 5 }}>
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
            spacing={5}
            justifyContent="center"
            alignItems="flex-start"
            direction={{ sm: 'column', md: 'row' }}
            textAlign="center"
            pb={2}
          >
            <Stack alignItems="flex-start" spacing={2} justifyContent="center">
              <Button
                sx={{
                  color: menusCongig.headingColor,
                  textAlign: 'left',
                  ml: -1.3,
                }}
                startIcon={CustomIcon('ix:about-filled')}
                variant="text"
              >
                About
              </Button>
              {contactInfo('maki:home', address, 'Address', 'address')}
              {contactInfo('mdi:email', email, 'Email', 'email')}
              {contactInfo('entypo:phone', number, 'Number', 'number')}
            </Stack>
            <Stack alignItems="flex-start" spacing={2} justifyContent="center">
              <Button
                sx={{
                  color: menusCongig.headingColor,
                  textAlign: 'left',
                  ml: -1.3,
                }}
                startIcon={CustomIcon('material-symbols-light:news-rounded')}
                variant="text"
              >
                Last News
              </Button>
              <Stack spacing={2}>
                {latestNews.map((item, i) => (
                  <Grid container maxWidth={200} key={i}>
                    <Grid xs={4} item>
                      <Image
                        alt={item.image?.alt}
                        src={item.image?.url}
                        sx={{
                          height: 1,
                          width: 1,
                          objectFit: 'cover',
                          borderRadius: '5px',
                        }}
                      />
                    </Grid>
                    <Grid xs={8} item>
                      <Typography
                        variant="caption"
                        sx={{
                          display: '-webkit-box',
                          overflow: 'hidden',
                          WebkitBoxOrient: 'vertical',
                          WebkitLineClamp: 4,
                          textOverflow: 'ellipsis',
                          overflowY: 'hidden',
                          textAlign: 'left',
                          mx: 3,
                        }}
                        color={item.description.color}
                      >
                        {item.description.text}
                      </Typography>
                    </Grid>
                  </Grid>
                ))}
              </Stack>
            </Stack>
            <Stack alignItems="flex-start" spacing={1.3} justifyContent="center">
              <Button
                sx={{
                  color: menusCongig.headingColor,
                  textAlign: 'left',
                  ml: -1.3,
                }}
                startIcon={CustomIcon('mdi:paper-text')}
                variant="text"
              >
                Information
              </Button>
              <FooterMenus
                menus={menus}
                menusCongig={menusCongig}
                isExpanded={false}
                backgroundColor={backgroundColor}
                flexDirection="column"
              />
            </Stack>
            <Stack alignItems="flex-start" spacing={2} justifyContent="center">
              <Button
                sx={{
                  color: menusCongig.headingColor,
                  textAlign: 'left',
                  ml: -1.3,
                }}
                startIcon={CustomIcon('iconoir:instagram')}
                variant="text"
              >
                Instagram
              </Button>
              <Grid container maxWidth={200}>
                {images.map((item, i) => (
                  <Grid xs={4} key={i} p={0.3}>
                    <Image
                      alt={item.alt}
                      src={item.url}
                      sx={{
                        height: 1,
                        width: 1,
                        objectFit: 'cover',
                        borderRadius: '5px',
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
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
    </>
  );
}
