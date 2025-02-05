/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  IconButton,
  Card,
  CardMedia,
  CardContent,
  Menu,
  Dialog,
  DialogTitle,
  DialogContent,
  Fade,
  MenuItem,
} from "@mui/material";
import { styled } from "@mui/system";
import FilterListIcon from "@mui/icons-material/FilterList";
import InfoIcon from "@mui/icons-material/Info";
import musto from "../assets/toasts/musto.jpg";
import kasarli from "../assets/toasts/kasarli.jpg";
import sucuklu from "../assets/toasts/sucuklu.jpg";
import ayvalik from "../assets/toasts/ayvalik.jpg";
import hamburger from "../assets/toasts/hamburger.jpg";
import kumru from "../assets/toasts/kumru.jpg";
import bpSandwich from "../assets/toasts/bpSandwich.jpg";
import ksSandwich from "../assets/toasts/ksSandwich.jpg";

// Card styles
const ProductCard = styled(Card)(({ theme }) => ({
  borderRadius: "12px",
  overflow: "hidden",
  backgroundColor: "#FFE6A7",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

// Image styles
const ProductImage = styled(CardMedia)(({ theme }) => ({
  transition: "transform 0.3s ease-in-out",
  "@media (min-width: 768px)": {
    "&:hover": {
      transform: "scale(1.7)",
    },
  },
}));

// Title styles
const ProductTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 600,
  textAlign: "center",
  color: "#6F1D1B",
}));

// Styled Dialog components
const StyledDialog = styled(Dialog)(({ theme }) => ({
  textAlign: "center",
  "& .MuiDialogTitle-root": {
    backgroundColor: "#FFE6A7",
    color: "#6F1D1B",
    fontWeight: 400,
    fontFamily: "'Poppins', sans-serif",
  },
  "& .MuiDialogContent-root": {
    fontWeight: 900,
    backgroundColor: "#FFF9E6",
  },
}));

const allProducts = [
  { id: 1, name: "Musto Tost", image: musto, category: "tost" },
  { id: 2, name: "Kumru", image: kumru, category: "sandwich" },
  { id: 3, name: "Ayvalık Tostu", image: ayvalik, category: "tost" },
  {
    id: 4,
    name: "Beyaz Peynirli Sandwich",
    image: bpSandwich,
    category: "sandwich",
  },
  { id: 5, name: "Kaşarlı Tost", image: kasarli, category: "tost" },
  { id: 6, name: "Hamburger", image: hamburger, category: "sandwich" },
  {
    id: 7,
    name: "Kaşarlı Salamlı Sandwich",
    image: ksSandwich,
    category: "sandwich",
  },
  { id: 8, name: "Sucuklu Tost", image: sucuklu, category: "tost" },
];

// Nutrition data
const nutritionFacts = [
  {
    id: 1,
    name: "Musto Tost",
    nutrition: {
      Enerji: "289.7 kcal / 1218.6 kJ",
      Yağ: "12.2 g",
      DoymuşYağ: "4.6 g",
      Karbonhidrat: "34.1 g",
      Protein: "11.5 g",
      Tuz: "0.9 g",
    },
  },
  {
    id: 2,
    name: "Kumru",
    nutrition: {
      Enerji: "279.8 kcal / 1176.3 kJ",
      Yağ: "11.72 g",
      DoymuşYağ: "3.9 g",
      Karbonhidrat: "32.7 g",
      Protein: "10.8 g",
      Tuz: "1.0 g",
    },
  },
  {
    id: 3,
    name: "Ayvalık Tostu",
    nutrition: {
      Enerji: "289.7 kcal / 1218.6 kJ",
      Yağ: "12.2 g",
      DoymuşYağ: "4.6 g",
      Karbonhidrat: "34.1 g",
      Protein: "11.5 g",
      Tuz: "0.9 g",
    },
  },
  {
    id: 4,
    name: "Beyaz Peynirli Sandwich",
    nutrition: {
      Enerji: "289.7 kcal / 1218.6 kJ",
      Yağ: "12.2 g",
      DoymuşYağ: "4.6 g",
      Karbonhidrat: "34.1 g",
      Protein: "11.5 g",
      Tuz: "0.9 g",
    },
  },
  {
    id: 5,
    name: "Kaşarlı Tost",
    nutrition: {
      Enerji: "282 kcal / 1189 kJ",
      Yağ: "8.3 g",
      DoymuşYağ: "4.4 g",
      Karbonhidrat: "37.8 g",
      Protein: "13 g",
      Tuz: "1.0 g",
    },
  },
  {
    id: 6,
    name: "Hamburger",
    nutrition: {
      Enerji: "210.8 kcal / 878.7 kJ",
      Yağ: "7.4 g",
      DoymuşYağ: "2.2 g",
      Karbonhidrat: "26.1 g",
      Protein: "8.9 g",
      Tuz: "0.8 g",
    },
  },
  {
    id: 7,
    name: "Kaşarlı Salamlı Sandwich",
    nutrition: {
      Enerji: "234.8 kcal / 989.4 kJ",
      Yağ: "6.7 g",
      DoymuşYağ: "3.1 g",
      Karbonhidrat: "32.2 g",
      Protein: "9.9 g",
      Tuz: "0.9 g",
    },
  },
  {
    id: 8,
    name: "Sucuklu Tost",
    nutrition: {
      Enerji: "267.2 kcal / 1123.2 kJ",
      Yağ: "9.0 g",
      DoymuşYağ: "4.7 g",
      Karbonhidrat: "37.5 g",
      Protein: "10.9 g",
      Tuz: "0.9 g",
    },
  },
];

