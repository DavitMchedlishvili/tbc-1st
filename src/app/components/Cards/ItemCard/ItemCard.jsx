
import "./itemCard.css"


const ItemCard = ({title, description, photo, btnColor }) => {
  return (
    <>
     <div className='card-container'>
      <img src={photo} alt="photo" className='card-Img' />
      <h1>{title}</h1>
      <p>{description}</p>
      <button className='cartBtn' style ={{ backgroundColor: btnColor}}>Add to cart</button>
    </div>
    
    </>
   
  )
}

export default ItemCard