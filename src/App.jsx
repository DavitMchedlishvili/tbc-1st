
import './App.css'
import Home from './Home/Home'
import data from './data'
import Footer from './Footer/Footer'
import Header from './Header/Header'

function App() {
 
  return (
    <>
    <Header/>
    <Home items= {data}/>
    <Footer/>
    </>
  )
}

export default App
