import { createClient } from "../../../utils/supabase/server";

async function getProducts() {
  try {
    const supabase = await createClient();
    const { data: products, error } = await supabase
      .from("Products")
      .select()
      .eq("category", "table");

    if (error) {
      console.error("Supabase error:", error);
      return [];
    }

    const productsData = products; // No need to stringify here unless needed elsewhere
    console.log("data", productsData);
    return productsData;
  } catch (error) {
    console.error("Unexpected error:", error);
    return []; // Return an empty array to prevent rendering errors
  }
}

export default async function Rame() {
  const data = await getProducts(); // Await the asynchronous function
  console.log(data);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h1 >{item.title}</h1>
          <p>{item.description}</p>
        </div>
        
      ))}
    </div>
  );
}

