import React from 'react';
import { Typography, Box, List, ListItem, ListItemText} from '@mui/material';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Box sx={{ maxWidth: 400, margin: 'auto', mt: 4 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Task Manager
      </Typography>
      <List>
        <ListItem component={Link} to="/home" button>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem component={Link} to="/login" button>
          <ListItemText primary="Login" />
        </ListItem>
        <ListItem component={Link} to="/register" button>
          <ListItemText primary="Register" />
        </ListItem>
        <ListItem component={Link} to="/tasks" button>
          <ListItemText primary="Tasks" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Navigation;