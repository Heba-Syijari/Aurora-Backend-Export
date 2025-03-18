import FormProvider, { RHFTextField } from '@/components/hook-form';
import { LoadingButton } from '@mui/lab';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import Socials from '../../common/socials/socials';
import { ContactInfo } from '../common';
import { useSendMessage } from '../common/hooks';
import { ContactTwoData } from '../types';

export type ContactTwoProps = {
  data: ContactTwoData;
  projectId: string;
};

export default function ContactTwo({ data, projectId }: ContactTwoProps) {
  const { title, socialsConfig, address, email, number, button } = data;

  const { isSubmitting, methods, onSubmit } = useSendMessage({ projectId });

  const renderForm = (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Stack spacing={2} px={{ md: 10, sm: 0 }} bgcolor="common.white">
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
          sx={{
            padding: '16px 28px',
            color: button.color,
            backgroundColor: button.backgroundColor,
            minWidth: 200,
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
    </FormProvider>
  );

  const renderInfo = (
    <Stack spacing={1} mt={1}>
      <ContactInfo
        itemType="address"
        defaultValues={{
          address,
          email,
          number,
        }}
      />
      <br />
      <ContactInfo
        itemType="email"
        defaultValues={{
          address,
          email,
          number,
        }}
      />
      <ContactInfo
        itemType="number"
        defaultValues={{
          address,
          email,
          number,
        }}
      />
      <Socials
        socialsItems={socialsConfig.socials}
        socialIconsColor={socialsConfig.socialIconsColor}
      />
    </Stack>
  );

  const renderTitle = (
    <Typography
      variant="h4"
      fontWeight={700}
      color={title.color}
      letterSpacing="-0.02em"
      maxWidth={970}
      textTransform="capitalize"
    >
      {title.text}
    </Typography>
  );

  return (
    <Box sx={{ py: 11 }}>
      <Container>
        <Grid container spacing={4} sx={{ mt: 9 }}>
          <Grid item xs={12} md={4} alignSelf="stretch">
            <Stack p={4} height={1} justifyContent="center" bgcolor="common.neutral" spacing={2}>
              {renderTitle}
              {renderInfo}
            </Stack>
          </Grid>
          <Grid item xs={12} md={8}>
            {renderForm}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
