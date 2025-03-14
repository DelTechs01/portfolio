import React from 'react';
import { Typography, Container, Box, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';

function Projects() {
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

  const projects = [
    {
      title: 'E-Learning Platform',
      description: 'A comprehensive platform for online education...',
      image: '../e-learning.jpg',
      githubLink: 'https://github.com/DelTechs01/elearning-platform', // Replace with real URL
    },
    {
      title: 'WiFi Management System',
      description: 'A system to configure, monitor, and optimize WiFi networks...',
      image: '/wifisys.jpg',
      githubLink: 'https://github.com/DelTechs01/wifi-management-system', // Replace with real URL
    },
    {
      title: 'Task Tracker',
      description: 'Contribute to the development of a productivity tool to organize tasks...',
      image: '/task-tracker.jpg',
      githubLink: 'https://github.com/Ann-Karuku/task-tracker', // Replace with real URL
    },
    {
      title: 'Space Exploration',
      description: 'An interactive app exploring space data...',
      image: '/space-exploration.jpg',
      githubLink: 'https://github.com/DelTechs01/space-_exploration', // Fixed typo, replace with real URL
    },
  ];

  return (
    <main className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-blue-800 min-h-screen text-white">
      <Container maxWidth="lg">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
          <Typography
            variant="h3"
            sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 'bold', textAlign: 'center', mb: 12 }}
            component={motion.h1}
            variants={fadeInUp}
          >
            My Projects
          </Typography>

          <Grid container spacing={6}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <motion.div
                  className="bg-white text-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300"
                  whileHover={{ y: -5, boxShadow: '0 12px 24px rgba(0, 0, 0, 0.3)' }}
                  variants={fadeInUp}
                >
                  <Box
                    component="img"
                    src={project.image}
                    alt={project.title}
                    sx={{ width: '100%', height: '200px', objectFit: 'cover', borderBottom: '2px solid #1E90FF' }}
                  />
                  <Box sx={{ p: 4 }}>
                    <Typography variant="h5" sx={{ fontSize: '1.25rem', fontWeight: 'medium', color: 'gray.800', mb: 2 }}>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'gray.600', mb: 4, lineHeight: 1.6 }}>
                      {project.description}
                    </Typography>
                    <Button
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outlined"
                      sx={{
                        borderColor: '#1E90FF',
                        color: '#1E90FF',
                        px: 3,
                        py: 1,
                        borderRadius: '8px',
                        '&:hover': { bgcolor: '#1E90FF', color: 'white', borderColor: '#1E90FF' },
                      }}
                    >
                      View on GitHub
                    </Button>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </main>
  );
}

export default Projects;