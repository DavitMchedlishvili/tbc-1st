import SearchBar from "../components/SearchBar/SearchBar";
import NotFoundPage from "../not-found";
import "./index.css";
import Link from "next/link";
// import Button from "../components/button/Button";

 async function ProductFetch ({searchParams}){


 






const searchTerm = searchParams.search || "";

try {
  let url = "https://dummyjson.com/products";
  if(searchTerm){
      url = `https://dummyjson.com/products/search?q=${searchTerm}`;
  }
  
  const response = await fetch(url);
  const data = await response.json();
  const products = data.products || [];








  return (
    <div className="product-page container">
      <h1>Our Products</h1>
      <SearchBar searchType={"products"}/>
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
            </div>
          ))}
        </div>
  
    </div>
  );
} catch (error) {
  console.log("Error fetching data: ", error);
  return <NotFoundPage />;
}
};

export default ProductFetch;
