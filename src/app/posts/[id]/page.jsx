"use client";
import { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import NotFoundPage from "../../not-found";
import "./index.css";
import Like from "../../../../public/assets/like.png";
import Dislike from "../../../../public/assets/dislike.png";
import ReturnButton from "../../components/ReturnButton/ReturnButton";

const PostsDetails = ({ params }) => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = params;

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch(`https://dummyjson.com/posts/${id}`);
        if (!res.ok) {
          return notFound();
        }
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch product:", error);
        notFound();
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, [id]);

  if (loading) return <div>Loading...</div>;

  if (!posts) {
    return <NotFoundPage />;
  }

  return (
    <div className="single-PostContainer container">
      <h1 className="single-PostTitle">{posts.title}</h1>
      <p className="single-PostBody">{posts.body}</p>
      <div className="single-PostReactions">
        <div className="single-PostLike">
          <img src={Like.src} alt="like" />
          <p>{posts.reactions.likes}</p>
        </div>
        <div className="single-PostDislike">
          <img src={Dislike.src} alt="dislike" />
          <p>{posts.reactions.dislikes}</p>
        </div>
      </div>
      <p className="single-PostTags">
        Tags:{" "}
        {posts.tags.map((tag, index) => (
          <span key={index}>#{tag}</span>
        ))}{" "}
      </p>
      <p className="single-PostViwes">views: {posts.views}</p>
      <div>
        <ReturnButton />
      </div>
    </div>
  );
};

export default PostsDetails;
