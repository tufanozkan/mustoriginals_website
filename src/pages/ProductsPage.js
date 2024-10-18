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
  MenuItem,
} from "@mui/material";
import { styled } from "@mui/system";
import FilterListIcon from "@mui/icons-material/FilterList";
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
  "&:hover": {
    transform: "scale(1.6)",
  },
}));

// Title styles
const ProductTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "'Playfair Display', serif",
  fontWeight: 600,
  textAlign: "center",
  color: "#6F1D1B",
  marginTop: 3,
}));

const allProducts = [
  { id: 1, name: "Musto Tost", image: musto, category: "tost" },
  { id: 2, name: "Kumru", image: kumru, category: "sandwich" },
  { id: 3, name: "Ayvalık Tostu", image: ayvalik, category: "tost" },
  {
    id: 4,
    name: "Beyaz Penirli Sandwich",
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
      energy: "289.7 kcal / 1218.6 kJ",
      fat: "12.2 g",
      saturatedFat: "4.6 g",
      carbs: "34.1 g",
      protein: "11.5 g",
      salt: "0.9 g",
    },
  },
  {
    id: 2,
    name: "Kumru",
    nutrition: {
      energy: "279.8 kcal / 1176.3 kJ",
      fat: "11.72 g",
      saturatedFat: "3.9 g",
      carbs: "32.7 g",
      protein: "10.8 g",
      salt: "1.0 g",
    },
  },
  {
    id: 3,
    name: "Ayvalık Tostu",
    nutrition: {
      energy: "289.7 kcal / 1218.6 kJ",
      fat: "12.2 g",
      saturatedFat: "4.6 g",
      carbs: "34.1 g",
      protein: "11.5 g",
      salt: "0.9 g",
    },
  },
  {
    id: 4,
    name: "Beyaz Peynirli Sandwich",
    nutrition: {
      energy: "289.7 kcal / 1218.6 kJ",
      fat: "12.2 g",
      saturatedFat: "4.6 g",
      carbs: "34.1 g",
      protein: "11.5 g",
      salt: "0.9 g",
    },
  },
  {
    id: 5,
    name: "Kaşarlı Tost",
    nutrition: {
      energy: "282 kcal / 1189 kJ",
      fat: "8.3 g",
      saturatedFat: "4.4 g",
      carbs: "37.8 g",
      protein: "13 g",
      salt: "1.0 g",
    },
  },
  {
    id: 6,
    name: "Hamburger",
    nutrition: {
      energy: "210.8 kcal / 878.7 kJ",
      fat: "7.4 g",
      saturatedFat: "2.2 g",
      carbs: "26.1 g",
      protein: "8.9 g",
      salt: "0.8 g",
    },
  },
  {
    id: 7,
    name: "Kaşarlı Salamlı Sandwich",
    nutrition: {
      energy: "210.8 kcal / 878.7 kJ",
      fat: "7.4 g",
      saturatedFat: "2.2 g",
      carbs: "26.1 g",
      protein: "8.9 g",
      salt: "0.8 g",
    },
  },
  {
    id: 8,
    name: "Sucuklu Tost",
    nutrition: {
      energy: "329.7 kcal / 1718.6 kJ",
      fat: "20.2 g",
      saturatedFat: "6.6 g",
      carbs: "45.1 g",
      protein: "13.5 g",
      salt: "0.9 g",
    },
  },
];

const ProductsPage = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [category, setCategory] = useState("all");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (selectedCategory) => {
    setAnchorEl(null);
    if (selectedCategory) {
      setCategory(selectedCategory);
    }
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
          <MenuItem onClick={() => handleClose("all")}>Tüm Ürünler</MenuItem>
          <MenuItem onClick={() => handleClose("tost")}>Tost</MenuItem>
          <MenuItem onClick={() => handleClose("sandwich")}>Sandviç</MenuItem>
        </Menu>

        {/* Product Grid */}
        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="center"
          sx={{ minHeight: "calc(100vh - 370px)" }}
        >
          {filteredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <ProductCard>
                <ProductImage
                  component="img"
                  height="300"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <ProductTitle variant="h6">{product.name}</ProductTitle>
                </CardContent>
              </ProductCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default ProductsPage;
