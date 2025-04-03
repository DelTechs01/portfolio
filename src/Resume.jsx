import React from 'react';
import { Button, Typography, Container, Box } from '@mui/material';
import { motion } from 'framer-motion';

function Resume() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: '0 6px 16px rgba(0, 0, 0, 0.2)' },
    tap: { scale: 0.95 },
  };

  return (
    <main
      className="min-h-screen flex items-center justify-center py-20 text-white relative overflow-hidden"
      style={{
        background: 'linear-gradient(to-br, rgba(17, 24, 39, 0.9), rgba(30, 58, 138, 0.9)), url(/path/to/background-image.jpg)', // Optional background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backdropFilter: 'blur(8px)', // Blur effect
      }}
    >
      <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: '2rem', md: '3.5rem' },
              fontWeight: 'bold',
              color: '#1E90FF', // Matches your theme
              mb: 4,
              letterSpacing: '1px',
            }}
          >
            My Resume
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'gray.300',
              mb: 8,
              maxWidth: '500px',
              mx: 'auto',
              lineHeight: 1.6,
              fontSize: { xs: '1rem', md: '1.125rem' },
            }}
          >
            Get a detailed overview of my skills, experience, and achievements. Download my professional resume below!
          </Typography>
          <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
            <Button
              variant="contained"
              href="https://drive.google.com/file/d/1-Xy-Beq91Y-XWg7vazDd-H2gl-eWspYZ/view?usp=sharing" // Your Google Drive link
              target="_blank" // Opens in new tab
              download="Kweyu_Delron_Muyale_Resume.pdf" // Suggested filename
              sx={{
                bgcolor: '#1E90FF',
                color: 'white',
                py: { xs: 1.5, md: 2 },
                px: { xs: 3, md: 4 },
                borderRadius: '12px',
                fontSize: { xs: '1rem', md: '1.125rem' },
                fontWeight: 'medium',
                textTransform: 'none',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                '&:hover': {
                  bgcolor: '#4169E1',
                  boxShadow: '0 6px 16px rgba(0, 0, 0, 0.3)',
                },
              }}
            >
              Download Resume
            </Button>
          </motion.div>
          <Typography
            variant="body2"
            sx={{
              color: 'gray.400',
              mt: 4,
              fontStyle: 'italic',
              fontSize: { xs: '0.875rem', md: '1rem' },
            }}
          >
            Last updated: April 2025
          </Typography>
        </motion.div>
      </Container>
    </main>
  );
}

export default Resume;