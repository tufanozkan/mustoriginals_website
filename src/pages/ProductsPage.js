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
          sx={{ minHeight: "calc(100vh - 360px)" }}
        >
          {filteredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <ProductCard>
                <ProductImage
                  component="img"
                  height="250"
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
