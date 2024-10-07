"use client";
import { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import NotFoundPage from "../../not-found";

const ProductDetail = ({ params }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = params;

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        if (!res.ok) {
          return notFound();
        }
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Failed to fetch product:", error);
        notFound();
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading)
    return (
      <div className="loading-placeholder">
        <div className="spinner"></div>

        <div className="skeleton-grid">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="skeleton-card"></div>
          ))}
        </div>
      </div>
    );

  if (!product) {
    return <NotFoundPage />;
  }

  return (
    <div className="product-page container">
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <img src={product.images[0]} alt={product.title} />{" "}
    </div>
  );
};

export default ProductDetail;
