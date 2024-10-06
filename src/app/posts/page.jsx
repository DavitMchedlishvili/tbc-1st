"use client";

import { useEffect, useState } from "react";
import "./index.css";
import Like from "../../../public/assets/like.png";
import Dislike from "../../../public/assets/dislike.png";

const PostsFetch = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://dummyjson.com/posts");
      const data = await res.json();

      setPosts(data.posts);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div className="postContainer">
      <h1 className="postTitle">Posts</h1>

      {loading ? (
        <div className="skeleton-posts">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="skeleton-post">
              <div className="skeleton-title"></div>
              <div className="skeleton-content"></div>
              <div className="skeleton-reactions"></div>
              <div className="skeleton-tags"></div>
              <div className="skeleton-views"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="posts">
          {posts.map((post) => (
            <div key={post.id} className="post">
              <h2 className="postTitle">{post.title}</h2>
              <p className="postContent">{post.body}</p>
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
              <p className="postViwes">views: {post.views}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostsFetch;
