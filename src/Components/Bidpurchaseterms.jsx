import { Box, Button, createTheme, CssBaseline, Grid, Stack, ThemeProvider, Typography } from "@mui/material";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import apiservice from "../apiservice";
import AuthService from "../AuthService";
import bg1 from 'src/images/section-blob-main-alt.svg'


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
  
 
  const Bidterms = () => {
   
  const navigate=useNavigate();
  
  useEffect(()=>{
  let user=AuthService.getCurrentUser();
  },[])
  

  let { sdomain } = useParams();
  let { price } = useParams();

   
  
    return (
      <ThemeProvider theme={theme}>
        
      <Box sx={{backgroundImage: `url(${bg1})`, backgroundRepeat:"no-repeat",backgroundSize:"auto",backgroundColor:'#fbd4cb33', height:'100%'}}>
        <CssBaseline/>
        <Stack direction='column' spacing={4} paddingTop={13} paddingBottom={13} alignSelf='center' justifyContent='center' alignItems='center'>
<Typography variant='h4' fontWeight='bold'>Terms and Conditions</Typography>
<Stack direction='row' justifyContent='center' spacing={5} ><Typography fontWeight='bold' variant='h3' color='#4d7298'>{sdomain}</Typography>
<Typography variant='h4' fontWeight='bold' color='primary' paddingTop={1.2}>for $ {price}</Typography>
</Stack>

     <Typography fontSize={25} color='text.secondary' >To complete your offer and start the negotiation, agree to the Terms and Conditions

</Typography>  
       <Grid lineHeight={1.78} fontSize={18.5} container justifyContent='center' spacing={2.5} md={10}>
        <Grid item md={5}>
<Typography lineHeight={1.78} fontSize={18.5}>1. You are purchasing DomainAgents credits for $ 19.95. The credit purchase engages the services of DomainAgents and allows you to open the negotiation process using our platform.
</Typography>
        </Grid>
        <Grid item md={5}>
<Typography lineHeight={1.78} fontSize={18.5}>2. You are engaging our services to make an offer to purchase: search.com. With the opening offer of: $ 199.</Typography>
        </Grid>
        <Grid item md={5}>
<Typography lineHeight={1.78} fontSize={18.5}>3. All offers and counter-offers made via DomainAgents are legally binding during the course of the negotiation and must be made in good faith. Agreements are legally binding through the completion of the transaction.
</Typography>
</Grid>

<Grid item md={5}>
<Typography lineHeight={1.78} fontSize={18.5}>4. Agreements reached via DomainAgents are subject to a service fee starting at 10% and decreasing based on agreement size. The service fee and associated escrow fees will be paid by the domain buyer.
</Typography>
</Grid>

<Grid item md={5}>
<Typography lineHeight={1.78} fontSize={18.5}>5. If DomainAgents cannot present the buyer's offer to the domain owner for any reason, DomainAgents will provide the buyer a free DomainAgents credit at no additional cost which may be used to make a second offer.
</Typography>
</Grid>

<Grid item md={5}>
<Typography lineHeight={1.78} fontSize={18.5}>6. DomainAgents' service will be deemed fully delivered on presentation of the buyer's opening offer.
</Typography>
</Grid>

<Grid item md={5}>
<Typography lineHeight={1.78} fontSize={18.5}>7. Any valuation estimate provided or implied by DomainAgents, its management or its staff are based on available market information and knowledge. These estimates should be used as a guideline only. DomainAgents can not guarantee the valuation estimates whether explicit or implied.
</Typography>
</Grid>

<Grid item md={5}>
<Typography lineHeight={1.78} fontSize={18.5}>8. The buyer confirms that neither their organization, nor themselves, claims a legal right to the registration of the domain they are seeking to acquire. If inquiring on behalf of another party, the buyer confirms that this party does not claim a legal right to the registration of the domain listed above and that the buyer is authorized by said party to make this representation.
</Typography>
</Grid>

<Grid item md={5}>
<Typography lineHeight={1.78} fontSize={18.5}>9. Unless otherwise communicated by DomainAgents, all transactions initiated using DomainAgents will be completed via Escrow.com.
</Typography>
</Grid>

<Grid item md={5}>
<Typography lineHeight={1.78} fontSize={18.5}>10. In the event a buyer reneges on an agreement to purchase a domain name, full transactional details including buyer identity will be provided to the seller and may be made publicly available.
</Typography>
</Grid>

<Grid item md={5}>
<Typography lineHeight={1.78} fontSize={18.5}>11. Any attempt to circumvent the terms of this agreement may result in legal action, forfeiture of DomainAgents credits and suspension of accounts. In the event of a buyer reneging on an agreement, the buyer will be responsible in full for the 10% transactional fees due to DomainAgents.
</Typography>
</Grid>

<Grid item md={5}></Grid>
       </Grid>
       <Button sx={{padding:2, backgroundColor:'#ca2e55',fontWeight:'bold',fontSize:18, paddingInline:2.5, borderRadius:2}}
                      //disabled={!dirty||!isValid}
                      variant="contained"
                      color="primary"
                      type="Submit"
                      onClick={()=>{let id= AuthService.getCurrentId();
                        apiservice.uploadNegotiation(id,sdomain,price).then((response)=>{console.log(`Domain :${sdomain} uploaded with price : ${price}`); alert(`Made offer of a domain :${sdomain} with price : ${price}`); navigate('/negotiations')}).catch((error)=>console.log(error.response))}}
                     >
                      Check Out With Debit Card
                    </Button>
        </Stack>
        </Box>
        </ThemeProvider>
  )}

  export default Bidterms;
  