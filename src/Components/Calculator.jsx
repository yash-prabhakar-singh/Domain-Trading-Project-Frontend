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
import { Box, Button, Card, CardActionArea, CssBaseline, Grid, Stack, Tab, Typography ,TextField} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { useState } from 'react';
import bgc from './src/images/calculator.svg'
import { Field, Form, Formik } from 'formik';
import * as Yup from "yup"
//import { TextField } from 'formik-material-ui';


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
      },
      secondary: {
        light: "#42c2f5",
        main: "#ffffff",
        dark: "#778899",
        contrastText: "#fff"
      }
    }
    }
    );

    let validationSchema = Yup.object().shape({
        
        sale: Yup.number('Must be a numeric value')
      })

      const initialValues={sale: 200};

export default function Calculator() {

    const [no, setNo] = useState(0);
    const [no1, setNo1] = useState(0);
    const [no2, setNo2] = useState(0);


    const [ko, setKo] = useState(0);
    const [ko1, setKo1] = useState(0);
    const [ko2, setKo2] = useState(0);



  React.useEffect((values)=>{
    let id = AuthService.getCurrentId();
    setNo((no1)/40)
    setNo2((no1/20) + 10)
    //apiservice.getNegotiation().then().catch((error)=>console.log(error.response));
  setKo2(ko/10);
  if(ko<5000)
  setKo1(ko/10)
  else
  setKo1(500);
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
    <Stack direction='column' paddingTop={2} alignItems='center' spacing={4} sx={{width:'60vw'}}>
       <Typography alignSelf='left' variant='h5' fontWeight='bold' color='primary'> Calculator</Typography>
       <Box sx={{marginTop:2 ,backgroundImage: `url(${bgc})`, backgroundRepeat:"no-repeat",backgroundSize:"contain",height:289,width:289}}></Box>

       <Typography alignSelf='left' variant='h6' fontWeight='bold' color='black'> There are primary two types of transaction</Typography>
<Box>
<TabContext value={value}>
        <Box display='flex' sx={{ borderBottom: 1, borderColor: 'divider', justifyContent:'center' }}>
          <TabList textColor="secondary"
  indicatorColor="primary" sx={{
    "& button": { borderRadius: 2},
    "& button:hover": { fontWeight:'bold' },
    "& button:focus": { backgroundColor: "#ca2e55" },
    "& button:active": { backgroundColor: "#f6d074" },"& .MuiTabs-indicator": {
       // display: "none"
        backgroundColor: "#ca2e55"
      },
      "& button.Mui-selected":{backgroundColor:'#ca2e55'}
  }} onChange={handleChange} aria-label="lab API tabs example">
            <Tab sx={{fontSize:22, textTransform : "initial"}} label="Make An Offer Negotiations" value="1" />
            <Tab sx={{fontSize:22, textTransform : "initial"}} label="Buy It Now Listings" value="2" />

          </TabList>
        </Box>
        <TabPanel value="1">
            <Stack direction='row' width='60vw' justifyContent='space-between'>
                <Stack direction='column' spacing={3} width='30vw'>
                    <Typography variant='body1' fontSize={18.5} color='text.secondary'>On all negotiated sales, the buyer pays the fees connected with the transaction.

</Typography>
<Typography variant='body1' fontSize={18.5} color='text.secondary'>If you send your own buyer, DomainAgents offers a 50% revenue share on the fees collected for qualified (paid) negotiations. You also receive $10 for engaging in the negotiation.
</Typography>

<Typography variant='body1' fontSize={18.5} color='text.secondary'>Free negotiations offer a 25% revenue share on collected fees.
</Typography>

                </Stack>
                <Stack direction='column' spacing={2} width='25vw' alignItems='flex-start'>
               {/*} <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            enableReinitialize={true}
            //onSubmit={(values,{resetForm})=>{}}
            >
            {({ dirty, isValid, values, handleChange, handleBlur, resetForm }) => {
              return (
                <Form>
                    <Field
                          label="Your Sale in USD"
                          variant="outlined"
                          onChange={(values)=>{setNo1(values.sale); console.log(no1)}}
                          name="sale"
                          value={values.sale}
                          component={TextField}
                        />
                         
</Form>)}}
              </Formik>*/}
              <Box width='20vw'>
              <TextField
                id="outlined-basic"
                onChange={(event)=>{setNo1(event.target.value)
              console.log(no1)}}
              variant="outlined"
                sx={{elevation:0 ,backgroundColor: '#fbd4cb33'}}
                fullWidth
                type='number'
                label="Your Sale in USD"
                size="medium"
              />
              </Box>
              <Typography variant='subtitle1'>The revenue share on top of your sale would be:

</Typography>
<Stack direction='row' width='20vw' justifyContent='space-between'  alignItems='center'>
    <Typography fontSize={19} color='text.secondary'>Qualified Offer:
</Typography>
<Paper display='flex' sx={{width:120,height:50, justifyContent:'center', alignItems:'center'}}><Stack width={120} height={50} justifyContent='center' alignItems='center'><Typography variant='h6' fontWeight='bold'>$ {no2}</Typography></Stack></Paper>
</Stack>
<Stack direction='row' width='20vw' justifyContent='space-between' alignItems='center'>
    <Typography fontSize={19} color='text.secondary'>Free Offer:
</Typography>
<Paper display='flex' sx={{width:120,height:50, justifyContent:'center', alignItems:'center'}}><Stack width={120} height={50} justifyContent='center' alignItems='center'><Typography variant='h6' fontWeight='bold'>$ {no}</Typography></Stack></Paper>

</Stack>
</Stack>
            </Stack>
        </TabPanel>
        <TabPanel value="2"> <Stack direction='row' width='60vw' justifyContent='space-between'><Stack direction='column' spacing={3} width='30vw'>
                    
        <Typography variant='body1' fontSize={18.5} color='text.secondary'>Sellers pay the fees connected to BIN sales, the fees are dependent on traffic source

</Typography>
                    <Typography variant='body1' fontSize={18.5} color='text.secondary'>If you send your own buyer the fee is 10% of the sale price, with a fee cap of $500.
</Typography>


<Typography variant='body1' fontSize={18.5} color='text.secondary'>If DomainAgents, or one of our partners send the buyer, the cost is a flat 10% without cap.
</Typography>

                </Stack>
                <Stack direction='column' spacing={2} width='25vw' alignItems='flex-start'>
               
              <Box width='20vw'>
              <TextField
                id="outlined-basic"
                onChange={(event)=>{setKo(event.target.value)
              console.log(ko)}}
              variant="outlined"
                sx={{elevation:0 ,backgroundColor: '#fbd4cb33'}}
                fullWidth
                type='number'
                label=""
                size="medium"
              />
              </Box>
              <Typography variant='subtitle1'>The commission you would pay on a BIN sale would be:</Typography>
<Stack direction='row' width='20vw' justifyContent='space-between'  alignItems='center'>
    <Typography fontSize={19} color='text.secondary'>Your traffic + escrow:
</Typography>
<Paper display='flex' sx={{width:120,height:50, justifyContent:'center', alignItems:'center'}}><Stack width={120} height={50} justifyContent='center' alignItems='center'><Typography variant='h6' fontWeight='bold'>$ {ko1}</Typography></Stack></Paper>
</Stack>
<Stack direction='row' width='20vw' justifyContent='space-between' alignItems='center'>
    <Typography fontSize={19} color='text.secondary'>Other traffic + escrow:
</Typography>
<Paper display='flex' sx={{width:120,height:50, justifyContent:'center', alignItems:'center'}}><Stack width={120} height={50} justifyContent='center' alignItems='center'><Typography variant='h6' fontWeight='bold'>$ {ko2}</Typography></Stack></Paper>

</Stack>
</Stack></Stack></TabPanel>
        </TabContext>
</Box>
      </Stack>
    </Stack>
    </Box>
    </ThemeProvider>
    
  );
}
