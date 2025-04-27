// src/components/Navbar.tsx
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  IconButton, 
  Box,
  SvgIcon
} from '@mui/material';
import '../styles/Navbar.css';
import TemporaryDrawer from './TemporaryDrawer';

// Custom Home icon using SvgIcon
const HomeIcon = () => (
  <SvgIcon>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </SvgIcon>
);

const Navbar: React.FC = () => {
  return (
    <AppBar
      sx={{
        paddingY: 1,
      }}
    >
      <Toolbar>
        {/* Left side with Home icon */}
        <Box sx={{ flexGrow: 1, opacity: 0}}>
          <HomeIcon />
        </Box>
        
        {/* Center with app title */}
        <Box>
          <IconButton
              color="inherit"
              component={RouterLink}
              to="/home"
              edge="end"
              aria-label="profile"
            >
            <Typography 
              variant="h4"
              component="div" 
              sx={{ 
                flexGrow: 1, 
                textAlign: "center",
              }}
              className="museomoderno-title"
            >
              PLAYLISTING
              <Typography
                variant="subtitle2"
                className="leckerli-one-regular"
              >
                made easier
              </Typography>
            </Typography>
          </IconButton>
        </Box>
        
        {/* Right side with About icon */}
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <TemporaryDrawer />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;