import SearchBar from "../components/SearchBar/SearchBar";
// import Sort from "../components/Sort/Sort";
import NotFoundPage from "../not-found";
import "./index.css";
import Link from "next/link";
// import Button from "../components/button/Button";





 async function ProductFetch ({searchParams}){

  const searchTerm = searchParams.search || "";
  // const sortOption = searchParams.sortOption || "";
  // const sortOrder = searchParams.sortOrder || "";

  // const sortOptions = [
  //   {
  //     label: 'Price: Low to Hight',
  //     value: 'price-low-to-high',
  //     option: 'price',
  //     order: 'asc'
  //   },
  //   {  label: 'Price: High to Low', 
  //     value: 'price-high-to-low',
  //     option: "price",
  //     order: "desc"
      
  //      },
  // ]




try {
  let url = "https://dummyjson.com/products";
  if(searchTerm){
      url = `https://dummyjson.com/products/search?q=${searchTerm}`;
  }
//   if(sortOption && sortOrder){
//     url = `https://dummyjson.com/products?sortBy=${sortOption}&order=${sortOrder}`
// }
  
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
