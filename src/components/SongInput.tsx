import React from "react";
import { TextField, Tooltip, Box, IconButton } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';

interface SongInputProps {
    inputFunction: (event: React.ChangeEvent<HTMLInputElement>) => void;
    submitFunction: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const SongInput: React.FC<SongInputProps> = ({ inputFunction, submitFunction }) => {
  // Custom Info/About icon using SvgIcon
  const SongInfoIcon = () => (
    <InfoIcon fontSize='large' style={{ color: 'white', alignSelf: 'center', marginLeft: '10px' }}/>
  );
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
      }}
    >
      <TextField
        onKeyDown={submitFunction}
        label="Enter your mood"
        placeholder="Sad 90's bollywood, Party hip hop, Hard hitting Indie, ..."
        onChange={inputFunction}
      //   variant="outlined"
        variant="filled"
        fullWidth
        InputProps={{
          style: {
            backgroundColor: "#ffffff",
            borderRadius: 32,
            color: "#000000",
          },
        }}
      //   InputLabelProps={{
      //     style: { color: "#3bb371" },
      //   }}
        sx={{
          '& .MuiOutlinedInput-root': {
            paddingLeft: {
              xs: '5px',
              md: '10px'
            },
            backgroundColor: '#ffffff',
            color: '#000000',
          },
          // '& .MuiInputLabel-root': {
          //   color: '#ffffff',
          // },
        }}
      />
      
      <Tooltip 
        title={
          <>
            Feeling happy, mellow, or nostalgic?
            Tell us — or name a few songs you love.
          </>
        }
        enterTouchDelay={0} // show immediately on touch
        leaveTouchDelay={3000} // stays for 3s before auto-dismiss
        sx={{
          '& .MuiTooltip-tooltip': {
            fontSize: {
              xs: '0.05rem', // smaller on phones
              sm: '0.875rem', // normal on larger screens
            },
          },
        }}
        style={{
          width: '50vw !important'
        }}
      >
        <IconButton style={{opacity: 0.5}} size="small">
          <SongInfoIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default SongInput;
