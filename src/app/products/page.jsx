"use client";

import { useEffect, useState } from "react";
import "./index.css";

const ProductFetch = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();

      setTimeout(() => {
        setProducts(data.products);
        setLoading(false);
      }, 2000);
    }

    fetchData();
  }, []);

  return (
    <div className="product-page container">
      <h1>Our Products</h1>

      {loading ? (
        <div className="loading-placeholder">
          <div className="spinner"></div>

          <div className="skeleton-grid">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="skeleton-card"></div>
            ))}
          </div>
        </div>
      ) : (
        <div className="product-grid">
          {products.map((item) => (
            <div key={item.id} className="product-card">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="product-image"
              />
              <div className="product-info">
                <h2>{item.title}</h2>
                <p className="product-description">{item.description}</p>
                <p className="product-price">${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductFetch;
