import { createClient } from "../../../utils/supabase/server";

// Define the Product type
interface Product {
  id: number;
  title: string;
}

async function getMersedesiProduct(): Promise<string | null> {
  try {
    const supabase = await createClient();
    // Specify that 'Products' will return a 'Product' type
    const { data: products, error } = await supabase
      .from("Products")
      .select("title")
      .eq("title", "mersedesi") // Filter for the product named "mersedesi"
      .single(); // Ensure only one product is returned

    if (error) {
      console.error("Supabase error:", error);
      return null;
    }

    // Since .single() returns a single record or null, we directly access the title
    return products?.title || null; // Return the product title, or null if not found
  } catch (error) {
    console.error("Unexpected error:", error);
    return null; // Return null on unexpected errors
  }
}



export default async function Rame() {
  const productName = await getMersedesiProduct(); // Fetch the product name
  

  return (
    <div>
      <h1>Product Name</h1>
      {productName ? (
        <p>{productName}</p>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
}









// import { createClient } from "../../../utils/supabase/server";

// // Define the Product type based on the expected structure
// interface Product {
//   id: number;
//   title: string;
//   category: string;
//   img: {
//     pigment: {
//       green: string;
//     };
//   };
//   info: Array<Record<string, string>>;
// }

// async function getProducts(): Promise<Product[]> {
//   try {
//     const supabase = await createClient();
//     const { data: products, error } = await supabase
//       .from<Product>("Products")
//       .select()
//       .eq("category", "chair");

//     if (error) {
//       console.error("Supabase error:", error);
//       return [];
//     }

//     return products || []; // Ensure a fallback to an empty array if null
//   } catch (error) {
//     console.error("Unexpected error:", error);
//     return []; // Return an empty array to prevent rendering errors
//   }
// }

// export default async function Rame() {
//   const data = await getProducts(); // Await the asynchronous function
//   console.log(data);

//   return (
//     <div className="py-6 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-7 cursor-pointer w-full">
//       {data.map((item) => (
//         <div
//           className="border-2 border-yellow-300 flex flex-col items-center justify-center p-4"
//           key={item.id}
//         >
//           <img
//             className="w-[200px] h-[250px]"
//             src={item.img.pigment.green}
//             alt="green"
//           />
//           <h1>{item.title}</h1>
//           <p>{item.id}</p>
//           <div>
//             {item.info.map((detail, index) => (
//               <div key={index}>
//                 {Object.entries(detail).map(([key, value]) => (
//                   <div key={key}>
//                     <strong>{key}:</strong> {value}
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }


