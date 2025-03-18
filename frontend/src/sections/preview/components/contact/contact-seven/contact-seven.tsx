import FormProvider, { RHFTextField } from '@/components/hook-form';
import Iconify from '@/components/iconify';
import { LoadingButton } from '@mui/lab';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useSendMessage } from '../common/hooks';
import { ContactSevenData } from '../types';

export type ContactSevenProps = {
  data: ContactSevenData;
  projectId: string;
};

export default function ContactSeven({
  data,

  projectId,
}: ContactSevenProps) {
  const {
    title,
    email,
    number,
    button,
    WhatsApp,
    backGroundImage,
    description,
    imageSubTitle,
    imageTitle,
  } = data;
  const theme = useTheme();
  const { isSubmitting, methods, onSubmit } = useSendMessage({ projectId });

  const renderForm = (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Stack spacing={2} pt={{ md: 1, xs: 5 }}>
        <Stack direction="row" spacing={2}>
          <RHFTextField
            name="firstName"
            label="First Name"
            required
            sx={{
              '& .MuiInputLabel-root': {
                color: 'common.neutral', //  label color
                opacity: 0.5,
              },
              '& .MuiInputBase-input': {
                color: 'secondary.main',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  opacity: 0.8,
                  borderColor: 'common.neutral',
                  borderWidth: '1px',
                },
                '&:hover fieldset': {
                  borderColor: 'secondary.main',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'secondary.main',
                },
                '& .MuiInputBase-input::placeholder': {
                  color: 'common.neutral',
                  opacity: 0.5,
                },
              },
            }}
          />
          <RHFTextField
            name="lastName"
            label="Last Name"
            required
            sx={{
              '& .MuiInputLabel-root': {
                color: 'common.neutral', //  label color
                opacity: 0.5,
              },
              '& .MuiInputBase-input': {
                color: 'secondary.main',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  opacity: 0.8,
                  borderColor: 'common.neutral',
                  borderWidth: '1px',
                },
                '&:hover fieldset': {
                  borderColor: 'secondary.main',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'secondary.main',
                },
                '& .MuiInputBase-input::placeholder': {
                  color: 'common.neutral',
                  opacity: 0.5,
                },
              },
            }}
          />
        </Stack>

        <RHFTextField
          name="email"
          label="Email"
          type="email"
          required
          sx={{
            '& .MuiInputLabel-root': {
              color: 'common.neutral', //  label color
              opacity: 0.5,
            },
            '& .MuiInputBase-input': {
              color: 'secondary.main',
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                opacity: 0.8,
                borderColor: 'common.neutral',
                borderWidth: '1px',
              },
              '&:hover fieldset': {
                borderColor: 'secondary.main',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'secondary.main',
              },
              '& .MuiInputBase-input::placeholder': {
                color: 'common.neutral',
                opacity: 0.5,
              },
            },
          }}
        />

        <RHFTextField
          name="message"
          label="Message"
          // placeholder="Message"
          required
          multiline
          rows={7}
          sx={{
            '& .MuiInputLabel-root': {
              color: 'common.neutral', // label color
              opacity: 0.5,
            },
            '& .MuiInputBase-input': {
              color: 'secondary.main', //  typed text colors
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                opacity: 0.8,
                borderColor: 'common.neutral',
                borderWidth: '1px',
              },
              '&:hover fieldset': {
                borderColor: 'secondary.main',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'secondary.main',
              },
              '& .MuiInputBase-input::placeholder': {
                color: 'common.neutral',
                opacity: 0.5,
              },
            },
          }}
        />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // gap: 0,
            '&:hover': {
              '& .MuiButton-root , & .MuiButton-root, & .MuiButton-root::before , component-iconify ':
                {
                  backgroundColor: 'background.neutral',
                },
            },
          }}
        >
          <Box>
            <LoadingButton
              variant="contained"
              type="submit"
              loading={isSubmitting}
              disabled={isSubmitting}
              // endIcon={<Iconify icon={button.icon} width="24" height="24" />}
              sx={{
                padding: '10px 50px',
                borderRadius: '35px',
                marginX: -0.1,
                fontSize: 18,
                color: button.color,
                backgroundColor: button.backgroundColor,
                transition: 'background-color 0.3s',
              }}
            >
              {button.text}
            </LoadingButton>
          </Box>

          <Box>
            <LoadingButton
              variant="contained"
              type="submit"
              loading={isSubmitting}
              disabled={isSubmitting}
              sx={{
                minWidth: '30px',
                width: '40px',
                height: '40px',
                aspectRatio: '1',
                borderRadius: '50%',
                color: button.color,
                backgroundColor: button.backgroundColor,
                transition: 'background-color 0.3s',

                '&::before': {
                  zIndex: 0,

                  content: '""',
                  position: 'absolute',
                  left: -20,
                  top: '%50',
                  width: '30px',
                  height: '20px',
                  backgroundColor: button.backgroundColor,
                  transition: 'background-color 0.3s',
                },
              }}
            >
              <Iconify icon={button.icon} width={15} height={15} color={button.color} />
            </LoadingButton>
          </Box>
        </Box>
      </Stack>
    </FormProvider>
  );

  const renderInfo = (
    <Stack
      spacing={5}
      mt={0}
      sx={{
        backgroundImage: `url('${backGroundImage.url}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        // maxHeight: '100%',
        borderRadius: 4,
        position: 'relative',
        p: 5,
        '&::before': {
          content: "' '",
          position: 'absolute',
          opacity: 0.5,
          backgroundColor: 'common.black',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          borderRadius: 4,
        },
      }}
    >
      <Stack spacing={3} sx={{ position: 'relative' }}>
        <Stack
          spacing={0}
          alignItems="start"
          sx={{
            marginBottom: { lg: 7 },
          }}
        >
          <Typography variant="h6" color={imageTitle.color}>
            {imageTitle.text}
          </Typography>

          <Typography variant="body2" color={imageSubTitle.color}>
            {imageSubTitle.text}
          </Typography>
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center">
          <Box
            sx={{
              bgcolor: `${number.color}`,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '50%',
              p: 1,
            }}
          >
            <Iconify
              icon="ic:baseline-phone"
              width="20"
              height="20"
              color={theme.palette.primary.main}
            />
          </Box>
          <Typography variant="body2" color={number.color}>
            {number.text}
          </Typography>
        </Stack>
        {/* <br /> */}

        <Stack direction="row" spacing={2} alignItems="center">
          <Box
            sx={{
              bgcolor: `${email.color}`,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '50%',
              p: 1,
            }}
          >
            <Iconify
              icon="ic:outline-email"
              width="20"
              height="20"
              color={theme.palette.primary.main}
            />
          </Box>
          <Typography variant="body2" color={email.color}>
            {email.text}
          </Typography>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={2}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '50%',
              p: 1,
              bgcolor: `${WhatsApp.color}`,
            }}
          >
            <Iconify
              icon="ic:baseline-whatsapp"
              width="20"
              height="20"
              color={theme.palette.primary.main}
            />
          </Box>
          <Typography variant="body2" color={WhatsApp.color}>
            {WhatsApp.text}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );

  const renderTitle = (
    <Typography
      variant="h2"
      fontWeight={700}
      color={title.color}
      letterSpacing="-0.02em"
      marginX=""
      textTransform="capitalize"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        py: 5,
      }}
    >
      {title.text}
    </Typography>
  );

  return (
    <Box sx={{ p: 5 }}>
      <Container>
        {renderTitle}
        <Box
          borderRadius={10}
          sx={{
            backgroundColor: 'background.secondary',
            p: { lg: 2.5, xs: 2 },
            marginY: 5,
          }}
        >
          <Grid container columnSpacing={3} rowSpacing={3} sx={{ mt: 0 }}>
            <Grid item xs={12} md={5} alignSelf="stretch">
              {renderInfo}
            </Grid>

            <Grid item xs={12} md={7}>
              <Typography variant="h5" color={description.color}>
                {description.text}
              </Typography>
              {renderForm}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
