import React, { useState } from "react";
//import Avatar from "@material-ui/core/Avatar";
//import Button from "@material-ui/core/Button";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
//import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
//import Container from "@material-ui/core/Container";
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import { TextField } from "formik-material-ui"
import AuthService from "../../AuthService";
import { Navigate, useNavigate } from "react-router-dom";
import { Avatar, Box, Button, Checkbox, Container, createTheme, CssBaseline, FormControlLabel, Grid, Link, Stack, ThemeProvider, Typography } from "@mui/material";
import bg1 from 'c/Users/Admin/Desktop/NameKart/frontend/src/images/section-blob-main-alt.svg'
import { useDispatch, useSelector } from "react-redux";


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

const lowercaseRegEx = /(?=.*[a-z])/
const uppercaseRegEx = /(?=.*[A-Z])/
const numericRegEx = /(?=.*[0-9])/
const lengthRegEx = /(?=.{6,})/

let validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .matches(
      lowercaseRegEx,
      "Must contain one lowercase alphabetical character!"
    )
    .matches(
      uppercaseRegEx,
      "Must contain one uppercase alphabetical character!"
    )
    .matches(numericRegEx, "Must contain one numeric character!")
    .matches(lengthRegEx, "Must contain 6 characters!")
    .required("Required!"),
})

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Built with love by the "}
      <Link color="inherit" href="https://material-ui.com/">
        Namekart
      </Link>
      {" team."}
    </Typography>
  );
}

{/*const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    //marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    //margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    //marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }

}));
*/}
const initialValues = {
  firstName:"",
  lastName:"",
  email: "",
  password: "",
}



export default function SignUp1() {
  //const classes = useStyles();

  const newNego= useSelector((state)=>{return state.reducer});
const dispatch = useDispatch();

let [firstName,setFirstName]= useState("");
let [lastName,setLastName]= useState("");
let [email,setEmail]= useState("");
let [password,setPassword]= useState("");
let navigate = useNavigate();

  const onSubmit = (values) => {

    setFirstName(values.firstName);
    setLastName(values.lastName);
    setEmail(values.email);
    setPassword(values.password);

    console.log(firstName,lastName);

    AuthService.signup(values.firstName,values.lastName,values.email,values.password).then((response)=>{AuthService.registerSuccess(response.data); 
     {/*if(newNego.present) {
      let sdomain= newNego.sdomain;
      let price= newNego.price;
      dispatch({type:'reset'});
      AuthService.removeNego();
      navigate(`/bid-purchase-terms/${sdomain}/${price}`);
     } */}
     if(AuthService.isNego())
     {
       let nego= AuthService.getNego();
       let sdomain= nego.sdomain;
       let price= nego.price;
       console.log(nego);
       AuthService.removeNego();
       //dispatch({type:'reset'});
       navigate(`/bid-purchase-terms/${sdomain}/${price}`); 
     }

     else
     {navigate("/home")}}).catch((error)=>{console.log(error.response.data); alert(error.response.data)}); 
  }

  return (
    <ThemeProvider theme={theme}>
      <Box>
      <CssBaseline />
      <Box height='100vh' sx={{backgroundImage: `url(${bg1})`, backgroundRepeat:"no-repeat",backgroundSize:"auto",backgroundColor:'#fbd4cb33'}}>
    <Container component="main" maxWidth="xs" sx={{marginTop:0, paddingTop:10}}>
      
      <div >
        <Stack direction='row' justifyContent='center'>
        <Avatar sx={{marginBottom:1, backgroundColor:'#ca2e55'}} >
          <LockOutlinedIcon />
        </Avatar>
        </Stack>
        <Typography component="h1" variant="h5" align='center' sx={{marginBottom:1, paddingBottom:1}}>
          Sign up
        </Typography>
        <Formik initialValues={initialValues}
            validationSchema={validationSchema}
            enableReinitialize={true}
            onSubmit={onSubmit}>

{({ dirty, isValid, values, handleChange, handleBlur }) => {
              return (
                <Form >
       
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Field
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                component={TextField}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              component={TextField}


              />
            </Grid>
            <Grid item xs={12}>
              <Field
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                component={TextField}

              />
            </Grid>
            <Grid item xs={12}>
              <Field
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                component={TextField}

              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            disabled={!dirty || !isValid}
            fullWidth
            variant="contained"
            color="primary"
            sx={{marginTop:3, borderRadius:2}}

            //className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        
        </Form>)}}
        </Formik>
      </div>
      <Box mt={5}>
        <MadeWithLove />
      </Box>
    </Container>
    </Box>
    </Box>
    </ThemeProvider>
  );
}
