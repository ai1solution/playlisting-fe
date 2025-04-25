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
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// Custom Home icon using SvgIcon
const HomeIcon = () => (
  <SvgIcon>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </SvgIcon>
);

// Custom Info/About icon using SvgIcon
const ProfileIcon = () => (
  <AccountCircleIcon fontSize='large' style={{ color: '#3bb371' }}/>
);

const Navbar: React.FC = () => {
  return (
    <AppBar position="static" sx={{
      paddingY: 1
    }}>
      <Toolbar>
        {/* Left side with Home icon */}
        <Box sx={{ flexGrow: 1, opacity: 0}}>
          <HomeIcon />
        </Box>
        
        {/* Center with app title */}
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
        
        {/* Right side with About icon */}
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton
            color="inherit"
            component={RouterLink}
            to="/profile"
            edge="end"
            aria-label="profile"
          >
            <ProfileIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;