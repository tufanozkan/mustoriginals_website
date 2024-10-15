import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "../src/pages/HomePage";
import AboutPage from "../src/pages/AboutPage";
import ProductsPage from "../src/pages/ProductsPage";
import CommunicatePage from "../src/pages/CommunicatePage";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/communicate" element={<CommunicatePage />} />
      </Routes>
    </Router>
  );
};

export default App;
