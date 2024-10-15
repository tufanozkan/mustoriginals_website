import React from 'react';
import { Container, Typography, Button, Grid, Box } from '@mui/material';
import { Link } from "react-router-dom";
import { styled } from '@mui/system';
import image1 from '../assets/ayvalikTostu.jpg';
import image2 from '../assets/kumru.jpg';
import sandwichIcon from '../assets/sandwich.svg';
import truckIcon from '../assets/truck.svg';
import tableIcon from '../assets/table.svg';
import walletIcon from '../assets/wallet.svg';

const HeroSection = styled(Box)(({ theme }) => ({
    position: 'relative',
    backgroundColor: '#6F1D1B',
    height: '65vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: theme.spacing(4),
    overflow: 'hidden',
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '50%',
      height: '100%',
      backgroundImage: `url(${image1})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      animation: 'slideLeft 5s forwards', // Set to 5 seconds and forwards
      zIndex: 0,
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      top: 0,
      right: 0,
      width: '50%',
      height: '100%',
      backgroundImage: `url(${image2})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      animation: 'slideRight 5s forwards', // Set to 5 seconds and forwards
      zIndex: 0,
    },
    '& h1, & p, & button': {
      position: 'relative',
      zIndex: 1,
    },
    '@keyframes slideLeft': {
      '0%': {
        transform: 'translateX(-100%)',
      },
      '100%': {
        transform: 'translateX(0)',
      },
    },
    '@keyframes slideRight': {
      '0%': {
        transform: 'translateX(100%)',
      },
      '100%': {
        transform: 'translateX(0)',
      },
    },
  }));

const FeatureItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column', // Make it column for mobile
  backgroundColor: '#bb9457',
  borderRadius: '8px',
  padding: theme.spacing(3),
  margin: theme.spacing(1),
  color: '#ffffff',
  transition: 'transform 0.3s, background-color 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
    backgroundColor: '#a88b4d',
  },
}));

const FeatureIcon = styled('img')({
  width: '60px',
  height: '60px',
  marginBottom: '16px', // Move icon below text on mobile
});

const Footer = styled(Box)(({ theme }) => ({
  backgroundColor: '#432818',
  color: '#ffffff',
  textAlign: 'center',
  padding: theme.spacing(2),
}));

const HomePage = () => {
  return (
    <div>
      <HeroSection>
        <Container>
          <Typography variant="h2" component="h1">
            Güçlü Lezzetlerle Tanışın
          </Typography>
          <Typography variant="h6" component="p" sx={{ mb: 4 }}>
            Doğal ve taze içeriklerle hazırlanmış sandviçler.
          </Typography>
          <Button
            variant="contained"
            component={Link}
            to="/products"
            sx={{ zIndex: 2, backgroundColor: '#ffe6a7', color: '#6f1d1b' }}
          >
            Keşfet
          </Button>
        </Container>
      </HeroSection>

      <Container sx={{ py: 4 }}>
        <Typography variant="h4" component="h2" textAlign="center" sx={{ mb: 4 }}>
          Nasıl Üretiyoruz?
        </Typography>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={12} md={6}>
            <FeatureItem>
              <FeatureIcon src={sandwichIcon} alt="Sandwich Icon" />
              <Typography variant="h5">Özenle Seçilmiş Malzemeler</Typography>
              <Typography>Tüm ürünlerimiz, yüksek kaliteli ve lezzetli doğal malzemelerle özenle üretilmiştir. Sağlıklı ve lezzetli seçenekleri sizlere sunmaktan büyük mutluluk duyuyoruz.</Typography>
            </FeatureItem>
          </Grid>
          <Grid item xs={12} md={6}>
            <FeatureItem>
              <FeatureIcon src={walletIcon} alt="Wallet Icon" />
              <Typography variant="h5">Güvenli Ödeme</Typography>
              <Typography>Ürünlerimizin satın alımlarında güvenliğiniz bizim için en öncelikli konudur. Tüm ödeme işlemleriniz, 256 bit SSL şifreleme ile korunmaktadır.</Typography>
            </FeatureItem>
          </Grid>
          <Grid item xs={12} md={6}>
            <FeatureItem>
              <FeatureIcon src={truckIcon} alt="Truck Icon" />
              <Typography variant="h5">Soğuk Zincir</Typography>
              <Typography>Ürünlerimizin tazeliğini korumak için en gelişmiş soğuk zincir teknolojisi ile en ideal koşullarda sizlere ulaştırıyoruz.</Typography>
            </FeatureItem>
          </Grid>
          <Grid item xs={12} md={6}>
            <FeatureItem>
              <FeatureIcon src={tableIcon} alt="Table Icon" />
              <Typography variant="h5">Profesyonel Mutfak Kalitesi</Typography>
              <Typography>Ürünlerimiz, profesyonel mutfak standartlarında üretilir ve en yüksek kaliteyi evinize getirir. Her lokmada kalite ve lezzeti hissedin.</Typography>
            </FeatureItem>
          </Grid>
        </Grid>
      </Container>

      <Footer>
        <Typography variant="body1">&copy; 2024 Musto Originals. Tüm hakları saklıdır.</Typography>
        <Box sx={{ mt: 2 }}>
          <a href="#" style={{ color: '#ffffff', margin: '0 10px' }}>Facebook</a>
          <a href="#" style={{ color: '#ffffff', margin: '0 10px' }}>Instagram</a>
          <a href="#" style={{ color: '#ffffff', margin: '0 10px' }}>Twitter</a>
        </Box>
      </Footer>
    </div>
  );
};

export default HomePage;