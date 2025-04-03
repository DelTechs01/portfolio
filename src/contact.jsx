import React, { useState } from 'react';
import { Typography, Container, Box, TextField, Button, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser'; // Import EmailJS

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    // EmailJS configuration
    const serviceID = 'YOUR_SERVICE_ID'; // Replace with your EmailJS Service ID
    const templateID = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS Template ID
    const userID = 'YOUR_USER_ID'; // Replace with your EmailJS User ID

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: 'kweyudelron37@gmail.com', // Replace with your email
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        setStatus('Error: Failed to send message. Please try again.');
        console.error('EmailJS error:', error);
      });
  };

  return (
    <main
      className="min-h-screen flex items-center py-20 text-white relative overflow-hidden"
      style={{
        backgroundImage: 'url(../public/bg-url.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(17, 24, 39, 0.8)', // Fallback color
        backgroundSize: 'cover',
        filter: 'brightness(0.8)', // Darken the background
        color: 'white',
        backdropFilter: 'blur(8px)', // Blur effect for background
      }}
    >
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
          {/* Profile Image */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Avatar
                src="/bleah.jpg"
                alt="Kweyu Delron Muyale"
                sx={{
                  width: { xs: 120, md: 150 },
                  height: { xs: 120, md: 150 },
                  border: '4px solid white',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                }}
              />
            </motion.div>
          </Box>

          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: '2rem', md: '3.5rem' },
              fontWeight: 'bold',
              textAlign: 'center',
              mb: 2,
              letterSpacing: '1px',
            }}
            component={motion.h1}
            variants={fadeInUp}
          >
            Get in Touch
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'gray.300',
              textAlign: 'center',
              mb: 8,
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6,
            }}
            component={motion.p}
            variants={fadeInUp}
          >
            Have a project in mind or just want to connect? Drop me a message!
          </Typography>

          <Box
            sx={{
              bgcolor: 'rgba(255, 255, 255, 0.95)',
              borderRadius: '20px',
              p: { xs: 4, md: 6 },
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25)',
              maxWidth: '700px',
              mx: 'auto',
            }}
            component={motion.div}
            variants={fadeInUp}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <TextField
                id="name"
                label="Your Name"
                variant="outlined"
                fullWidth
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name..."
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '12px',
                    '& fieldset': { borderColor: 'gray.300' },
                    '&:hover fieldset': { borderColor: '#1E90FF' },
                    '&.Mui-focused fieldset': { borderColor: '#1E90FF' },
                  },
                  '& .MuiInputLabel-root': { color: 'gray.600' },
                  '& .MuiInputLabel-root.Mui-focused': { color: '#1E90FF' },
                }}
              />
              <TextField
                id="email"
                label="Your Email"
                type="email"
                variant="outlined"
                fullWidth
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email..."
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '12px',
                    '& fieldset': { borderColor: 'gray.300' },
                    '&:hover fieldset': { borderColor: '#1E90FF' },
                    '&.Mui-focused fieldset': { borderColor: '#1E90FF' },
                  },
                  '& .MuiInputLabel-root': { color: 'gray.600' },
                  '& .MuiInputLabel-root.Mui-focused': { color: '#1E90FF' },
                }}
              />
              <TextField
                id="message"
                label="Your Message"
                variant="outlined"
                fullWidth
                multiline
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or idea..."
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '12px',
                    '& fieldset': { borderColor: 'gray.300' },
                    '&:hover fieldset': { borderColor: '#1E90FF' },
                    '&.Mui-focused fieldset': { borderColor: '#1E90FF' },
                  },
                  '& .MuiInputLabel-root': { color: 'gray.600' },
                  '& .MuiInputLabel-root.Mui-focused': { color: '#1E90FF' },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  bgcolor: '#1E90FF',
                  color: 'white',
                  py: 1.5,
                  borderRadius: '12px',
                  fontWeight: 'medium',
                  textTransform: 'none',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                  '&:hover': {
                    bgcolor: '#4169E1',
                    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.3)',
                  },
                }}
                component={motion.div}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </Button>
              {status && (
                <Typography
                  variant="body2"
                  sx={{
                    color: status.includes('Error') ? '#EF4444' : '#10B981',
                    textAlign: 'center',
                    mt: 2,
                    fontWeight: 'medium',
                  }}
                >
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