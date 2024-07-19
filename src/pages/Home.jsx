import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';

import Clock from '../components/Clock';

function Home() {
  const [welcomeMessage, setWelcomeMessage] = useState('Welcome to Home Page');
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    document.title = "Landing Page";
    updateGreeting();
    const intervalId = setInterval(updateGreeting, 60000);
    return () => clearInterval(intervalId);
  }, []);

  const updateGreeting = () => {
    const currentHour = new Date().getHours();
    let newGreeting;

    if (currentHour >= 5 && currentHour < 12) {
      newGreeting = 'Good Morning!';
    } else if (currentHour >= 12 && currentHour < 18) {
      newGreeting = 'Good Afternoon!';
    } else if (currentHour >= 18 && currentHour < 22) {
      newGreeting = 'Good Evening!';
    } else {
      newGreeting = 'Good Night!';
    }

    setGreeting(newGreeting);
  };

  const handleInputChange = (e) => {
    setWelcomeMessage(e.target.value);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
        <Typography variant="h4" gutterBottom>
          {welcomeMessage}
        </Typography>
        <Typography variant="h5" gutterBottom>
          {greeting}
        </Typography>
      </Box>
      <Box
        component="div"
        sx={{
          position: 'relative',
          width: '100%',
          height: 450,
          backgroundImage: 'url("/img/abc.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          marginBottom: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '10px 20px',
            borderRadius: 1,
            marginBottom: 2,
          }}
        >
          Web Developer
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          component={Link} 
          to="/aboutus"
        >
          More Info
        </Button>
      </Box>
      <TextField
        label="Update Welcome Message"
        variant="outlined"
        fullWidth
        value={welcomeMessage}
        onChange={handleInputChange}
        sx={{ marginTop: 2 }}
      />
      
      <Box sx={{ flexGrow: 8, display: 'flex', justifyContent: 'center', fontWeight: 'bold',
        fontSize: '5rem', color: '#1976d2', marginTop: '10px'
       }}>
        <Clock />
      </Box>
    </Box>
  );
}

export default Home;