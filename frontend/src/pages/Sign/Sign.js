import {React,useState} from 'react'
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import './sign.css'
import { TextField, Typography } from '@mui/material';
import { Button } from '@mui/base';
import { Link ,useNavigate} from 'react-router-dom';
import Particle from '../../Components/Particle';
import Swal from 'sweetalert2'
import axios from 'axios';


const Sign = () => {
    const [firstName , setFirstName] = useState('');
    const [lastName , setLastName] = useState('');
    const [email , setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    // const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = async() =>{
        try{
            if(!firstName||!lastName||!email||!password){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Please Fill All fields',
                })
            }else{
                const response = await axios.post("http://localhost:8000/user/register",{
                    firstName,
                    lastName,
                    email,
                    password
                });
                if(response.status == 201){
                    setTimeout(() => {
                        navigate('/login')  
                    }, 1500);
                    Swal.fire(
                        'YAYY!',
                        'Successful Registration',
                        'success'
                    )
                }
                else{
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                    })
                }
            }
        }catch(err){
            console.log(err);
            if(err.response.data.message.includes('Email is already in use!!')){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Email already in use :(',
                })
            }
            else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                })
            }
        }
    }

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
        
        <Paper elevation={1}  className = 'paper-sign' >
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
            <TextField fullWidth className='text-field' onChange={e=>setFirstName(e.target.value)}>
            </TextField>
            <Typography variant = 'h6' sx={{
                marginTop:'1em',
                fontWeight:'600'
            }}>
                    Last Name:
            </Typography>
            <TextField fullWidth className='text-field' onChange={e=>setLastName(e.target.value)}>
            </TextField>
            <Typography variant = 'h6' sx={{
                marginTop:'1em',
                fontWeight:'600'
            }}>
                    email:
            </Typography>
            <TextField fullWidth className='text-field' onChange={e=>setEmail(e.target.value)}>
            </TextField>
            <Typography variant = 'h6' sx={{
                marginTop:'1em',
                fontWeight:'600'

            }}>
                    password:
            </Typography>
            <TextField fullWidth className='text-field' onChange={e=>setPassword(e.target.value)}>
            </TextField>
            {/* <Typography variant = 'h6' sx={{
                marginTop:'1em',
                fontWeight:'600'

            }}>
                    Confirm password:
            </Typography> */}
            {/* <TextField fullWidth className='text-field'>
            </TextField> */}
            <Box display='flex' flexDirection='column' alignItems='center' >
                {/* <Link to ='/'> */}
                <Button className='button-sign-up' fullWidth onClick={handleRegister}>
                        Sign Up
                    </Button>
                {/* </Link> */}
                   
                   
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