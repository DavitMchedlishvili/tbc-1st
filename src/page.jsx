import "./global.css"
import Home from "./app/(auth)/home/page"
import Footer from "./app/components/Footer/Footer"
import Header from "./app/components/Header/Header"
// import ThemeProvider from "./app/utils/ThemeProvider"

function HomePage() {
 
  return (
    <>
{/* <ThemeProvider> */}

    <Header/>
    <Home/>
    <Footer/>
  
{/* </ThemeProvider> */}

   
    </>
  )
}

export default HomePage
