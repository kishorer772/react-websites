import { Button } from '@mui/base';
import { AppBar, Breadcrumbs, Drawer, IconButton, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import MailIcon from '@mui/icons-material/Mail';
const Layout = () => {
  const[open,setOpen] = useState(false)
  return (
   <Box  sx={{ flexGrow: 1 }}>
    <AppBar position="static" sx={{p:1}} >
    <Toolbar>
      <IconButton onClick={()=>setOpen(!open)} edge="start">
        <MenuIcon/>
      </IconButton>
        <Typography variant="h6" component="div" sx={{flexGrow:1}}>
        {/* <p>hello</p> */}
      <Breadcrumbs separator=">"  >
        <Link underline="hover" color="inherit" href="/">MUI</Link>
        <Link underline="hover" color="inherit" href="/">MUI</Link>
        <Link underline="hover" color="inherit" href="/">MUI</Link>
      </Breadcrumbs>
        </Typography>
        <IconButton > <NotificationsIcon/></IconButton>
        <Button> image</Button>
        <Button> Dropdown</Button>
    </Toolbar>
    </AppBar>
    <Drawer variant='persistent' anchor="left" open={open} sx={{width:240}}>
      <IconButton>
        <ArrowRightIcon onClick={()=>setOpen(!open)}/>
      </IconButton>
    <List>
      <ListItem href="/" >
        
        <ListItemButton>
          <ListItemIcon>
          <MailIcon/>
          </ListItemIcon>
          <ListItemText primary="Inbox"/>
          </ListItemButton>
          </ListItem>
          <ListItem href="/" >
        
        <ListItemButton>
          <ListItemIcon>
          <MailIcon/>
          </ListItemIcon>
          <ListItemText primary="Outbox"/>
          </ListItemButton>
          </ListItem>
    </List>
    </Drawer>

    <Box sx={{backgroundColor:"#f3f4f8",p:2,borderRadius:2,m:3}}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, aliquam adipisci. Beatae eum amet at a quis. Delectus, atque accusantium sunt, qui cumque beatae ex corrupti voluptate quos recusandae distinctio.</p>
    </Box>
    <Box sx={{bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'white'),borderRadius: 2,p:2,m:3,boxShadow:1}}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, aliquam adipisci. Beatae eum amet at a quis. Delectus, atque accusantium sunt, qui cumque beatae ex corrupti voluptate quos recusandae distinctio.</p>
    </Box>
   </Box>
  );
};

export default Layout;