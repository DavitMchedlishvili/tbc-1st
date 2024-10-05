/* eslint-disable react/prop-types */
import "./blogCard.css"

const BlogCard = ({title, photo, btnColor }) => {
  return (
    <div className='blogCard-container'>
      <img src={photo.src} alt="photo" className='blogCard-Img' />
      <h1>{title}</h1>
      <button className='cartBtn' style ={{ backgroundColor: btnColor}}>Read the article</button>
    </div>
  )
}

export default BlogCard