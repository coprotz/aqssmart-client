import React, { useState } from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import './search.css'


const Search = ({setSearchTerm}) => {

  // const [searchTerm, setSearchTerm] = useState('')
    
  return (         
    <div className="search_1">
        <button><AiOutlineSearch/></button>
        <input 
            type='text' 
            className="search__input"
            placeholder='Type to search...'
            onChange={e => {setSearchTerm(e.target.value)}}
        />             
    </div> 
  
  )
}

export default Search
