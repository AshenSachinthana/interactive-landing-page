// import React, { useEffect } from 'react';
import { Box, Typography, Container, Grid, Avatar, Paper, Divider } from '@mui/material';
import { useSpring, animated, useTrail } from '@react-spring/web';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import BusinessIcon from '@mui/icons-material/Business';
import FlagIcon from '@mui/icons-material/Flag';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import GroupIcon from '@mui/icons-material/Group';

const AboutUs = () => {
  const fadeIn = useSpring({ 
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { duration: 1000 }
  });

  const teamMembers = [
    { name: "John ", role: "CEO", image: "/img/team/ceo.jpg" },
    { name: "Jane ", role: "Lead Designer", image: "/img/team/designer.jpg" },
    { name: "Mike ", role: "Senior Developer", image: "/img/team/deve.jpg" },
    { name: "Emily ", role: "Marketing Manager", image: "/img/team/images.jpg" },
  ];

  const trail = useTrail(teamMembers.length, {
    from: { opacity: 0, transform: 'scale(0.8)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { mass: 5, tension: 2000, friction: 200 },
  });

  return (
    <Container maxWidth="lg" sx={{ py: 2 }}>
      <animated.div style={fadeIn}>
        <Typography variant="h2" gutterBottom align="center" sx={{ mb: 3,fontSize:"3.5rem" }}>
          About Us
        </Typography>

        <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <BusinessIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} sx={{ p: 3, bgcolor: 'background.paper' }}>
                <Typography variant="h5" component="h2" gutterBottom>
                  Company History
                </Typography>
                <Typography>
                  Founded in 2020, we've grown from a small startup to a leading web design agency, 
                  serving clients worldwide with innovative digital solutions.
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <FlagIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} sx={{ p: 3, bgcolor: 'background.paper' }}>
                <Typography variant="h5" component="h2" gutterBottom>
                  Our Mission
                </Typography>
                <Typography>
                  We are committed to delivering exceptional web designs that not only meet but exceed 
                  our clients' expectations, driving their business growth and online success.
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <EmojiObjectsIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} sx={{ p: 3, bgcolor: 'background.paper' }}>
                <Typography variant="h5" component="h2" gutterBottom>
                  Our Values
                </Typography>
                <Typography>
                  Integrity, creativity, and collaboration form the cornerstone of our work ethic. 
                  We believe in pushing boundaries and setting new standards in web design.
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <GroupIcon />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={4} sx={{ p: 3, bgcolor: 'background.paper' }}>
                <Typography variant="h5" component="h2" gutterBottom>
                  Meet Our Team
                </Typography>
                <Grid container spacing={3}>
                  {trail.map((props, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                      <animated.div style={props}>
                        <Box sx={{ textAlign: 'center' }}>
                          <Avatar 
                            sx={{ 
                              width: 110, 
                              height: 120, 
                              margin: 'auto',
                              border: '5px solid #1976d2',
                              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                            }} 
                            src={teamMembers[index].image} 
                            alt={teamMembers[index].name} 
                          />
                          <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold' }}>
                            {teamMembers[index].name}
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            {teamMembers[index].role}
                          </Typography>
                        </Box>
                      </animated.div>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </animated.div>
    </Container>
  );
};

export default AboutUs;