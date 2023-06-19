import React from 'react'
import { useSearchParams } from 'react-router-dom'
// for using search params and setsearchparams this is how it is used to implement search param 
const Filter = () => {
    const [searchparams,setSearchparams]= useSearchParams();
    const age = searchparams.get('age')
    const city = searchparams.get('city')
  return (
    <div>Filter Page
        <h2>Age is : {age}</h2>
        <h2>City is :{city}</h2>
        <button onClick={()=>setSearchparams({age:40,city:"ktm"})} >Set Age in Query Param</button>
    </div>
  )
}

export default Filter