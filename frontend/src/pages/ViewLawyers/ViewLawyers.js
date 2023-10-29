import React, { useState ,useEffect} from 'react'
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
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Swal from 'sweetalert2';
import axios from 'axios';

const ViewLawyers = () => {

    const [search, setSearch] = useState('')
    const domainsinIndia=[
        "Corporate Law",
        "Consumer Protection Law",
        "Labor Law",
        "Criminal Law",
        "Tax Law",
        "Intellectual Property Law",
        "Human Rights Law",
        "Civil Law",
        "Family Law",
        "Media Entertainment Law",
        "Real Estate Law",
        "Constitutional Law",
        "Medical Law",
        "Banking Finance Law",
        "Environmental Law",
        "Immigration Law",

    ]
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
    const citiesInIndia = [
        'Mumbai',
        'Delhi',
        'Bangalore',
        'Hyderabad',
        // Add more cities here
    ];
    // const [users, setUsers] = useState([{
    //     name: 'mahek upadhye',
    //     location: 'mumbai',
    //     yearsOfExperience:'5',
    //     AreaOfExpertise:'Corporate Law',
    //     Charges: 12356,
    //     jusrisdiction:'high court',
    //     probo:'yes',
    //     languages:['hindi','english','marathi']
        
    // }, {
    //     name: 'aasmi thadhani',
    //     location: 'mumbai',
    //     yearsOfExperience:'5',
    //     AreaOfExpertise:'ai ml',
    //     Charges: 12356,
    //     jusrisdiction:'high court',
    //     probo:'yes',
    //     languages:['hindi','english','marathi']
        

    // }, {
    //     name: 'rishab pendam',
    //     location: 'mumbai',
    //     yearsOfExperience:'5',
    //     AreaOfExpertise:'ai ml',
    //     Charges: 12356,
    //     jusrisdiction:'high court',
    //     probo:'yes',
    //     languages:['hindi','english','marathi']

    // }, {
    //     name: 'meet daftary',
    //     location: 'mumbai',
    //     yearsOfExperience:'5',
    //     AreaOfExpertise:'ai ml',
    //     Charges: 12356,
    //     jusrisdiction:'high court',
    //     probo:'yes',
    //     languages:['hindi','english','marathi']

    // }
    // ])
    const [pageNumber,setPageNumber] = useState(0);
    const [users,setUsers] = useState([])
    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const handleFilterSubmit = async(e)=>{
        try{
            const response = await axios.post("http://localhost:8000/lawyer/getLawyerByFilter",{inpval})
        }catch(err){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        }
    }

    const [inpval, setInpval] = useState({
        experience: "",
        domain: "",
        city: "",
        language: "",
        charges: ""
    });

    const handleChange = (e)=>{
        const { value, name } = e.target;
        console.log(value)
        console.log(name)

        setInpval((preval) => {
          return {
            ...preval,
            [name]: value,
          };
        });
    }

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    }));
    
    const fetchData = async()=>{
        try{
            setPageNumber(pageNumber+1)
            const response = await axios.get(`http://localhost:8000/lawyer/getAllLawyer?page_number=${pageNumber}`)
            // console.log(response)
            if(response.status == 200){
                setUsers(response.data.lawyer)
                // console.log(response)
                // console.log(response.data.lawyer)
            }
            // console.log(users)
        }catch(err){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        }
    }
    useEffect(()=>{
        fetchData();
    },[])

    console.log(users)
    return (
        <Box sx={{ margin: '0px', padding: '0px', border: 'none' }}>
            <Box sx={{ display: 'flex' }}>
                <NavAdmin />

                <Box component="main" sx={{ flexGrow: 1, pl: 3, pt: 3, pb: 3 }}>
                    <DrawerHeader />


                    <FormControl
                        sx={{ m: 1, width: "40ch", marginLeft: "3vw" }}
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
                            name="experience"
                            value={inpval.experience}
                            onChange={handleChange}
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                        >
                            <MenuItem value="">
                                <em style={{ color: "#003B73" }}>Sort By Years</em>
                            </MenuItem>
                            <MenuItem name="experience" value={-1}>Hight to Low</MenuItem>
                            <MenuItem value={1}>Low to High</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl sx={{ m: 1, minWidth: 140 }}>
                      <InputLabel id="demo-controlled-open-select-label">Charges</InputLabel>
                        <Select
                            name="charges"
                            value={inpval.charges}
                            onChange={handleChange}
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                        >
                            <MenuItem value="">
                                <em style={{ color: "#003B73" }}>Sort By Rs</em>
                            </MenuItem>
                            <MenuItem value={-1}>Hight to Low</MenuItem>
                            <MenuItem value={1}>Low to High</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl sx={{ m: 1, minWidth: 140 }}>
                      <InputLabel id="demo-controlled-open-select-label">Languages</InputLabel>
                        <Select
                            name="language"
                            value={inpval.language}
                            onChange={handleChange}
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
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

                    <FormControl sx={{ m: 1, minWidth: 140 }}>
                      <InputLabel id="demo-controlled-open-select-label">Location</InputLabel>
                        <Select
                            name="city"
                            value={inpval.city}
                            onChange={handleChange}
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                        >
                             {
                        citiesInIndia.map((cities,index)=>(
                        <MenuItem key={index} value={cities}>
                            {cities}
                        </MenuItem>
                    ))
                  }
                        </Select>
                    </FormControl>

                    <FormControl sx={{ m: 1, minWidth: 140 }}>
                      <InputLabel id="demo-controlled-open-select-label">Domain</InputLabel>
                        <Select
                            name="domain"
                            value={inpval.domain}
                            onChange={handleChange}
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                        >
                            {
                        domainsinIndia.map((domains,index)=>(
                        <MenuItem key={index} value={domains}>
                            {domains}
                        </MenuItem>
                    ))
                  }
                        </Select>
                    </FormControl>
                    <span onClick={handleFilterSubmit}>
                    
                    <SearchIcon sx={{marginBottom:"-5vh",marginLeft:"1vw",fontSize:"25px",cursor:"pointer"}}/>
                    
                    </span>
    
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

                                                {values.experience}
                                            </p>
                                           
                                            <p style={{
                                                marginTop:'0.3em'
                                            }}>
                                               <b> Charges(in Rs): </b>
                                                {values.charges}
                                            </p>
                                            <p style={{
                                                marginTop:'0.5em'
                                            }}>
                                              
                                              <b>Domain: </b>

                                                {values.domain}
                                               
                                           </p>
                                           <p style={{
                                                marginTop:'0.5em'
                                            }}>
                                              
                                              <b>Jurisdiction: </b>

                                                {values.jurisdiction}
                                               
                                           </p>
                                           <p style={{
                                                marginTop:'0.5em'
                                            }}>
                                              
                                              <b>Pro bono: </b>

                                                {values.proBono?'Yes':'No'}
                                               
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

                    <div style={{marginTop:"2vh", display:'flex',float:'right',marginRight:'2vw'}}>
                    <Button style={{backgroundColor: '#02003E'}} onClick={()=>fetchData()}>
                        Next Page
                    </Button>

                    </div>
                </Box>
            </Box>
        </Box>
    )
}

export default ViewLawyers