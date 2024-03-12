import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import Breadcrumb from './Breadcrumb';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';

import logo from './logo.svg';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const AppTitleBar = ({ handleDrawer }) => {
  return (
    <AppBar position="sticky" sx={{ p: 0, backgroundColor: '#fff' }}>
      <Toolbar sx={{ gap: 0.5 }}>
        <IconButton onClick={handleDrawer} edge="start">
          <MenuIcon />
        </IconButton>
        <Typography
          variant="span"
          component="div"
          sx={{ flexGrow: 1, fontSize: 15 }}
        >
          <Breadcrumb />
        </Typography>
        <Toolbar>
          <IconButton color="white">
            <NotificationsIcon />
          </IconButton>

          <IconButton disableTouchRipple disableRipple>
            <img src={logo} alt="img" width={45} />
            <ArrowDropDownIcon />
          </IconButton>
        </Toolbar>
      </Toolbar>
    </AppBar>
  );
};

export default AppTitleBar;
