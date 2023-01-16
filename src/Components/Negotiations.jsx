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
import { useNavigate } from 'react-router-dom';
import { TabContext, TabList, TabPanel } from '@mui/lab';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const ro = [
    { domainName: 'Snow', bns: "Buy", Status:"Active", OfferedAt: "200"},
    { domainName: 'Snow', bns: "Buy", Status:"Active", OfferedAt: "200"},
    { domainName: 'Snow', bns: "Buy", Status:"Active", OfferedAt: "200"},
    { domainName: 'Snow', bns: "Buy", Status:"Active", OfferedAt: "200"},
    { domainName: 'Snow', bns: "Buy", Status:"Active", OfferedAt: "200"},
    { domainName: 'Snow', bns: "Buy", Status:"Active", OfferedAt: "200"},
    { domainName: 'Snow', bns: "Buy", Status:"Active", OfferedAt: "200"},
    { domainName: 'Snow', bns: "Buy", Status:"Active", OfferedAt: "200"}
    
];

export default function Negotiations() {

  let [rows,setRows]= React.useState([]);

  React.useEffect(()=>{
    let id = AuthService.getCurrentId();
    apiservice.getNegotiations(id).then((response)=>{setRows(response.data);}).catch((error)=>console.log(error.response));
  
  })

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
    <Stack direction='column' paddingTop={2} sx={{width:'60vw'}}>
      <Stack direction='row' justifyContent='space-between' sx={{width:'60vw'}}><Typography variant='h5' fontWeight='bold'  color='#ca2e55'>My Negotiations</Typography>
      <Button style={{fontSize: 16}} sx={{textTransform:'initial', paddingRight:2, paddingLeft:2, color:"#ca2e55", borderColor:"#ca2e55", border:2}} variant="outlined" onClick={()=>navigate("/home")}><Typography variant='h6' fontWeight='bold'  color='#ca2e55'>Make New Offer</Typography></Button>

      </Stack>
      <Box paddingTop={2}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList textColor="secondary"
  indicatorColor="primary" onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Your Action Is Required" value="1" />
            <Tab label="Awaiting The Other Party" value="2" />
            <Tab label="Your Agreements" value="3" />
            <Tab label="Expired And Cancelled" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">Item One</TabPanel>
        <TabPanel sx={{padding:0}} value="2">
        <TableContainer sx={{ maxWidth:'60vw',padding:0}}>
      <Table sx={{width:'60vw'}} aria-label="simple table">
        <TableHead>
        <Paper elevation={0} sx={{backgroundColor:'#fdf8e7'}}>
          <TableRow onClick={()=>{console.log('clicked row');}} sx={{borderBottom:0}}>
            <TableCell color='text.secondary' sx={{width:'22vw'}}>Domain Name</TableCell>
            <TableCell align="left" sx={{width:'5vw'}}>Buy/Sell</TableCell>
            <TableCell align="left" sx={{width:'20vw'}}>Status</TableCell>
            <TableCell align="right" sx={{width:'10vw'}}>Offered At($)</TableCell>

            {/*<TableCell align="right">Carbs&nbsp;(g)</TableCell>*/}
          </TableRow>
          </Paper>
          
        </TableHead>
        <TableBody>
          <Stack direction='column-reverse' spacing={2} paddingTop={2}>
          {rows.map((row) => (
             <Card sx={{width:'60vw', backgroundColor:'white',"& :hover": {
              backgroundColor: "lightblue"}}}>
              <CardActionArea sx={{width:'60vw'}}>
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              onClick={()=>{navigate(`/madeOffer/${row.id}`)}}
            >
             
              <TableCell component="th" scope="row" padding={0} sx={{width:'22vw',maxWidth:'22vw',minWidth:'22vw' }}>
                <Typography variant='h6' fontFamily='nunito' fontSize={19}>
                {row.domainName}</Typography></TableCell>
              <TableCell align="left" sx={{width:'5vw'}}><Typography variant='h6' fontFamily='nunito' fontSize={18}>
                {row.bns}</Typography></TableCell>
              <TableCell align="left" sx={{width:'20vw'}}><Typography variant='h6' fontFamily='nunito' fontSize={18}>
                {row.status}</Typography></TableCell>
              <TableCell align="right" sx={{width:'10vw'}}><Typography variant='h6' fontFamily='nunito' fontSize={18}>
                {row.offeredAt}</Typography></TableCell>
              
            </TableRow>
            </CardActionArea>
           </Card>
           
          ))}
          </Stack>
        </TableBody>
      </Table>
    </TableContainer>
        </TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
        <TabPanel value="4">Item Four</TabPanel>
      </TabContext>
      </Box>
    </Stack>
    </Stack>
    </Box>
    </ThemeProvider>
    
  );
}
