import { IMenu } from '@/types/menu';
import { LoadingButton } from '@mui/lab';
import { Box, Container, Divider, Stack, Typography } from '@mui/material';
import Socials from '../common/socials/socials';
import FooterMenus from './common/footer-menus';
import { FooterSevenData } from './types';

export type FooterSevenProps = {
  data: FooterSevenData;
  menus: IMenu[];
};

export default function FooterSeven({ data, menus }: FooterSevenProps) {
  const { copyRights, menusCongig, socialsConfig, button, projectDescription, projectName } = data;
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
          <Stack mt={0.5} alignItems="flex-start" spacing={0.5}>
            <Typography variant="h6" textTransform="capitalize" color={projectName.color}>
              {projectName.text}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 4,
                textOverflow: 'ellipsis',
                overflowY: 'hidden',
                textAlign: 'left',
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
          <Stack mt={0.5}>
            <Socials
              socialsItems={socialsConfig.socials}
              socialIconsColor={socialsConfig.socialIconsColor}
            />
            <LoadingButton
              variant="contained"
              type="submit"
              sx={{
                padding: '10px 20px',
                color: button.color,
                backgroundColor: button.backgroundColor,
                maxWidth: 150,
                borderRadius: 8,
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
  );
}
