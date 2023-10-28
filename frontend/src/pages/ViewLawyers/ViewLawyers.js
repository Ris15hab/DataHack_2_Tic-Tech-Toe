import React, { useState } from 'react'
import NavAdmin from '../../Components/NavAdmin'
import { Box, Chip } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { Button, Card } from 'flowbite-react';
import Grid from '@mui/material/Grid';
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import LocationOnIcon from '@mui/icons-material/LocationOn';

const ViewLawyers = () => {

    const [search, setSearch] = useState('')
    const [users, setUsers] = useState([{
        name: 'mahek upadhye',
        location: 'mumbai',
        yearsOfExperience:'5',
        AreaOfExpertise:'Corporate Law',
        Charges: 12356,
        jusrisdiction:'high court',
        probo:'yes',
        languages:['hindi','english','marathi']
        
    }, {
        name: 'aasmi thadhani',
        location: 'mumbai',
        yearsOfExperience:'5',
        AreaOfExpertise:'ai ml',
        Charges: 12356,
        jusrisdiction:'high court',
        probo:'yes',
        languages:['hindi','english','marathi']
        

    }, {
        name: 'rishab pendam',
        location: 'mumbai',
        yearsOfExperience:'5',
        AreaOfExpertise:'ai ml',
        Charges: 12356,
        jusrisdiction:'high court',
        probo:'yes',
        languages:['hindi','english','marathi']

    }, {
        name: 'meet daftary',
        location: 'mumbai',
        yearsOfExperience:'5',
        AreaOfExpertise:'ai ml',
        Charges: 12356,
        jusrisdiction:'high court',
        probo:'yes',
        languages:['hindi','english','marathi']

    }
    ])
    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

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


                    <FormControl
                        sx={{ m: 1, width: "43ch", marginLeft: "3vw" }}
                        variant="outlined"
                        value={search}
                        placeholder="  ...Search User..."
                        onChange={handleSearch}
                    >
                        <OutlinedInput
                            placeholder="Search User..."
                            id="outlined-adornment-weight"
                            startAdornment={
                                <InputAdornment position="start">
                                    <ContentPasteSearchIcon />
                                </InputAdornment>
                            }
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                                "aria-label": "weight",
                            }}
                        />
                    </FormControl>

                    <FormControl sx={{ m: 1, minWidth: 140 }}>
                      <InputLabel id="demo-controlled-open-select-label">Experience</InputLabel>
                        <Select
                            // value={age}
                            // onChange={handleChange}
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                        >
                            <MenuItem value="">
                                <em style={{ color: "#003B73" }}>Sort Age:</em>
                            </MenuItem>
                            <MenuItem value={10}>Hight to Low</MenuItem>
                            <MenuItem value={20}>Low to High</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl sx={{ m: 1, minWidth: 140 }}>
                      <InputLabel id="demo-controlled-open-select-label">Charges</InputLabel>
                        <Select
                            // value={age}
                            // onChange={handleChange}
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                        >
                            <MenuItem value="">
                                <em style={{ color: "#003B73" }}>Sort Age:</em>
                            </MenuItem>
                            <MenuItem value={10}>Hight to Low</MenuItem>
                            <MenuItem value={20}>Low to High</MenuItem>
                        </Select>
                    </FormControl>

    
                    <Grid container spacing={0}>
                        {
                            users.filter((user) => {
                                return search.toLowerCase() === ""
                                    ? user
                                    : (user.name.toLowerCase().includes(search));
                            }).map((values) =>
                            (
                                <Grid item xs={12} lg={4} md={4}>
                                    <Card className="max-w-sm mt-10 ml-10">
                                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            {values.name}
                                        </h5>
                                        <p className="font-normal text-gray-700 dark:text-gray-400">
                                            <p style={{
                                                display:'flex',
                                                float:'right',

                                            }}>
                                                <LocationOnIcon/>
                                                {values.location}
                                            </p>
                                            <p>
                                                <b>Years of Experience: </b>

                                                {values.yearsOfExperience}
                                            </p>
                                           
                                            <p style={{
                                                marginTop:'0.3em'
                                            }}>
                                               <b> Charges(in Rs): </b>
                                                {values.Charges}
                                            </p>
                                            <p style={{
                                                marginTop:'0.5em'
                                            }}>
                                              
                                              <b>Domain: </b>

                                                {values.AreaOfExpertise}
                                               
                                           </p>
                                           <p style={{
                                                marginTop:'0.5em'
                                            }}>
                                              
                                              <b>Jurisdiction: </b>

                                                {values.jusrisdiction}
                                               
                                           </p>
                                           <p style={{
                                                marginTop:'0.5em'
                                            }}>
                                              
                                              <b>Pro bono: </b>

                                                {values.probono}
                                               
                                           </p>

                                           <p style={{
                                                marginTop:'0.5em'
                                            }}>
                                            {  
                                            values.languages.map((values)=>
                                            (
                                                <Chip label = {values} style={{marginRight:'0.6em'}}/>
                                            ))
                        }
                                               
                                           </p>
                                        </p>
                                        <Button style={{
                                            backgroundColor: '#02003E'
                                        }}>
                                            <p>
                                                Contact
                                            </p>

                                        </Button>
                                    </Card>
                                </Grid>



                            )

                            )}




                    </Grid>





                </Box>
            </Box>
        </Box>
    )
}

export default ViewLawyers