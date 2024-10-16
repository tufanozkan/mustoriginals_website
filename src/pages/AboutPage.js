import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { keyframes } from "@mui/system";
import Footer from "../components/Footer";
import image from "../assets/fabric.jpg";

// Animation definition
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const AboutPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "86vh", // Make sure it takes full height
        maxHeight: "auto",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Main content area */}
      <Box sx={{ flex: 1 }}>
        {/* Hakkımızda Bölümü */}
        <Box
          sx={{
            backgroundColor: "rgba(187, 148, 87, 0.8)",
            margin: { xs: 2, md: 8 }, // Responsive margin
            padding: { xs: 2, md: 4 }, // Responsive padding
            borderRadius: 2,
            animation: `${fadeIn} 1s ease-in-out`,
          }}
        >
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              color: "#432818",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" }, // Responsive font size
            }}
          >
            Hakkımızda
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginBottom: 4,
              fontWeight: 600,
              lineHeight: 1.6,
              textAlign: "center",
              color: "#432818",
              fontSize: { xs: "0.9rem", md: "1rem" }, // Responsive font size
            }}
          >
            Musto Originals şirketi olarak, kalite anlayışımızın köklerinin
            ailemize dayandığını ve bu anlayışın iş hayatımıza ve topluma
            yayıldığını belirtmek isteriz. Kaliteli tedarikçilerimizle, özenle
            seçilmiş malzemelerimizle ve memnuniyet odaklı tüketicilerimizle bir
            araya gelerek büyük bir aile oluşturuyoruz. İçimizdeki "biz"
            anlayışı, bu kalite bilincinin temel taşıdır ve biz, bu bilinçle
            hareket ediyoruz. Müşterilerimize sunmuş olduğumuz lezzetler,
            yalnızca damak tadını değil, aynı zamanda toplumsal bir sorumluluğu
            da yansıtır. Her lokmamızda, ailemizin sıcaklığını ve kalitemizi
            hissetmenizi sağlamak için buradayız.
          </Typography>

          <Typography
            variant="h4"
            sx={{
              color: "#432818",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: 2,
              fontSize: { xs: "1.5rem", md: "2rem" }, // Responsive font size
            }}
          >
            Misyonumuz
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#432818",
              fontWeight: 600,
              marginBottom: 3,
              textAlign: "center",
              lineHeight: 1.6,
              fontSize: { xs: "0.9rem", md: "1rem" }, // Responsive font size
            }}
          >
            Müşterilerimize en iyi tost deneyimini sunarak her lokmada mutluluk
            yaratmayı hedefliyoruz. Bizim için tost, yalnızca bir yiyecek değil,
            aynı zamanda bir keyif ve paylaşım anıdır. Bu nedenle, kaliteli
            malzemeleri titizlikle seçiyor ve ustaca bir araya getirerek
            sağlıklı, lezzetli ve doyurucu ürünler sunmaktayız. Müşteri
            memnuniyetini ön planda tutarak, her zaman yenilikçi tarifler
            geliştirmeye ve lezzet anlayışımızı sürekli olarak genişletmeye
            kararlıyız.
          </Typography>
        </Box>

        {/* Misyonumuz Bölümü
        <Container
          sx={{
            textAlign: "center",
            marginTop: { xs: 2, md: 4 },
            marginBottom: 8,
          }}
        >
          <Box
            sx={{
              backgroundColor: "rgba(187, 148, 87, 0.8)",
              borderRadius: 2,
              padding: { xs: 2, md: 4 }, // Responsive padding
              animation: `${fadeIn} 1.5s ease-in-out`,
            }}
          >
            
          </Box>
        </Container> */}
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default AboutPage;
