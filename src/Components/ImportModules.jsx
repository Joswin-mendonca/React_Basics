import React from 'react'
import { Link } from 'react-router-dom'
import { name, sname } from './ExportModules'
import { goat, sgoat } from './ExportModules'
import greet from './ExportModules'
import { add,sub } from './ExportModules'
export default function ImportModules() {
    console.log(greet('jossss'))
    console.log(add(5,3))
    console.log(sub(5,3))
  return (
    <div>
        <h1>{name}</h1>
        <h1>{sname}</h1>
        <h1>{goat}</h1>
        <h1>{sgoat}</h1>
        <h1>{sgoat}</h1>


      <Link to='/'><button style={{color:'white',backgroundColor:'black',padding:5,margin:20,borderRadius:5,borderColor:'blue',borderWidth:5,marginLeft:70}}>Return</button></Link>
    </div>
  )
}
