'use client'

import React, { useEffect, useState } from 'react'
import "./index.css";
import Like from "../../../public/assets/like.png";
import Dislike from "../../../public/assets/dislike.png"
import Link from 'next/link';


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

    
  return (
    <div className="postContainer">
      <h1 className="postTitle">Posts</h1>
      <div className="posts">
        {posts.map((post) => (
          <div key={post.id} className="post">
           <Link className='postLink' href={`/posts/${post.id}`}>
           <h2 className="postTitle">{post.title}</h2>
           </Link> 
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
            <p className="postTags">Tags: {post.tags.map((tag, index) => (
              <span key={index}>
                #{tag}
              </span>
              ))} </p>  
            <p className="postViwes">views: {post.views} </p>
  
          </div>
        ))}
        </div>
    </div>
  )
}

export default PostsFetch