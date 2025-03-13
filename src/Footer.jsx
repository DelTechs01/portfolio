import React from 'react';
import { Typography, Container, Box } from '@mui/material';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion'; // For animations

function Footer() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const hoverScale = {
    hover: { scale: 1.2, transition: { duration: 0.3 } },
  };

  return (
    <footer className="py-12 bg-gradient-to-t from-gray-900 to-blue-900 text-white relative">
      <Container maxWidth="lg">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          {/* Social Links */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 6, mb: 6 }}>
            {[
              { icon: <FaGithub />, link: 'https://github.com/DelTechs01', label: 'GitHub' },
              { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/kweyu-delron-3a4060244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
              { icon: <FaTwitter />, link: 'https://twitter.com/@Btripatakah', label: 'Twitter' },
              { icon: <FaEnvelope />, link: 'mailto:kweyudelron37@gmail.com', label: 'Email' },
            ].map((item, index) => (
              <Box key={index} sx={{ position: 'relative' }} component={motion.div} whileHover="hover" variants={hoverScale}>
                <a
                  href={item.link}
                  target={item.label !== 'Email' ? '_blank' : undefined}
                  rel={item.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="text-white"
                >
                  <Box
                    sx={{
                      fontSize: { xs: '1.75rem', md: '2rem' },
                      color: 'gray.400',
                      '&:hover': { color: '#1E90FF' },
                      transition: 'color 0.3s ease',
                    }}
                  >
                    {item.icon}
                  </Box>
                </a>
                <Typography
                  sx={{
                    position: 'absolute',
                    top: '-2.5rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    bgcolor: '#1E90FF',
                    color: 'white',
                    fontSize: '0.75rem',
                    px: 1.5,
                    py: 0.5,
                    borderRadius: '4px',
                    opacity: 0,
                    pointerEvents: 'none',
                    transition: 'opacity 0.2s ease',
                    '.group:hover &': { opacity: 1 },
                  }}
                  className="group-hover:opacity-100"
                >
                  {item.label}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Contact Info */}
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1rem', md: '1.125rem' },
                fontWeight: 'medium',
                color: 'gray.200',
                '& a': {
                  color: '#1E90FF',
                  textDecoration: 'underline',
                  '&:hover': { color: '#4169E1' },
                },
              }}
            >
              Kweyu Delron Muyale |{' '}
              <a href="mailto:your.email@example.com">kweyudelron37@gmail.com</a>
            </Typography>
          </Box>

          {/* Copyright */}
          <Typography
            variant="body2"
            sx={{
              fontSize: '0.875rem',
              color: 'gray.400',
              textAlign: 'center',
              letterSpacing: '0.05em',
            }}
          >
            © {new Date().getFullYear()} Kweyu Delron Muyale. Crafted with Passion & Precision.
          </Typography>
        </motion.div>

        {/* Subtle Accent Line */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '2px',
            bgcolor: 'transparent',
            background: 'linear-gradient(to right, transparent, #1E90FF, transparent)',
            opacity: 0.5,
          }}
        />
      </Container>
    </footer>
  );
}

export default Footer;