import React, { useEffect } from "react"

import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import { TextField } from "formik-material-ui"
import { Box, Button, Card, CardActions, CardContent, CardHeader, createTheme, CssBaseline, Grid, Stack, ThemeProvider, Typography } from "@mui/material"
import { useState } from "react"
import apiservice from "../apiservice"
import AuthService from "../AuthService"
import Sidebar from "./Sidebar"
import { useNavigate } from "react-router-dom"

{/*const useStyle = makeStyles((theme) => ({
  padding: {
    padding: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1),
  },
}))*/}

//Data
const initialValues = {
  firstName: "",
  lastName:''
}

{/*const options = [
  { label: "Computer Programmer", value: "Computer_programmer" },
  { label: "Web Developer", value: "web_developer" },
  { label: "User Experience Designer", value: "user_experience_designer" },
  { label: "Systems Analyst", value: "systems_analyst" },
  { label: "Quality Assurance Tester", value: "quality_assurance_tester" },
]*/}

//password validation
const lowercaseRegEx = /(?=.*[a-z])/
const uppercaseRegEx = /(?=.*[A-Z])/
const numericRegEx = /(?=.*[0-9])/
const lengthRegEx = /(?=.{6,})/

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

//validation schema
let validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required")
  //BITN: Yup.number().required("Required").min(5, "Must be more than 5")
})

const Profile = () => {
  //const classes = useStyle()

//const [domainName, setDomainName]= useState("");
//const [BITN,setBITN]= useState(200);
const [initialValues, setInitialValues]=useState({firstName:'',lastName:'',email:''})

const navigate=useNavigate();

useEffect(()=>{
let user=AuthService.getCurrentUser();
setInitialValues({firstName:user.firstName, lastName:user.lastName, email:user.email})
},[])

  const onSubmit = (values,{resetForm}) => {
    //setDomainName(values.domainName);
    //setBITN(values.BITN);
    console.log(values);
    let id =AuthService.getCurrentId();
    console.log(id);
    AuthService.updateUser(id,values.firstName,values.lastName,values.email).then((response)=>{console.log(response.data); AuthService.registerSuccess(response.data);window.location.reload();}).catch((error)=>console.log(error));
    

    //resetForm();
    //alert("Domain Submitted");
  }

  return (
    <ThemeProvider theme={theme}>
      
    <Box sx={{backgroundColor:'#fbd4cb33', height:'100vh'}}>
      <CssBaseline/>

      <Stack direction='row' paddingTop={7} justifyContent='center' spacing={2} sx={{}}>
      <Sidebar/>
      <Stack direction='column' paddingTop={2} spacing={2} sx={{width:'60vw'}}>
      <Typography variant='h5' fontWeight='bold'  color='#ca2e55'>Profile</Typography>

    <Grid container direction='column' alignItems='center' justify="center" spacing={1} md={8}>
       
      <Grid item md={6}>
        <Card color="inherit" sx={{backgroundColor:'#fff3f0', paddingBlock:2, paddingInline:2}} >
          {/*<CardHeader title="Upload Your Domain"></CardHeader>*/}
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            enableReinitialize={true}
            onSubmit={(values,{resetForm})=>onSubmit(values,{resetForm})}>
            {({ dirty, isValid, values, handleChange, handleBlur, resetForm }) => {
              return (
                <Form>
                  <CardContent>
                    <Grid item container spacing={6} justify="center">
                      <Grid item xs={12} sm={6} md={6}>
                        <Field sx={{backgroundColor:'#fff7f0'}}
                          label="First Name"
                          variant="outlined"
                          fullWidth
                          name="firstName"
                          value={values.firstName}
                          component={TextField}
                          
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <Field sx={{backgroundColor:'#fff7f0'}}
                          label="Last Name"
                          variant="outlined"
                          fullWidth
                          name="lastName"
                          value={values.lastName}
                          component={TextField}
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={6}>
                        <Field sx={{backgroundColor:'#fff7f0'}}
                          label="E-Mail"
                          variant="outlined"
                          fullWidth
                          name="email"
                          value={values.email}
                          component={TextField}
                        />
</Grid>
                      {/*<Grid item xs={12} sm={6} md={12}>
                        <FormControl fullWidth variant="outlined">
                          <InputLabel id="demo-simple-select-outlined-label">
                            Occupation
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            label="Occupation"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.occupation}
                            name="occupation">
                            <MenuItem>None</MenuItem>
                            {options.map((item) => (
                              <MenuItem key={item.value} value={item.value}>
                                {item.label}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="City"
                          variant="outlined"
                          fullWidth
                          name="city"
                          value={values.city}
                          component={TextField}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="Country"
                          variant="outlined"
                          fullWidth
                          name="country"
                          value={values.country}
                          component={TextField}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="Email"
                          variant="outlined"
                          fullWidth
                          name="email"
                          value={values.email}
                          component={TextField}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="Password"
                          variant="outlined"
                          fullWidth
                          name="password"
                          value={values.password}
                          type="password"
                          component={TextField}
                        />
                            </Grid>*/}
                    </Grid>
                  </CardContent>
                  <CardActions>
                    <Stack direction='row' justifyContent='center' flexGrow={1}>
                    <Button
                      disabled={!dirty || !isValid}
                      variant="contained"
                      color="primary"
                      type="Submit"
                      
                      sx={{alignSelf:'center', fontWeight:'bold', borderRadius:2}} >
                      Save Changes
                    </Button>
                    </Stack>
                  </CardActions>
                </Form>
              )
            }}
          </Formik>
        </Card>
      </Grid>
    </Grid>
    </Stack>
    </Stack>
    </Box>
    </ThemeProvider>
  )
}

export default Profile
