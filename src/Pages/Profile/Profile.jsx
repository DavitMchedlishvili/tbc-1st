import React from 'react'
import ProfilePhoto from "../../assets/Me.jpg"
import "./profile.css"

const Profile = () => {
  return (
    <main>
        
        <div className="container">
            <h1>Personal Information</h1>
            <div className="profile-container">
            <img src={ProfilePhoto} alt="photo" className='profilePic'/>
            <form className='profile-form'>
                <div className="profile-group">
                    <label>Firstname:</label>
                    <input type="text" value={"Daviti"} readOnly />
                </div>
                <div className="profile-group">
                <label>Lastname:</label>
                <input type="text" value={"Mchedlishvili"} readOnly />
                </div>
                <div className="profile-group">
                <label>Email:</label>
                <input type="text" value={"davit.mchedlishvili.2396@gmail.com"} readOnly />
                </div>
            </form>
            </div>
        
        </div>
    </main>
  )
}

export default Profile
