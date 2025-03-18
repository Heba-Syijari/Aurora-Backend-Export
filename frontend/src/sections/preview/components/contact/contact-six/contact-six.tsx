import FormProvider, { RHFTextField } from '@/components/hook-form';
import Iconify from '@/components/iconify';
import { IIntellectualProperty } from '@/types/intellectual-property';
import { LoadingButton } from '@mui/lab';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useSendMessage } from '../common/hooks';
import { ContactSixData } from '../types';

export type ContactSixProps = {
  data: ContactSixData;
  projectId: string;
  intellectualProperty: IIntellectualProperty;
};

export default function ContactSix({ data, projectId, intellectualProperty }: ContactSixProps) {
  const { title, email, number, button, WhatsApp, subtitle, telegram } = data;

  const { isSubmitting, methods, onSubmit } = useSendMessage({ projectId });
  const theme = useTheme();
  const renderForm = (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Stack
        spacing={2}
        p={{ md: 5, xs: 5 }}
        bgcolor={theme.palette.text.secondary}
        borderRadius={10}
      >
        <Stack direction="row" spacing={2}>
          <RHFTextField
            name="firstName"
            label="First Name"
            required
            sx={{ bgcolor: 'common.white' }}
          />
          <RHFTextField
            name="lastName"
            label="Last Name"
            required
            sx={{ bgcolor: 'common.white' }}
          />
        </Stack>

        <RHFTextField
          name="email"
          label="Email"
          type="email"
          required
          sx={{ bgcolor: 'common.white' }}
        />

        <RHFTextField
          name="message"
          label="Message"
          required
          multiline
          rows={7}
          sx={{ bgcolor: 'common.white' }}
        />

        <LoadingButton
          variant="contained"
          type="submit"
          loading={isSubmitting}
          disabled={isSubmitting}
          startIcon={<Iconify icon={button.icon} width="24" height="24" />}
          sx={{
            borderRadius: 3,
            padding: '12px',
            color: button.color,
            // background: `linear-gradient(135deg,  ${lighterColor} , ${baseColor})`,
            backgroundColor: button.backgroundColor,
            // minWidth: 200,
            width: '30%',
            '&:hover': {
              backgroundColor: theme.palette.primary.light,
              // color: button.backgroundColor,
              // outlineOffset: -1,
            },
          }}
        >
          {button.text}
        </LoadingButton>
      </Stack>
    </FormProvider>
  );

  const renderInfo = (
    <Stack spacing={3} mt={1}>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Iconify icon="tabler:phone-call" width="30 " height="35" color={number.color} />
        <Typography variant="h6" fontWeight={200} color={number.color}>
          {number.text}
        </Typography>
      </Stack>
      {/* <br /> */}

      <Stack direction="row" alignItems="center" spacing={2}>
        <Iconify icon="ic:outline-email" width="30 " height="30" color={email.color} />
        <Typography variant="h6" fontWeight={200} color={email.color}>
          {email.text}
        </Typography>
      </Stack>

      <Stack direction="row" alignItems="center" spacing={2}>
        <Iconify icon="ic:baseline-whatsapp" width="30 " height="35" color={WhatsApp.color} />{' '}
        <Typography variant="h6" fontWeight={200} color={WhatsApp.color}>
          {WhatsApp.text}
        </Typography>
      </Stack>

      <Stack direction="row" alignItems="center" spacing={2}>
        <Iconify icon="line-md:telegram" width="30 " height="35" color={telegram.color} />
        <Typography variant="h6" fontWeight={200} color={telegram.color}>
          {telegram.text}
        </Typography>
      </Stack>
    </Stack>
  );

  const renderTitle = (
    <Typography
      variant="h2"
      fontWeight={700}
      color={title.color}
      letterSpacing="-0.02em"
      maxWidth={970}
      textTransform="capitalize"
    >
      {title.text}
    </Typography>
  );

  const renderSubtitle = (
    <Typography
      variant="h5"
      fontWeight={700}
      color={subtitle.color}
      letterSpacing="-0.02em"
      maxWidth={970}
      textTransform="capitalize"
    >
      {subtitle.text}
    </Typography>
  );

  return (
    <Box
      sx={{
        py: 4,
        backgroundColor: `${theme.palette.background.neutral}`,
      }}
    >
      <Container>
        <Stack spacing={1} alignItems="center">
          {renderSubtitle}
          {renderTitle}
        </Stack>

        <Grid container columnSpacing={5} rowSpacing={3} sx={{ mt: 0 }}>
          <Grid item xs={12} md={8}>
            {renderForm}
          </Grid>
          <Grid item xs={12} md={4} alignSelf="stretch">
            <Stack p={4} height={1} justifyContent="center" spacing={2}>
              {renderInfo}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
