import React from 'react'
import ItemCard from '../../Components/ItemCard/ItemCard'
import "./blog.css"

const Blog = ({items}) => {
  return (
    <main>

        <div className='article-container container'>
        {items.map((item, id) => (
          <ItemCard 
          key = {id}
          title = {item.title}
          photo = {item.photo}
          btnColor = {item.btnColor}
          />
        ))}
        </div>
    </main>
  )
}

export default Blog