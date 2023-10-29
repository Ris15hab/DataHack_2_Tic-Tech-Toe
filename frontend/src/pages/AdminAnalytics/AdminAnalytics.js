import React from 'react'
import Box from '@mui/material/Box';
import { useDemoData } from '@mui/x-data-grid-generator';
import AdminSideNav from '../../Components/AdminSideNav';
import { styled, useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
import {Grid} from '@mui/material'
import a1 from '../../Images/a-1.jpg'
import a3 from '../../Images/a-3.jpg'
import a5 from '../../Images/a-5.jpg'
import a4 from '../../Images/a-4.jpg'
import a2 from '../../Images/a-2.jpg'
import './AdminAnalytics.css'

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
          <Grid container>
            <Grid item xs={12} lg={6} md={6}>
              <Typography sx={{fontFamily:"Poppins", "fontSize":"23px",fontWeight:"bold"}}>
                Domain:
              </Typography>
              <img src={a1} alt="no img bitch" className="image-ana"/>
            </Grid>

            <Grid item xs={12} lg={6} md={6} >
            <img src={a3} alt="no img bitch" className="image-ana-2"/>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} lg={3} md={3}>
            
            </Grid>
            <Grid item xs={12} lg={5} md={5}>
            <img src={a5} alt="no img bitch" className="image-ana"/>
            </Grid>
            <Grid item xs={12} lg={4} md={4}>
            
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} lg={6} md={6}>
              <Typography sx={{fontFamily:"Poppins", "fontSize":"23px",fontWeight:"bold"}}>
                Language:
              </Typography>
              <img src={a2} alt="no img bitch" className="image-ana"/>
            </Grid>

            <Grid item xs={12} lg={6} md={6} >
            <img src={a4} alt="no img bitch" className="image-ana-3"/>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  )
}

export default AdminAnalytics