// import React from "react";
// import { createClient } from "../../../../utils/supabase/server";

// interface DeleteProductProps {
//   id: number;
// }

// const DeleteProduct: React.FC<DeleteProductProps> = ({ id }) => {
//   const handleDeleteProduct = async () => {
//     try {
//       const supabase = await createClient();

//       // Call the Supabase delete API
//       const { error } = await supabase
//         .from("products")
//         .delete()
//         .eq("id", id);

//       if (error) {
//         console.error("Error deleting product:", error.message);
//         alert("Failed to delete the product. Please try again.");
//         return;
//       }

//       // Optionally show a success message
//       alert("Product deleted successfully!");
    
//     } catch (err) {
//       console.error("An unexpected error occurred:", err);
//       alert("An unexpected error occurred. Please try again.");
//     }
//   };

//   return (
//     <button
//       onClick={handleDeleteProduct}
//       className="py-2 px-4 bg-red-600 text-white rounded-full hover:bg-red-700 transition duration-200"
//     >
//       Delete
//     </button>
//   );
// };

// export default DeleteProduct;

import React from "react";
import { deleteProduct } from "./deleteFunction";


interface DeleteProductProps {
  id: number;
}


const DeleteProduct: React.FC<DeleteProductProps> = ({ id }) => {
    

  const handleDeleteProduct = async () => {
    try {
      const result = await deleteProduct(id);

      if (result.success) {
        alert("Item deleted successfully");
        window.location.reload();
      } else {
        throw result.error;
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <button
      onClick={handleDeleteProduct}
      className="py-2 px-5 m-auto bg-red-600 text-white rounded-full hover:bg-red-700 transition duration-200"
    >
      Delete
    </button>
  );
};

export default DeleteProduct;
