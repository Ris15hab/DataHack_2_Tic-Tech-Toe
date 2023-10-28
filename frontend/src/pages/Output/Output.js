import React from 'react'
import NavAdmin from '../../Components/NavAdmin'
import { styled, useTheme } from '@mui/material/styles';
import { Button } from '@mui/base'
// import React from 'react'
import { Box } from '@mui/system'
// import Nav from '../Nav'
import { Grid, TextField, Typography } from '@mui/material'
// import '../general.css'
// import Link from 'next/link'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material/styles";
// import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material'
import {Chip} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';


import y from './output.png'
// import Image from 'next/image'
// import PlanModal from '../PlanModal'

import Modal from '@mui/material/Modal';

// import { Scrollbar } from 'react-scrollbars-custom';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60vw',
    bgcolor: 'white',
    border: 'none',
    boxShadow: 24,
    height:'70vh',
    p: 1,
  };


const Output = () => {
    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    }));
    return (
        <Box sx={{ margin: '0px', padding: '0px', border: 'none' }} className='output-box'>
            <Box sx={{ display: 'flex' }}>
                <NavAdmin />

                <Box component="main" sx={{ flexGrow: 1, pl: 3, pt: 3, pb: 3 }}>
                    <DrawerHeader />
                </Box>

                <Box className='plan-box'>
                <Box className='grid-plan'>
                <h3 style={{textAlign: 'center',fontSize:"1.4em",fontWeight:"bold"}}>Find Your Perfect Match</h3>
                <Grid container  sx={{
                    padding: '3em'

                }}
                    // columnSpacing={2}
                    // spacing={9}
                    //  style={{ paddingLeft: 200, paddingRight: 200 }}
                     >
                    <Grid item xs={12} md={4} sm={4} lg={4} >
                        <br /><br />
                        <Card 
                        // sx={{ minWidth: 275 }} 
                        className='cards'>
                            <CardHeader />
                            {/* <CardContent> */}
                            <Box display='flex' flexDirection='column' alignItems='center'>
                            <Typography color="text.primary" gutterBottom variant="h4" display='flex' alignSelf='center'
                            style={{
                                marginBottom:'1em',
                                fontWeight:"bold"
                            }}>
                                Aasmi Thadhani
                            </Typography>
                            </Box>
                            
                            
                                        <p className="font-normal text-gray-700 dark:text-gray-400">
                                            <p style={{
                                                display:'flex',
                                                float:'right',

                                            }}>
                                                <LocationOnIcon/>
                                                Mumbai
                                            </p>
                                            <p>
                                                <b>Years of Experience: </b>

                                               5
                                            </p>
                                           
                                            <p style={{
                                                marginTop:'0.3em'
                                            }}>
                                               <b> Charges(in Rs): </b>
                                                100000
                                            </p>
                                            <p style={{
                                                marginTop:'0.5em'
                                            }}>
                                              
                                              <b>Domain: </b>

                                              Corporate law
                                               
                                           </p>
                                           <p style={{
                                                marginTop:'0.5em'
                                            }}>
                                              
                                              <b>Jurisdiction: </b>

                                                High Court
                                               
                                           </p>
                                           <p style={{
                                                marginTop:'0.5em'
                                            }}>
                                              
                                              <b>Pro bono: </b>

                                                yes
                                               
                                           </p>

                                           <p style={{
                                                marginTop:'0.5em'
                                            }}>
                                            
                                            
                                                <Chip label = {'hindi'} style={{marginRight:'0.6em'}}/>
                                            
                                               
                                           </p>
                                        </p>
                            {/* <div style={{ fontSize: 14 }}

                            >
                                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', padding: 5, paddingLeft: 50 }}><DoneIcon fontSize='small' style={{ color: 'green' }} /> 24X7 Support </div>
                                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', padding: 5, paddingLeft: 50 }}><DoneIcon fontSize='small' style={{ color: 'green' }} /> 1 Month Free Trial</div>
                                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', padding: 5, paddingLeft: 50 }}><CloseIcon fontSize='small' style={{ color: 'red' }} /> Dedicated Support</div>
                                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', padding: 5, paddingLeft: 50 }}><CloseIcon fontSize='small' style={{ color: 'red' }} /> Gala Dinner Invites</div>
                                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', padding: 5, paddingLeft: 50 }}><CloseIcon fontSize='small' style={{ color: 'red' }} /> Complimentary Stay Offers</div>
                                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', padding: 5, paddingLeft: 50 }}><CloseIcon fontSize='small' style={{ color: 'red' }} /> Additional Incentives</div>
                                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', padding: 5, paddingLeft: 50 }}><CloseIcon fontSize='small' style={{ color: 'red' }} /> Sales Training</div>
                                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', padding: 5, paddingLeft: 50, fontSize: 12 }}><CloseIcon fontSize='small' style={{ color: 'red', }} /> Access to International Properties</div>
                            </div><br /><br /> */}
                            {/* </CardContent> */}
                            <CardActions style={{ padding: 0 }}>
                                <Button variant="contained" color="success"  style={{ width: 3000, height: 50, marginTop:'1em' }} className='proceed-button1'>
                                    Contact
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}  sm={4} lg={4}>
                        <Card  className='cards-1'>
                            {/* <CardContent> */}
                            <Typography style={{ height: 30, fontSize: 15,fontWeight:'bold', color: 'Black', backgroundColor: '#e6c619' }}>Best Match</Typography><br /><br />
                            <Typography color="text.primary" gutterBottom variant="h5">
                                Gold(6 months)
                            </Typography>
                            <Typography variant="h6" component="div">
                                <strike>₹4500</strike>  <b>Free!!</b>
                            </Typography>
                            <div style={{ fontSize: 14 }}

                            >
                                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', padding: 5, paddingLeft: 50 }}><DoneIcon fontSize='small' style={{ color: 'green' }} /> 24X7 Support </div>
                                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', padding: 5, paddingLeft: 50 }}><DoneIcon fontSize='small' style={{ color: 'green' }} /> 1 Month Free Trial</div>
                                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', padding: 5, paddingLeft: 50 }}><DoneIcon fontSize='small' style={{ color: 'green' }} /> Dedicated Support</div>
                                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', padding: 5, paddingLeft: 50 }}><CloseIcon fontSize='small' style={{ color: 'red' }} /> Gala Dinner Invites</div>
                                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', padding: 5, paddingLeft: 50 }}><CloseIcon fontSize='small' style={{ color: 'red' }} /> Complimentary Stay Offers</div>
                                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', padding: 5, paddingLeft: 50 }}><CloseIcon fontSize='small' style={{ color: 'red' }} /> Additional Incentives</div>
                                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', padding: 5, paddingLeft: 50 }}><CloseIcon fontSize='small' style={{ color: 'red' }} /> Sales Training</div>
                                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', padding: 5, paddingLeft: 50, fontSize: 12 }}><CloseIcon fontSize='small' style={{ color: 'red' }} /> Access to International Properties</div>
                            </div><br /><br />
                            {/* </CardContent> */}
                            <CardActions style={{ padding: 0 }}>
                                <Button variant="contained" color="success"      style={{ width: 3000, height: 50 }} className='create-account' >
                                    Contact
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} lg={4}>
                        <br /><br />
                        <Card 
                        // sx={{ minWidth: 275 }} 
                        className='cards'>
                            <CardHeader />
                            {/* <CardContent> */}
                            <Box display='flex' flexDirection='column' alignItems='center'>
                            <Typography color="text.primary" gutterBottom variant="h4" display='flex' alignSelf='center'
                            style={{
                                marginBottom:'1em',
                                fontWeight:"bold"
                            }}>
                                Aasmi Thadhani
                            </Typography>
                            </Box>
                            
                            
                                        <p className="font-normal text-gray-700 dark:text-gray-400">
                                            <p style={{
                                                display:'flex',
                                                float:'right',

                                            }}>
                                                <LocationOnIcon/>
                                                Mumbai
                                            </p>
                                            <p>
                                                <b>Years of Experience: </b>

                                               5
                                            </p>
                                           
                                            <p style={{
                                                marginTop:'0.3em'
                                            }}>
                                               <b> Charges(in Rs): </b>
                                                100000
                                            </p>
                                            <p style={{
                                                marginTop:'0.5em'
                                            }}>
                                              
                                              <b>Domain: </b>

                                              Corporate law
                                               
                                           </p>
                                           <p style={{
                                                marginTop:'0.5em'
                                            }}>
                                              
                                              <b>Jurisdiction: </b>

                                                High Court
                                               
                                           </p>
                                           <p style={{
                                                marginTop:'0.5em'
                                            }}>
                                              
                                              <b>Pro bono: </b>

                                                yes
                                               
                                           </p>

                                           <p style={{
                                                marginTop:'0.5em'
                                            }}>
                                            
                                            
                                                <Chip label = {'hindi'} style={{marginRight:'0.6em'}}/>
                                            
                                               
                                           </p>
                                        </p>
                            {/* <div style={{ fontSize: 14 }}

                            >
                                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', padding: 5, paddingLeft: 50 }}><DoneIcon fontSize='small' style={{ color: 'green' }} /> 24X7 Support </div>
                                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', padding: 5, paddingLeft: 50 }}><DoneIcon fontSize='small' style={{ color: 'green' }} /> 1 Month Free Trial</div>
                                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', padding: 5, paddingLeft: 50 }}><CloseIcon fontSize='small' style={{ color: 'red' }} /> Dedicated Support</div>
                                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', padding: 5, paddingLeft: 50 }}><CloseIcon fontSize='small' style={{ color: 'red' }} /> Gala Dinner Invites</div>
                                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', padding: 5, paddingLeft: 50 }}><CloseIcon fontSize='small' style={{ color: 'red' }} /> Complimentary Stay Offers</div>
                                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', padding: 5, paddingLeft: 50 }}><CloseIcon fontSize='small' style={{ color: 'red' }} /> Additional Incentives</div>
                                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', padding: 5, paddingLeft: 50 }}><CloseIcon fontSize='small' style={{ color: 'red' }} /> Sales Training</div>
                                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', padding: 5, paddingLeft: 50, fontSize: 12 }}><CloseIcon fontSize='small' style={{ color: 'red', }} /> Access to International Properties</div>
                            </div><br /><br /> */}
                            {/* </CardContent> */}
                            <CardActions style={{ padding: 0 }}>
                                <Button variant="contained" color="success"  style={{ width: 3000, height: 50, marginTop:'1em' }} className='proceed-button1'>
                                    Contact
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
            </Box>
            {/* <img src={y} className='plan-image'/> */}

            </Box>
        </Box>
    )
}

export default Output 