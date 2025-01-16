"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import "./addButton.css";

// Define the types for the props
interface AddButtonProps {
  item: "Posts" | "Products";
  addProduct: (newItem: Product | Post) => void;
}

// Define the structure of the product object
interface Product {
  title: string;
  description: string;
  price: string;
  images: string | null;
}

// Define the structure of the post object
interface Post {
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
}

const AddButton: React.FC<AddButtonProps> = ({ item, addProduct }) => {
  const [isProductModalOpen, setProductModalOpen] = useState<boolean>(false);
  const [productName, setProductName] = useState<string>("");
  const [productDescription, setProductDescription] = useState<string>("");
  const [productPrice, setProductPrice] = useState<string>("");
  const [productImage, setProductImage] = useState<string | null>(null);

  const [isPostModalOpen, setPostModalOpen] = useState<boolean>(false);
  const [postTitle, setPostTitle] = useState<string>("");
  const [postDescription, setPostDescription] = useState<string>("");
  const [postTags, setPostTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState<string>("");

  const handleClick = () => {
    if (item === "Posts") {
      setPostModalOpen(true);
    } else if (item === "Products") {
      setProductModalOpen(true);
    } else {
      console.error("Error: Item not found");
    }
  };

  const handleProductSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newProduct: Product = {
      title: productName,
      description: productDescription,
      price: productPrice,
      images: productImage,
    };
    addProduct(newProduct);

    setProductName("");
    setProductDescription("");
    setProductPrice("");
    setProductImage(null);

    setProductModalOpen(false);
  };

  const handlePostSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newPost: Post = {
      title: postTitle,
      body: postDescription,
      tags: postTags,
      reactions: {
        likes: 0,
        dislikes: 0,
      },
    };
    addProduct(newPost);

    setPostTitle("");
    setPostDescription("");
    setPostTags([]);
    setTagInput("");
    setPostModalOpen(false);
  };

  const handleProductNameChange = (e: ChangeEvent<HTMLInputElement>) =>
    setProductName(e.target.value);

  const handleProductDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setProductDescription(e.target.value);

  const handleProductPriceChange = (e: ChangeEvent<HTMLInputElement>) =>
    setProductPrice(e.target.value);

  const handlePostTitleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPostTitle(e.target.value);

  const handlePostDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setPostDescription(e.target.value);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProductImage(imageUrl);
      console.log(imageUrl);
    }
  };

  const handleTagInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setTagInput(e.target.value);

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && tagInput.trim() !== "") {
      e.preventDefault();
      setPostTags([...postTags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const removeTag = (indexToRemove: number) => {
    setPostTags(postTags.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="add-product-button-container">
      <button className="add-product-btn" onClick={handleClick}>
        {`ADD ${item}`}
      </button>
      {isProductModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Add New Product</h2>
            <form onSubmit={handleProductSubmit} className="form">
              <label htmlFor="product-name">Product Name:</label>
              <input
                type="text"
                id="product-name"
                value={productName}
                onChange={handleProductNameChange}
                required
              />
              <label htmlFor="product-description">Product Description:</label>
              <textarea
                id="product-description"
                value={productDescription}
                onChange={handleProductDescriptionChange}
                required
              />
              <label htmlFor="product-price">Product Price:</label>
              <input
                type="number"
                id="product-price"
                value={productPrice}
                onChange={handleProductPriceChange}
                required
              />
              <label htmlFor="product-image">Product Image:</label>
              <input
                type="file"
                id="product-image"
                accept="images/*"
                onChange={handleImageChange}
              />
              <button className="submit-button" type="submit">
                Add Product
              </button>
            </form>
            <button
              className="close-modal"
              onClick={() => setProductModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
      {isPostModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Add New Post</h2>
            <form onSubmit={handlePostSubmit} className="form">
              <label htmlFor="post-title">Post Title:</label>
              <input
                type="text"
                id="post-title"
                value={postTitle}
                onChange={handlePostTitleChange}
                required
              />
              <label htmlFor="post-description">Write a Post:</label>
              <textarea
                id="post-description"
                value={postDescription}
                onChange={handlePostDescriptionChange}
                required
              />
              <label htmlFor="post-tags">Tags:</label>
              <input
                type="text"
                id="post-tags"
                value={tagInput}
                onChange={handleTagInputChange}
                onKeyDown={handleAddTag}
                placeholder="Press Enter to add a tag"
              />
              <div className="tags-container">
                {postTags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                    <button
                      className="tag-remove-btn"
                      type="button"
                      onClick={() => removeTag(index)}
                    >
                      X
                    </button>
                  </span>
                ))}
              </div>
              <button className="submit-button" type="submit">
                Add Post
              </button>
            </form>
            <button
              className="close-modal"
              onClick={() => setPostModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddButton;
