import Iconify from '@/components/iconify/iconify';
import { useOffSetTop } from '@/hooks/use-off-set-top';
import { IMenu } from '@/types/menu';
import { Box, Button, Menu, MenuItem } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import { getMenuTargetURL } from './utils';

type Props = {
  menus: IMenu[];
};

export default function HeaderMenus({ menus }: Props) {
  const NAV_HIGHT = 60;
  const offsetTop = useOffSetTop(NAV_HIGHT);
  // eslint-disable-next-line react/jsx-no-useless-fragment
  if (menus.length === 0) return <></>;
  return (
    <Box
      sx={{
        position: 'relative',
        display: { xs: 'none', md: 'flex' },
        gap: 1,
        ...(!offsetTop
          ? {
              background: 'white',
              borderBottomLeftRadius: 25,
              borderBottomRightRadius: 25,
              mx: 2,
              p: 2,
              mt: -1.5,
              '&::before, &::after': {
                content: '""',
                position: 'absolute',
                top: '-16px',
                width: '0',
                height: '0',
                borderStyle: 'solid',
                zIndex: 1,
              },
              '&::before': {
                left: '-10px',
                top: 0,
                borderWidth: '20px 16px 16px 16px',
                borderColor: 'white transparent transparent transparent',
              },
              '&::after': {
                right: '-10px',
                top: 0,
                borderWidth: '20px 16px 16px 16px',
                borderColor: 'white transparent transparent transparent',
              },
            }
          : {}),
      }}
    >
      {menus.map((menu) => (
        <NavMenuItem key={menu.id} menu={menu} />
      ))}
    </Box>
  );
}

type NavMenuItemProps = {
  menu: IMenu;
};

function NavMenuItem({ menu }: NavMenuItemProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (!menu.children || menu.children.length === 0) {
    return (
      <Button component={Link} href={getMenuTargetURL(menu)} variant="text">
        {menu.label}
      </Button>
    );
  }

  return (
    <>
      <Button
        id={`basic-button-${menu.id}`}
        aria-controls={open ? `basic-menu-${menu.id}` : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={<Iconify icon="mdi:keyboard-arrow-down" />}
        variant="text"
      >
        {menu.label}
      </Button>

      <Menu
        id={`basic-menu-${menu.id}`}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        MenuListProps={{
          'aria-labelledby': `basic-button-${menu.id}`,
          sx: { minWidth: 128, borderRadius: '4px' },
        }}
      >
        {menu.children.map((submenu) => (
          <MenuItem key={submenu.id} component="a" href={getMenuTargetURL(submenu)}>
            {submenu.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
