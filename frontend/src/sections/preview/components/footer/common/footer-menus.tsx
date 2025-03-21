import { IMenu } from '@/types/menu';
import { Box, Button, Menu, MenuItem, Stack } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import { MenusConfig } from '../types';
import { getMenuTargetURL } from './utils';

type Props = {
  menus: IMenu[];
  menusCongig: MenusConfig;
  isExpanded?: boolean;
  backgroundColor?: string;
  underLineColor?: string;
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
};

export default function FooterMenus({
  menus,
  menusCongig,
  isExpanded = true,
  backgroundColor,
  underLineColor,
  flexDirection = 'row',
}: Props) {
  return (
    <Box
      sx={{
        flexDirection: { xs: 'column', sm: flexDirection },
        display: 'flex',
        alignItems: 'flex-start',
        gap: flexDirection === 'column' ? 0 : { lg: 4, md: 3, sm: 2, xs: 1 },
      }}
    >
      {menus?.map((menu) => (
        <NavMenuItem
          key={menu.id}
          menu={menu}
          menusCongig={menusCongig}
          isExpanded={isExpanded}
          backgroundColor={backgroundColor}
          underLineColor={underLineColor}
          flexDirection={flexDirection}
        />
      ))}
    </Box>
  );
}

type NavMenuItemProps = {
  menu: IMenu;
  menusCongig: MenusConfig;
  isExpanded?: boolean;
  backgroundColor?: string;
  underLineColor?: string;
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
};

function NavMenuItem({
  menu,
  menusCongig,
  isExpanded = true,
  backgroundColor,
  underLineColor,
  flexDirection = 'row',
}: NavMenuItemProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (!menu.children || menu.children.length === 0) {
    return (
      <Button
        component={Link}
        href={getMenuTargetURL(menu)}
        sx={{
          color: flexDirection === 'column' ? menusCongig.childrenColor : menusCongig.headingColor,
          textTransform: 'capitalize',
          position: 'relative',
          display: 'inline-block',
        }}
        variant="text"
      >
        {menu.label}
        {underLineColor && (
          <Box
            sx={{
              position: 'absolute',
              bottom: '-1px',
              width: '50%',
              height: '2px',
              backgroundColor: underLineColor,
            }}
          />
        )}
      </Button>
    );
  }
  if (isExpanded)
    return (
      <Stack alignItems="flex-start" justifyContent="flex-start">
        <Button
          component={Link}
          href={getMenuTargetURL(menu)}
          sx={{
            color: menusCongig.headingColor,
            textTransform: 'capitalize',
            position: 'relative',
            display: 'inline-block',
          }}
          variant="text"
        >
          {menu.label}
          {underLineColor && (
            <Box
              sx={{
                position: 'absolute',
                bottom: '-1px',
                width: '50%',
                height: '2px',

                backgroundColor: underLineColor,
              }}
            />
          )}
        </Button>
        {menu.children.map((submenu) => (
          <Button
            component={Link}
            href={getMenuTargetURL(menu)}
            sx={{
              color: menusCongig.childrenColor,
              fontSize: 14,
            }}
            variant="text"
            key={submenu?.id}
          >
            {submenu.label}
          </Button>
        ))}
      </Stack>
    );
  return (
    <>
      <Button
        id={`basic-button-${menu.id}`}
        aria-controls={open ? `basic-menu-${menu.id}` : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        // endIcon={<Iconify icon="mdi:keyboard-arrow-down" />}
        sx={{
          color: flexDirection === 'column' ? menusCongig.childrenColor : menusCongig.headingColor,
        }}
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
        sx={{ '& .MuiPaper-root': { bgcolor: backgroundColor!, boxShadow: 0 } }}
        MenuListProps={{
          'aria-labelledby': `basic-button-${menu.id}`,
          sx: { minWidth: 128, borderRadius: '4px' },
        }}
      >
        {menu.children.map((submenu) => (
          <MenuItem
            key={submenu.id}
            component="a"
            sx={{
              color: menusCongig.childrenColor,
            }}
            href={getMenuTargetURL(submenu)}
          >
            {submenu.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
