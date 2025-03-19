import { IMenu } from '@/types/menu';
import { Box, Container, Divider, Stack, Typography } from '@mui/material';
import Socials from '../common/socials/socials';
import FooterMenus from './common/footer-menus';
import { FooterNineData } from './types';

export type FooterNineProps = {
  data: FooterNineData;
  menus: IMenu[];
};

export default function FooterNine({ data, menus }: FooterNineProps) {
  const { copyRights, menusCongig, socialsConfig, projectDescription } = data;
  const backgroundColor = 'background.neutral';
  return (
    <Box
      sx={{
        pt: 5,
        mt: 5,
        bgcolor: backgroundColor,
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
          <Stack alignItems="flex-start" spacing={0.5}>
            <Typography variant="h6" color="common.white" textTransform="capitalize">
              About
            </Typography>
            <Typography
              variant="body2"
              sx={{
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 6,
                textOverflow: 'ellipsis',
                overflowY: 'hidden',
                textAlign: 'left',
                maxWidth: 400,
              }}
              color={projectDescription.color}
            >
              {projectDescription.text}
            </Typography>
          </Stack>
          <FooterMenus
            menus={menus}
            menusCongig={menusCongig}
            isExpanded
            backgroundColor={backgroundColor}
          />
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
      <Box sx={{ py: 2 }}>
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          textAlign={{ xs: 'center', md: 'left' }}
          px={5}
        >
          <Typography
            variant="body2"
            sx={{
              display: '-webkit-box',
              overflow: 'hidden',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 1,
              textOverflow: 'ellipsis',
              overflowY: 'hidden',
              textAlign: 'center',
              mx: 1,
              maxWidth: 400,
            }}
            color={copyRights.color}
          >
            {copyRights.text}
          </Typography>
          <Socials
            socialsItems={socialsConfig.socials}
            socialIconsColor={socialsConfig.socialIconsColor}
          />
        </Stack>
      </Box>
    </Box>
  );
}
