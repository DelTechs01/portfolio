import React from 'react';
import { Typography, Container, Box, Button, Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'; // For routing
import { motion } from 'framer-motion'; // For animations

function About() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <main className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-blue-800 min-h-screen flex items-center">
      <Container maxWidth="lg">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
          {/* Heading */}
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              mb: 8,
            }}
            component={motion.h1}
            variants={fadeInUp}
          >
            About Me
          </Typography>

          <Grid container spacing={6} alignItems="center">
            {/* Optional Image (uncomment if you want to use it) */}
            {/* <Grid item xs={12} md={4} className="flex justify-center">
              <motion.img
                src="/assets/bleah.jpg" // Replace with your actual image path in public/assets/
                alt="Kweyu Delron"
                className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover border-4 border-white shadow-lg"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </Grid> */}

            {/* Text Content */}
            <Grid item xs={12} md={12}>
              <Box
                sx={{
                  bgcolor: 'white',
                  borderRadius: '16px',
                  p: { xs: 4, md: 6 },
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                  maxWidth: '800px',
                  mx: 'auto',
                }}
                component={motion.div}
                variants={fadeInUp}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '1rem', md: '1.125rem' },
                    color: 'gray.700',
                    mb: 4,
                    lineHeight: 1.8,
                  }}
                >
                  Hi, I’m Kweyu Delron Muyale, a passionate software engineer and network specialist with a deep commitment to crafting innovative and efficient digital solutions. My journey in technology has equipped me with a robust skill set spanning web development, network optimization, UI/UX design, and AI integration. I thrive on solving complex problems and delivering user-centric applications that make a tangible impact. Whether it’s building scalable web platforms, designing seamless user interfaces, or optimizing network performance, I approach every project with curiosity and precision.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '1rem', md: '1.125rem' },
                    color: 'gray.700',
                    mb: 4,
                    lineHeight: 1.8,
                  }}
                >
                  I specialize in several key areas: full-stack web development, where I create responsive and dynamic applications; network engineering, where I configure and manage systems for optimal connectivity and security; and AI-driven development, where I integrate intelligent features into software. I’m proficient in a variety of programming languages, including JavaScript (with frameworks like React), Python (for scripting, AI, and backend development), Java, and PHP. On the networking side, I’m skilled in tools like Cisco Packet Tracer and Wireshark, and I have hands-on experience with protocols like TCP/IP, DNS, and DHCP.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '1rem', md: '1.125rem' },
                    color: 'gray.700',
                    mb: 6,
                    lineHeight: 1.8,
                  }}
                >
                  Beyond coding and networking, I’m an avid contributor to open-source projects, where I collaborate with global developers to refine my craft and give back to the tech community. When I’m not immersed in technology, I enjoy staying ahead of industry trends, experimenting with new tools, or unwinding with a strong cup of coffee—my fuel for creativity and focus.
                </Typography>
                <Box sx={{ textAlign: 'center' }}>
                  <Button
                    component={RouterLink}
                    to="/contact" // Adjusted to a proper route (remove .jsx extension)
                    variant="contained"
                    sx={{
                      bgcolor: '#1E90FF',
                      color: 'white',
                      py: 1.5,
                      px: 4,
                      borderRadius: '8px',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                      '&:hover': {
                        bgcolor: '#4169E1',
                        boxShadow: '0 6px 16px rgba(0, 0, 0, 0.3)',
                      },
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get in Touch
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </main>
  );
}

export default About;