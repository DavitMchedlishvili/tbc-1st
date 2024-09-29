import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'

const Layouts = ({children}) => {
  return (
  <>
    <Header/>
    {children}
    <Footer/>
  </>
  )
}

export default Layouts