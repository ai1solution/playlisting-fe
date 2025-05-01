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
import RandomTextDisplay from '../components/RandomTextDisplay'

const HomePage: React.FC = () => {
  const [songQuery, setSongQuery] = useState("");
  const [playlistLink, setPlaylistLink] = useState("");
  const [playlistName, setPlaylistName] = useState("");
  const [loading, setLoading] = useState(false);
  const musicFunFacts: string[] = [
    "Beethoven composed music even after going completely deaf.",
    "The Beatles hold the record for the most number-one hits on the charts.",
    "Michael Jackson's 'Thriller' video was the first to be inducted into the National Film Registry.",
    "Mozart wrote over 600 compositions in his short life (35 years).",
    "'Happy Birthday' was written by two American sisters, Patty and Mildred J. Hill.",
    "Elvis Presley’s first job was as a truck driver before becoming the King of Rock.",
    "Ludwig van Beethoven composed his Ninth Symphony while completely deaf.",
    "The first ever recorded music was done on a Phonautograph in 1860.",
    "The longest song ever recorded lasts over 1,000 years.",
    "Jimi Hendrix was left-handed but played a right-handed guitar upside down.",
    "Whitney Houston’s cover of 'I Will Always Love You' is one of the best-selling singles.",
    "'Bohemian Rhapsody' by Queen is one of the longest songs to ever top the charts.",
    "Beyoncé was the first Black woman to headline the Coachella festival in 2018.",
    "Vinyl records are making a big comeback in the streaming era.",
    "Spotify has over 400 million active users worldwide.",
    "Madonna holds the record for most top 10 singles for a solo artist.",
    "The first music video played on MTV was 'Video Killed the Radio Star' by The Buggles.",
    "Lady Gaga’s 'Bad Romance' is one of the most-watched videos on YouTube.",
    "Elton John has written music for over 30 films.",
    "Taylor Swift has won 11 Grammy Awards in her career.",
    "The world’s largest iPod playlist has over 1,500,000 songs.",
    "'Gangnam Style' by Psy was the first YouTube video to reach a billion views.",
    "Lizzo is known for her body positivity and empowering messages through music.",
    "Music helps reduce stress by lowering cortisol levels in your body.",
    "The world’s most expensive guitar is 'Black Strat', owned by David Gilmour.",
    "The first rap song on Billboard’s Hot 100 was 'Rapper’s Delight' by Sugarhill Gang.",
    "Justin Bieber was discovered on YouTube at age 12.",
    "Karaoke originated in Japan in the 1970s, blending 'kara' (empty) and 'oke' (orchestra).",
    "Dolly Parton once wrote 'Jolene' and 'I Will Always Love You' in one sitting.",
    "The longest concert lasted 18 hours and 40 minutes.",
    "Beethoven’s Symphony No. 9 is widely considered one of the most influential classical pieces.",
    "Shakira’s hips don’t lie — her music and dance moves are iconic worldwide.",
    "Adele's 'Hello' broke records by becoming the fastest song to hit a billion views.",
    "Michael Jackson's 'Billie Jean' was the first video by a black artist on MTV.",
    "Snoop Dogg holds a Guinness World Record for largest gathering of people dressed as zombies.",
    "Pink Floyd's 'The Dark Side of the Moon' stayed on the Billboard charts for 741 weeks.",
    "Ed Sheeran's 'Shape of You' became the most-streamed song on Spotify in 2017.",
    "Marilyn Monroe sang 'Happy Birthday' to President Kennedy in 1962.",
    "John Lennon was banned from the Philippines after a controversial comment about Jesus.",
    "The Rolling Stones still tour at over 75 years old, holding the title for rock legends.",
    "'Despacito' by Luis Fonsi is the most-viewed YouTube video in history.",
    "Adele’s 21 album has sold over 31 million copies globally.",
    "Kendrick Lamar is the first rapper to win a Pulitzer Prize for music.",
    "'Smells Like Teen Spirit' by Nirvana became an anthem for an entire generation.",
    "Ariana Grande holds the record for most songs debuting at number 1 on the Hot 100.",
    "Classical music has been shown to enhance concentration and mental clarity.",
    "'Eye of the Tiger' by Survivor is the ultimate motivational workout anthem.",
    "Lana Del Rey’s 'Summertime Sadness' became a viral sensation thanks to social media.",
    "Rock bands used to be known for long, spontaneous concerts, sometimes lasting over 6 hours.",
    "Apple Music offers personalized playlists based on your listening preferences, just like Spotify."
  ];

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
            disabled={loading}
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
            <>
              <RandomTextDisplay
                textList={musicFunFacts}
                interval={7000}
              />
              <Stack sx={{ width: '30%', color: 'grey.500' }} spacing={2}>
                <LinearProgress color="secondary" />
              </Stack>
            </>
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