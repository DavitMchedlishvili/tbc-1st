"use client"

import { useEffect, useState } from "react";

const ProductFetch = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products); // Accessing the products array
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="mx-auto max-w-[95%]  grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 cursor-pointer">
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="flex flex-col max-w-[300px] min-w-[300px]">
            <img src={product.thumbnail} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </div>
        ))
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
};

export default ProductFetch;



