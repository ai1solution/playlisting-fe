import React from 'react';
import { Typography, Paper } from '@mui/material';

const ProfilePage: React.FC = () => {
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Profile Page
      </Typography>
    </Paper>
  );
};

export default ProfilePage;