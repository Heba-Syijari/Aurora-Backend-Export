import { IIntellectualProperty } from '@/types/intellectual-property';
import { Box, Card, CardContent, Grid, Stack, Typography } from '@mui/material';
import Socials from '../../common/socials/socials';
import { ContactInfo } from '../common';
import { ContactThreeData } from '../types';
import { ContactThreeContent } from './contact-three-content';

export type ContactThreeProps = {
  data: ContactThreeData;
  projectId: string;
  intellectualProperty: IIntellectualProperty;
};

export default function ContactThree({ data, projectId, intellectualProperty }: ContactThreeProps) {
  const { email, number, socialsConfig, backgroundColor } = data;

  return (
    <Box sx={{ py: 8 }}>
      <ContactThreeContent backgroundColor={backgroundColor}>
        <Card sx={{ p: 2 }}>
          <CardContent>
            <Grid container spacing={4} alignItems="center" justifyContent="center">
              <Grid item xs={12} md={4} alignSelf="stretch">
                <Stack height={1} justifyContent="center" alignItems="center" spacing={2}>
                  <Typography
                    variant="h6"
                    fontWeight={700}
                    color="text.primary"
                    letterSpacing="-0.02em"
                    maxWidth={970}
                  >
                    Call
                  </Typography>

                  <ContactInfo
                    itemType="number"
                    defaultValues={{
                      address: {
                        city: { color: '', text: '' },
                        streetAddress: { color: '', text: '' },
                      },
                      email,
                      number,
                    }}
                  />
                </Stack>
              </Grid>
              <Grid item md={4} xs={12} alignSelf="stretch">
                <Stack height={1} justifyContent="center" alignItems="center" spacing={2}>
                  <Typography
                    variant="h6"
                    fontWeight={700}
                    color="text.primary"
                    letterSpacing="-0.02em"
                    maxWidth={970}
                  >
                    Email
                  </Typography>

                  <ContactInfo
                    itemType="email"
                    defaultValues={{
                      address: {
                        city: { color: '', text: '' },
                        streetAddress: { color: '', text: '' },
                      },
                      email,
                      number,
                    }}
                  />
                </Stack>
              </Grid>

              <Grid item xs={12} md={4} alignSelf="stretch">
                <Stack height={1} justifyContent="center" alignItems="center" spacing={2}>
                  <Typography
                    variant="h6"
                    fontWeight={700}
                    color="text.primary"
                    letterSpacing="-0.02em"
                    maxWidth={970}
                  >
                    Follow
                  </Typography>
                  <Socials
                    socialsItems={socialsConfig.socials}
                    socialIconsColor={socialsConfig.socialIconsColor}
                    isCenter
                  />
                </Stack>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </ContactThreeContent>
    </Box>
  );
}
