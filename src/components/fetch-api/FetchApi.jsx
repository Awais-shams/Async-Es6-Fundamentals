import React from 'react'
import { useState,useEffect } from 'react'

const FetchApi = () => {

  const [data,setData]=useState([])


  // Fetch Api

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>response.json())
    .then((message)=>{
        setData(message)
        console.log(message)
    })
    .catch((err)=>{
        console.log(err);
    })
  },[])

  // Reduce Method
  const count=data.reduce((previousValue,currentValue)=>{
    if(currentValue.id){
      previousValue++
    }
    return previousValue
  },0)

  // Find Method
  const findUsername=data.find((mes)=>{
    return mes.name==="Clementine Bauch"}
    )
  //  Destructuring the object
  const {id,name}=findUsername || {}

  // Every Method
  const nameLen=data.every((item)=>{
    return item.name.length>=10
  })

  console.log(nameLen)

  return (
    <>
     <div>
        <h1>Map Method</h1>
        {
          // Map Method Implementation
            data.map((ele,index)=>{
                return ele.id<5?<h3 key={index}>{ele.username}</h3>:null
                        
                
            })
            
        }
      
    </div>

      <div>
        <h1>Filter Method</h1>
        {
          // Applying filter whose id's are greater than 3
          data.filter((res)=>res.id>3).map((newRes,index)=>(
             <h3 key={index}>{newRes.name}</h3>
          ))
        }
      </div>

      <div>
        {/* Calculating the total number of users */}
        <h1>Reduce Method</h1>
        <h3>{`Total Users are: ${count}`}</h3>
      </div>

      <div>
        {/* Finding the user with name */}
        <h1>Find Method</h1>
        <h2>{`Id: ${id}`}</h2>
        <h4>{`Username: ${name}`}</h4>
      </div>


      <div>
        {/* Finding the user with name */}
        <h1>Every Method</h1>
        <h2>{`Name length must be greter than 10: ${nameLen}`}</h2>
      </div>

    </>

    
   
   
   
  )
}

export default FetchApi