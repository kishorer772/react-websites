import React from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from '@mui/material';
import {
  Home,
  Dashboard,
  Group,
  ExpandLess,
  ExpandMore,
  Add,
  Update,
} from '@mui/icons-material';

const NestedList = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List>
      <ListItem>
        <ListItemIcon>
          <Home />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <Dashboard />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem onClick={handleClick}>
        <ListItemIcon>
          <Group />
        </ListItemIcon>
        <ListItemText primary="Groups" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem sx={{ pl: 4 }}>
            <ListItemIcon>
              <Add />
            </ListItemIcon>
            <ListItemText primary="Add" />
          </ListItem>
          <ListItem sx={{ pl: 4 }}>
            <ListItemIcon>
              <Update />
            </ListItemIcon>
            <ListItemText primary="Update Group" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
};

export default NestedList;
