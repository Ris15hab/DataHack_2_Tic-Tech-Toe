import React from 'react'
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import './sign.css'
import { TextField, Typography } from '@mui/material';
import { Button } from '@mui/base';
import { Link } from 'react-router-dom';
import Particle from '../../Components/Particle';


const Sign = () => {
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
        margin:'1em'
    
    }}>
        
        <Paper elevation={2}  className = 'paper-sign' >
            <Box  >
            <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant='h3' style={{
                alignSelf:'center',
                // fontStyle:'italic',
                fontWeight:'bolder',
                color:'#0c0a3c'
            }}>
                    Sign Up
            </Typography>
            </Box>
            <Typography variant = 'h6' sx={{
                marginTop:'1em',
                fontWeight:'600'
            }}>
                    First Name:
            </Typography>
            <TextField fullWidth className='text-field'>
            </TextField>
            <Typography variant = 'h6' sx={{
                marginTop:'1em',
                fontWeight:'600'
            }}>
                    Last Name:
            </Typography>
            <TextField fullWidth className='text-field'>
            </TextField>
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
            <Typography variant = 'h6' sx={{
                marginTop:'1em',
                fontWeight:'600'

            }}>
                    Confirm password:
            </Typography>
            <TextField fullWidth className='text-field'>
            </TextField>
            <Box display='flex' flexDirection='column' alignItems='center' >
                <Link to ='/'>
                <Button className='button-sign-up' fullWidth>
                        Sign Up
                    </Button>
                </Link>
                   
                   
            </Box>
            
            
            </Box>
        </Paper>
    </Box>
       
            {/* <Box className='particle'> */}

            {/* </Box> */}
    </div>
  )
}

export default Sign