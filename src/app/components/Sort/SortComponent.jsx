'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"
import "./sortComponent.css"








const SortComponent = ({sortOptions}) => {
  
  
  const router = useRouter();
  const [sortValue, setSortValue] = useState("name-asc")
  console.log(sortValue)
  const value = sortOptions.value
   






  const handlerSort = (value) =>{
    router.push(`/products/?sortBy=${value}`)
    console.log(value)
    setSortValue((c) => c=value) 
  }



  return (
    <>
   <select value={sortValue} className="select" name="sort" onChange={(e)=>{handlerSort(e.target.value)}}>
    <option value={'price-asc'}>{"Price: Low to High"}</option>
    <option value={'price-desc'}>{'Price: High to Low'}</option>
    <option value={sortOptions.value}>{sortOptions.label}</option>
    <option value={sortOptions.value}>{sortOptions.label}</option>
   </select>
    </>
  )
}

export default SortComponent