'use client'

import { useEffect, useState } from "react"


export const ProductFetch = () => {

    const [product, setProduct] = useState([null]);

    

    useEffect(() => {
      async function fetchData() {
        const res = await fetch('https://dummyjson.com/products');
        const data = await res.json();
        
        setProduct(data.products);
      }
  
      fetchData();
    }, []);
    
    console.log("2nd log", product)

  return (
   <>
   <h1>halo</h1>

    <div>
      <h1>List of Items</h1>
      <ul>
        {product.map((item) => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
   </>
    
  )
}
