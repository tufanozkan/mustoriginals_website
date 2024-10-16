import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import { Phone, Email, LocationOn } from "@mui/icons-material";
import Map from "../components/Map"; // Google Maps component
import Footer from "../components/Footer";
import { useMediaQuery } from "@mui/material"; // Import useMediaQuery

const CommunicatePage = () => {
  // Media query to check if screen width is less than 1025px
  const isMobileOrTablet = useMediaQuery("(max-width: 1025px)");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#ffe6a7",
        minHeight: "86vh", // Make sure it takes full height
        maxHeight: "auto",
      }}
    >
      {/* You can add a header component here if you have one */}
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: { xs: 2 },
        }}
      >
        <Grid
          container
          spacing={4}
          direction={isMobileOrTablet ? "column" : "row"}
          sx={{ maxWidth: 1200, flexGrow: 1 }}
        >
          {/* Responsive Grid Layout */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={6}
              sx={{ padding: { xs: 3, sm: 4 }, borderRadius: 2 }}
            >
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  color: "#432818",
                  fontSize: { xs: "1.5rem", md: "2rem" },
                  fontFamily: "'Poppins', sans-serif", // Example Google Font
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)", // Subtle shadow for depth
                }}
              >
                BİZE ULAŞIN
              </Typography>
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  color: "#bb9457",
                  fontSize: { xs: "1.2rem", md: "1.5rem" },
                  fontFamily: "'Poppins', sans-serif", // Example Google Font
                  letterSpacing: 1,
                  textTransform: "capitalize",
                }}
              >
                İletişim Bilgilerimiz
              </Typography>
              {/* Contact Information Boxes */}
              {[
                {
                  icon: <LocationOn sx={{ mr: 1, color: "#6f1d1b" }} />,
                  text: "Girne Mahallesi 6018 Nolu Sokak No:23 Kahta/Adıyaman",
                },
                {
                  icon: <Phone sx={{ mr: 1, color: "#6f1d1b" }} />,
                  text: "+90 553 134 15 55",
                },
                {
                  icon: <Email sx={{ mr: 1, color: "#6f1d1b" }} />,
                  text: "info@musto.com",
                },
              ].map((contact, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 2,
                    backgroundColor: "#ffffff",
                    borderRadius: 1,
                    padding: 2,
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Add shadow for depth
                  }}
                >
                  {contact.icon}
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#432818",
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    {contact.text}
                  </Typography>
                </Box>
              ))}
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={6}
              sx={{ padding: { xs: 3, sm: 4 }, borderRadius: 2 }}
            >
              <Map />
            </Paper>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
};

export default CommunicatePage;
