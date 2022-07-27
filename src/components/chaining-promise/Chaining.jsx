import React from 'react'
import { useState,useEffect } from 'react'


const Chaining = () => {

   
    // const [data,setData]=useState([])
    // const [data1,setData1]=useState([])
   async function chainingData(){

    fetch("https://jsonplaceholder.typicode.com/users").then((res)=>{
        let message= res.json()
        console.log("awaos",message)
                return fetch(`https://jsonplaceholder.typicode.com/comments/${message.id}`)
    });

  
    // chain1.then((newRes)=>{
    //     return fetch(`https://jsonplaceholder.typicode.com/comments/${newRes.id}`)
    // }).then((newRes2)=>newRes2.json()).then((data)=>{
    //     console.log(data)
    // })
   
   }
   
   useEffect(()=>{
chainingData()
   
   },[])

  return (
    <div>Chaining</div>
  )
}

export default Chaining