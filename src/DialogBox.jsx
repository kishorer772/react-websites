import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';

const DialogBox = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#f3f4f8',
        p: 1,
        borderRadius: 2,
        marginInline: 2,
        marginBlock: 1.5,
      }}
    >
      <List sx={{ p: 0 }}>
        <ListItem>
          <Typography sx={{ fontSize: 15 }}>
            Invite Members to your Community
          </Typography>
        </ListItem>
        <ListItem>
          <Typography sx={{ fontSize: 15 }}>Requirements</Typography>
        </ListItem>
      </List>
      <List sx={{ listStyle: 'decimal', pl: 4, fontSize: 15 }}>
        <ListItem
          sx={{ display: 'list-item', fontSize: 15, paddingBlock: 0.25 }}
        >
          <ListItemText>
            <Typography variant="body2" style={{ fontSize: '14px' }}>
              Email ,username, firstname and lastname are required
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem sx={{ display: 'list-item', paddingBlock: 0.25 }}>
          <ListItemText>
            <Typography variant="body2" style={{ fontSize: '14px' }}>
              For Organisation and Reseller, the organisation name is required.
              If the user is a Guet, both start and end dates are necessary
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem sx={{ display: 'list-item', paddingBlock: 0.25 }}>
          <ListItemText>
            <Typography
              variant="body2"
              style={{ display: 'flex', fontSize: '14px' }}
            >
              You can {'    '}
              <Typography sx={{ color: '#01a1ff', fontSize: '14px' }}>
                &nbsp;download template&nbsp;
              </Typography>{' '}
              to understand and create the right structure
            </Typography>
          </ListItemText>
        </ListItem>
      </List>
      <Typography style={{ display: 'flex', fontSize: '14px' }}>
        Create Multiple Users by
        <Typography sx={{ color: '#01a1ff', fontSize: '14px' }}>
          &nbsp;uploading a CSV&nbsp;
        </Typography>{' '}
        to understand and create the right structure
      </Typography>
    </Box>
  );
};

export default DialogBox;
