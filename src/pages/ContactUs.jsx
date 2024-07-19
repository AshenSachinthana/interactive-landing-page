import React, { useState } from 'react';
import { 
  TextField, 
  Button, 
  Container, 
  Typography, 
  Box, 
  Paper, 
  Grid,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { styled } from '@mui/system';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  color: theme.palette.text.primary,
  background: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  borderRadius: '15px',
  boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
}));

const ContactInfoItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
}));

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validate = () => {
    let tempErrors = {};
    if (!form.name.trim()) tempErrors.name = 'Name is required';
    if (!form.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      tempErrors.email = 'Email is not valid';
    }
    if (!form.message.trim()) tempErrors.message = 'Message is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSuccessMessage('Thank you for your message. We\'ll get back to you soon!');
      setForm({ name: '', email: '', message: '' });
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h2" align="center" gutterBottom>
        Contact Us
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={7}>
          <StyledPaper elevation={3}>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Name"
                name="name"
                fullWidth
                margin="normal"
                value={form.name}
                onChange={handleChange}
                error={Boolean(errors.name)}
                helperText={errors.name}
              />
              <TextField
                label="Email"
                name="email"
                fullWidth
                margin="normal"
                value={form.email}
                onChange={handleChange}
                error={Boolean(errors.email)}
                helperText={errors.email}
              />
              <TextField
                label="Message"
                name="message"
                fullWidth
                margin="normal"
                multiline
                rows={4}
                value={form.message}
                onChange={handleChange}
                error={Boolean(errors.message)}
                helperText={errors.message}
              />
              <Button 
                type="submit" 
                variant="contained" 
                color="primary" 
                size="large" 
                fullWidth 
                sx={{ mt: 2 }}
              >
                Send Message
              </Button>
            </form>
            {successMessage && (
              <Typography color="success" align="center" sx={{ mt: 2 }}>
                {successMessage}
              </Typography>
            )}
          </StyledPaper>
        </Grid>
        <Grid item xs={12} md={5}>
          <StyledPaper elevation={3}>
            <Typography variant="h5" gutterBottom>
              Our Contact Information
            </Typography>
            <ContactInfoItem>
              <EmailIcon sx={{ mr: 2, color: 'primary.main' }} />
              <Typography>webdeveloper@dev.com</Typography>
            </ContactInfoItem>
            <ContactInfoItem>
              <PhoneIcon sx={{ mr: 2, color: 'primary.main' }} />
              <Typography>+94 (72) 456-7890</Typography>
            </ContactInfoItem>
            <ContactInfoItem>
              <LocationOnIcon sx={{ mr: 2, color: 'primary.main' }} />
              <Typography>123 Main St, Colombo, State 12345</Typography>
            </ContactInfoItem>
          </StyledPaper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ContactForm;