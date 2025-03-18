import { Typography } from '@mui/material';
import { ReactNode } from 'react';
import { ConatctInfo } from '../types';

// -------------------------------------------------

type ItemType = 'email' | 'number' | 'address';

type Props = {
  itemType: ItemType;
  defaultValues: ConatctInfo;
};

export function ContactInfo({ itemType, defaultValues }: Props) {
  const renderAdress = (
    <>
      <Typography variant="body2" color={defaultValues?.address.city.color}>
        {defaultValues?.address.city.text}
      </Typography>

      <Typography variant="body2" color={defaultValues?.address.streetAddress.color}>
        {defaultValues?.address.streetAddress.text}
      </Typography>
    </>
  );
  const renderEmail = (
    <Typography variant="body2" color={defaultValues?.email.color}>
      {defaultValues?.email.text}
    </Typography>
  );
  const renderNumber = (
    <Typography variant="body2" color={defaultValues?.number.color}>
      {defaultValues?.number.text}
    </Typography>
  );

  const contactEnum: Record<ItemType, ReactNode> = {
    address: renderAdress,
    email: renderEmail,
    number: renderNumber,
  };

  return contactEnum[itemType];
}
