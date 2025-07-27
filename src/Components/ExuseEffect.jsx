import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
export default function ExuseEffect() {
    const[count, setCount] = useState(0)

    //1)without dependency
    // useEffect(() =>{
    //     setTimeout(() =>{
    //          setCount((count) =>count+1)
    //     },2000)
    // })

    //2)with dependency
    // useEffect(() =>{
    //     setTimeout(() =>{
    //          setCount((count) =>count+1)
    //     },2000)
    // },[])

    //3)with dependency using array with variable
    useEffect(() =>{
        setTimeout(() =>{
             setCount((count) =>count+1)
        },2000)
    },[count])


  return (
    <div>
      <h1>I have Rendered {count} times</h1>

      <Link to='/'><button style={{color:'white',backgroundColor:'black',padding:5,margin:20,borderRadius:5,borderColor:'blue',borderWidth:5,marginLeft:70}}>Return</button></Link>
    </div>
  )
}
