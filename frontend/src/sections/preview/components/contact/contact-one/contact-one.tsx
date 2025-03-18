import { useResponsive } from '@/hooks/use-responsive';
import { IIntellectualProperty } from '@/types/intellectual-property';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import Socials from '../../common/socials/socials';
import { ContactInfo } from '../common';
import { ContacMap } from '../common/contact-map';
import { ContactOneData } from '../types';

export type ContactOneProps = {
  data: ContactOneData;
  projectId: string;
  intellectualProperty: IIntellectualProperty;
};

export default function ContactOne({ data, projectId, intellectualProperty }: ContactOneProps) {
  const { title, openingHours, mapConfig, address, email, number, socialsConfig } = data;
  const mdUp = useResponsive('up', 'md');

  const renderAdress = (
    <Stack
      height={1}
      justifyContent="flex-start"
      alignItems={{ md: 'flex-start', xs: 'center' }}
      spacing={2}
    >
      <Typography
        variant="h6"
        fontWeight={700}
        color="text.primary"
        letterSpacing="-0.02em"
        maxWidth={970}
      >
        Address
      </Typography>
      <ContactInfo
        itemType="address"
        defaultValues={{
          address,
          email,
          number,
        }}
      />
    </Stack>
  );

  const renderContact = (
    <Stack
      height={1}
      justifyContent="flex-start"
      alignItems={{ md: 'flex-start', xs: 'center' }}
      spacing={2}
    >
      <Typography
        variant="h6"
        fontWeight={700}
        color="text.primary"
        letterSpacing="-0.02em"
        maxWidth={970}
      >
        Contact
      </Typography>

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
        isCenter={!mdUp}
      />
    </Stack>
  );

  const renderOpenningHours = (
    <Stack
      height={1}
      justifyContent="flex-start"
      alignItems={{ md: 'flex-start', xs: 'center' }}
      spacing={2}
    >
      <Typography
        variant="h6"
        fontWeight={700}
        color="text.primary"
        letterSpacing="-0.02em"
        maxWidth={970}
      >
        Openning Hours
      </Typography>
      <Stack direction="row" spacing={2}>
        <Typography variant="body2" color={openingHours.workTimes.days.color} minWidth={100}>
          {openingHours.workTimes.days.text}
        </Typography>

        <Typography variant="body2" color={openingHours.workTimes.hours.color} minWidth={150}>
          {openingHours.workTimes.hours.text}
        </Typography>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Typography variant="body2" color={openingHours.firstHoliday.days.color} minWidth={100}>
          {openingHours.firstHoliday.days.text}
        </Typography>

        <Typography variant="body2" color={openingHours.firstHoliday.hours.color} minWidth={150}>
          {openingHours.firstHoliday.hours.text}
        </Typography>
      </Stack>

      <Stack direction="row" spacing={2}>
        <Typography variant="body2" color={openingHours.secondHoliday.days.color} minWidth={100}>
          {openingHours.secondHoliday.days.text}
        </Typography>

        <Typography variant="body2" color={openingHours.secondHoliday.hours.color} minWidth={150}>
          {openingHours.secondHoliday.hours.text}
        </Typography>
      </Stack>
    </Stack>
  );

  return (
    <Box
      sx={{
        py: 11,
        position: 'relative',
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      <Container>
        <Stack spacing={2.5} alignItems="center" textAlign="center">
          <Typography
            variant="h2"
            fontWeight={700}
            color={title.color}
            letterSpacing="-0.02em"
            maxWidth={970}
          >
            {title.text}
          </Typography>
        </Stack>

        <Grid container spacing={4} sx={{ mt: 9 }} alignItems="center" justifyContent="center">
          <Grid item md={4} xs={12} alignSelf="stretch">
            {renderAdress}
          </Grid>
          <Grid item xs={12} md={4} alignSelf="stretch">
            {renderContact}
          </Grid>
          <Grid item xs={12} md={4} alignSelf="stretch">
            {renderOpenningHours}
          </Grid>
        </Grid>
        <br />
        <ContacMap data={mapConfig} />
      </Container>
    </Box>
  );
}
