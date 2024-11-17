'use client'

import { useEffect, useState } from "react"
import "./searchBar.css"
import { useRouter } from "next/navigation"
import { useDebounce } from "../../../hooks/useDebounce"
import Search from "../../../../../public/assets/search-symbol.png"



export default function SearchBar({searchType}){
    const [searchTerm, setSearchTerm] = useState("")
    const debouncedValue = useDebounce(searchTerm, 300);
    const router = useRouter();
    
    useEffect(() =>{
        if(debouncedValue){
            router.push(`/${searchType}/?search=${debouncedValue}`)
        }else{
            router.push(`/${searchType}`)
        }
    },[debouncedValue, router])


    return (
    <>
    <div className="searchBar-container container">
        <img className="searchBar-icon" src={Search.src} alt="search-icon" />
        <input className="searchBar-input" type="text" value={searchTerm} placeholder="looking for something ?" onChange={(e) => {
            setSearchTerm(e.target.value)
        }}/>
    </div>
    </>
    )
    

}


