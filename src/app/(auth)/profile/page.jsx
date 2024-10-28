import "./index.css"
import Me from "../../../../public/assets/Me.jpg"

const Profile = () => {
  return (
   
        <div className="profileContainer">
            <div className="profileCard">
                <img 
                src={Me.src} 
                alt="Profile" 
                className="profilePicture"
                />
                <div className="profileName">
                    <div className="firstName">
                        <label>Firstname: </label>
                        <input type="text" value={"Daviti"} readOnly />
                    </div>
                    <div className="lastName">
                        <label>Lastname: </label>
                        <input type="text" value={"Mchedlishvili"} readOnly />    
                    </div>
                    </div>
                <p className="profileTitle">Frontend WEB Developer</p>
                <p className="profileBio">
                Passionate web developer with experience in building dynamic and responsive websites. Skilled in HTML, CSS, JavaScript, and React.
                </p>
                <div className="profileDetails">
                    <div className="lastName">
                        <label><strong>Email: </strong></label>
                        <input type="email" value={"YourEmail@tbcacademy.edu.ge"} readOnly />    
                    </div>
                    <div className="Phone: ">
                        <label><strong>Phone: </strong></label>
                        <input type="email" value={"+995 555 12 13 14"} readOnly />    
                    </div>
                    <div className="Location:">
                        <label><strong>Location: </strong></label>
                        <input type="email" value={"Georgia, Tbilisi"} readOnly />    
                    </div>
                <p><strong>Phone:</strong> +995 555 12 13 14</p>
                <p><strong>Location:</strong> Georgia, Tbilisi</p>
                </div>
            </div>
        </div>
    
  )
}

export default Profile
