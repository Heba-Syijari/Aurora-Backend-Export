import Iconify from '@/components/iconify/iconify';
import { IMenu } from '@/types/menu';
import {
  Box,
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { useState } from 'react';
import { getMenuTargetURL } from './utils';

type Props = {
  open: boolean;
  onClose: () => void;
  menus: IMenu[];
  logo: React.ReactNode;
};

export default function HeaderDrawer({ open, onClose, menus, logo }: Props) {
  return (
    <Drawer
      variant="temporary"
      open={open}
      onClose={onClose}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { sm: 'block', md: 'none' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '100%' },
      }}
    >
      <Box sx={{ textAlign: 'center', position: 'relative' }}>
        <IconButton sx={{ position: 'absolute', right: '1rem', top: '0.5rem' }} onClick={onClose}>
          <Iconify icon="mdi:close" />
        </IconButton>
        <Box sx={{ my: 2 }}>{logo}</Box>
        <Divider />
        <List>
          {menus.map((menu) => (
            <MenuListItem key={menu.id} menu={menu} />
          ))}
        </List>
      </Box>
    </Drawer>
  );
}

type MenuListItemProps = {
  menu: IMenu;
};

function MenuListItem({ menu }: MenuListItemProps) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const renderListItem = (
    <ListItem disablePadding>
      <ListItemButton component="a" href={getMenuTargetURL(menu)}>
        <ListItemText primary={menu.label} />
      </ListItemButton>
    </ListItem>
  );

  const renderNestedListItem = (
    <>
      <ListItem disablePadding>
        <ListItemButton onClick={handleClick}>
          <ListItemText primary={menu.label} />
          {open ? <Iconify icon="mdi:expand-less" /> : <Iconify icon="mdi:expand-more" />}
        </ListItemButton>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {menu.children.map((submenu) => (
            <ListItem key={submenu.id} disablePadding>
              <ListItemButton sx={{ pl: 4 }} component="a" href={getMenuTargetURL(submenu)}>
                <ListItemText primary={submenu.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  );

  return <>{menu.children?.length > 0 ? renderNestedListItem : renderListItem}</>;
}