const ProductsPage = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [category, setCategory] = useState("all");
  const [nutritionOpen, setNutritionOpen] = useState(false);
  const [selectedNutrition, setSelectedNutrition] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (selectedCategory) => {
    setAnchorEl(null);
    if (selectedCategory) {
      setCategory(selectedCategory);
    }
  };

  const handleNutritionOpen = (productName) => {
    const productNutrition = nutritionFacts.find(
      (item) => item.name === productName
    );
    setSelectedNutrition(productNutrition);
    setNutritionOpen(true);
  };

  const handleNutritionClose = () => {
    setIsClosing(true); // Kapanma işlemini başlat
    setTimeout(() => {
      setNutritionOpen(false); // Dialog tamamen kapatılıyor
      setSelectedNutrition(null);
      setIsClosing(false); // Kapanma durumu sıfırlanıyor
    }, 100); // Geçiş süresiyle aynı olacak şekilde ayarlanıyor
  };

  const filteredProducts =
    category === "all"
      ? allProducts
      : allProducts.filter((product) => product.category === category);

  return (
    <div>
      <Container sx={{ cursor: "default", py: 4 }}>
        {/* Filter Button */}
        <Grid container justifyContent="center" sx={{ mb: 2 }}>
          <IconButton onClick={handleClick}>
            <FilterListIcon fontSize="large" />
          </IconButton>
        </Grid>

        {/* Filter Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => handleClose(null)}
        >
          <MenuItem
            sx={{ fontFamily: "Poppins, sans-serif" }}
            onClick={() => handleClose("all")}
          >
            Tüm Ürünler
          </MenuItem>
          <MenuItem
            sx={{ fontFamily: "Poppins, sans-serif" }}
            onClick={() => handleClose("tost")}
          >
            Tost
          </MenuItem>
          <MenuItem
            sx={{ fontFamily: "Poppins, sans-serif" }}
            onClick={() => handleClose("sandwich")}
          >
            Sandviç
          </MenuItem>
        </Menu>

        {/* Product Grid */}
        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="center"
          sx={{ minHeight: "calc(100vh - 300px)" }}
        >
          {filteredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <ProductCard>
                <ProductImage
                  component="img"
                  height="320"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Grid
                    container
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <ProductTitle variant="h7">{product.name}</ProductTitle>
                    <IconButton
                      onClick={() => handleNutritionOpen(product.name)}
                    >
                      <InfoIcon />
                    </IconButton>
                  </Grid>
                </CardContent>
              </ProductCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Nutrition Dialog */}
      <StyledDialog
        open={nutritionOpen}
        onClose={handleNutritionClose}
        TransitionComponent={Fade}
        transitionDuration={{ enter: 1000, exit: 100 }}
      >
        <DialogTitle>{selectedNutrition?.name} - Besin Değerleri</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            {selectedNutrition &&
              Object.entries(selectedNutrition.nutrition).map(
                ([key, value]) => (
                  <Typography sx={{ marginTop: 2 }} key={key}>
                    <span style={{ fontWeight: "bold" }}>{key}:&nbsp;</span>
                    {value}
                  </Typography>
                )
              )}
          </Typography>
        </DialogContent>
        <DialogTitle>Bu değerler ortalama besin değerleridir.</DialogTitle>
      </StyledDialog>
    </div>
  );
};

export default ProductsPage;
