"use client";
import { useEffect, useState } from "react";

const ProductDetail = ({ params }) => {
  const [product, setProduct] = useState(null);
  const { id } = params;

  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    }

    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;
  console.log(product);

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <img src={product.images} alt={product.title} />
    </div>
  );
};

export default ProductDetail;
