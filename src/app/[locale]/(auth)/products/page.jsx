"use client";

import "./index.css";
import React, { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import SortComponent from "../../components/Sort/SortComponent";
import NotFoundPage from "../../../not-found";
import ProductActions from "../../components/EditDeleteButtons/ProductActions";
import AddButton from "../../components/AddButton/AddButton";
import { Link } from "../../../../i18n/routing";


export function Products({ searchParams }) {
  const searchTerm = searchParams.search || "";
  const sortOptions = searchParams.sortBy || "";
  const [sortOption, sortOrder] = sortOptions.split("-");
  const [products, setProducts] = useState([]);
  const [hasError, setHasError] = useState(false);

  let url = "https://dummyjson.com/products";
  if (searchTerm) {
    url = `https://dummyjson.com/products/search?q=${searchTerm}`;
  }
  if (sortOption) {
    url = `https://dummyjson.com/products?sortBy=${sortOption}&order=${sortOrder}`;
  }

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data.products || []);
        setHasError(false);
      } catch (error) {
        console.log("Error fetching data: ", error);
        setHasError(true);
      }
    }
    fetchProducts();
  }, [url]);

  const addProduct = (item) => {
    const newId = Date.now();
    const itemWithId = { ...item, id: newId };
    setProducts((prevProducts) => [...prevProducts, itemWithId]);
  };



  const setProductCallBack = (updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };


  

  const deleteProductCallback = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  if (hasError) {
    return <NotFoundPage />;
  }

  return (
 
      
        <div className="product-page container">
          <h1>Our Products</h1>
          <SearchBar searchType={"products"} />
          <div className="sort-add">
            <AddButton item="Products" addProduct={addProduct} />
            <SortComponent />
          </div>
          <div className="product-grid">
            {products.map((item) => (
              <div key={item.id} className="product-card">
                <Link href={`/products/${item.id}`}>
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="product-image"
                  />
                  <div className="product-info">
                    <h2>{item.title}</h2>
                    <p className="product-description">{item.description}</p>
                    <p className="product-price">${item.price}</p>
                  </div>
                </Link>
                <ProductActions
                  product={item}
                  type="products"
                  setProductCallBack={setProductCallBack}
                  deleteProductCallback={deleteProductCallback}
                  onEditingChange={() => {}}
                />
              </div>
            ))}
          </div>
        </div>
    

     
  );
}

export default Products;



// import React from 'react'
// import ProductFetch from './ProductFetch'

// export const Products = () => {
//   return (
//     <ProductFetch/>
//   )
// }


// export default Products

