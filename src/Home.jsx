import React from 'react';
import { Box, Typography, Container, Grid, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { FaReact, FaHtml5, FaCss3Alt, FaPython, FaNodeJs, FaJsSquare, FaNetworkWired, FaDatabase, FaMobileAlt } from 'react-icons/fa'; // Added new icons
import { motion } from 'framer-motion';

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const iconAnimation = {
    animate: {
      rotate: 360,
      transition: { duration: 10, repeat: Infinity, ease: 'linear' },
    },
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-blue-800 text-white py-20">
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={5} className="relative flex justify-center">
              <Box position="relative" display="inline-flex">
                <motion.div className="absolute inset-0 flex justify-center items-center" variants={iconAnimation} animate="animate">
                  <FaReact className="text-blue-400 text-2xl absolute top-0 left-10" />
                  <FaHtml5 className="text-orange-500 text-2xl absolute top-10 right-0" />
                  <FaCss3Alt className="text-blue-500 text-2xl absolute bottom-10 left-0" />
                  <FaJsSquare className="text-yellow-400 text-2xl absolute bottom-0 right-10" />
                  <FaPython className="text-yellow-300 text-2xl absolute top-20 left-20" />
                  <FaNodeJs className="text-green-400 text-2xl absolute bottom-20 right-20" />
                </motion.div>
                <motion.img
                  src="../src/assets/bleah.jpg"
                  alt="Kweyu Delron"
                  className="rounded-full w-64 h-64 object-cover border-4 border-white shadow-lg"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={7} className="text-center md:text-left">
              <motion.div initial="hidden" animate="visible" variants={fadeIn}>
                <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, fontWeight: 'bold', mb: 2 }}>
                  Kweyu Delron Muyale
                </Typography>
                <Typography variant="h5" sx={{ color: 'gray.300', mb: 4 }}>
                  Full-Stack Developer | Network Engineer | Problem Solver
                </Typography>
                <Typography variant="body1" sx={{ color: 'gray.200', mb: 6, maxWidth: '600px' }}>
                  I’m a dedicated Software and Network Engineer with a strong enthusiasm for cybersecurity, designing robust, scalable, and secure solutions that empower users and protect systems. I leverage cutting-edge technologies to build efficient software, optimize network performance, and safeguard against evolving threats.
                </Typography>
                <Button
                  component={RouterLink}
                  to="/projects"
                  variant="contained"
                  sx={{
                    bgcolor: '#1E90FF',
                    color: 'white',
                    py: 1.5,
                    px: 4,
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                    '&:hover': { bgcolor: '#4169E1', boxShadow: '0 6px 16px rgba(0, 0, 0, 0.3)' },
                  }}
                >
                  Explore My Work
                </Button>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-gray-100">
        <Container maxWidth="lg">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <Typography
              variant="h3"
              sx={{ fontSize: '2.5rem', fontWeight: 'semibold', color: 'gray.800', textAlign: 'center', mb: 12 }}
            >
              What I Bring to the Table
            </Typography>
          </motion.div>
          <Grid container spacing={6}>
            <Grid item xs={12} md={4}>
              <motion.div
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <FaReact className="text-blue-500 text-4xl mb-4 mx-auto" />
                <Typography variant="h5" sx={{ fontSize: '1.25rem', fontWeight: 'medium', color: 'gray.800', mb: 2, textAlign: 'center' }}>
                  Web Development
                </Typography>
                <Typography variant="body2" sx={{ color: 'gray.600', textAlign: 'center' }}>
                  Crafting responsive, high-performance web applications with React and Node.js.
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={4}>
              <motion.div
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <FaCss3Alt className="text-blue-600 text-4xl mb-4 mx-auto" />
                <Typography variant="h5" sx={{ fontSize: '1.25rem', fontWeight: 'medium', color: 'gray.800', mb: 2, textAlign: 'center' }}>
                  UI/UX Design
                </Typography>
                <Typography variant="body2" sx={{ color: 'gray.600', textAlign: 'center' }}>
                  Designing intuitive, visually stunning interfaces that enhance user experience.
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={4}>
              <motion.div
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <FaPython className="text-yellow-400 text-4xl mb-4 mx-auto" />
                <Typography variant="h5" sx={{ fontSize: '1.25rem', fontWeight: 'medium', color: 'gray.800', mb: 2, textAlign: 'center' }}>
                  AI Solutions
                </Typography>
                <Typography variant="body2" sx={{ color: 'gray.600', textAlign: 'center' }}>
                  Leveraging AI to build smart, innovative applications for real-world challenges.
                </Typography>
              </motion.div>
            </Grid>
            {/* New Item: Network Engineering */}
            <Grid item xs={12} md={4}>
              <motion.div
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <FaNetworkWired className="text-green-600 text-4xl mb-4 mx-auto" />
                <Typography variant="h5" sx={{ fontSize: '1.25rem', fontWeight: 'medium', color: 'gray.800', mb: 2, textAlign: 'center' }}>
                  Network Engineering
                </Typography>
                <Typography variant="body2" sx={{ color: 'gray.600', textAlign: 'center' }}>
                  Configuring and optimizing Wi-Fi installations and network systems for seamless connectivity.
                </Typography>
              </motion.div>
            </Grid>
            {/* New Item: Database Management */}
            <Grid item xs={12} md={4}>
              <motion.div
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <FaDatabase className="text-purple-600 text-4xl mb-4 mx-auto" />
                <Typography variant="h5" sx={{ fontSize: '1.25rem', fontWeight: 'medium', color: 'gray.800', mb: 2, textAlign: 'center' }}>
                  Database Management
                </Typography>
                <Typography variant="body2" sx={{ color: 'gray.600', textAlign: 'center' }}>
                  Designing and maintaining efficient, secure databases for robust data handling.
                </Typography>
              </motion.div>
            </Grid>
            {/* New Item: Mobile Application Testing */}
            <Grid item xs={12} md={4}>
              <motion.div
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <FaMobileAlt className="text-teal-500 text-4xl mb-4 mx-auto" />
                <Typography variant="h5" sx={{ fontSize: '1.25rem', fontWeight: 'medium', color: 'gray.800', mb: 2, textAlign: 'center' }}>
                  Mobile Application Testing
                </Typography>
                <Typography variant="body2" sx={{ color: 'gray.600', textAlign: 'center' }}>
                  Ensuring mobile apps are reliable, user-friendly, and bug-free through rigorous testing.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </main>
  );
}