import React from 'react';
import { Typography, Container, Box, Grid, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'; // For routing
import { motion } from 'framer-motion'; // For animations
import { FaReact, FaTools, FaUsers } from 'react-icons/fa'; // Icons for skills

function SkillsAndExperience() {
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
    <main className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-blue-800 min-h-screen text-white">
      <Container maxWidth="lg">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
          {/* Skills Section */}
          <section>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 'bold',
                textAlign: 'center',
                mb: 10,
              }}
              component={motion.h1}
              variants={fadeInUp}
            >
              My Skills
            </Typography>

            <Grid container spacing={6}>
              {/* Technical Skills */}
              <Grid item xs={12} md={4}>
                <motion.div
                  className="p-6 bg-white text-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -5 }}
                  variants={fadeInUp}
                >
                  <FaReact className="text-blue-500 text-4xl mb-4 mx-auto" />
                  <Typography variant="h5" sx={{ fontSize: '1.25rem', fontWeight: 'medium', mb: 3, textAlign: 'center' }}>
                    Technical Skills
                  </Typography>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      JavaScript (React MUI)
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      HTML5 & CSS3 (Tailwind CSS)
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Python (Django, Flask)
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      SQL & NoSQL Databases
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      PHP
                    </li>
                  </ul>
                </motion.div>
              </Grid>

              {/* Tools & Platforms */}
              <Grid item xs={12} md={4}>
                <motion.div
                  className="p-6 bg-white text-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -5 }}
                  variants={fadeInUp}
                >
                  <FaTools className="text-blue-500 text-4xl mb-4 mx-auto" />
                  <Typography variant="h5" sx={{ fontSize: '1.25rem', fontWeight: 'medium', mb: 3, textAlign: 'center' }}>
                    Tools & Platforms
                  </Typography>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Git & GitHub
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Docker
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      AWS / Azure
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Figma & Adobe XD
                    </li>
                  </ul>
                </motion.div>
              </Grid>

              {/* Soft Skills */}
              <Grid item xs={12} md={4}>
                <motion.div
                  className="p-6 bg-white text-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -5 }}
                  variants={fadeInUp}
                >
                  <FaUsers className="text-blue-500 text-4xl mb-4 mx-auto" />
                  <Typography variant="h5" sx={{ fontSize: '1.25rem', fontWeight: 'medium', mb: 3, textAlign: 'center' }}>
                    Soft Skills
                  </Typography>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Problem Solving
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Team Collaboration
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Communication
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Time Management
                    </li>
                  </ul>
                </motion.div>
              </Grid>
            </Grid>
          </section>

          {/* Experience Section */}
          <section className="mt-20">
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 'bold',
                textAlign: 'center',
                mb: 10,
              }}
              component={motion.h1}
              variants={fadeInUp}
            >
              My Experience
            </Typography>

            <Box sx={{ maxWidth: '900px', mx: 'auto', position: 'relative' }}>
              {/* Vertical Timeline Line */}
              <Box
                sx={{
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '2px',
                  bgcolor: 'blue.500',
                  height: '100%',
                  opacity: 0.3,
                }}
              />

              {/* Experience Items */}
              {[
                {
                  title: 'Software Developer and Network Engineer',
                  company: 'Speedy Connect',
                  duration: 'Dec 2024 - Present',
                  description:
                    'Designed and implemented full-stack web applications using React, PHP, and RESTful APIs. Optimized performance and scalability while collaborating with product managers and designers to meet client requirements.',
                },
                {
                  title: 'ICT Support Officer',
                  company: 'The Ministry of Trade Industry and Investment',
                  duration: 'May 2024 - August 2024',
                  description:
                    'Provided technical support for hardware, software, and network systems. Managed IT infrastructure, troubleshooted issues, and assisted in the deployment of digital tools to enhance operational efficiency.',
                },
                {
                  title: 'Intern - Network Engineer',
                  company: 'Ryantel Systems',
                  duration: 'August 2024 - Feb 2025',
                  description:
                    'Assisted in configuring and maintaining network infrastructure, including routers, switches, and firewalls. Monitored network performance, resolved connectivity issues, and supported the team in upgrading system security.',
                },
              ].map((exp, index) => (
                <motion.div
                  key={index}
                  className="relative mb-12 flex items-center"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                >
                  <Box
                    sx={{
                      width: { xs: '100%', md: '50%' },
                      pr: { md: 8 },
                      textAlign: { xs: 'center', md: 'right' },
                      order: { xs: 2, md: 1 },
                    }}
                  >
                    <Typography variant="h6" sx={{ fontSize: '1.125rem', fontWeight: 'medium', color: 'white' }}>
                      {exp.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'gray.300' }}>
                      {exp.company} | {exp.duration}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      position: 'absolute',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '16px',
                      height: '16px',
                      bgcolor: 'blue.500',
                      borderRadius: '50%',
                      zIndex: 1,
                    }}
                  />
                  <Box
                    sx={{
                      width: { xs: '100%', md: '50%' },
                      pl: { md: 8 },
                      textAlign: { xs: 'center', md: 'left' },
                      order: { xs: 3, md: 2 },
                    }}
                  >
                    <Box
                      sx={{
                        bgcolor: '',
                        p: 4,
                        borderRadius: '12px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                      }}
                    >
                      <Typography variant="body2" sx={{ color: 'gray.700' }}>
                        {exp.description}
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </section>

          {/* Call to Action */}
          <Box sx={{ textAlign: 'center', mt: 12 }}>
            <Button
              component={RouterLink}
              to="/contact"
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
              component={motion.div}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let’s Work Together
            </Button>
          </Box>
        </motion.div>
      </Container>
    </main>
  );
}

export default SkillsAndExperience;