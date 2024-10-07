// import React from "react";

// async function fetchPosts(id) {
//     const res = await fetch(`https://dummyjson.com/posts/${id}`)
//     const post = await res.json()
//     return post
// }

// export async function generateStaticParams() {
//     const res = await fetchPosts("https://dummyjson.com/posts");
//     const posts = await res.json();

//     return posts.map((post) => ({
//         id: post.id.toString()
//     }));
// }

// export default async function PostPage({params}){
//     const {id} = params;
//     const post = await fetchPosts(id);

//     return (
//         <div>
//             <h1>{post.name}</h1>
//             <p>{post.body}</p>
//             <p>Tags: {post.tags.map((tag, index) => (
//               <span key={index}>
//                 #{tag}
//               </span>
//               ))} </p>
//         </div>
//     )
// }

import React from "react";

async function fetchPosts(id = null) {
  const url = id
    ? `https://dummyjson.com/posts/${id}`
    : `https://dummyjson.com/posts`;
  const res = await fetch(url);
  const data = await res.json();
  return id ? data : data.posts; // Fetch single post if id is passed, otherwise fetch all posts
}

export async function generateStaticParams() {
  const posts = await fetchPosts(); // Fetch all posts

  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

export default async function PostPage({ params }) {
  const { id } = params;
  const post = await fetchPosts(id); // Fetch specific post by id

  return (
    <div>
      <h1>{post.title}</h1> {/* Use post.title instead of post.name */}
      <p>{post.body}</p>
      <p>
        Tags:{" "}
        {post.tags.map((tag, index) => (
          <span key={index}>#{tag} </span>
        ))}
      </p>
    </div>
  );
}
