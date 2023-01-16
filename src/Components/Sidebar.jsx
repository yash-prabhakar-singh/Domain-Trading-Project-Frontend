

import {
  AccountBox,
  Article,
  Group,
  Home,
  ModeNight,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material";
import {
  Box,
  createTheme,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Switch,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

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

const Sidebar = () => {

const navigate= useNavigate();

  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ display: { xs: "none", sm: "block" } }}>
      <Box sx={{}}>

        <List >
            <Stack direction='column' spacing={1}>
          <ListItem  disablePadding >
            <ListItemButton onClick={()=>navigate('/negotiations')} >
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <Typography fontSize={18} variant='h6'fontWeight='bold'>Negotiations</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={()=>navigate('/domainsList')}  >
              <ListItemIcon>
                <Article />
              </ListItemIcon>
              <Typography fontSize={18} variant='h6'fontWeight='bold'>My Domains</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={()=>navigate('/uploadDomains')}>
              <ListItemIcon>
              <Storefront />
              </ListItemIcon>
              <Typography fontSize={18} variant='h6'fontWeight='bold'>Upload Domains</Typography>

            </ListItemButton>
          </ListItem>
          <ListItem disablePadding >
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                
                <Group />
              </ListItemIcon>
              <Typography fontSize={18} variant='h6'fontWeight='bold'>My Referrals</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <Typography fontSize={18} variant='h6'fontWeight='bold'>Owner Payouts</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={()=>navigate('/calculator')}>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <Typography variant='h6' fontSize={18} fontWeight='bold'>Fee Calculator</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={()=>navigate('/profile')}>
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <Typography variant='body1' fontSize={18} fontWeight='bold'>Profile</Typography>
            </ListItemButton>
          </ListItem>
          </Stack>
        </List>
      </Box>
    </Box>
    </ThemeProvider>
  );
};

export default Sidebar;
