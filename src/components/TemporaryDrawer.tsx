import * as React from 'react';
import { Box, Typography } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../styles/Homepage.css';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  
  // Custom Info/About icon using SvgIcon
  const ProfileIcon = () => (
    <AccountCircleIcon fontSize='large' style={{ color: '#3bb371' }}/>
  );

  const DrawerList = (
    <Box
      sx={{
        width: 350,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: 'url("/backgrounds/sidebar_bg_back.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }} 
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <Box
        sx={{
          width: 270,
          height: 270,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: 'url("/backgrounds/about_bg.png")', // net one
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          borderRadius: '10px',
          boxShadow: "0px 2px 8px rgba(255, 255, 255, 0.1)", // White shadow, low opacity
        }} 
        role="presentation"
        onClick={toggleDrawer(false)}
      >
        <Typography
          variant="h4"
          className="open-sans-sidebar"
          color='#FFFFFF'
        >
          coming soon.
        </Typography>
        <Typography
          variant="body1"
          className="open-sans-sidebar"
          sx={{
            marginTop: '10px'
          }}
          color='#FFFFFF'
        >
          stay tuned and keep playlisting
        </Typography>
      </Box>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}><ProfileIcon /></Button>
      <Drawer anchor='right' open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
