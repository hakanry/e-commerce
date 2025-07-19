import React from "react";
import Header from "../layouts/HomePage/Header";
import PageContent from "../layouts/HomePage/PageContent";
import Footer from "../layouts/HomePage/Footer";
import Clients from "../layouts/HomePage/Clients";
import ShopCards from "../layouts/HomePage/ShopCards";
import ProductCards from "../layouts/HomePage/ProductCards";

function HomePage() {
  return (
    <div>
      <Header />
      <Clients />
      <ShopCards />
      <ProductCards />
      <PageContent />
      <Footer />
    </div>
  );
}

export default HomePage;
