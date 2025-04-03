import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Divider } from '@mui/material';
import { FaGraduationCap, FaCertificate, FaLaptopCode, FaMobileAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Education() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
  };

  const cardHover = {
    hover: {
      y: -10,
      boxShadow: '0 12px 24px rgba(0, 0, 0, 0.25)',
      transition: { duration: 0.3 },
    },
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-blue-900 to-blue-800 text-white py-20">
        <Container maxWidth="lg">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 'bold',
                textAlign: 'center',
                mb: 4,
                letterSpacing: '1px',
              }}
            >
              My Education
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: 'gray.300',
                textAlign: 'center',
                maxWidth: '800px',
                mx: 'auto',
                mb: 8,
                lineHeight: 1.6,
              }}
            >
              A dynamic journey of academic excellence, professional certifications, and hands-on learning, fueling my passion for software engineering, cybersecurity, and innovation.
            </Typography>
          </motion.div>

          <Grid container spacing={4} justifyContent="center">
            {/* Undergraduate Degree */}
            <Grid item xs={12} md={4}>
              <motion.div variants={cardHover} whileHover="hover">
                <Card
                  sx={{
                    bgcolor: 'white',
                    borderRadius: '16px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    height: '100%',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                  }}
                >
                  <CardContent sx={{ textAlign: 'center', p: 4 }}>
                    <FaGraduationCap className="text-blue-500 text-4xl mb-4" />
                    <Typography
                      variant="h5"
                      sx={{ fontSize: '1.5rem', fontWeight: 'medium', color: 'gray.800', mb: 2 }}
                    >
                      Undergraduate Degree
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'gray.600', mb: 1 }}>
                      Kirinyaga University
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'gray.500', fontStyle: 'italic', mb: 2 }}>
                      Started: September 2022 - Expected Graduation:2026
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'gray.500' }}>
                      Pursuing a B.Sc. in Software Engineering, specializing in scalable systems, network optimization, and secure coding practices.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>

            {/* Certification - Mobile Application Testing */}
            <Grid item xs={12} md={4}>
              <motion.div variants={cardHover} whileHover="hover">
                <Card
                  sx={{
                    bgcolor: 'white',
                    borderRadius: '16px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    height: '100%',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                  }}
                >
                  <CardContent sx={{ textAlign: 'center', p: 4 }}>
                    <FaMobileAlt className="text-teal-500 text-4xl mb-4" />
                    <Typography
                      variant="h5"
                      sx={{ fontSize: '1.5rem', fontWeight: 'medium', color: 'gray.800', mb: 2 }}
                    >
                      Certification
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'gray.600', mb: 1 }}>
                      Mobile Application Testing - Cyber Pro Africa
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'gray.500', fontStyle: 'italic', mb: 2 }}>
                      Completed: August 2023
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'gray.500' }}>
                      Gained expertise in testing mobile apps for performance, usability, and security across platforms.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>

            {/* Scholarship */}
            <Grid item xs={12} md={4}>
              <motion.div variants={cardHover} whileHover="hover">
                <Card
                  sx={{
                    bgcolor: 'white',
                    borderRadius: '16px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    height: '100%',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                  }}
                >
                  <CardContent sx={{ textAlign: 'center', p: 4 }}>
                    <FaLaptopCode className="text-yellow-400 text-4xl mb-4" />
                    <Typography
                      variant="h5"
                      sx={{ fontSize: '1.5rem', fontWeight: 'medium', color: 'gray.800', mb: 2 }}
                    >
                      Scholarship
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'gray.600', mb: 1 }}>
                      Power Learn Project Africa
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'gray.500', fontStyle: 'italic', mb: 2 }}>
                      Joined: January 2025 Feb-Cohort.
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'gray.500' }}>
                      Advancing skills in Python, Django, and Web development through a competitive scholarship program.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </section>

      {/* Enhanced Additional Info Section */}
      <section className="py-20 bg-gray-100">
        <Container maxWidth="lg">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <Typography
              variant="h3"
              sx={{
                fontSize: '2.5rem',
                fontWeight: 'semibold',
                color: 'gray.800',
                textAlign: 'center',
                mb: 6,
                letterSpacing: '0.5px',
              }}
            >
              My Educational Journey
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'gray.600',
                textAlign: 'center',
                maxWidth: '900px',
                mx: 'auto',
                lineHeight: 1.8,
                mb: 4,
              }}
            >
              Since starting my B.Sc. in Software Engineering at Kirinyaga University in 2022, I’ve been immersed in designing scalable systems and mastering network security. My certifications from Cyber Pro Africa in Mobile Mobile Application Testing (2023) have honed my ability to build and validate high-quality software. Currently, through a scholarship at Power Learn Project Africa (joined 2025), I’m deepening my expertise in Python, Django, and mobile technologies—driven by a relentless passion for solving complex problems and winning hackathons with innovative, secure solutions.
            </Typography>
            <Divider sx={{ maxWidth: '200px', mx: 'auto', mb: 4, bgcolor: 'gray.300' }} />
            <Typography
              variant="body2"
              sx={{
                color: 'gray.700',
                textAlign: 'center',
                fontStyle: 'italic',
                maxWidth: '800px',
                mx: 'auto',
              }}
            >
              "Equipped with a blend of academic rigor and practical skills, I’m ready to tackle real-world challenges and lead in hackathons with cutting-edge ideas."
            </Typography>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}