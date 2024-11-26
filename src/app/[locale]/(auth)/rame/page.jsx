import { createClient } from "../../../utils/supabase/server";

async function getProducts() {
  try {
    const supabase = await createClient();
    const { data: products, error } = await supabase
      .from("Products")
      .select()
      .eq("category", "chair");

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
    
<div className="py-6 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-7 cursor-pointer w-full">
      {data.map((item) => (
        <div className="border-2 border-yellow-300 flex flex-col items-center justify-center p-4" key={item.id} >
          <img className="w-[200px] h-[250px]" src={item.img.pigment.graphiteBlue} alt="green" />
          <h1 >{item.title}</h1>
          <p>{item.id}</p>
          {/* <p>{item.description}</p> */}
          <div>
            {item.info.map((detail, index)=>
            <div key={index}>
             {Object.entries(detail).map(([key, value]) => (
            <div key={key}>
              <strong>{key}:</strong> {value}
            </div>
          ))}
            </div>
            )}
          </div>
        </div>
        
      ))}
    </div>
   
    
  );
}

