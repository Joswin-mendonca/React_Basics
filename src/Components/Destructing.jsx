import React from 'react'
import { Link } from 'react-router-dom'
export default function Destructing() {
    const Myarray = [1,2,3,4,5]
    const Vehicle =["car","bus","truck"]
    const [num1,,,,num5] = Myarray
    const a = Vehicle[0]
    const sum =[12+4,1+3]
    const [m,n] =sum
  return (
    <div>
      {Myarray}
      <h1>{num1}</h1>
      {/* <h1>{num2}</h1>
      <h1>{num3}</h1>
      <h1>{num4}</h1> */}
      <h1>{num5}</h1>
      <h1>{Vehicle}</h1>
        <h1>{a}</h1>
        <h1>{m}</h1>
        <h1>{n}</h1>
        <br/>
      <Link to='/'><button style={{color:'white',backgroundColor:'black',padding:5,margin:20,borderRadius:5,borderColor:'blue',borderWidth:5,marginLeft:70}}>Return</button></Link>
    </div>
  )
}
