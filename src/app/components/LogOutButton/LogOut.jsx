"use client"
import { LogOut } from '../../../lib/action'
import { useRouter } from 'next/navigation'






const LogOutButton = () => {

    const router = useRouter();
    const handleLogOut = async ()=>{
        const result = await LogOut();
        if(result.success){
            router.push("/login");
        }else{
            alert(result.message);
        }
    }


    return (
    <button onClick={handleLogOut}>
        Logout
    </button>
  )
}

export default LogOutButton