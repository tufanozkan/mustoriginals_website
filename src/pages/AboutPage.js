import React from "react";
import { Box, Typography } from "@mui/material";
import { keyframes } from "@mui/system";
import image from "../assets/production.jpg";

// Yavaşça yukarıdan aşağı inen animasyon
const slideDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
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
        minHeight: "80vh",
        maxHeight: "auto",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Main content area */}
      <Box sx={{ flex: 1 }}>
        <Box
          sx={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(187, 148, 87, 0.8)",
            margin: { xs: 3, md: 8 },
            padding: { xs: 3, md: 5 },
            borderRadius: 2,
            animation: `${slideDown} 1s ease-in-out`,
            animationFillMode: "forwards",
          }}
        >
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              color: "#432818",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: { xs: "1.5rem", md: "2rem" },
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
              fontSize: { xs: "0.9rem", md: "1.1rem" },
            }}
          >
            Musto Gıda şirketi olarak, kalite anlayışımızın köklerinin ailemize
            dayandığını ve bu anlayışın iş hayatımıza ve topluma yayıldığını
            belirtmek isteriz. Kaliteli tedarikçilerimizle, özenle seçilmiş
            malzemelerimizle ve memnuniyet odaklı tüketicilerimizle bir araya
            gelerek büyük bir aile oluşturuyoruz. İçimizdeki "biz" anlayışı, bu
            kalite bilincinin temel taşıdır ve biz, bu bilinçle hareket
            ediyoruz. Müşterilerimize sunmuş olduğumuz lezzetler, yalnızca damak
            tadını değil, aynı zamanda toplumsal bir sorumluluğu da yansıtır.
            Her lokmamızda, ailemizin sıcaklığını ve kalitemizi hissetmenizi
            sağlamak için buradayız.
          </Typography>

          <Typography
            variant="h3"
            gutterBottom
            sx={{
              color: "#432818",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: { xs: "1.5rem", md: "2rem" },
            }}
          >
            Misyonumuz
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: 600,
              lineHeight: 1.6,
              textAlign: "center",
              color: "#432818",
              fontSize: { xs: "0.9rem", md: "1.1rem" },
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
      </Box>
    </Box>
  );
};

export default AboutPage;
