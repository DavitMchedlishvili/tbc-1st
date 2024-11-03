import "./app/styles/global.css"
import Home from "./app/(auth)/home/page"
import Footer from "./app/components/Footer/Footer"
import Header from "./app/components/Header/Header"

function HomePage() {
 
  return (
    <>
    <div className="body-container">

    <Header/>
    <div className="content">

    <Home/>
    </div>
    <Footer/>
    </div>
    </>
  )
}

export default HomePage
