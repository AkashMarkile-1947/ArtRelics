import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "@/components/ProductCard";

export default function ProductList() {
  const [activeCategory, setActiveCategory] = useState("Painting"); // Set an initial active category

  const [products, setProducts] = useState([]);
  useEffect(() => {
      // Fetch the products from your API
      axios.get('/api/products') // Replace with your API endpoint
        .then((response) => {
          setProducts(response.data.data);
        })
        .catch((error) => {
          console.error('Error fetching products:', error);
        });
    }, []);

  const filteredProducts = products.filter(
    (product) => product.productCategory === activeCategory
  );

  return (
    <main className="h-screen">
      <Navbar />

      <div className="text-2xl mt-4 mb-2 px-4 mx-auto w-fit py-2 border-black">
        <button
          className={`mr-4 ${
            activeCategory === "Painting" ? "text-bold border-b-4" : ""
          }`}
          onClick={() => setActiveCategory("Painting")}
        >
          Paintings
        </button>
        <button
          className={`mr-4 ${
            activeCategory === "Sculpture" ? "text-bold border-b-4" : ""
          }`}
          onClick={() => setActiveCategory("Sculpture")}
        >
          Sculptures
        </button>
        <button
          className={`mr-4 ${
            activeCategory === "Collectibles" ? "text-bold border-b-4" : ""
          }`}
          onClick={() => setActiveCategory("Collectibles")}
        >
          Collectibles
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard productName={product.productName} productMaterial={product.productMaterial} productCategory={product.productCategory} productPicture={product.productPicture} productPrice={product.productPrice} _id={product._id} />
        ))}
      </div>

      <Footer />
    </main>
  );
}
