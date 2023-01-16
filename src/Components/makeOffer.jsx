import { Box, Button, Card, CardActionArea, CardContent, Container, createTheme, CssBaseline, Grid, Stack,ThemeProvider,Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup"
import React, { Component, useEffect, useReducer, useState } from "react";
import { TextField } from "formik-material-ui"
import { useNavigate, useParams } from "react-router-dom";
import apiservice from "../apiservice";
import AuthService from "../AuthService";
import bg1 from 'src/images/section-blob-main-alt.svg'
import mko from 'src/images/make-offer.png'
import { Add } from "@mui/icons-material";
//import { nego, reducer } from "./Reducer/Reducer";
import { useDispatch, useSelector } from "react-redux";


    const validationSchema = Yup.object().shape({price: Yup.number().required("Required").min(200, "Must be more than 200")});
    
    const theme = createTheme({
  
        typography: {
          fontFamily: [
            'Nunito',
            'Train One',
            'Roboto',
            
            
            'sans-serif',
            'cursive'
          ].join(",")
        }
        });

function MakeOffer()
{

const navigate = useNavigate();
    
    
    const [price, setPrice] = useState(200);
    const [q1,setQ1]=useState(false);
    const [q2,setQ2]=useState(false);
    const [q3,setQ3]=useState(false);
    const [q4,setQ4]=useState(false);
    const[c1,setC1]=useState('text.secondary');
    const[c2,setC2]=useState('text.secondary');
    const[c3,setC3]=useState('text.secondary');
    const[c4,setC4]=useState('text.secondary');
    const setColor1=()=>{if(q1)
    {
        setC1('darkblue');
        
    }
else
{
    setC1('text.secondary');
}};

const setColor2=()=>{if(q2)
    {
        setC2('darkblue');
        
    }
else
{
    setC2('text.secondary');
}};

const setColor3=()=>{if(q3)
    {
        setC3('darkblue');
        
    }
else
{
    setC3('text.secondary');
}};

const setColor4=()=>{if(q4)
    {
        setC4('darkblue');
        
    }
else
{
    setC4('text.secondary');
}};



 
useEffect(()=>{setColor1(); setColor2(); setColor3(); setColor4();})


    let { sdomain } = useParams();

    //const [newNego, dispatch] = useReducer(reducer, nego);
const newNego = useSelector((state)=>{return state.reducer});
const dispatch = useDispatch();
    

    const onSubmit=(values)=>
    {
        setPrice(values.price);
        console.log(values.price);
        if(AuthService.isUserLoggedIn())
        {
            //let id= AuthService.getCurrentId();
            //apiservice.uploadNegotiation(id,sdomain,values.price).then((response)=>{console.log(`Domain :${sdomain} uploaded with price : ${values.price}`); alert(`Made offer of a domain :${sdomain} with price : ${values.price}`); navigate('/negotiations')}).catch((error)=>console.log(error.response))
        navigate(`/bid-purchase-terms/${sdomain}/${values.price}`)
        }
        else
        {
            dispatch({type:'set', sdomain: sdomain, price: values.price})
            AuthService.setNego({sdomain:sdomain, price:values.price});
            console.log(newNego);
            navigate("/signup")
        }
    }

        
        
        return (
            <ThemeProvider theme={theme}>
<Box >
    <CssBaseline/>
    <Box sx={{backgroundImage: `url(${bg1})`, backgroundRepeat:"no-repeat",backgroundSize:"auto"}}>
    <Stack direction="row" marginLeft={21} marginRight={21} paddingTop={21}>
    <Box  marginRight={10} sx={{backgroundImage: `url(${mko})`, backgroundRepeat:"no-repeat",backgroundSize:"contain",height:700,width:1200
 }} >

            </Box>
            <Container >
            <Stack direction="column" justifyContent="center" spacing={3} sx={{}}>
             <Typography component="h1" color="skyblue" variant="h3" fontFamily='nunito' sx={{fontWeight: 'bold'}}>
              {sdomain}
             </Typography>
             <Typography component="h2" fontFamily='nunito' variant="h4" fontWeight='bold'>
May be for sale.
             </Typography>
             <Typography component="h2" fontFamily='nunito' color="text.secondary" variant="subtitle">
Open a negotiation for 20USD and your offer will be presented guaranteed.
             </Typography>
             <Stack direction="row" >
{/*<TextField></TextField>*/}
             <Formik initialValues={{price}}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            enableReinitialize={true}>{
({ dirty, isValid, values, handleChange, handleBlur }) => {
              return (
                <Form>
            <Grid container direction="row" spacing={8
            } justifyContent="center" sx={{marginTop:-3}}>
                    <Grid item><Field
                          label="Offer Price in USD"
                          variant="outlined"
                          fullWidth
                          name="price"
                         sx={{backgroundColor:''}}
                          component={TextField}
                        /></Grid>
                        <Grid item>
                        <Button sx={{padding:2, backgroundColor:'#ca2e55' }}
                      disabled={!dirty||!isValid}
                      variant="contained"
                      color="primary"
                      type="Submit"
                     >
                      Place Your Offer
                    </Button>
                        </Grid>
                    </Grid>
                </Form>
              )}}
             </Formik>
             </Stack>
            </Stack>
            </Container >
            </Stack>
            </Box>
            <Box sx={{backgroundColor:'white', marginTop:-25}}>
<Stack  justifyContent="start"  paddingRight={40} paddingLeft={40} spacing={8} marginBottom={15} direction="row">
<Box sx={{flexGrow:1,  maxWidth:530}}>
<Typography lineHeight={1.78} fontFamily='nunito' fontSize={18.5} variant="body1" >
DomainAgents qualifies offers by requiring domain buyers purchase a credit for $19.95. This token amount shows that your interest is serious, subsidizes the cost of our service, and helps engage the domain owner as they are paid $10 when they enter into negotiation with you.

</Typography>
</Box>
<Box  sx={{flexGrow:2, maxWidth:530}}>
<Typography lineHeight={1.78} fontFamily='nunito' fontSize={18.5} variant="body1">
We stand behind our service and are the only service provider to offer a service guarantee: *If we are unable to contact the domain seller and present the buyer's offer, we will provide a free DomainAgents credit to make a new offer. The credit can be used for a different domain name or to make a new offer on the same domain.
</Typography>
</Box>
</Stack>
</Box>

<Box fontFamily='nunito'>
    <Stack direction='column' spacing={5} justifyContent='space-around' alignItems='center' fontFamily='nunito'>
<Typography variant='h4' fontFamily='nunito' fontWeight='bold'> Frequently Asked Questions </Typography>

<Stack direction='column' spacing={2} justifyContent='center' alignItems='center' fontFamily='nunito'>


<Button onClick={()=>{setQ1(!q1);setColor1();}} sx={{width:'45vw', height:70,padding:0}}>
    <Card sx={{width:'45vw', height:70}}> 
        <CardActionArea> 
            <Stack direction='row' paddingRight={5} paddingLeft={5} alignItems='center' justifyContent='space-between' sx={{height:70}}>
<Typography variant='h6' color={c1} >Why should I pay $19.95?</Typography>
<Add color='red' sx={{color:'darkred'}} />
            </Stack>
        </CardActionArea>
    </Card>
</Button>
<Box>
    {q1&&<Card sx={{width:'45vw',paddingInline:3, paddingBlock:2}}>
<CardContent>
    <Typography varinat='subtitle1' lineHeight={1.78} fontFamily='nunito' fontSize={18.5}>We guarantee that your offer will be presented. You've found a domain name you want, but it's already owned by someone. Here's where DomainAgents can help. First you will need to purchase a DomainAgents credit for $19.95. An agent will be assigned to your negotiations and we will then use all of our resources to contact the domain name owner and present the offer on your behalf. If we are unable to contact the owner, we will automatically give you a DomainAgents credit, so you can make an offer on a different domain name.</Typography>
</CardContent>
        </Card>}
</Box>
<Button onClick={()=>{setQ2(!q2);setColor2();}} sx={{width:'45vw', height:70,padding:0}}>
    <Card sx={{width:'45vw', height:70}}> 
        <CardActionArea> 
            <Stack direction='row' paddingRight={5} paddingLeft={5} alignItems='center' justifyContent='space-between' sx={{height:70}}>
<Typography variant='h6' color={c2} >How can I pay for a domain name?</Typography>
<Add color='red' sx={{color:'darkred'}} />
            </Stack>
        </CardActionArea>
    </Card>
</Button>
<Box>
    {q2&&<Card sx={{width:'45vw',paddingInline:3, paddingBlock:2}}>
<CardContent>
    <Typography varinat='subtitle1' lineHeight={1.78} fontFamily='nunito' fontSize={18.5}>For domain purchases of less than $5000, you can pay via credit card or bank wire. For transactions over $5000, bank wire is the only option.</Typography>
</CardContent>
        </Card>}
</Box>
<Button onClick={()=>{setQ3(!q3);setColor3();}} sx={{width:'45vw', height:70,padding:0}}>
    <Card sx={{width:'45vw', height:70}}> 
        <CardActionArea> 
            <Stack direction='row' paddingRight={5} paddingLeft={5} alignItems='center' justifyContent='space-between' sx={{height:70}}>
<Typography variant='h6' color={c3} >What happened if a buyer or seller reneges on an agreement?</Typography>
<Add color='red' sx={{color:'darkred'}} />
            </Stack>
        </CardActionArea>
    </Card>
</Button>
<Box>
    {q3&&<Card sx={{width:'45vw',paddingInline:3, paddingBlock:2}}>
<CardContent>
    <Typography varinat='subtitle1' lineHeight={1.78} fontFamily='nunito' fontSize={18.5}>Negotiations conducted via the DomainAgents negotiation platform are legally binding. If you make an offer that is accepted by the other party, or accept an offer made by the other party, you are contractually obligated to complete the transaction. If you then subsequently fail to complete the transaction, you may expose yourself to legal action. If the other seller reneges on an agreement, we will provide their contact information on request.</Typography>
</CardContent>
        </Card>}
</Box>
<Button onClick={()=>{setQ4(!q4);setColor4();}} sx={{width:'45vw', height:70,padding:0}}>
    <Card sx={{width:'45vw', height:70}}> 
        <CardActionArea> 
            <Stack direction='row' paddingRight={5} paddingLeft={5} alignItems='center' justifyContent='space-between' sx={{height:70}}>
<Typography variant='h6' color={c4} >Why should I trust Domain Agents?</Typography>
<Add color='red' sx={{color:'darkred'}} />
            </Stack>
        </CardActionArea>
    </Card>
</Button>
<Box>
    {q4&&<Card sx={{width:'45vw',paddingInline:3, paddingBlock:2}}>
<CardContent>
    <Typography varinat='subtitle1' lineHeight={1.78} fontFamily='nunito' fontSize={18.5}>Since 2012, DomainAgents has helped tens of thousands of buyers get the domain they're after. We're here to make sure the negotiation goes as smoothly as possible. During the negotiation you are in charge and negotiate directly with the seller. If an agreement is reached, we facilitate the transfer of the domain and money via Escrow.com, a licensed escrow provider. The escrow process protects both you and the seller.</Typography>
</CardContent>
        </Card>}
</Box>
</Stack>
    </Stack>
</Box>
            </Box>
            </ThemeProvider>
        );
    }


export default MakeOffer;