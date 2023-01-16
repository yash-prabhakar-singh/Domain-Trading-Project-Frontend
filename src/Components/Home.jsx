import React, {Component} from "react";
//import { withRouter } from "react-router-dom";
import { borderColor, sizing } from '@mui/system';
import { ThemeProvider, createTheme, Grid } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import {Button, CardActionArea, Container, CssBaseline, TextField} from "@mui/material";
import { Box, Paper, Stack, Card } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import InputAdornment from '@mui/material/InputAdornment';

import { useNavigate } from "react-router-dom";
import bg1 from 'src/images/section-blob-main-alt.svg'
import bgr from 'src/images/index_hero.png'
import ic1 from 'src/images/ico-service1.svg'
import ic2 from 'src/images/ico-service2.svg'
import ic3 from 'src/images/ico-service3.svg'

import { DomainAddTwoTone, DomainVerificationOutlined, Language, Laptop } from "@mui/icons-material";

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
  }});
  
  class Home extends Component
  {
constructor(props)
{
  super(props)
  this.state={
    sdomain:""
  }
}

      render(){
      return (
  <ThemeProvider theme={theme}>

            
           <Box marginTop={0}>
            <CssBaseline />
            <Box sx={{backgroundImage: `url(${bg1})`, backgroundRepeat:"no-repeat",backgroundSize:"contain", marginBottom:10 }}>
              <Stack direction="row" marginLeft={31} marginRight={31} paddingTop={10}>
            <Stack  direction="column"  paddingTop={10} paddingRight={15}>
              
            {<Typography fontFamily='Nunito' gutterBottom variant="h3" align="left" color="black" sx={{
              fontWeight: 'bold', marginBottom:3}} >We help you get your favorite</Typography>}
            {/*<h1>We help you get your favorite Domain Name!</h1>*/}
            {<Typography fontFamily='Nunito'  variant="h3" align="left" color="#4d7298" sx={{fontWeight: 'bold', marginBottom:5}} >Domain Name!</Typography>}


            <div className="search">
              <Box sx={{  display: 'flex'}} >
              <TextField
                id="outlined-basic"
                onChange={(event)=>{this.setState({sdomain: event.target.value})
              console.log(this.state.sdomain)}}
              variant="outlined"
                sx={{elevation:0 ,backgroundColor: '#fbd4cb33'}}
                fullWidth
                label="Search Your Favorite Domain Name Here"
                size="medium"
              />
              <Button variant='contained' onClick={()=>{this.props.history(`/makeOffer/${this.state.sdomain}`)}} sx={{backgroundColor:'#ca2e55' ,marginLeft:2, paddingInline:4, borderRadius:1.5, fontWeight:'bold'}} >Search</Button>        

               {/*<IconButton type="submit" aria-label="search" size="large" onClick={()=>{this.props.history(`/makeOffer/${this.state.sdomain}`)}}>
              <Search style={{ fill: "blue" }} />
            </IconButton>*/}
            </Box>
            </div>
            {<Typography variant="subtitle" align="left" color="text.secondary" sx={{ marginTop:2}} >Name.Ai helps you anonymously negotiate to buy premium domain names, service guaranteed.*

</Typography>}

            {/*<Container sx={{ display: 'flex', flexDirection: 'column', mt: 10 }}>
            <Typography component="div" variant="h3">
            Who We Are!
          </Typography>
            <Stack direction="row" sx={{mt: 5}}>
      <Box sx={{ display: 'flex', flexDirection: 'column', }}>
       
         
          <Typography variant="h6" color="text.secondary" component="div">
          Namekart is a global boutique domain name brokerage firm specialising in the representation and acquisition of premium domain names for entrepreneurs.The company’s award-winning, distinguished management team retains years of combined experience working with a multitude of industry-defining organisations including Walt Disney, Microsoft, DE Shaw and IBM.
          
          The company’s expertise includes: Representation of High Valued Domains, Stealth Acquisitions, Social Media Handle Acquisitions, Domain Name Valuations, and more. In 2021, Namekart is expected to broker over 8 figures in transactions leading the industry in key metrics including count of end user sales.
          </Typography>
        
        {/*<Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box>
      </Box>*/}
      {/*<Box
        component="img"
        sx={{ width: 151 }}
        image="https://namekart.com/wp-content/uploads/2020/12/Domain_Broker_WhoWeAre.jpg"
        alt="who we are image"
      ></Box>}
      <Paper className="image1"  >
   <img src="https://namekart.com/wp-content/uploads/2020/12/Domain_Broker_WhoWeAre.jpg" style={{
        
        width: "100%", height: "100%",
        
    }}/>
</Paper>
</Stack>
    </Container>*/}
    
            </Stack>
            <Box  marginRight={10} sx={{backgroundImage: `url(${bgr})`, backgroundRepeat:"no-repeat",backgroundSize:"contain",height:450,width:450
 }} >

            </Box>
            </Stack>
            
            </Box>
            
            
            <Box sx={{backgroundColor:'#4d7298', minWidth:'100vw'}}>
   <Typography lineHeight={1.5625} variant="h4" align="center" color="whitesmoke" sx={{paddingRight:47, paddingLeft:47, paddingTop: 10, paddingBottom:10}}>
   Buying or Selling a domain name doesn't need to be complicated. Every year, tens of thousands of clients trust us to assist with their negotiations.
   </Typography>
</Box >
<Box sx={{backgroundColor:'white'}}>
<Stack  justifyContent="center" marginTop={15} paddingRight={40} paddingLeft={40} spacing={8} marginBottom={15} direction="row">
<Box sx={{flexGrow:1,  maxWidth:530}}>
<Typography lineHeight={1.78} fontFamily='nunito' fontSize={18.5} variant="body1" >
Buying domain names on the aftermarket can be difficult and confusing. DomainAgents works to ease the challenges buyers and sellers face, allowing each party to focus on the negotiation without distraction. When an agreement is negotiated or a domain is purchased directly from our marketplace, DomainAgents assists both parties through the escrow and transfer process ensuring a safe, secure & efficient process for everyone.
</Typography>
</Box>
<Box  sx={{flexGrow:2, maxWidth:530}}>
<Typography lineHeight={1.78} fontFamily='nunito' fontSize={18.5} variant="body1">
We stand behind our service and are the only domain broker to offer a service guarantee when making an unsolicited offer: *If we are unable to contact the domain seller and present the buyer's offer, we will provide a free DomainAgents credit to make an offer on another domain name.
</Typography>
</Box>
</Stack>
<Stack direction="column" spacing={10} alignItems='center'>
<Typography fontFamily='nunito' variant="h4" fontWeight='bold' align="center" color='black'>
Our Services
</Typography>
<Stack fontFamily='nunito'  direction='row' height={434} width={1330} spacing={3} justifyContent='space-between'>
  
  <Box flex={1}>
<Card display='flex' flexGrow={1} sx={{ "& :hover": {
      backgroundColor: "#f6d074"
    },display:'flex',flexDirection:'column' , flexGrow:1,alignItems:'center', backgroundColor: '#fbd4cb33'}}>
      <CardActionArea sx={{paddingTop:5, paddingBottom:3, height:434}}>
        <Stack direction='column' alignItems='center' justifyContent='space-around'>
        <CardMedia
          component="img"
          
          image={ic1}
          alt="green iguana"

          sx={{height:40, width:80}}
        />
        <CardContent>
          <Typography align='center' gutterBottom variant="h5" fontFamily='nunito' fontWeight='bold' fontSize={25} component="div" sx={{marginBottom:2}}>
            Buy a Domain Name
          </Typography>
          <Typography variant="body1" color="black" fontFamily='nunito' fontWeight={400} fontSize={18.5} lineHeight={1.78}>
          DomainAgents' structured negotiations & support takes confusion out of buying domain names. Industry leading service with sliding rates for high value acquisitions. 
          </Typography>
        </CardContent>
        <Button color="error" style={{fontSize: 18}} sx={{marginRight:3,textTransform : "initial", color:"#ca2e55"}} >Buying Domains</Button>

        </Stack>
      </CardActionArea>
    </Card>
    </Box>
    <Box flex={1}>
    <Card sx={{"& :hover": {
      backgroundColor: "#f6d074"
    }, display:'flex',flexGrow:1,flexDirection:'column' , alignItems:'center', backgroundColor: '#fbd4cb33'}}>
      <CardActionArea sx={{paddingTop:5, paddingBottom:3, height:434}}>
        <Stack direction='column' alignItems='center' justifyContent='space-around'>
        <CardMedia
          component="img"
          
          image={ic2}
          alt="green iguana"

          sx={{height:40, width:80}}
        />
        <CardContent>
          <Typography align='center' gutterBottom variant="h5" fontFamily='nunito' fontWeight='bold' fontSize={25} component="div" sx={{marginBottom:2}}>
            Domain & Portfolio Owners
          </Typography>
          <Typography variant="body1" color="black" fontFamily='nunito' fontWeight={400} fontSize={18.5} lineHeight={1.78}>
          DomainAgents specializes in self-directed negotiation management for portfolios of all sizes. For additional exposure, list your domains in our active marketplace.
          </Typography>
        </CardContent>
        <Button color="error" style={{fontSize: 18}} sx={{marginRight:3,textTransform : "initial", color:"#ca2e55"}} >Working with us</Button>

        </Stack>
      </CardActionArea>
    </Card >
    </Box>
    <Box flex={1}>
    <Card sx={{"& :hover": {
      backgroundColor: "#f6d074"
    }, display:'flex',flexGrow:1 ,flexDirection:'column' , alignItems:'center', backgroundColor: '#fbd4cb33'}}>
      <CardActionArea sx={{paddingTop:3, paddingBottom:2, height:434}}>
        <Stack direction='column' alignItems='center' justifyContent='space-around'>
        <CardMedia
          component="img"
          
          image={ic3}
          alt="green iguana"

          sx={{height:40, width:80}}
        />
        <CardContent>
          <Typography align='center' gutterBottom variant="h5" fontFamily='nunito' fontWeight='bold' fontSize={25} component="div" sx={{marginBottom:2}}>
            Domain Name Marketplace
          </Typography>
          <Typography variant="body1" color="black" fontFamily='nunito' fontWeight={400} fontSize={18.5} lineHeight={1.78}>
          The DomainAgents Marketplace contains over one million domain names for sale. The perfect domain name is a search away.          </Typography>
        </CardContent>
        <Button color="error" style={{fontSize: 18}} sx={{marginRight:3,textTransform : "initial", color:"#ca2e55", marginTop:3}} >Visit our marketplace</Button>

        </Stack>
      </CardActionArea>
    </Card>
    </Box>
    
</Stack>
</Stack>
</Box>
<Box sx={{width:'100vw',marginTop:30, height:299.06, backgroundColor:'#4d7298'}}>
<Stack direction='column' justifyContent='center' alignItems='center' sx={{height:299.06}} spacing={3} >
  <Typography fontFamily='nunito' color='white' fontWeight='bold' variant='h4' align='center'>
  Join Our Newsletter

  </Typography>
  <Typography variant='body1' color='white' fontFamily='nunito' fontSize={18}>
  Sign up to receive emails from the DomainAgents network, including domains wanted and for sale.
  </Typography>
<Stack direction='row'sx={{width:'33vw'}} justifyContent='space-between' spacing={3}>
<TextField fullWidth sx={{backgroundColor:'#95b7c699', opacity:50,  "& .MuiFormLabel-root": {
            color: 'white'
        },
        "& .MuiFormLabel-root.Mui-focused": {
            color: 'white'
        }}}
                label="Email Address" 
                size="medium"/>

<Button variant='contained' sx={{backgroundColor:'orange', paddingInline:4}} >Subscribe</Button>        
</Stack>
</Stack>
</Box>
            </Box>
           
          
          </ThemeProvider>
        );}
  }
  
  export default (props)=>( <Home history={useNavigate()}/>);