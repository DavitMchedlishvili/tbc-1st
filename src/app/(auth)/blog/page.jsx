import "./index.css";
import BlogCard from "../../components/Cards/BlogCard/BlogCard";
import data from "../../../data";

const Blog = () => {
  console.log(data[0].article);
  return (
    
    <>
  
    <div className="article-container container">
      {data.map((item) => (
        <BlogCard
          key={item.id}
          title={item.title}
          photo={item.photo}
          btnColor={item.btnColor}
        />
      ))}
    </div>
    
    </>
  );
};

export default Blog;
