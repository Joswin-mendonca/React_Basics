import React from 'react'
import { Link } from 'react-router-dom'

export default function DestructObject() {
    const vehicle={
        brand:"Ford",
        type:"Car",
        year:2024,
        color:"red",
        registration:{
            city:"Mangalore",
            state:"Karnataka",
            country:"India"
        }
    }
    Destruct(vehicle)
    var msg
    function Destruct({brand,registration:{city},color,year}){
        msg = "My "+brand+" is Registered at "+city+" And its colour is "+color+ " in the year " + year
    }
  return (
    <div>
      <h1>{msg}</h1>
      <br/>
      <Link to='/'><button style={{color:'white',backgroundColor:'black',padding:5,margin:20,borderRadius:5,borderColor:'blue',borderWidth:5,marginLeft:70}}>Return</button></Link>
    </div>
  )
}
