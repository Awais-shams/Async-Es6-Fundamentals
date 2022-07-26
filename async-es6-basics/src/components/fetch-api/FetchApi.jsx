import React from 'react'
import { useState,useEffect } from 'react'

const FetchApi = () => {

  const [data,setData]=useState([])


  // Fetch Api

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>response.json())
    .then((data)=>{
        setData(data)
        console.log(data)
    })
    .catch((err)=>{
        console.log(err);
    })
  },[])


  // for Each Method Implementation
  const obj=(data.forEach((items)=>items.id+2))
  
  console.log(obj)

  return (
    <>
     <div>
        <h3>Map Method</h3>
        {
          // Map Method Implementation
            data.map((ele,index)=>{
                return ele.id<5?<h1 key={index}>{ele.username}</h1>:null
                        
                
            })
            
        }
      
    </div>
    <div>
      <h1>forEach Method</h1>
      {/* {
        obj.map((items,index)=>{
          return <h1 key={index}>{items.name}</h1>
        })
      } */}
    </div>

      <div>
        <h1>Filter Method</h1>
        {
          data.filter((res)=>res.id>3).map((newRes)=>(
             <h1>{newRes.name}</h1>
          ))
        }
      </div>

    </>

    
   
   
   
  )
}

export default FetchApi