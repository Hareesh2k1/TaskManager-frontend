import React, { useState } from 'react';
import { Typography, TextField, Grid, Button, Box} from '@mui/material';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Create user object
    const user = {
      username: username,
      password: password,
    };

    // Send registration request
    axios.post('https://taskmanager-hareesh2k1.onrender.com/register', user)
      .then((response) => {
        console.log(response.data); // Handle successful registration
        alert('Successfully registered!');
        // Reset form fields
        setUsername('');
        setPassword('');
        setConfirmPassword('');
      })
      .catch((error) => {
        console.error(error); // Handle registration error
        alert('Registration failed.');
      });
  };

  return (
      <Box sx={{ maxWidth: 300, margin: 'auto', mt: 4 }}>
      <Typography variant="h2">Registration</Typography>
      <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
          <Grid item xs={12}>
        <TextField
          type="text"
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          />
           </Grid>
          <Grid item xs={12}>
        <TextField
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}/>
           </Grid>
          <Grid item xs={12}>
        <TextField
          type="password"
          label="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}/>
          </Grid>
          <Grid item xs={12}>
        <Button type="submit" variant="contained" color="primary">
          Register
        </Button>
        </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default Register;
