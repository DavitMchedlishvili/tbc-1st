import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home/Home'
import About from '../Pages/About/About'
import Contact from '../Pages/Contact/Contact'
import data from '../data'
import Assignment from '../Components/Assignment'
import Blog from '../Pages/Blog/Blog'
import Profile from '../Pages/Profile/Profile'

const Routers = () => {
  return (
    <Routes>
       <Route path='/' element= {<Home items = {data}/>} />
       <Route path='/blog' element= {<Blog items= {data}/>}></Route>
       <Route path='/about' element= {<About/>} />
       <Route path='/contact' element= {<Contact/>} />
       <Route path='/profile' element= {<Profile/>}/>
       <Route path='/assignment-3' element={<Assignment/>} />
    </Routes>
  )
}

export default Routers