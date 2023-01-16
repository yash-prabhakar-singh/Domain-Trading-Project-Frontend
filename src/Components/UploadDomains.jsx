import React from "react"

import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import { TextField } from "formik-material-ui"
import { Box, Button, Card, CardActions, CardContent, CardHeader, createTheme, CssBaseline, Grid, Stack, ThemeProvider, Typography } from "@mui/material"
import { useState } from "react"
import apiservice from "../apiservice"
import AuthService from "../AuthService"
import Sidebar from "./Sidebar"

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
  domainName: "",
  BITN: 200
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
  domainName: Yup.string().required("Required"),
  BITN: Yup.number().required("Required").min(5, "Must be more than 5")
})

const UploadDomains = () => {
  //const classes = useStyle()

const [domainName, setDomainName]= useState("");
const [BITN,setBITN]= useState(200);


  const onSubmit = (values,{resetForm}) => {
    setDomainName(values.domainName);
    setBITN(values.BITN);
    console.log(values);
    let id =AuthService.getCurrentId();
    console.log(id);
    apiservice.uploadDomain(id,values.domainName,values.BITN).then((response)=>console.log(response.data));
    resetForm();
    alert("Domain Submitted");
  }

  return (
    <ThemeProvider theme={theme}>
      
    <Box sx={{backgroundColor:'#fbd4cb33', height:'100vh'}}>
      <CssBaseline/>

      <Stack direction='row' paddingTop={7} justifyContent='center' spacing={2} sx={{}}>
      <Sidebar/>
      <Stack direction='column' paddingTop={2} spacing={2} sx={{width:'60vw'}}>
      <Typography variant='h5' fontWeight='bold'  color='#ca2e55'>Upload Domains</Typography>

    <Grid container justify="center" spacing={1}>
       
      <Grid item md={6}>
        <Card color="inherit" sx={{backgroundColor:'#fff3f0'}} >
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
                    <Grid item container spacing={1} justify="center">
                      <Grid item xs={12} sm={6} md={6}>
                        <Field sx={{backgroundColor:'#fff7f0'}}
                          label="Domain Name"
                          variant="outlined"
                          fullWidth
                          name="domainName"
                          value={values.domainName}
                          component={TextField}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <Field sx={{backgroundColor:'#fff7f0'}}
                          label="Buy It Now Price"
                          variant="outlined"
                          fullWidth
                          name="BITN"
                          value={values.BITN}
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
                    <Button
                      disabled={!dirty || !isValid}
                      variant="contained"
                      color="primary"
                      type="Submit">
                      Upload
                    </Button>
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

export default UploadDomains
