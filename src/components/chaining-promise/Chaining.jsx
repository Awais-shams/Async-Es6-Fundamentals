import React from 'react'
import { useState,useEffect } from 'react'


const Chaining = () => {

   
    const [data,setData]=useState([])
    const [data1,setData1]=useState([])
    function chainingData(){

    fetch("https://jsonplaceholder.typicode.com/posts").then((response)=>response.json()).then((res)=>{
        setData(res)
        console.log(res)
        return fetch(`https://jsonplaceholder.typicode.com/posts/${res[1].id}/comments`).then((response2)=>response2.json()).then((res2)=>{
          setData1(res2)
          console.log(res2)
        })
    })
   
   }
   
   useEffect(()=>{
chainingData()
   
   },[])

  return (
    <div>

      <h1>Chaining</h1>
      {
        data1.map((items,index)=>{
          return <h1 key={index}>{items.name}</h1>
        })
      }

    </div>
  )
}

export default Chaining