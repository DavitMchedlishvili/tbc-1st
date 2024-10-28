import "./index.css"
import { cookies } from "next/headers"
import { refreshAccessToken } from "../../../lib/action"






export async function ProfilePage (){

    const cookieStore = cookies();
    let token = cookieStore.get("accessToken");

    if(!token){
        const refreshResponse = refreshAccessToken();
        if(!refreshResponse.success){
            return <h1>
                Please Log In 
            </h1>
        }
        token = cookieStore.get("accessToken");

    }


    const response = await fetch('https://dummyjson.com/auth/me', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token.value}`,
      }, 
      credentials: 'include' 
    })
    const data = await response.json()
    if(!response.ok){
        return <h1>
            Failed to load profile
        </h1>
    }


  return (
   
        <div className="profileContainer container">
            <h1>
                {data.firstName}
            </h1>
            <h1>{data.lastName}</h1>
            <p>{data.email}</p>
            <img src={data.image} alt="image" />
        </div>
    
  )
}

export default ProfilePage
