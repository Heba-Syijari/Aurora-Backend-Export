import { IMenu } from '@/types/menu';
import { Box, Container, Stack, Typography } from '@mui/material';
import FooterMenus from './common/footer-menus';
import { FooterSixData } from './types';

export type FooterSixProps = {
  data: FooterSixData;
  menus: IMenu[];
};

export default function FooterSix({ data, menus }: FooterSixProps) {
  const { copyRights, menusCongig, projectName } = data;
  const backgroundColor = 'background.neutral';

  return (
    <Box sx={{ py: 5, mt: 5, bgcolor: backgroundColor }}>
      <Container>
        <Stack
          spacing={5}
          direction={{ md: 'row', xs: 'column' }}
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <FooterMenus
            menus={menus}
            menusCongig={menusCongig}
            isExpanded={false}
            backgroundColor={backgroundColor}
          />
          <Typography variant="h6" color={projectName.color}>
            {projectName.text}
          </Typography>
          <Typography variant="body2" color={copyRights.color}>
            {copyRights.text}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
