import * as React from 'react';
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'


const Navbar = () => {
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography align="left" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{textDecoration: 'none', color: 'white'}}>Material Ui & React</Link>
          </Typography>
          <SignedOutLinks />
          <SignedInLinks />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;