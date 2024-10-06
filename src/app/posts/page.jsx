'use client'

import React, { useEffect, useState } from 'react'

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
    <div>
          <>
   <h1>halo</h1>

    <div>
      <h1>List of Items</h1>
      <ul>
        {posts.map((item) => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
   </>
    </div>
  )
}

export default PostsFetch