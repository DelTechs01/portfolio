import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  // Updated menu items with Education
  const menuItems = ['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact', 'Resume'];

  // Animation variants for drawer
  const drawerVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  // Animation for buttons
  const buttonVariants = {
    hover: { scale: 1.05, color: '#1E90FF' },
    tap: { scale: 0.95 },
  };

  return (
    <>
      {/* Enhanced Fixed Navbar */}
      <AppBar
        position="fixed"
        sx={{
          bgcolor: 'gray.900',
          background: 'linear-gradient(to right, #111827, #1E3A8A)',
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)', // Deeper shadow for depth
          zIndex: 1300,
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)', // Subtle border
        }}
      >
        <Toolbar sx={{ minHeight: { xs: 56, sm: 64 }, px: { xs: 2, md: 4 } }}>
          {/* Logo/Name with Animation */}
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              color: '#1E90FF',
              fontSize: { xs: '1.25rem', sm: '1.75rem' },
              fontWeight: 'bold',
              letterSpacing: '0.5px',
            }}
            component={RouterLink}
            to="/"
            style={{ textDecoration: 'none' }}
          >
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Kweyu Delron Muyale
            </motion.span>
          </Typography>

          {/* Hamburger Menu for Small Screens */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' },
            }}
          >
            <MenuIcon sx={{ fontSize: '2rem' }} />
          </IconButton>

          {/* Enhanced Horizontal Menu for Larger Screens */}
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              gap: { sm: 1.5, md: 3 },
              alignItems: 'center',
            }}
          >
            {menuItems.map((item) => (
              <motion.div
                key={item}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Button
                  color="inherit"
                  component={RouterLink}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                  sx={{
                    color: 'white',
                    fontSize: { sm: '0.9rem', md: '1rem' },
                    px: { sm: 2, md: 2.5 },
                    py: 1,
                    textTransform: 'none',
                    borderRadius: '8px',
                    fontWeight: 'medium',
                    letterSpacing: '0.5px',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                      color: '#1E90FF',
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '0%',
                      height: '2px',
                      bgcolor: '#1E90FF',
                      transition: 'width 0.3s ease-in-out',
                    },
                    '&:hover::after': {
                      width: '100%',
                    },
                  }}
                >
                  {item}
                </Button>
              </motion.div>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Spacer to prevent content overlap */}
      <Box sx={{ height: { xs: 56, sm: 64 } }} />

      {/* Enhanced Drawer for Small Screens */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            bgcolor: 'gray.900',
            background: 'linear-gradient(to bottom, #111827, #1E3A8A)', // Gradient for drawer
            color: 'white',
            width: { xs: '60vw', sm: '40vw' },
            maxWidth: 250,
            borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
          },
        }}
      >
        <motion.div
          variants={drawerVariants}
          initial="hidden"
          animate={drawerOpen ? 'visible' : 'hidden'}
        >
          <List sx={{ pt: 4, px: 2 }}>
            {menuItems.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton
                  component={RouterLink}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                  onClick={toggleDrawer(false)}
                  sx={{
                    py: 2,
                    px: 3,
                    borderRadius: '8px',
                    my: 0.5,
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                      color: '#1E90FF',
                      transform: 'translateX(5px)',
                      transition: 'all 0.3s ease',
                    },
                  }}
                >
                  <ListItemText
                    primary={item}
                    primaryTypographyProps={{
                      fontSize: { xs: '1.1rem', sm: '1.2rem' },
                      fontWeight: 'medium',
                      letterSpacing: '0.5px',
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </motion.div>
      </Drawer>
    </>
  );
}

export default Navbar;