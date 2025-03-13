import React, { useState } from 'react';
import { Typography, Container, Box, TextField, Button } from '@mui/material';
import { motion } from 'framer-motion';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('../src/backend/server.js', { // Update to your backend URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus(`Error: ${result.message}`);
      }
    } catch (error) {
      setStatus('Error: Something went wrong. Please try again.');
      console.error('Submission error:', error);
    }
  };

  return (
    <main className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-blue-800 min-h-screen text-white flex items-center">
      <Container maxWidth="md">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
          <Typography
            variant="h3"
            sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 'bold', textAlign: 'center', mb: 10 }}
            component={motion.h1}
            variants={fadeInUp}
          >
            Contact Me
          </Typography>

          <Box
            sx={{ bgcolor: 'white', borderRadius: '16px', p: { xs: 4, md: 6 }, boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)', maxWidth: '600px', mx: 'auto' }}
            component={motion.div}
            variants={fadeInUp}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <TextField
                id="name"
                label="Name"
                variant="outlined"
                fullWidth
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                sx={{ /* Your existing styles */ }}
              />
              <TextField
                id="email"
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
                sx={{ /* Your existing styles */ }}
              />
              <TextField
                id="message"
                label="Message"
                variant="outlined"
                fullWidth
                multiline
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                required
                sx={{ /* Your existing styles */ }}
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ /* Your existing styles */ }}
                component={motion.div}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </Button>
              {status && (
                <Typography variant="body2" sx={{ color: status.includes('Error') ? 'red' : 'green.600', textAlign: 'center', mt: 2 }}>
                  {status}
                </Typography>
              )}
            </form>
          </Box>
        </motion.div>
      </Container>
    </main>
  );
}

export default Contact;