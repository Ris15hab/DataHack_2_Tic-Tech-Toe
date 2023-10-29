import React from 'react'
import { Box, Typography } from '@mui/material';
import NavAdmin from '../../Components/NavAdmin'
import { styled, useTheme } from '@mui/material/styles';
import { Grid } from '@mui/material';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

import Rating from '@mui/material/Rating';
import { Button } from '@mui/base';

// import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import { TextField } from '@mui/material';

import Swal from 'sweetalert2'


const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};
function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const lawyerName=[
  "Anay Ahluwalia",
  "Arnav Dubey",
  'Lavanya Lalla',
  "Armaan Khosla",
  "Advik Chaudry",
  "Urvi Bedi"
]



const Feedback = () => {


  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
  return (
    <Box sx={{ margin: '0px', padding: '0px', border: 'none' }}  >
      <Box sx={{ display: 'flex' }}>
        <NavAdmin />

        <Box component="main" sx={{ flexGrow: 1, pl: 3, pt: 3, pb: 3 }}>
          <DrawerHeader />
          <Box display='flex' alignItems='center' flexDirection='column'>
          <Typography variant='h4'  style={{
            fontWeight:'bold',
            marginBottom:'0.5em'
          }}>
            Feedback
          </Typography>
          </Box>
         

          <hr style={{
            borderTopWidth: '3px'
          }} />

          <Box sx={{ marginTop: "3vh" }}>
            <Typography style={{
            marginTop:'1em'
          }}>
              Lawyer Name:
            </Typography>
            {/* <TextField sx={{ width: '40vw' }} style={{
            marginTop:'1em'
          }}/> */}

              <FormControl>
               
                <Select
                  className="subject"
                  labelId="From-id"
                  // value={subject}
                  label="subject"
                  // onChange={handleChangeSub}
                  sx={{
                    width: "40vw",
                    height: "50px",
                    background: "#FFFFFF",
                    padding: "28px",
                    mt: 2,
                    
                  }}
                  name="subject"
                >
                 {
                    lawyerName.map((name,index)=>(
                        <MenuItem key={name} value={name}>
                            {name}
                        </MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
          </Box>
          <Box sx={{ marginTop: "3vh" }}>
            <Typography>
              Rating:
            </Typography>
            <Box
            sx={{
              width: 200,
              display: 'flex',
              alignItems: 'center',
            }}
            style={{
              marginTop:'1em'
            }}
          >
            <Rating
              name="hover-feedback"
              size="large"
              value={value}
              precision={0.5}
              getLabelText={getLabelText}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
              emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            {value !== null && (
              <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
            )}
          </Box>
          </Box>

          <Typography style={{
            marginTop:'1em'
          }}>
            Describe Your Experience:
          </Typography>

          <TextField
          id="outlined-multiline-static"
          // label="Multiline"
          multiline
          // id="margin-none"
          rows={11}
          // defaultValue="Default Value"
          style={{
            width:'40vw',
            marginTop:'1em'
          }}
        />
        <div>
        <Button className='proceed-button' style={{
          marginTop:'2em'
        }} onClick={()=>
          {
            Swal.fire(
              'Good job!',
              'Feedback sent Successfully',
               'success'
            )
          }
          
        }>
          Submit
        </Button>
        </div>
        


        </Box>
      </Box>
    </Box>
  )
}



export default Feedback