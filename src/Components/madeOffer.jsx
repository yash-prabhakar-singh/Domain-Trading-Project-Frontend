import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
//import { Grid } from '@material-ui/core';
import AuthService from '../AuthService';
import apiservice from '../apiservice';
import Sidebar from './Sidebar';
import { Box, Button, Card, CardActionArea, CssBaseline, Grid, Stack, Tab, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { useState } from 'react';

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



export default function MadeOffer() {

    let { nid } = useParams();
let [nego,setNego]=useState({});

  React.useEffect(()=>{
    let id = AuthService.getCurrentId();
    apiservice.getNegotiation(nid).then((response)=>{setNego(response.data)}).catch((error)=>console.log(error.response));
  
  })

  

    const navigate = useNavigate();
    const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}><Box sx={{backgroundColor:'#fbd4cb33', height:'100vh'}}>
      <CssBaseline/>
    <Stack direction='row' paddingTop={7} justifyContent='center' spacing={2} sx={{}}>
<Sidebar/>
    <Stack direction='column' paddingTop={2} alignItems='center' spacing={2} sx={{width:'60vw'}}>
        <Stack direction='row'justifyContent='flex-start' sx={{width:'60vw'}}>        <Button sx={{align:'left'}} onClick={()=>navigate('/negotiations')}>Back to My Negotiations</Button>
<Box display='flex' flexGrow={1}></Box>
</Stack>
        <Typography variant='h6' fontWeight='bold'>
Awaiting the response from other party
        </Typography>
       <Table>
        <TableBody>
            <TableRow>
                <TableCell align='right'><Typography variant='subtitle1' color='text.secondary'>Domain Name</Typography></TableCell>
            <TableCell align='left'>
<Typography variant='h6' fontWeight='bold' color='blue'>{nego.domainName}</Typography>
            </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='right'><Typography variant='subtitle1' color='text.secondary'>Offered At</Typography></TableCell>
            <TableCell align='left'>
<Typography variant='h6' fontWeight='bold' color='primary'>$ {nego.offeredAt}</Typography>
            </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='right'><Typography variant='subtitle1' color='text.secondary'>Your Role</Typography></TableCell>
            <TableCell align='left'>
<Typography variant='h6' fontWeight='bold' color='black'>Buyer</Typography>
            </TableCell>
            </TableRow>
        </TableBody>
       </Table>
       <Typography variant='h6' fontWeight='bold' sx={{paddingTop:6}}>Negotiation History</Typography>
       <TableContainer sx={{ maxWidth:'60vw',padding:0}}>
      <Table sx={{width:'60vw'}} aria-label="simple table">
        <TableHead>
        <Paper elevation={0} sx={{backgroundColor:'#fdf8e7'}}>
          <TableRow onClick={()=>{console.log('clicked row');}} sx={{borderBottom:0}}>
            <TableCell color='text.secondary' sx={{width:'14vw'}}>Date</TableCell>
            <TableCell align="left" sx={{width:'14vw'}}>Offer</TableCell>
            <TableCell align="left" sx={{width:'14vw'}}>Action</TableCell>
            <TableCell align="right" sx={{width:'14vw'}}>Action Taken By</TableCell>

            {/*<TableCell align="right">Carbs&nbsp;(g)</TableCell>*/}
          </TableRow>
          </Paper>
          
        </TableHead>
        <TableBody>
        <Card sx={{width:'60vw', backgroundColor:'white',"& :hover": {
              backgroundColor: "lightblue"}}}>
              <CardActionArea sx={{width:'60vw'}}>
            <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
             
              <TableCell component="th" scope="row" padding={0} sx={{width:'14vw',maxWidth:'14vw',minWidth:'14vw' }}>
                <Typography variant='subtitle1' fontFamily='nunito'>
                22-09-2021</Typography></TableCell>
              <TableCell align="left" sx={{width:'14vw'}}><Typography variant='h6' fontFamily='nunito' color='primary'>
                $ {nego.offeredAt}</Typography></TableCell>
              <TableCell align="left" sx={{width:'14vw'}}><Typography variant='h6' fontFamily='nunito' fontSize={18}>
                Opening Offer</Typography></TableCell>
              <TableCell align="right" sx={{width:'14vw'}}><Typography variant='h6' fontFamily='nunito' color='text.secondary' fontSize={18}>
                Domain Buyer(You)</Typography></TableCell>
              
            </TableRow>
            </CardActionArea>
           </Card>
        </TableBody>
        </Table>
        </TableContainer>
      </Stack>
    </Stack>
    </Box>
    </ThemeProvider>
    
  );
}
