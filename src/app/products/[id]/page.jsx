import "../index.css";
import ReturnButton from "../../components/ReturnButton/ReturnButton";
import { Suspense } from "react";

import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import NotFoundPage from "../../not-found";

const getProduct = async (id) => {
  let res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) {
    return null;
  }
  let product = await res.json();

  return product || null;
};

export async function generateStaticParams() {
  let productsData = await fetch("https://dummyjson.com/products").then((res) =>
    res.json()
  );
  let products = productsData.products;

  return products.map((product) => ({
    params: { id: product.id}
  }));
}

export default async function ProductDetail({ params }) {
  let product = await getProduct(params.id);

  if (!product) {
    return <NotFoundPage />;
  }

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div className="product-card detailed-product_page">
        {" "}
        <div className="product-info detailed-product_info">
          <h1>{product.title}</h1>
          <p className="product-description">{product.description}</p>{" "}
          <p className="product-price">Price: ${product.price}</p>{" "}
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
}
