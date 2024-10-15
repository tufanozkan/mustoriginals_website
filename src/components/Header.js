import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Button, Menu, MenuItem, Hidden } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/MUSTO LOGO-05.png"; // Logo
import bellIcon from '../assets/bell.svg';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#6f1d1b' }}> {/* Dark Red */}
      <Toolbar>
        <img 
          src={logo}
          alt="Logo"
          style={{ maxWidth: '120px', height: 'auto', marginRight: '16px' }} 
        />
        
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#ffe6a7' }}> {/* Light Cream */}
          Musto Originals
        </Typography>
        
        {/* Desktop Menu */}
        <Hidden smDown>
          <div className="desktop-menu">
            <Button component={Link} to="/" color="inherit" sx={{ "&:hover": { backgroundColor: '#bb9457' } }}> {/* Beige */}
              Anasayfa
            </Button>
            <Button component={Link} to="/about" color="inherit" sx={{ "&:hover": { backgroundColor: '#bb9457' } }}>
              Hakkımızda
            </Button>
            <Button component={Link} to="/products" color="inherit" sx={{ "&:hover": { backgroundColor: '#bb9457' } }}>
              Ürünlerimiz
            </Button>
            <Button component={Link} to="/communicate" color="inherit" sx={{ "&:hover": { backgroundColor: '#bb9457' } }}>
              İletişim
            </Button>
          </div>
        </Hidden>

        {/* Toast Icon Instead of Hamburger Menu on Mobile */}
        <Hidden mdUp>
  <IconButton
    edge="end"
    color="inherit"
    aria-label="menu"
    onClick={handleMenu}
  >
    <img src={bellIcon} alt="Bell Icon" style={{ width: '24px', height: '24px' }} /> {/* Bell icon */}
  </IconButton>
</Hidden>
        
        {/* Mobile Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              backgroundColor: '#6f1d1b', // Dark Red
              '& .MuiMenuItem-root': {
                color: '#ffe6a7', // Light Cream
                padding: '12px 24px', // Adjust padding as needed
                '&:hover': {
                  backgroundColor: '#bb9457', // Beige
                },
                '&::before': {
                  display: 'none', // Remove the before pseudo-element to hide the divider
                },
                '&::after': {
                  display: 'none', // Remove the after pseudo-element to hide the divider
                },
              },
            },
          }}
        >
          <MenuItem onClick={handleClose} component={Link} to="/" >
            Anasayfa
          </MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/about" >
            Hakkımızda
          </MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/products" >
            Ürünlerimiz
          </MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/communicate" >
            İletişim
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;