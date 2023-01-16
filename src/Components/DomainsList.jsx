import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Card, CardActionArea, createTheme, CssBaseline, Grid, Stack, ThemeProvider, Typography } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import apiservice from '../apiservice';
import AuthService from '../AuthService';
import Sidebar from './Sidebar';

const ro = [
    { id: 1, domainName: 'Snow',  age: 35 },
    { id: 2, domainName: 'Lannister', age: 42 },
    { id: 3, domainName: 'Lannister', age: 45 },
    { id: 4, domainName: 'Stark', age: 16 },
    { id: 5, domainName: 'Targaryen', age: null },
    { id: 6, domainName: 'Melisandre', age: 150 },
    { id: 7, domainName: 'Clifford', age: 44 },
    { id: 8, domainName: 'Frances', age: 36 },
    { id: 9, domainName: 'Roxie', age: 65 },
  ];

  const theme = createTheme({
  
    typography: {
      fontFamily: [
        'Nunito',
        'Train One',
        'Roboto',
        
        
        'sans-serif',
        'cursive'
      ].join(",")
    },
    palette:{
      primary: {
        light: "#42c2f5",
        main: "#ca2e55",
        dark: "#778899",
        contrastText: "#fff"
      }
    }
    }
    );

export default function DomainsList() {
  
  let [rows,setRows]= useState([]);

  useEffect(()=>{
    let id = AuthService.getCurrentId();
    apiservice.getDomains(id).then((response)=>{setRows(response.data);}).catch((error)=>console.log(error.response));
  
  })

  return (
    <ThemeProvider theme={theme}>
      <Box  sx={{backgroundColor:'#fbd4cb33', height:'100vh'}} >
        <CssBaseline/>
    <Stack direction='row' paddingTop={7} justifyContent='center' spacing={2} sx={{}}>
      <Sidebar/>
   
      <Stack direction='column' paddingTop={2} sx={{width:'60vw'}}>

<Typography variant='h5' fontWeight='bold'  color='#ca2e55'>My Domains</Typography>
    <TableContainer sx={{ maxWidth: 940,paddingTop:2}}>
      
      <Table sx={{ maxWidth: 940 }} aria-label="simple table">
        <TableHead>
       
          <TableRow onClick={()=>{console.log('clicked row');}} sx={{borderBottom:0, minWidth:940, backgroundColor:'#fbd4cb33'}}>
            <TableCell >ID</TableCell>
            <TableCell align="right" >Domain Name</TableCell>
            <TableCell align="right">Buy It Now Price</TableCell>
            {/*<TableCell align="right">Carbs&nbsp;(g)</TableCell>*/}
          </TableRow>
         
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
             
              <TableCell component="th" scope="row">
                {row.id}</TableCell>
              <TableCell align="right">{row.domainName}</TableCell>
              <TableCell align="right">{row.bitn}</TableCell>
              
            </TableRow>
          
           
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Stack>
    </Stack>
    </Box>
    </ThemeProvider>
  );
}
