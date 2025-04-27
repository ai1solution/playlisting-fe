import React from "react";
import { TextField } from "@mui/material";

interface SongInputProps {
    inputFunction: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SongInput: React.FC<SongInputProps> = ({ inputFunction }) => {
  return (
    <TextField
      label="Enter songs"
      placeholder="Let it be, Hotel California"
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
