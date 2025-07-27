import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Counter() {
    const[num,setNum]=useState(0)
    const increment = ()=>{
        setNum(num+1)
    }
    const decrement = ()=>{
        setNum(num-1)
    }
  return (
    <div>
        <center>
        <h1>Count:{num}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        </center>
    <br/>
      <Link to='/'><button style={{color:'white',backgroundColor:'black',padding:5,margin:20,borderRadius:5,borderColor:'blue',borderWidth:5,marginLeft:70}}>Return</button></Link>
    </div>
  )
}
