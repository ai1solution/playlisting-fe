import React from 'react';
import { Typography, Box, Paper, Button, Stack } from '@mui/material';
import '../styles/Homepage.css';
import axios from 'axios';
import { useState } from 'react';
import LinkBoxWithCopy from '../components/LinkBoxWithCopy'
import AboutUs from "../components/AboutUs"
import LinearProgress from '@mui/material/LinearProgress';
import SongInput from "../components/SongInput";
import AdSense from 'react-adsense';

const HomePage: React.FC = () => {
  const [songQuery, setSongQuery] = useState("");
  const [playlistLink, setPlaylistLink] = useState("");
  const [playlistName, setPlaylistName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSongQueryUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSongQuery(event.target.value);
  };

  const handleCreatePlaylist = async () => {
    console.log(songQuery);
    setLoading(true);
    try {
      // const response = await axios.get('http://localhost:8000/generate-playlist', {
      const response = await axios.get('https://playlisting-be.onrender.com/generate-playlist', {
          params: {
          songQuery: songQuery
        }
      });
      setPlaylistLink(response.data.playlist_href)
      setPlaylistName(response.data.playlist_name)
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
    setLoading(false);
  }

  const handleCreatePlaylistV2 = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === 13) {
      console.log("enter key pressed");
      handleCreatePlaylist();
    }
    console.log("other key pressed");
  }

  return (
    <>
      <Paper
        elevation={3}
        className='no-border'
        sx={{
          height: {
            xs: 650,
            md: '100vh'
          },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          // backgroundImage: 'url(https://images.unsplash.com/photo-1692061119126-78de8a398628?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', // Ipod one
          // backgroundImage: 'url(https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-4884-622f-82b3-03db025ed9af/raw?se=2025-04-24T20%3A45%3A00Z&sp=r&sv=2024-08-04&sr=b&scid=7ff16f33-46de-5ed6-9609-c63305d5a65d&skoid=de76bc29-7017-43d4-8d90-7a49512bae0f&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-24T03%3A28%3A37Z&ske=2025-04-25T03%3A28%3A37Z&sks=b&skv=2024-08-04&sig=coxbJfHZnYm3en1fphbv7EOvTRN%2Bc0mRHnIMwWzYAWk%3D)', // net one
          backgroundImage: 'url("/backgrounds/home_bg.png")', // net one
          // backgroundImage: 'url(https://images.unsplash.com/photo-1512733596533-7b00ccf8ebaf?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', // net one
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Box
          sx={{
            width: {
              sm: '80%',
              md: '50%',
            },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10
          }}
        >
          <Typography
            variant="h1"
            className="league-gothic-heading"
            gutterBottom
            sx={{
              textDecoration: 'bold',
              textTransform: 'uppercase',
              fontSize: {
                xs: '60px',
                lg: '120px'
              }
            }}
            style={{
              fontWeight: 'bolder',
              color: '#FFFFFF',
            }}
          >
            Playlisting
          </Typography>
          <Typography
            variant="h1"
            className="league-gothic-heading"
            gutterBottom
            sx={{
              textDecoration: 'bold',
              textTransform: 'uppercase',
              marginTop: {
                xs: '-30px',
                lg: '-60px'
              },
              fontSize: {
                xs: '60px',
                lg: '120px'
              }
            }}
            style={{
              fontWeight: 'bolder',
              color: '#FFFFFF'
            }}
          >
            SHOULDNT BE HARD
          </Typography>
          <Typography
            variant="h2"
            className="lora-subheading"
            gutterBottom
            sx={{
              textDecoration: 'bold',
              marginTop: {
                xs: '-20px',
                lg: '-40px',
              },
              marginBottom: {
                md: '20px'
              },
              fontSize: {
                xs: '12px',
                lg: '20px'
              }
            }}
            style={{
              fontWeight: 'bolder',
              color: '#FFFFFF',
            }}
          >
            Create your personalized Spotify playlist effortlessly
          </Typography>
        </Box>
        <Box sx={{
          width: {
            xs: '80%',
            md: '50%'
          },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: '40px'
        }}>
          <SongInput inputFunction={handleSongQueryUpdate} submitFunction={handleCreatePlaylistV2} />
           <Button
            className='space-mono-bold'
            sx={{
              my: 2,
              backgroundColor: '#3bb371',
              color: '#e0feca',
              fontSize: {
                xs: 12,
                md: 24
              }
            }}
            onClick={() => handleCreatePlaylist()}
          >
            PLAYLIST IT
          </Button>
          {playlistLink && <LinkBoxWithCopy url={playlistLink} name={playlistName}/>}
          {
            loading &&
            <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
              <LinearProgress color="secondary" />
            </Stack>
          }
        </Box>
      </Paper>
      <Paper
        elevation={3}
        sx={{
          height: 500,
          display: 'flex',
          alignItems: 'center',
          backgroundImage: 'url("/backgrounds/about_bg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'left',
          backgroundRepeat: 'no-repeat'
        }}
        className='no-border'
      >
        <AboutUs />
      </Paper>
      <Paper>
        <AdSense.Google
          client="ca-pub-3640737521870113" // Replace with your AdSense publisher ID
          slot="5071120975"                // Replace with your ad slot ID
          style={{ display: 'block' }}
          format="auto"
          responsive="true"
        />
      </Paper>
    </>
  );
};

export default HomePage;