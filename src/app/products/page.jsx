"use client";

import { useEffect, useState } from "react";
import "./index.css";
import Link from "next/link";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

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
        <LoadingSpinner />
      ) : (
        <div className="product-grid">
          {products.map((item) => (
            <div key={item.id} className="product-card">
              <Link href={`/products/${item.id}`}>
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
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductFetch;
