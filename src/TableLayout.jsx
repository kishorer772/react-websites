import { Box, Chip, Paper, Toolbar } from '@mui/material';
import { Button, Typography } from 'antd';
import React from 'react';
import BasicTable from './Table';
import SendIcon from '@mui/icons-material/Send';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
const TableLayout = () => {
  return (
    <Box
      component={Paper}
      sx={{
        bgcolor: (theme) =>
          theme.palette.mode === 'dark' ? '#101010' : 'white',
        borderRadius: 2,
        marginInline: 2,
        boxShadow: 1,
      }}
    >
      <Toolbar sx={{ padding: '0 !important' }}>
        <Toolbar sx={{ gap: 1, flexGrow: 1 }}>
          <Typography> Jane</Typography>
          <Chip label="User 07" />
        </Toolbar>
        <Toolbar sx={{ gap: 1 }}>
          <Button
            endicon={<PersonAddAltIcon />}
            sx={{ borderRadius: 1 }}
            variant="outlined"
            type="button"
          >
            Add
          </Button>
          <Button endicon={<SendIcon />} variant="contained" disabled={true}>
            Submit
          </Button>
        </Toolbar>
      </Toolbar>
      <BasicTable></BasicTable>
    </Box>
  );
};

export default TableLayout;
