import "./index.css"
import ItemCard from "../components/Cards/ItemCard/ItemCard"
import data from "../../data"
import { ProductFetch } from "../../Products/ProductFetch"


const Home = () => {
  return (
    <main>
      
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
      

      
    </main>
  )
}





export default Home