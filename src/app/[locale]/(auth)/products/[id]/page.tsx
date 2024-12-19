import "../index.css";
import ReturnButton from "../../../components/ReturnButton/ReturnButton";
import { Suspense } from "react";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import NotFoundPage from "../../../../not-found";

// Type Definitions
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
}

interface Params {
  id: string; // Params typically come as strings
}

// Function to fetch a single product by ID
const getProduct = async (id: string): Promise<Product | null> => {
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    if (!res.ok) {
      return null;
    }
    const product = await res.json();
    return product || null;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
};

// Generate static paths for all products
export async function generateStaticParams() {
  try {
    const productsData = await fetch("https://dummyjson.com/products").then((res) =>
      res.json()
    );
    const products: Product[] = productsData.products;

    return products.map((product) => ({
      params: { id: product.id.toString() }, // Ensure the ID is a string
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

// ProductDetail Component
const ProductDetail: React.FC<{ params: Params }> = async ({ params }) => {
  const product = await getProduct(params.id);

  if (!product) {
    return <NotFoundPage />;
  }

  return (
    <Suspense fallback={<LoadingSpinner />}>
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
    </Suspense>
  );
};

export default ProductDetail;
