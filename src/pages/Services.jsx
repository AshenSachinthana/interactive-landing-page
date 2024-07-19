import React from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Rating,
  useTheme
} from '@mui/material';
import { 
  Code as CodeIcon, 
  ShoppingCart as ShoppingCartIcon, 
  Web as WebIcon, 
  Search as SearchIcon,
  Star as StarIcon
} from '@mui/icons-material';

const services = [
  { title: "Custom Website Development", description: "Creating responsive and scalable websites tailored to your business needs.", icon: <CodeIcon /> },
  { title: "E-commerce Solutions", description: "Building secure and user-friendly online stores to boost your sales.", icon: <ShoppingCartIcon /> },
  { title: "Web Application Development", description: "Developing robust web applications to streamline your operations.", icon: <WebIcon /> },
  { title: "SEO Optimization", description: "Enhancing your online presence with effective SEO strategies.", icon: <SearchIcon /> },
];

const projects = [
  { title: "E-commerce Website", image: "/img/project/ecommerce.jpg" },
  { title: "Corporate Website ", image: "/img/project/corpo.jpg" },
  { title: "Web Application", image: "/img/project/attachment_86572539.jpg" },
];

const testimonials = [
  { text: "Web Developer transformed our online presence. Highly recommend!", author: "John D., CEO of Shoping Cart", rating: 5 },
  { text: "Professional and reliable. Their work exceeded our expectations. Highly recommend!", author: "Sarah P., Director at zen Corporation", rating: 4 },
];

const reasons = [
  { title: "Experience", description: "Over 10 years of expertise in web development." },
  { title: "Quality", description: "Delivering high-quality and innovative solutions." },
  { title: "Customer Satisfaction", description: "Committed to ensuring client success and satisfaction." },
];

const additionalReasons = [
  { title: "Innovation", description: "Continuously innovating to bring you the latest in web technology." },
  { title: "Support", description: "Providing 24/7 support to ensure your website runs smoothly." },
  { title: "Affordability", description: "Offering competitive pricing without compromising on quality." },
];

function ServicesPage() {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h2" align="center" gutterBottom>
        Our Services
      </Typography>

      <Grid container spacing={4} sx={{ mb: 8 }}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                  {React.cloneElement(service.icon, { fontSize: 'large', color: 'primary' })}
                </Box>
                <Typography gutterBottom variant="h5" component="h2" align="center">
                  {service.title}
                </Typography>
                <Typography align="center">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h3" align="center" gutterBottom>
        Portfolio Highlights
      </Typography>

      <Grid container spacing={4} sx={{ mb: 8 }}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image={project.image}
                // alt={project.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" align='center'>
                  {project.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h3" align="center" gutterBottom>
        Client Testimonials
      </Typography>

      <Grid container spacing={4} sx={{ mb: 8 }}>
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
              <Typography variant="body1" paragraph>
                "{testimonial.text}"
              </Typography>
              <Typography variant="subtitle2" align="right">
                - {testimonial.author}
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                <Rating value={testimonial.rating} readOnly />
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h3" align="center" gutterBottom>
        Why Choose Us
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <List>
            {reasons.map((reason, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <StarIcon color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary={reason.title} 
                  secondary={reason.description}
                />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} sm={6}>
          <List>
            {additionalReasons.map((reason, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <StarIcon color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary={reason.title} 
                  secondary={reason.description}
                />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ServicesPage;
