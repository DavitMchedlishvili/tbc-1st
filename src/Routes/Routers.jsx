import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import About from '../Pages/About/About'
import Contact from '../Pages/Contact/Contact'
import data from '../data'

const Routers = () => {
  return (
    <Routes>
       <Route path='/' element= {<Home items = {data}/>} />
       <Route path='/about' element= {<About/>} />
       <Route path='/contact' element= {<Contact/>} />
    </Routes>
  )
}

export default Routers