import React from 'react'

import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import AdminSideNav from '../../Components/AdminSideNav';
import { styled, useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
// import Box from '@mui/material/Box';
import {Button} from '@mui/material';

const AdminDashboard = () => {

  const columns = [
    { field: 'id', headerName: 'ID', width: 200 },
    {
      field: 'name',
      headerName: 'name',
      width: 150,
      editable: true,
    },
    {
      field: 'domain',
      headerName: 'Domain',
      width: 200,
      editable: true,
    },
    {
      field: 'jurisdiction',
      headerName: 'Jurisdiction',
      type: 'string',
      width: 200,
      editable: true,
    },
    {
      field: 'location',
      headerName: 'Location',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      
    },
    {
      field: 'proBono',
      headerName: 'probono',
      type: 'bool',
      width: 110,
      editable: true,
    },
    {
      field: 'experience',
      headerName: 'Years Of Experience',
      type: 'number',
      width: 180,
      editable: true,
    },
    {
      field: 'charges',
      headerName: 'Charges',
      type: 'number',
      width: 110,
      editable: true,
    }

  ];
  
  const handlebutton = () =>
  {
    
  }


  const [data, setData] = useState();
  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:8000/lawyer/getAllLawyer",
      headers: {},
    };

    async function makeRequest() {
      try {
        const response = await axios.request(config);
        console.log(response.data.lawyer);
        setData(response.data.lawyer);
        // for (let i = 0; i < 100; i++) {
        //   rows.push((response.data)[i].userId,(response.data)[i].id,(response.data)[i].title,(response.data)[i].body);
        // }
      } catch (error) {
        console.log(error);
      }
    }

    makeRequest();
  }, []);

console.log(data)

const rows = data
  ? data.map((item) => ({
      id: item._id,
      name: item.name,
      jurisdiction: item.jurisdiction,
      charges: item.charges,
      domain: item.domain,
      language: item.language,
      proBono: item.proBono,
      experience: item.experience,
      location:item.location,
      rating:item.rating
    }))
  : [];

  console.log(rows);


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
        <AdminSideNav />

        <Box component="main" sx={{ flexGrow: 1, pl: 3, pt: 3, pb: 3 }}>
          <DrawerHeader />
          <Typography align='center' sx={{fontWeight:"bold",marginBottom:"5vh",fontSize:"40px"}}>Manage Lawyers</Typography>
          <Button className='proceed-button' style={{
            marginBottom:'1em'
          }} onClick={handlebutton}>Add</Button>
          <>
      {data ? (
        <>
          <div style={{ height: 1000, width: "100%" }}>
            <DataGrid rows={rows} columns={columns} />
          </div>
          <hr></hr>
          <hr></hr>
          {/* <New></New> */}
        </>
      ) : (
        <></>
      )}
    </>
  </Box>
  </Box>
  </Box>
  )
}

export default AdminDashboard