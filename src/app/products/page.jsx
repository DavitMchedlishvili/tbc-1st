"use client";

import { useEffect, useState } from "react";
import "./index.css";

const ProductFetch = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();

      setProduct(data.products);
    }

    fetchData();
  }, []);

  return (
    <div className="product-page">
      <h1>Our Products</h1>
      <div className="product-grid">
        {product.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.thumbnail} alt={item.title} className="product-image"/>
            <div className="product-info">
              <h2>{item.title}</h2>
              <p className="product-description">{item.description}</p>
              <p className="product-price">${item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductFetch;
