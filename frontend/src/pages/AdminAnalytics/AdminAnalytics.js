import React from 'react'
import Box from '@mui/material/Box';
import { useDemoData } from '@mui/x-data-grid-generator';
import AdminSideNav from '../../Components/AdminSideNav';
import { styled, useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AdminAnalytics = () => {

  return (
    <Box sx={{ margin: '0px', padding: '0px', border: 'none' }}  >
      <Box sx={{ display: 'flex' }}>
        <AdminSideNav />

        <Box component="main" sx={{ flexGrow: 1, pl: 3, pt: 3, pb: 3 }}>
          <DrawerHeader />
        </Box>
      </Box>
    </Box>
  )
}

export default AdminAnalytics