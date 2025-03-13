import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact', 'Download Resume'];

  return (
    <>
      <AppBar position="fixed" sx={{ bgcolor: 'gray.900' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, color: 'cyan.400' }}>
            Kweyu Delron Muyale
          </Typography>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <div sx={{ display: { xs: 'none', md: 'block' } }}>
            {menuItems.map((item) => (
              <Button
                key={item}
                color="inherit"
                component={Link}
                to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                sx={{ '&:hover': { color: 'cyan.300' } }}
              >
                {item}
              </Button>
            ))}
          </div>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item}
              component={Link}
              to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
              onClick={toggleDrawer(false)}
            >
              <ListItemText primary={item} />
            </ListItem>
          ))}
          {/* Download Resume Button */}
          <ListItem
            button
            component="a"
            href="/path-to-your-resume.pdf" // Replace with your actual resume path
            download="Your_Name_Resume.pdf" // The name the file will be saved as
            onClick={toggleDrawer(false)}
          >
            <ListItemText primary="Download Resume" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}

export default Navbar;
