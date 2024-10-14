// 'use client'

// import { useState } from "react"

// const Sort = ({sortOptions, onSort}) =>{

//     const [selectedOption, setSelectedOption] = useState(null);
//     const sortHandler = (sortByOption) => {
//         setSelectedOption(sortByOption);
//         onSort(sortByOption)
//     }


//     return(

//     <div className="sort-Btns">
//         {sortOptions.map((option) => (
//         <button
//           key={option.value}
//           onClick={() => sortHandler(option)}
//           className={selectedOption === option ? "selected" : ""}
//         >
//           {option.label}
//         </button>
//       ))}
//     </div>
//     )



// }


// export default Sort