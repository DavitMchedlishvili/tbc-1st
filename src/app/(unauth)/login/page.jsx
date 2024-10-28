"use client"

import React from 'react'
import { authenticate } from '../../../lib/action'

const LoginPage = () => {

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = {
            username: e.target.username.value,
            password: e.target.password.value
        }
        console.log(formData);
        const result = await authenticate(formData)
        console.log(result)
    }


    

  return (
    <div>
        <form onSubmit={handleSubmit} action="login-form">
            <input type="text" name="username" placeholder='Username' required/>
            <input type="password" name="password" placeholder='Password' required />
            <button type='submit'>Log In</button>
        </form>
        
    </div>
  )
}

export default LoginPage
