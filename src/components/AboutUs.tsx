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
        marginTop: {
          xs: 10,
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
        We’re a couple of tech and music enthusiasts on a mission to make playlist creation effortless. Tired of generic mixes and endless scrolling, we built a smarter way to create personalized Spotify playlists that match your mood, moment, or vibe—fast.
        Our platform blends a love for music with simple, smart technology to help you discover tracks you’ll love without the hassle. Whether you're getting ready for a workout, hosting friends, or just relaxing, we make finding the perfect soundtrack easy.
        Let us handle the playlist—so you can focus on enjoying the music.
      </Typography>
      <br/>
      <Typography
        variant="body2"
        color='#adb0b3'
      >
        Contact us @ aionesolution07@gmail.com
      </Typography>

    </Box>
  );
};

export default AboutUs;