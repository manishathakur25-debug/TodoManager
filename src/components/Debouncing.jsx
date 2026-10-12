import React from 'react'
import { useState ,useEffect} from 'react'
function Debouncing() {

    const[search,setSearch]=useState('')
    const[Debouncing,setDebouncing]=useState('')
    useEffect(()=>{
        const timer=setTimeout(()=>{
            setDebouncing(search)
        },5000)
        return()=>{
            clearTimeout(timer)
        }
    },[search])
  return ( 
    <div>
        <h1>Debouncing</h1>

        <input type="text"
        placeholder='enter what you want'
        onChange={(e)=>setSearch(e.target.value)}
        />

        <h2>{search}</h2>
        <h2>{Debouncing}</h2>
    </div>
  )
}

export default Debouncing