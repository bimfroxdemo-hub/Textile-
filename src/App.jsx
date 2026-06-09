import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Collection from "./pages/Collection";
import ProductDetails from "./pages/ProductDetails";
import Contact from "./pages/Contact";
import Products from "./pages/Products"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* COMMON NAVBAR */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products/>}/>
        <Route path="/collection" element={<Collection />} />
        <Route path="/product" element={<ProductDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* COMMON FOOTER */}
      <Footer />
    </>
  );
}

export default App;