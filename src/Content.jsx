import React from 'react'
import "./content.css"

const Content = () => {
  return (
    <div className='content-container container'>
      
      <div className='bio'> 
      <h1> It's me Mario</h1>
        <p className='first-text'>Hi, my name is <span>Davit Mchedlishvili</span>, I love to introduce myself to you as a <span>Web-Developer</span>.
          Right now I have no experience in this field but one day I might be your co-worker... who knows...
        </p>

        <p className='second-text'>
          This is my 1st homework for <span>TBC-ACADEMY</span>. navigation links are not clickable, only github button is working for this moment.
        </p>
      </div>
      <div className='photo-of-me'>

      </div>
    </div>
  )
}

export default Content