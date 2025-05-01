import React from "react";
import { TextField } from "@mui/material";

interface SongInputProps {
    inputFunction: (event: React.ChangeEvent<HTMLInputElement>) => void;
    submitFunction: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const SongInput: React.FC<SongInputProps> = ({ inputFunction, submitFunction }) => {
  return (
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
  );
};

export default SongInput;
