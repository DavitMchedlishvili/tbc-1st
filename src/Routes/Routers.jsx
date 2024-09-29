import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home/Home'
import About from '../Pages/About/About'
import Contact from '../Pages/Contact/Contact'
import data from '../data'
import Assignment from '../Components/Assignment'

const Routers = () => {
  return (
    <Routes>
       <Route path='/' element= {<Home items = {data}/>} />
       <Route path='/about' element= {<About/>} />
       <Route path='/contact' element= {<Contact/>} />
       <Route path='/assignment-3' element={<Assignment/>} />
    </Routes>
  )
}

export default Routers