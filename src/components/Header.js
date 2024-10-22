import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/logos/MUSTO LOGO-05.png"; // Logo
import bellIcon from "../assets/icons/bell.svg";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  // Media queries for hiding/showing elements based on screen width
  const isTabletOrMobile = useMediaQuery("(max-width: 765px)");

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ margin: 0, backgroundColor: "#6f1d1b" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box
          sx={{ alignItems: "center", display: "flex", flexDirection: "row" }}
        >
          {/* Wrap the logo in a Link component to navigate to the homepage */}
          <Link to="/" style={{ textDecoration: "none" }}>
            <img
              src={logo}
              alt="Logo"
              style={{ maxWidth: "120px", height: "auto", marginRight: "16px" }}
            />
          </Link>

          {/* Wrap the Typography (Musto Gıda) in a Link to navigate to the homepage */}
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                color: "#ffe6a7", // Light Cream
                fontFamily: "Poppins, sans-serif", // Creative and elegant font
                fontWeight: "700", // Bold weight
                letterSpacing: "0.1em", // Slight letter spacing for a modern look
              }}
            >
              Musto Gıda
            </Typography>
          </Link>
        </Box>

        {/* Desktop Menu, only shown on screens wider than 900px */}
        {!isTabletOrMobile && (
          <div className="desktop-menu">
            <Button
              component={Link}
              to="/"
              color="inherit"
              sx={{
                "&:hover": { backgroundColor: "#bb9457" }, // Beige
                fontFamily: "Poppins, sans-serif", // Consistent font style
                fontWeight: "600", // Semi-bold for better emphasis
                textTransform: "uppercase", // Capital letters for a creative look
              }}
            >
              ANASAYFA
            </Button>
            <Button
              component={Link}
              to="/about"
              color="inherit"
              sx={{
                "&:hover": { backgroundColor: "#bb9457" },
                fontFamily: "Poppins, sans-serif",
                fontWeight: "600",
                textTransform: "uppercase",
              }}
            >
              HAKKIMIZDA
            </Button>
            <Button
              component={Link}
              to="/products"
              color="inherit"
              sx={{
                "&:hover": { backgroundColor: "#bb9457" },
                fontFamily: "Poppins, sans-serif",
                fontWeight: "600",
                textTransform: "uppercase",
              }}
            >
              ÜRÜNLERİMİZ
            </Button>
            <Button
              component={Link}
              to="/communicate"
              color="inherit"
              sx={{
                "&:hover": { backgroundColor: "#bb9457" },
                fontFamily: "Poppins, sans-serif",
                fontWeight: "600",
                textTransform: "uppercase",
              }}
            >
              İLETİŞİM
            </Button>
          </div>
        )}

        {/* Bell Icon for Tablet and Mobile */}
        {isTabletOrMobile && (
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleMenu}
          >
            <img
              src={bellIcon}
              alt="Bell Icon"
              style={{ width: "24px", height: "24px" }}
            />{" "}
            {/* Bell icon */}
          </IconButton>
        )}

        {/* Mobile/Tablet Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              backgroundColor: "#6f1d1b", // Dark Red
              "& .MuiMenuItem-root": {
                color: "#ffe6a7", // Light Cream
                padding: "12px 24px", // Adjust padding as needed
                "&:hover": {
                  backgroundColor: "#bb9457", // Beige
                },
                fontFamily: "Poppins, sans-serif",
                fontWeight: "500", // Slightly bold for mobile menu
                textTransform: "uppercase",
              },
            },
          }}
        >
          <MenuItem onClick={handleClose} component={Link} to="/">
            ANASAYFA
          </MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/about">
            HAKKIMIZDA
          </MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/products">
            ÜRÜNLERİMİZ
          </MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/communicate">
            İLETİŞİM
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
