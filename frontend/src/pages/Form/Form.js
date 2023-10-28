import React from 'react'
import { Box, Typography } from '@mui/material';
import NavAdmin from '../../Components/NavAdmin'
import { styled, useTheme } from '@mui/material/styles';
// import {Grid} from '@mui/material';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { FormControlLabel, FormGroup } from '@mui/material';
// import FormGroup from '@mui/material';

import Checkbox from '@mui/material/Checkbox';

import { useRef } from 'react'
import { Button } from '@mui/base'
// import React from 'react'
// import { Box } from '@mui/system'
// import Nav from '../Nav'
import { Grid, TextField } from '@mui/material'
// import '../general.css'

import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import InputAdornment from '@mui/material/InputAdornment';
// import Link from 'next/link'\
import { Link } from 'react-router-dom';


import './Form.css'
const citiesInIndia = [
    'Mumbai',
    'Delhi',
    'Bangalore',
    'Hyderabad',
    // Add more cities here
];

const languagesInIndia = [
    "Telugu",
    "Kannada",
    "Tamil",
    "Urdu",
    "Gujarati",
    " Urdu",
    "Malayalam",
    "Hindi",
    "Bengali",
    "Punjabi",
    "Assamese",
    "Odia",
    "Marathi",

];

const jurisdiction = [
    "Supreme Court",
    "Specialized Court",
    "District Court",
    "High Court",

]

const expertise = [
    "AI",
]

