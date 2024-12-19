import React from "react";
import "./blogCard.css";

interface BlogCardProps {
  title: string;
  photo: {
    src: string;
  };
  btnColor: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, photo, btnColor }) => {
  return (
    <div className="blogCard-container">
      <img src={photo.src} alt="photo" className="blogCard-Img" />
      <h1 className="dark:text-red-700">{title}</h1>
      <button className="blogBtn" style={{ backgroundColor: btnColor }}>
        Read the article
      </button>
    </div>
  );
};

export default BlogCard;
