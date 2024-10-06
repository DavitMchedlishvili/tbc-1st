import "./index.css"
import ItemCard from "../components/Cards/ItemCard/ItemCard"
import data from "../../data"



const Home = () => {
  return (
    
      
      <div className="grid-container container">
      {data.map((item, id) => (
          <ItemCard 
          key = {id}
          title = {item.title}
          photo = {item.photo.src}
          description = {item.description}
          btnColor = {item.btnColor}
          />
        ))}
        {/* <p>salami</p> */}
      </div>
      

      
    
  )
}





export default Home