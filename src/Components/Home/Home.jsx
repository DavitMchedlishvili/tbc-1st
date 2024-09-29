
import "./home.css"
import ItemCard from '../ItemCard/ItemCard'


const Home = ({items}) => {
  return (
    <main>
      
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





export default Home