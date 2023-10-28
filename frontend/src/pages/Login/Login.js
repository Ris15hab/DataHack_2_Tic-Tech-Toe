// import React from 'react'
import { React, useState } from 'react'
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import './login.css'
import { TextField, Typography } from '@mui/material';
import { Button } from '@mui/base';
import { Link } from 'react-router-dom';
import Particle from '../../Components/Particle';
// import Login2 from './Login2';
// import { Button } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import axios from 'axios';


const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async ()=>{
        try{
            if(!email||!password){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Please Fill All fields',
                })
            }else{
                const response = await axios.post("http://localhost:8000/user/login",{
                    email,
                    password
                });
                localStorage.setItem("token",response.data.token)
                if(response.status == 200){
                    navigate('/lawyers')  
                }
                else{
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Invalid Login Credentials',
                    })
                }
            }
        }catch(err){
            console.log(err)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Invalid Login Credentials',
            })
        }
    }
    return (
        <div>
            <Box style={{ zIndex: 1, position: 'relative' }}>
                <Particle />
            </Box>

            <Box style={{ zIndex: 1, position: 'relative' }} className='gradient' sx={{
                display: 'flex',
                flexDirection: 'column', // Make it a column flex container
                justifyContent: 'center', // Center vertically
                alignItems: 'center', // Center horizontally
                height: '100vh', // Optionally set a height to center within the viewport

            }}>

                <Paper elevation={2} className='paper' >
                    <Box  >
                        <Box display="flex" flexDirection="column" alignItems="center">
                            <Typography variant='h3' style={{
                                alignSelf: 'center',
                                // fontStyle:'italic',
                                fontWeight: 'bolder',
                                color: '#0c0a3c'
                            }}>
                                Login
                            </Typography>
                        </Box>
                        <Typography variant='h6' sx={{
                            marginTop: '1em',
                            fontWeight: '600'
                        }}>
                            email:
                        </Typography>
                        <TextField fullWidth className='text-field' onChange={(e)=>setEmail(e.target.value)}>
                        </TextField>
                        <Typography variant='h6' sx={{
                            marginTop: '1em',
                            fontWeight: '600'

                        }}>
                            password:
                        </Typography>
                        <TextField fullWidth className='text-field' onChange={(e)=>setPassword(e.target.value)}>
                        </TextField>
                        <Box display='flex' flexDirection='column' alignItems='center' >
                            <Button className='button-login' fullWidth onClick={handleLogin}>
                                Login
                            </Button>
                            <Typography style={{
                                fontSize: '15px',
                                marginTop: '1em',
                                fontWeight: 'bold'
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