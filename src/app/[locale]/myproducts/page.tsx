import { createClient } from "../../../utils/supabase/server";
import ProductCard from "../components/ProductsCard/ProductsCard";

export default async function Products() {
  const supabase = await createClient();
  const { data, error } = await supabase.from("products").select();

  if (error) {
    return <div>Error fetching products: {error.message}</div>;
  }

  if (data.length === 0) {
    return <div className="text-center py-8">Sorry, but there are no products.</div>;
  }

  return (
    <div className="container mx-auto py-8 2xl:px-20 pt-10">
      <div className="products-container grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {data.reverse().map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
