// import React from 'react'
import React from 'react'
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import './login.css'
import { TextField, Typography } from '@mui/material';
import { Button } from '@mui/base';
import { Link } from 'react-router-dom';
import Particle from '../../Components/Particle';
// import Login2 from './Login2';
// import { Button } from 'flowbite-react';

const Login = () => {
  return (
    <div>
        <Box style={{ zIndex: 1, position: 'relative' }}>
        <Particle/>
        </Box>

        <Box style={{ zIndex: 1, position: 'relative' }} className ='gradient' sx={{
        display: 'flex',
        flexDirection: 'column', // Make it a column flex container
        justifyContent: 'center', // Center vertically
        alignItems: 'center', // Center horizontally
        height: '100vh', // Optionally set a height to center within the viewport
    
    }}>
        
        <Paper elevation={2}  className = 'paper' >
            <Box  >
            <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant='h3' style={{
                alignSelf:'center',
                // fontStyle:'italic',
                fontWeight:'bolder',
                color:'#0c0a3c'
            }}>
                    Login
            </Typography>
            </Box>
            <Typography variant = 'h6' sx={{
                marginTop:'1em',
                fontWeight:'600'
            }}>
                    email:
            </Typography>
            <TextField fullWidth className='text-field'>
            </TextField>
            <Typography variant = 'h6' sx={{
                marginTop:'1em',
                fontWeight:'600'

            }}>
                    password:
            </Typography>
            <TextField fullWidth className='text-field'>
            </TextField>
            <Box display='flex' flexDirection='column' alignItems='center' >
                    <Button className='button-login' fullWidth>
                        Login
                    </Button>
                    <Typography style={{
                        fontSize:'15px',
                        marginTop:'1em',
                        fontWeight:'bold'
                    }}>
                        Not registered ? <Link to='/sign-up' className='link-sign' > <u>Sign up</u></Link>

                    </Typography>
            </Box>
            
            
            </Box>
        </Paper>
    </Box>
       
            {/* <Box className='particle'> */}

            {/* </Box> */}
    </div>
    
  )
}

export default Login