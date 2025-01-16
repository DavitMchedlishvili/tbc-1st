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
