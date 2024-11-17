'use client'

import { useEffect, useState } from "react"
import "./searchBar.css"
import { useRouter } from "next/navigation"
import { useDebounce } from "../../../hooks/useDebounce"
import Search from "../../../../../public/assets/search-symbol.png"
import { useLocale } from "next-intl"



export default function SearchBar({searchType}){
    const [searchTerm, setSearchTerm] = useState("")
    const debouncedValue = useDebounce(searchTerm, 300);
    const router = useRouter();
    const locale = useLocale();



    useEffect(() =>{
        if(debouncedValue){
            router.push(`/${locale}/${searchType}/?search=${debouncedValue}`)
        }else{
            router.push(`/${locale}/${searchType}`)
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


