import React from 'react';
import { Typography, Box } from '@mui/material';

const Home = () => {
  return (
    <Box sx={{ maxWidth: 400, margin: 'auto', mt: 4 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Hi! Welcome to Task Manager  !!!
      </Typography>
    </Box>
  );
};

export default Home;