import { Pagination } from '@mui/material';

import Toolbar from '@mui/material/Toolbar';
import { Box } from '@mui/system';
import React, { useState } from 'react';

import AppDrawer from './AppDrawer';
import TableLayout from './TableLayout';
import DialogBox from './DialogBox';
import AppTitleBar from './AppTitleBar';
const Layout = () => {
  const [toggle, setToggle] = useState(true);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };
  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ flexGrow: 1, height: '100vh', padding: '0 !important', m: 0 }}>
      <AppTitleBar handleDrawer={handleDrawer} />
      <AppDrawer
        open={open}
        handleDrawer={handleDrawer}
        toggle={toggle}
        handleClick={handleClick}
      ></AppDrawer>
      <DialogBox />
      <TableLayout />
      <Toolbar sx={{ justifyContent: 'center' }}>
        <Pagination count={10} />
      </Toolbar>
    </Box>
  );
};

export default Layout;
