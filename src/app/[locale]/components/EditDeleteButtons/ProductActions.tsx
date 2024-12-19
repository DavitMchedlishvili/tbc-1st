"use client";

import React, { useEffect, useState } from "react";
import "./productActions.css";

interface Product {
  id: number;
  title: string;
  [key: string]: any; // For flexibility in case of other properties in the product object
}



interface ProductActionsProps {
  product: Product;
  type: string;
  setProductCallBack: (product: Product) => void;
  deleteProductCallback: (id: number) => void;
  onEditingChange: (editing: boolean) => void;
}

const ProductActions: React.FC<ProductActionsProps> = ({
  product,
  type,
  setProductCallBack,
  deleteProductCallback,
  onEditingChange,
}) => {
  const [editing, setEditing] = useState<boolean>(false);
  const [newTitle, setNewTitle] = useState<string>(product.title);

  const handleEdit = async () => {
    if (newTitle) {
      try {
        const response = await fetch(
          `https://dummyjson.com/${type}/${product.id}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title: newTitle }),
          }
        );
        if (response.status === 200) {
          const data = await response.json();
          setProductCallBack(data);
        }
        if (response.status === 404) {
          let updatedProduct = product;
          updatedProduct.title = newTitle;
          console.log("product", updatedProduct);
          setProductCallBack(updatedProduct);
        }
        setEditing(false);
      } catch (error) {
        console.error("Failed to update product", error);
      }
    } else {
      alert("Can not save without any name");
      setProductCallBack(product);
      setNewTitle(product.title);
      setEditing(false);
    }
  };

  useEffect(() => {
    onEditingChange(editing);
  }, [editing]);

  const handleDelete = () => {
    fetch(`https://dummyjson.com/${type}/${product.id}`, {
      method: "DELETE",
    })
      .then(() => {
        deleteProductCallback(product.id);
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
  };

  return (
    <div>
      {editing ? (
        <div>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
          <button onClick={() => setEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div className="btns-div">
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default ProductActions;

