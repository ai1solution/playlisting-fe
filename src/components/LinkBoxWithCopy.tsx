import React, { useState } from 'react';
import { Box, IconButton, Typography, Tooltip, Snackbar } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

interface LinkBoxWithCopyProps {
  url: string;
  name: string;
}

const LinkBoxWithCopy: React.FC<LinkBoxWithCopyProps> = ({ url, name }) => {
  const [copied, setCopied] = useState(false);

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <>
      <Box
        sx={{
          borderRadius: 2,
          paddingX: 4,
          paddingY: {
            md: 2
          },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
        }}
      >
        <Typography
          component="a"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: '#FFFFFF',
            textDecoration: 'none',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            flexGrow: 1,
            marginRight: 1,
          }}
        >
          {isMobile ? name.substring(0,30) : name}
        </Typography>

        <Tooltip title="Copy to clipboard">
          <IconButton onClick={handleCopy}>
          <ContentCopyIcon 
            style={{
              color: '#3bb371'
            }}
          />
            <Typography
              style={{
                marginLeft: '4px',
                color: '#3bb371'
              }}
            >
              Copy link
            </Typography>
          </IconButton>
        </Tooltip>
      </Box>

      <Snackbar
        open={copied}
        autoHideDuration={2000}
        onClose={() => setCopied(false)}
        message="Link copied!"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </>
  );
};

export default LinkBoxWithCopy;
