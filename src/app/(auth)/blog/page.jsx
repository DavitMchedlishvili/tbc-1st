import "./index.css";
import BlogCard from "../../components/Cards/BlogCard/BlogCard";
import data from "../../../data";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Blog = () => {
  console.log(data[0].article);
  return (
    
    <>
    <div className="body-container">
    <Header/>
    <div className="content">
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
    </div>
    
   
   
    <Footer/>
    </div>
   
    
    </>
  );
};

export default Blog;
