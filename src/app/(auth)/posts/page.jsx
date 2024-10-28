"use client"

import React, { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import NotFoundPage from "../../not-found";
import ProductActions from "../../components/EditDeleteButtons/ProductActions";
import "./index.css";
import Link from "next/link";
import Like from "../../../../public/assets/like.png";
import Dislike from "../../../../public/assets/dislike.png";
import AddButton from "../../components/AddButton/AddButton";

function PostsFetch({ searchParams }) {
  const searchTerm = searchParams.search || "";
  const [posts, setPosts] = useState([]);
  const [hasError, setHasError] = useState(false);


  let url = "https://dummyjson.com/posts";
  if (searchTerm) {
    url = `https://dummyjson.com/posts/search?q=${searchTerm}`;
  }

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setPosts(data.posts || []);
        setHasError(false);
      } catch (error) {
        console.log("Error fetching data: ", error);
        setHasError(true);
      }
    }
    fetchPosts();
  }, [url]);

  const setPostCallback = (updatedPost) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === updatedPost.id ? updatedPost : post
      )
    );
  };

  const deletePostCallback = (postId) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
  };


  const addProduct = (item) => {
    const newId = Date.now();
    const itemWithId = { ...item, id: newId };
    setProducts((prevProducts) => [...prevProducts, itemWithId]);
  };

  if (hasError) {
    return <NotFoundPage />;
  }

  return (
    <div className="postContainer">
      <h1 className="postTitle">Posts</h1>
      <SearchBar searchType={"posts"} />
      <AddButton item="Posts" addProduct={addProduct} />
      <div className="posts">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <Link href={`/posts/${post.id}`} className="postLink">
              <h2 className="postTitle">{post.title}</h2>
              <p className="postContent">{post.body}</p>
            </Link>
            <div className="reactions">
              <div className="like">
                <img src={Like.src} alt="like" />
                <p>{post.reactions.likes}</p>
              </div>
              <div className="dislike">
                <img src={Dislike.src} alt="dislike" />
                <p>{post.reactions.dislikes}</p>
              </div>
            </div>
            <p className="postTags">
              Tags:{" "}
              {post.tags.map((tag, index) => (
                <span key={index}>#{tag}</span>
              ))}{" "}
            </p>
            <p className="postViews">Views: {post.views}</p>
            <ProductActions
              product={post}
              type="posts"
              setProductCallBack={setPostCallback}
              deleteProductCallback={deletePostCallback}
              onEditingChange={() => {}}
            />
          </div>
        ))}
      
      </div>
    </div>
  );
}

export default PostsFetch;