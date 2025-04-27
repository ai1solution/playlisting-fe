import * as React from 'react';
import { Box, Typography } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

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
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <Typography variant="h5" gutterBottom sx={{textDecoration: 'underline'}}>
        Profie coming soon.
      </Typography>
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
