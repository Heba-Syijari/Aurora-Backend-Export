import { IconButton } from '@mui/material';
import Link from 'next/link';

// -------------------------------------------------

type SocialIconButtonProps = {
  link: string;
  hovercolor?: string;
  children: React.ReactElement;
};

export function SocialIconButton({ link, hovercolor, children }: SocialIconButtonProps) {
  return (
    <IconButton
      LinkComponent={Link}
      href={link}
      sx={{
        color: 'text.secondary',
        '&:hover': { color: hovercolor },
      }}
    >
      {children}
    </IconButton>
  );
}