const Form = () => {
    const [selectedCity, setSelectedCity] = React.useState('');

    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
    };

    const [selectedLanguage, setSelectedLanguage] = React.useState('');

    const handleLanguageChange = (event) => {
        setSelectedLanguage(event.target.value);
    };

    const [selectedJurisdiction, setSelectedJurisdiction] = React.useState('');

    const handleJurisdictionChange = (event) => {
        setSelectedJurisdiction(event.target.value);
    };

    const [selectedExpertise, setSelectedExpertise] = React.useState('');

    const handleExpertiseChange = (event) => {
        setSelectedExpertise(event.target.value);
    };

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    }));
    return (
        <Box sx={{ margin: '0px', padding: '0px', border: 'none' }}>
            <Box sx={{ display: 'flex' }}>
                <NavAdmin />

                <Box component="main" sx={{ flexGrow: 1, pl: 3, pt: 3, pb: 3 }}>
                    <DrawerHeader />

                    <Box className='bankdetails-box'>
                        <Grid container sx={{
                            padding: '3em'
                        }}>
                            <Grid item xs={12}>
                                <Typography sx={{
                                    fontSize: '25px',
                                    fontWeight: '700',
                                    lineHeight: '20px',
                                    marginBottom: '1em',


                                }}>
                                    Basic Information
                                </Typography>
                            </Grid>

                            <Grid item lg={3} md={3} sm={5} xs={12} sx={{
                                marginRight: '1em'
                            }}>
                                <Typography sx={{
                                    color: '#696F79',
                                    fontSize: '16px',
                                    fontWeight: '400',
                                    marginBottom: '0.5em',

                                }}>
                                    Location*
                                </Typography>
                                <FormControl>
               
                <Select
                  className="subject"
                  labelId="From-id"
                  value={selectedCity}
                  label="subject"
                  onChange={handleCityChange}
                  sx={{
                    width: "20vw",
                    height: "50px",
                    // background: "#FFFFFF",
                    padding: "28px",
                    mt: 2,
                    
                  }}
                  name="subject"
                  required
                  
                >
                  {
                    citiesInIndia.map((city,index)=>(
                        <MenuItem key={index} value={city}>
                            {city}
                        </MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
                            </Grid>

                            <Grid item lg={3} md={3} sm={5} xs={12} sx={{
                                marginRight: '1em'
                            }}>
                                <Typography sx={{
                                    color: '#696F79',
                                    fontSize: '16px',
                                    fontWeight: '400',
                                    marginBottom: '0.5em'
                                }}>
                                    Languages
                                </Typography>
                                <FormControl>
               
                <Select
                  className="subject"
                  labelId="From-id"
                   value={selectedLanguage}
                  label="subject"
                   onChange={handleLanguageChange}
                  sx={{
                    width: "20vw",
                    height: "50px",
                    // background: "#FFFFFF",
                    padding: "28px",
                    mt: 2,
                    
                  }}
                  name="subject"
                >
                                      {
                 languagesInIndia.map((language,index)=>(
                        <MenuItem key={index} value={language}>
                            {language}
                        </MenuItem>
                    ))
                  }
                 
                </Select>
              </FormControl>
                            </Grid>



                            <Grid item xs={12} sx={{ marginTop: '2em' }}>
                                <Typography sx={{
                                    fontSize: '25px',
                                    fontWeight: '700',
                                    lineHeight: '20px',
                                    marginBottom: '1em',


                                }}>
                                    Lawyer Qualifications
                                </Typography>
                            </Grid>

                            <Grid item lg={3} md={3} xs={12} sx={{
                                marginRight: '1em'
                            }}>
                                <Typography sx={{
                                    color: '#696F79',
                                    fontSize: '16px',
                                    fontWeight: '400',
                                    marginBottom: '0.5em'
                                }}>
                                    Years of Experience
                                </Typography>
                                <TextField
                                    fullWidth />
                            </Grid>

                            <Grid item lg={3} md={3} xs={12} sx={{
                                marginRight: '1em'
                            }}>
                                <Typography sx={{
                                    color: '#696F79',
                                    fontSize: '16px',
                                    fontWeight: '400',
                                    marginBottom: '0.5em'
                                }}>
                                    Jurisdiction
                                </Typography>
                                <FormControl>
               
               <Select
                 className="subject"
                 labelId="From-id"
                  value={selectedJurisdiction}
                 
                  onChange={handleJurisdictionChange}
                 sx={{
                   width: "20vw",
                   height: "50px",
                //    background: "#FFFFFF",
                   padding: "28px",
                //    mt: 2,
                   
                 }}
                 name="subject"
               >
                                     {
                jurisdiction.map((jurisdiction,index)=>(
                       <MenuItem key={index} value={jurisdiction}>
                           {jurisdiction}
                       </MenuItem>
                   ))
                 }
                
               </Select>
             </FormControl>
                            </Grid>

                            <Grid item lg={3} md={3} xs={12} sx={{
                                marginRight: '1em'
                            }}>
                                <Typography sx={{
                                    color: '#696F79',
                                    fontSize: '16px',
                                    fontWeight: '400',
                                    marginBottom: '0.5em'
                                }}>
                                    Area of Expertise
                                </Typography>
                                <FormControl>
               
               <Select
                 className="subject"
                 labelId="From-id"
                  value={selectedExpertise}
                label ='domain'
                  onChange={handleExpertiseChange}
                 sx={{
                   width: "20vw",
                   height: "50px",
                //    background: "#FFFFFF",
                   padding: "28px",
                //    mt: 2,
                   
                 }}
                 name="subject"
               >
                                     {
                expertise.map((expertise,index)=>(
                       <MenuItem key={index} value={expertise}>
                           {expertise}
                       </MenuItem>
                   ))
                 }
                
               </Select>
             </FormControl>
                            </Grid>

                            <Grid item xs={12} sx={{ marginTop: '2em' }}>
                                <Typography sx={{
                                    fontSize: '25px',
                                    fontWeight: '700',
                                    lineHeight: '20px',
                                    marginBottom: '1em',


                                }}>
                                    Billing
                                </Typography>
                            </Grid>

                            <Grid item lg={4} md={4} xs={12} sx={{
                                marginRight: '1em'
                            }}>
                                <Typography sx={{
                                    color: '#696F79',
                                    fontSize: '16px',
                                    fontWeight: '400',
                                    marginBottom: '0.5em'
                                }}>
                                    Charges(in Rs)
                                </Typography>
                                <TextField
                                    fullWidth />
                            </Grid>


                            <Grid item xs={12} style={{ marginTop: '1em' }}>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Pro Bono Case" />

                                </FormGroup>
                            </Grid>

                            <Grid item xs={12}>
                                <Typography sx={{
                                    fontSize: '25px',
                                    fontWeight: '700',
                                    lineHeight: '20px',
                                    marginBottom: '1em',
                                    marginTop: '2em'


                                }}>
                                    Additional Notes
                                </Typography>
                            </Grid>

                            <Grid item lg={8} md={8} sm={8} xs={12} sx={{
                                marginRight: '1em'
                            }}>

                                <TextField
                                    multiline
                                    fullWidth
                                    rows={6}
                                    // defaultValue="Default Value"
                                    style={{
                                        // width:'40vw',
                                        marginTop: '1em'
                                    }} />
                            </Grid>

                            <Grid container justifyContent="center" mt='5em'>

                                {/* <Grid item xs={2} display='flex' style={{
                        alignItems:'right',
                        alignContent:'right',
                        float:'right',
                        margin: 'none',

                    }}> */}
                                {/* <Link href='./RegistrationForm'> */}
                                <Button fullWidth className='proceed-button'>Find Lawyers</Button>
                                
                            </Grid>




                        </Grid>


                    </Box>





                </Box>
            </Box>
        </Box>
    )
}



export default Form