import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'

const Routers = () => {
  return (
    <Routes>
       <Route path='/' element= {<Home/>} />
       <Route path='/about' element= {<About/>} />
       <Route path='/contact' element= {<Contact/>} />
    </Routes>
  )
}

export default Routers