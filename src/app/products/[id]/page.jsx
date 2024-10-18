"use client";
import { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import NotFoundPage from "../../not-found";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import "../index.css";
import ReturnButton from "../../components/ReturnButton/ReturnButton";

const ProductDetail = ({ params }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = params;
  console.log(params)

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

  if (loading) return <LoadingSpinner />;

  if (!product) {
    return <NotFoundPage />;
  }

  return (
    <div className="product-card detailed-product_page">
      <div className="product-info detailed-product_info">
        <h1>{product.title}</h1>
        <p className="product-description">{product.description}</p>
        <p className="product-price">Price: ${product.price}</p>
      </div>
      <img
        src={product.images[0]}
        alt={product.title}
        className="product-image detailed-product_image"
      />
      <div className="return-back">
        <ReturnButton />
      </div>
    </div>
  );
};

export default ProductDetail;



// nikastvis
