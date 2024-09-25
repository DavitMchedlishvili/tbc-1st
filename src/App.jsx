
import './App.css'
import Content from './Content/Content'
import data from './data'
import Footer from './Footer/Footer'
import Header from './Header/Header'

function App() {
 
  return (
    <>
    <Header/>
    <Content  items= {data}/>
    <Footer/>
    </>
  )
}

export default App
