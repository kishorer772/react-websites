import {
  Box,
  Collapse,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import SearchIcon from '@mui/icons-material/Search';
import { Add, ExpandLess, ExpandMore, Update } from '@mui/icons-material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import logo from './logo.svg';
import MouseIcon from '@mui/icons-material/Mouse';
import LanguageIcon from '@mui/icons-material/Language';
const AppDrawer = ({ open, handleDrawer, toggle, handleClick }) => {
  return (
    <Drawer
      variant="persistent"
      anchor="left"
      sx={{
        width: 240, // Set the width of the drawer
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240, // Set the width of the paper inside the drawer
          boxSizing: 'border-box',
        },
      }}
      open={open}
    >
      <Box>
        <Toolbar
          sx={{
            justifyContent: 'end',
            position: 'absolute',
            right: 0,
            zIndex: 1,
            // m: 1,
            p: '0 !important',
          }}
        >
          <IconButton sx={{ p: 0 }} onClick={handleDrawer}>
            <ArrowRightIcon />
          </IconButton>
        </Toolbar>
        <Box>
          <List sx={{ p: 0 }}>
            <Toolbar sx={{ justifyContent: 'center' }}>
              <img src={logo} alt="" width={100} height={50} />
            </Toolbar>
            <ListItem sx={{ p: 0, paddingInline: 1 }}>
              <TextField
                label="Search"
                variant="outlined"
                InputProps={{
                  startAdornment: <SearchIcon fontSize="small" />,
                }}
                sx={{ p: 0 }}
                // placeholder="Search"
              />
            </ListItem>
            <ListItem href="/" sx={{ p: 0 }}>
              <ListItemButton>
                <ListItemIcon>
                  <QueryStatsIcon />
                </ListItemIcon>
                <ListItemText primary="Discover" />
              </ListItemButton>
            </ListItem>
            <ListItem href="/" sx={{ p: 0 }}>
              <ListItemButton>
                <ListItemIcon>
                  <LeaderboardIcon />
                </ListItemIcon>
                <ListItemText primary="Leader board" />
              </ListItemButton>
            </ListItem>
            <ListItem href="/" sx={{ p: 0 }}>
              <ListItemButton>
                <ListItemIcon>
                  <MouseIcon />
                </ListItemIcon>
                <ListItemText primary="Browse Channels" />
              </ListItemButton>
            </ListItem>
            <ListItem href="/" sx={{ p: 0 }}>
              <ListItemButton>
                <ListItemIcon>
                  <LanguageIcon />
                </ListItemIcon>
                <ListItemText primary="Website" />
              </ListItemButton>
            </ListItem>
            <ListItem onClick={handleClick}>
              <ListItemText>
                <Typography fontSize={12} color={'#01a1ff'}>
                  {' '}
                  Groups
                </Typography>
              </ListItemText>

              {toggle ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={toggle} timeout="auto" unmountOnExit>
              <List component="div" disablePadding sx={{ p: 0, pl: 4 }}>
                <ListItem sx={{ p: 0 }} href="/">
                  <ListItemButton>
                    <ListItemIcon>
                      <Add />
                    </ListItemIcon>
                    <ListItemText primary="Add" />
                  </ListItemButton>
                </ListItem>
                <ListItem sx={{ p: 0 }} href="/">
                  <ListItemButton>
                    <ListItemIcon>
                      <Update />
                    </ListItemIcon>
                    <ListItemText primary="Update Group" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Box>
        <Toolbar
          sx={{
            paddingInline: '0.5rem !important',
            position: 'absolute',
            display: 'flex',
            justifyContent: 'space-between',
            left: 0,
            right: 0,
            bottom: 0,
            gap: 1,
          }}
        >
          <span>
            {' '}
            <img src={logo} alt="" width={40} height={50} />
          </span>
          <Box sx={{ display: 'flex', flexDirection: 'column', p: 0 }}>
            <Typography sx={{ fontSize: 12 }}>Jane</Typography>
            <Typography sx={{ fontSize: 12 }}>janedoe@gmail.com</Typography>
          </Box>
          <IconButton>
            <ExitToAppIcon />
          </IconButton>
        </Toolbar>
      </Box>
    </Drawer>
  );
};

export default AppDrawer;
