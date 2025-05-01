import React, { useEffect, useState } from 'react';
import { Box, Typography, Fade } from '@mui/material';

interface RandomTextDisplayProps {
  textList: string[];
  interval?: number; // milliseconds, optional (default: 3000)
}

const RandomTextDisplay: React.FC<RandomTextDisplayProps> = ({
  textList,
  interval = 3000,
}) => {
  const [currentText, setCurrentText] = useState<string>('');
  const [fadeIn, setFadeIn] = useState<boolean>(true);

  useEffect(() => {
    if (!textList.length) return;

    const pickRandomText = () =>
      textList[Math.floor(Math.random() * textList.length)];

    setCurrentText(pickRandomText());

    const timer = setInterval(() => {
      setFadeIn(false); // Trigger fade-out

      setTimeout(() => {
        setCurrentText(pickRandomText());
        setFadeIn(true); // Trigger fade-in
      }, 200); // fade-out duration
    }, interval);

    return () => clearInterval(timer);
  }, [textList, interval]);

  return (
    <Box p={2} minHeight={40}>
      <Fade in={fadeIn} timeout={{ enter: 300, exit: 200 }}>
        <Typography
          variant="body1"
          sx={{
            color: '#FFFFFF'
          }}
          key={currentText}
        >
          {currentText}
        </Typography>
      </Fade>
    </Box>
  );
};

export default RandomTextDisplay;
