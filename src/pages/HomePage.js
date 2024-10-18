import React from "react";
import { Container, Typography, Button, Grid, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import image1 from "../assets/toasts/kasarli.jpg";
import sandwichIcon from "../assets/icons/sandwich.svg";
import truckIcon from "../assets/icons/truck.svg";
import tableIcon from "../assets/icons/table.svg";
import walletIcon from "../assets/icons/wallet.svg";

const HeroSection = styled(Box)(({ theme }) => ({
  position: "relative",
  backgroundColor: "#6F1D1B",
  height: "65vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(4),
  overflow: "hidden",
  "&:before": {
    content: '""',
    position: "absolute",
    top: 0,
    right: 0,
    width: "50%",
    height: "100%",
    backgroundImage: `url(${image1})`,
    borderLeft: "4px solid #ffe6a7",
    borderTop: "4px solid #ffe6a7",
    backgroundSize: "cover",
    backgroundPosition: "center",
    zIndex: 0,
    animation: "slideInImage 2.1s ease-out forwards", // Animation for the image
    transform: "translateX(100%)", // Start off-screen to the right
    opacity: 0, // Initially hidden
  },
  "& h1, & button": {
    position: "relative",
    zIndex: 1,
    opacity: 0, // Initially hidden
    animation: "slideIn 2.1s ease-out forwards",
  },
  "& h1": {
    color: "#fff",
    fontFamily: "'Playfair Display', serif",
    fontWeight: "700",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    fontSize: { xs: "2rem", sm: "3rem", md: "4rem", lg: "5rem" },
    marginBottom: theme.spacing(3),
  },
  "@keyframes slideIn": {
    from: {
      transform: "translateX(-100%)",
      opacity: 0,
    },
    to: {
      transform: "translateX(0)",
      opacity: 1,
    },
  },
  "@keyframes slideInImage": {
    from: {
      transform: "translateX(100%)", // Start off-screen to the right
      opacity: 0,
    },
    to: {
      transform: "translateX(0)", // End at the original position
      opacity: 1,
    },
  },
}));

const FeatureItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  backgroundColor: "#bb9457",
  borderRadius: "8px",
  padding: theme.spacing(3),
  margin: theme.spacing(1),
  color: "#ffffff",
  transition: "transform 0.3s, background-color 0.3s",
  textAlign: "center",
  "&:hover": {
    transform: "scale(1.05)",
    backgroundColor: "#a88b4d",
  },
}));

const FeatureIcon = styled("img")({
  width: "60px",
  height: "60px",
  marginBottom: "16px",
});

const HomePage = () => {
  return (
    <div>
      <HeroSection>
        <Box sx={{ width: "50%", zIndex: 1, textAlign: "left" }}>
          {/* Sol tarafa içerik */}
          <Typography variant="h2" component="h1">
            Güçlü Lezzetlerle Tanışın
          </Typography>
          <Button
            variant="contained"
            component={Link}
            to="/products"
            sx={{
              marginTop: 3,
              cursor: "pointer",
              padding: "10px 24px",
              fontSize: "18px",
              color: "#6f1d1b",
              border: "2px solid #6f1d1b",
              borderRadius: "34px",
              backgroundColor: "#ffe6a7",
              fontWeight: 600,
              transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
              overflow: "hidden",
              position: "relative", // Ensure position is relative for animation
              zIndex: 2,
              opacity: 0, // Initially hidden
              animation: "slideIn 2.1s ease-out forwards", // Same animation
              "&::before": {
                content: '""',
                position: "absolute",
                inset: 0,
                margin: "auto",
                width: "50px",
                height: "50px",
                borderRadius: "inherit",
                scale: 0,
                zIndex: -1,
                backgroundColor: "#6f1d1b",
                transition: "all 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
              },
              "&:hover::before": {
                scale: 3,
              },
              "&:hover": {
                color: "#ffe6a7",
                transform: "scale(1.1)",
                boxShadow: "0 0px 20px #6f1d1b",
              },
              "&:active": {
                transform: "scale(1)",
              },
            }}
          >
            Keşfet
          </Button>
        </Box>
      </HeroSection>
      <Container sx={{ py: 4 }}>
        <Typography
          variant="h4"
          component="h2"
          textAlign="center"
          sx={{
            mb: 4,
            fontFamily: "'Roboto', sans-serif",
            fontWeight: "600",
            letterSpacing: "0.05em",
            color: "#6f1d1b",
            cursor: "default",
          }}
        >
          Nasıl Üretiyoruz?
        </Typography>
        <Grid container justifyContent="center" spacing={2}>
          {[
            {
              icon: sandwichIcon,
              title: "Özenle Seçilmiş Malzemeler",
              description:
                "Tüm ürünlerimiz, yüksek kaliteli ve lezzetli doğal malzemelerle özenle üretilmiştir. Sağlıklı ve lezzetli seçenekleri sizlere sunmaktan büyük mutluluk duyuyoruz.",
            },
            {
              icon: walletIcon,
              title: "Güvenli Ödeme",
              description:
                "Ürünlerimizin satın alımlarında güvenliğiniz bizim için en öncelikli konudur. Tüm ödeme işlemleriniz, 256 bit SSL şifreleme ile korunmaktadır.",
            },
            {
              icon: truckIcon,
              title: "Soğuk Zincir",
              description:
                "Ürünlerimizin tazeliğini korumak için en gelişmiş soğuk zincir teknolojisi ile en ideal koşullarda sizlere ulaştırıyoruz.",
            },
            {
              icon: tableIcon,
              title: "Profesyonel Mutfak Kalitesi",
              description:
                "Ürünlerimiz, profesyonel mutfak standartlarında üretilir ve en yüksek kaliteyi evinize getirir. Her lokmada kalite ve lezzeti hissedin.",
            },
          ].map((feature, index) => (
            <Grid item xs={12} md={6} key={index}>
              <FeatureItem>
                <FeatureIcon src={feature.icon} alt={`${feature.title} Icon`} />
                <Typography
                  variant="h5"
                  sx={{
                    cursor: "default",
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: "800",
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "1rem",
                    textAlign: "center",
                    cursor: "default",
                    marginTop: 1,
                  }}
                >
                  {feature.description}
                </Typography>
              </FeatureItem>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default HomePage;
