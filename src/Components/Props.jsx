import React from 'react'
import { Link } from 'react-router-dom'
export default function Props({name}) {
  return (
    <div>
        <h1>Welcome to {name}</h1>
      <Link to='/'><button style={{color:'white',backgroundColor:'black',padding:5,margin:20,borderRadius:5,borderColor:'blue',borderWidth:5,marginLeft:70}}>Return</button></Link>
    </div>
  )
}
