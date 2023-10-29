import React from 'react'
// import Nav from '../Components/Nav.js'
import { Box } from '@mui/system';
import x from '../../Images/lawyer.jpg'
import './Home.css'
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';

import Nav from '../../Components/Nav';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
  <Box>
    <Box className='main-ear' >
        <Nav/>
        <Box  sx={{
            width:'40vw',
            height:'40vh',
            
        }} className='text'>
            <Typography variant='h3' sx={{color:'white'}} className='welcome z-0'>
            We Work for Client Legal Success
            <br/>– Welcome to ByLaw!
            </Typography>
            <Link to='/sign-up'>
            <Button className='button'>
                Get Started
            </Button>
            </Link>
            
            <Typography variant='h6'  sx={{color:'white',marginTop:1}}>
                Already registered ? 
                <Link to='/login'>
                Login
                </Link>
                
            </Typography>
            
            
          
        </Box>
       

    

   </Box>
   <Box  sx={{
        display:'flex',
        flexDirection:'column',

        alignItems:'center',
        justifyContent: 'center',
        
        // height:'100vh'
        // width:'100vw'

    }}>
        <Box>
        
        </Box>

    </Box>
    
  </Box>
  
  )
}

export default Home;