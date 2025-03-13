import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom'; // Renamed to avoid confusion
import { motion } from 'framer-motion'; // For animations

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  // Menu items
  const menuItems = ['Home', 'About', 'Skills', 'Projects', 'Contact', 'Resume'];

  // Animation variants for drawer
  const drawerVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <>
      {/* Fixed Navbar */}
      <AppBar
        position="fixed"
        sx={{
          bgcolor: 'gray.900',
          background: 'linear-gradient(to right, #111827, #1E3A8A)',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
          zIndex: 1300,
        }}
      >
        <Toolbar sx={{ minHeight: { xs: 56, sm: 64 } }}>
          {/* Logo/Name */}
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              color: '#1E90FF',
              fontSize: { xs: '1.25rem', sm: '1.5rem' },
              fontWeight: 'bold',
            }}
            component={RouterLink}
            to="/"
            style={{ textDecoration: 'none' }}
          >
            Kweyu Delron Muyale
          </Typography>

          {/* Hamburger Menu for Small Screens */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: 'block', sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Horizontal Menu for Larger Screens */}
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              gap: { sm: 1, md: 2 },
            }}
          >
            {menuItems.map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  color="inherit"
                  component={RouterLink}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                  sx={{
                    color: 'white',
                    fontSize: { sm: '0.9rem', md: '1rem' },
                    px: { sm: 1.5, md: 2 },
                    py: 1,
                    textTransform: 'none',
                    '&:hover': {
                      color: '#1E90FF',
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
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

      {/* Drawer for Small Screens */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            bgcolor: 'gray.900',
            color: 'blue',
            width: { xs: '40vw', sm: '50vw', md: '40vw' },
            maxWidth: 200,
          },
        }}
      >
        <motion.div
          variants={drawerVariants}
          initial="hidden"
          animate={drawerOpen ? 'visible' : 'hidden'}
        >
          <List sx={{ pt: 2 }}>
            {menuItems.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton
                  component={RouterLink}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                  onClick={toggleDrawer(false)}
                  sx={{
                    py: 1.5,
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                      color: '#1E90FF',
                    },
                  }}
                >
                  <ListItemText
                    primary={item}
                    primaryTypographyProps={{ fontSize: { xs: '1rem', sm: '1.125rem' } }}
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