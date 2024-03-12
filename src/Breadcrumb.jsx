import { Breadcrumbs, Link } from '@mui/material';
import { Typography } from 'antd';
import React from 'react';

const Breadcrumb = () => {
  return (
    <Breadcrumbs separator=">">
      <Link underline="hover" color="inherit" href="/">
        <Typography sx={{ fontSize: 12 }}>Home</Typography>
      </Link>
      <Link underline="hover" color="inherit" href="/">
        <Typography sx={{ fontSize: 12 }}>Community</Typography>
      </Link>
      <Link underline="hover" color="inherit" href="/">
        <Typography sx={{ fontSize: 12 }}>Add Users</Typography>
      </Link>
    </Breadcrumbs>
  );
};

export default Breadcrumb;
