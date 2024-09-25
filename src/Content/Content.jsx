import React from 'react'
import "./content.css"
import ItemCard from '../ItemCard/ItemCard'


const Content = ({items}) => {
  return (
    <main >
      
      <div className="grid-container container">
      {items.map((item, index) => (
          <ItemCard 
          key = {index}
          title = {item.title}
          photo = {item.photo}
          description = {item.description}
          btnColor = {item.btnColor}
          />
        ))}
      </div>
      

      
    </main>
  )
}

export default Content