import SearchBar from "../components/SearchBar/SearchBar";
import SortComponent from "../components/Sort/SortComponent";
import NotFoundPage from "../not-found";
import "./index.css";
import Link from "next/link";





 async function ProductFetch ({searchParams}){

  const searchTerm = searchParams.search || "";
  console.log(searchTerm)
  const sortOption = searchParams.option || "";
  console.log(sortOption)
  const sortOrder = searchParams.order || "";
  console.log(sortOrder)

  const sortOptions = [
    {   label: 'Price: Low to High',
        value: 'price-low-to-high',
        option: "price",
        order: "asc"
        },
    {   label: 'Price: High to Low', 
        value: 'price-high-to-low',
        option: "price",
        order: "desc"
        
         },
    {   label: 'Name: A-Z',  
        value: 'name-ascending',
        option: "title",
        order: "asc"
        },
    {   label: 'Name: Z-A',  
        value: 'name-descending',
        option: "title",
        order: "desc"
        },
  ];



try {
  let url = "https://dummyjson.com/products";
  if(searchTerm){
      url = `https://dummyjson.com/products/search?q=${searchTerm}`;
  }
  if(sortOption && sortOrder){
    url = `https://dummyjson.com/products?sortBy=${sortOption}&order=${sortOrder}`
}
  
  const response = await fetch(url);
  const data = await response.json();
  const products = data.products || [];








  return (
    <div className="product-page container">
      <h1>Our Products</h1>
      
      <SearchBar searchType={"products"}/>
      <SortComponent sortOptions={sortOptions}  />
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
