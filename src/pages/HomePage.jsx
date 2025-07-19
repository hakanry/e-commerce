import Header from "../layouts/HomePage/Header";
import Content from "../layouts/HomePage/Content";
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
      <Content />
      <Footer />
    </div>
  );
}

export default HomePage;
