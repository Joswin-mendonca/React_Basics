import React from 'react'
import { Link } from 'react-router-dom'
export default function SpreadOperator() {
    const array1 = [1,2,3,4,5]
    const array2 = [7,8,9,10,11]
    const myarray = [...array1,...array2]
    const vehicle={
            brand:"Ford",
            type:"Car",
            year:2024,
            color:'black'
    }
    const registration={
            city:"Mangalore",
            state:"Karnataka",
            country:"India",
            color:"White"
        }
    const Veh ={...vehicle,...registration}

  return (
    <div>
      <h2>{myarray}</h2>
      <h2>{console.log(Veh)}</h2>
      <Link to='/'><button style={{color:'white',backgroundColor:'black',padding:5,margin:20,borderRadius:5,borderColor:'blue',borderWidth:5,marginLeft:70}}>Return</button></Link>
    </div>
  )
}
