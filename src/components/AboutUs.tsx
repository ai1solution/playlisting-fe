import React from 'react';
import { Box, Typography } from '@mui/material';

const AboutUs: React.FC = () => {
  return (
    <Box
      sx={{
        width: {
          xs: '90%', // full width on small screens
          md: '30%',  // half width on medium+ screens
        },
        paddingLeft: {
          xs: 5,
          md: 15,
        },
        textAlign: 'left',
        boxSizing: 'border-box',
        color: '#FFFFFF'
      }}
    >
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          marginBottom: 5
        }}
      >
        About Us
      </Typography>

      <Typography
        variant="body2"
        color='#adb0b3'
      >
        About Writing effectively is an art. Start by using simple,
        everyday words people can easily understand. Be
        clear and direct to the point. Keep your thoughts
        flowing logically, and aim for brevity unless you’re
        writing in the long form.
        Your ideas have a purpose so choose words that
        accurately express them. Ensure your grammar is
        flawless as it impacts your credibility. Use the
        active voice whenever possible as it makes any
        narrative easier to read.
      </Typography>
    </Box>
  );
};

export default AboutUs;