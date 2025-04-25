import React from 'react';
import { TextField, Box, Paper, Button } from '@mui/material';
import '../styles/Homepage.css';
import axios from 'axios';
import { useState } from 'react';
import LinkBoxWithCopy from '../components/LinkBoxWithCopy'
import AboutUs from "../components/AboutUs"
import CircularProgress from '@mui/material/CircularProgress';

const HomePage: React.FC = () => {
  const [songQuery, setSongQuery] = useState("");
  const [playlistLink, setPlaylistLink] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSongQueryUpdate = (updatedQuery: string) => {
    setSongQuery(updatedQuery);
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
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
    setLoading(false);
  }

  return (
    <>
      <Paper
        elevation={3}
        sx={{
          height: '94vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          // backgroundImage: 'url(https://images.unsplash.com/photo-1692061119126-78de8a398628?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', // Ipod one
          // backgroundImage: 'url(https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-4884-622f-82b3-03db025ed9af/raw?se=2025-04-24T20%3A45%3A00Z&sp=r&sv=2024-08-04&sr=b&scid=7ff16f33-46de-5ed6-9609-c63305d5a65d&skoid=de76bc29-7017-43d4-8d90-7a49512bae0f&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-24T03%3A28%3A37Z&ske=2025-04-25T03%3A28%3A37Z&sks=b&skv=2024-08-04&sig=coxbJfHZnYm3en1fphbv7EOvTRN%2Bc0mRHnIMwWzYAWk%3D)', // net one
          backgroundImage: 'url(https://i.ibb.co/JRbt4gpG/bg.png)', // net one
          // backgroundImage: 'url(https://images.unsplash.com/photo-1512733596533-7b00ccf8ebaf?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', // net one
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Box sx={{
          width: '50%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <TextField
            label="Enter songs"
            placeholder='Let it be, Hotel California'
            variant="outlined"
            value={songQuery}
            onChange={(e) => handleSongQueryUpdate(e.target.value)}
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '32px',
              },
              px: 0,
            }}
          />
          <Button
            className='space-mono-bold'
            sx={{
              my: 2,
              px: 2,
              backgroundColor: '#3bb371',
              color: '#e0feca',
              width: '10',
              fontSize: 24
            }}
            onClick={() => handleCreatePlaylist()}
          >
            PLAYLIST IT
          </Button>
          {playlistLink && <LinkBoxWithCopy url={playlistLink} />}
          {loading && <CircularProgress />}
        </Box>
      </Paper>
      <Paper
        elevation={3}
        sx={{
          height: '41vh',
          display: 'flex',
          alignItems: 'center',
          backgroundImage: 'url(https://i.ibb.co/KxdmKW41/bg2.jpg)', // Ipod one
          backgroundSize: 'cover',
          backgroundPosition: 'left',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <AboutUs />
      </Paper>
    </>
  );
};

export default HomePage;