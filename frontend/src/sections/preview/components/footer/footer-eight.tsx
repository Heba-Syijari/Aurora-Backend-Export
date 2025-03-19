import { IMenu } from '@/types/menu';
import { Box, Container, Stack, Typography } from '@mui/material';
import Socials from '../common/socials/socials';
import FooterMenus from './common/footer-menus';
import { FooterEightData } from './types';

export type FooterEightProps = {
  data: FooterEightData;
  menus: IMenu[];
};

export default function FooterEight({ data, menus }: FooterEightProps) {
  const { copyRights, menusCongig, socialsConfig, projectName } = data;
  const backgroundColor = 'background.neutral';
  return (
    <Box
      sx={{
        py: 5,
        mt: 5,
        bgcolor: backgroundColor,
      }}
    >
      <Container>
        <Stack
          spacing={3}
          justifyContent="center"
          alignItems="center"
          direction="column"
          textAlign="center"
        >
          <Stack mt={0.5} alignItems="flex-start" spacing={0.5}>
            <Typography variant="h5" textTransform="capitalize" color={projectName.color}>
              {projectName.text}
            </Typography>
          </Stack>
          <FooterMenus
            menus={menus}
            menusCongig={menusCongig}
            isExpanded={false}
            backgroundColor={backgroundColor}
          />
          <Stack spacing={2}>
            <Typography variant="body2" fontWeight="bold" color="text.primary">
              Stay in touch
            </Typography>
            <Socials
              socialsItems={socialsConfig.socials}
              socialIconsColor={socialsConfig.socialIconsColor}
            />
          </Stack>
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
