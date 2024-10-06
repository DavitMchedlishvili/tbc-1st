'use client'

import React, { useEffect, useState } from 'react'
import "./index.css";
import Like from "../../../public/assets/like.png";
import Dislike from "../../../public/assets/dislike.png"


const PostsFetch = () => {

    const [posts, setPosts] = useState([]);

    

    useEffect(() => {
      async function fetchData() {
        const res = await fetch('https://dummyjson.com/posts');
        const data = await res.json();
        
        setPosts(data.posts);
      }
      
      fetchData();
    }, []);

    console.log(posts);
    
  return (
    <div className="blogContainer">
      <h1 className="blogTitle">Posts</h1>
      <div className="blogPosts">
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
            <p className="postTags">Tags: {post.tags.map((tag) => (
              <div>
                #{tag}
              </div>
              ))} </p>  
            <p className="postViwes">views: {post.views} </p>
  
          </div>
        ))}
        </div>
    </div>
  )
}

export default PostsFetch