import * as React from "react";
  
// importing material UI components
//import { AppBar } from "@material-ui/core";

//import {Toolbar} from "@material-ui/core";
//import Typography from "@mui/material/Typography";
import { AppBar, Box, Button, Container, createTheme, Slide, ThemeProvider, Toolbar, Typography } from "@mui/material";
import {IconButton} from "@material-ui/core";
//import { Menu } from "@material-ui/icons";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import AuthService from "../AuthService";
import { shadows } from '@mui/system';

import { useNavigate } from "react-router-dom";

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
  
export default function Header() {
  const [anchor, setAnchor] = useState(null);

  const openMenu = (event) => {
    setAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
  };

  const updomain = () => {
    setAnchor(null);
    navigate("/uploadDomains");
  };

  const mdomains = () => {
    setAnchor(null);
    navigate("/domainsList");

  };

  const isUserLoggedIn = AuthService.isUserLoggedIn();
  const navigate = useNavigate();

  return (

    <ThemeProvider theme={theme}>
    <Box >
      <AppBar position="static" elevation={2} color="default" sx={{padding : 1, backgroundColor:'#fffff0'}}>
        <Toolbar>
          {/*Inside the IconButton, we 
           can render various icons*/}
          {/*<IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >}
            {/*This is a simple Menu 
             Icon wrapped in Icon */}
            {/*<Menu />
          </IconButton>}
          {/* The Typography component applies 
           default font weights and sizes */}
  
          {/*<Typography variant="h6" 
            component="div" sx={{ flexGrow: 1 }}>
            NameKart
          </Typography>*/}
          <Box sx={{marginLeft:27}}>
          <Button style={{fontSize: 20}} sx={{textTransform : "initial"}} color="inherit" onClick={()=>navigate("/home")}><Typography  fontSize={30} color="#ca2e55" fontWeight='bold'  variant="h4">Name</Typography><Typography variant="h4" color='#4d7298' fontWeight='bold' fontSize={31}>.Ai</Typography></Button>
          </Box>
          <Box display='flex' flexGrow={1}>
            {/* whatever is on the left side */}
        </Box >
        {isUserLoggedIn&&<Box display="flex" flexDirection="row">
        <Box sx={{marginRight:2}}>
<Button color="inherit" sx={{textTransform : "initial",fontWeight:'bold',fontSize:18}}
 onClick={()=>navigate("/negotiations")}>Negotiations</Button>
        </Box>

        <Box sx={{ marginRight: 2 }}>
      <Button
        id="basic-button"
        color="inherit"
        onClick={openMenu}
        sx={{textTransform : "initial",fontWeight:'bold',fontSize:18}}
      >
        Domains
      </Button>
      <Menu
        id="basic-menu"
        open={Boolean(anchor)}
        anchorEl={anchor}
        onClose={handleClose}
        TransitionComponent={Slide}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Box display="flex" flexDirection="column" m={1} >
        <MenuItem onClick={updomain}><Button color="inherit">Upload Domains</Button></MenuItem>
        <MenuItem onClick={mdomains}><Button>My Domains</Button></MenuItem>
        </Box>
      </Menu>
      </Box>
      </Box>}
      {!isUserLoggedIn&&<div>
          <Button color="error" style={{fontSize: 16}} sx={{marginRight:3, color:"#ca2e55",fontWeight:'bold'}} onClick={()=>navigate("/signup")}>Sign-Up</Button>
          <Button style={{fontSize: 16}} sx={{marginRight:27, paddingRight:2, paddingLeft:2, color:"#ca2e55", borderColor:"#ca2e55", border:3, borderRadius:2, fontWeight:'bold'}} variant="outlined" onClick={()=>navigate("/login")}>Login</Button>
          </div>}
          {isUserLoggedIn&&<Box sx={{marginRight:2}}>
<Button color="error" style={{fontSize: 20}} sx={{textTransform:'initial' ,marginRight:27, color:"#ca2e55", fontWeight:'bold'}} onClick={()=>{AuthService.logout(); navigate("/home")}}>Log Out</Button>
        </Box>}
        </Toolbar>
      </AppBar>
      </Box>
      </ThemeProvider>
  );
}