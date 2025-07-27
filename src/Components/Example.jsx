import React from 'react'
import { Link } from 'react-router-dom'
export default function Example() {
    const fruits =["Apple","Mango","Banana"]
  return (
    <div>
        {fruits.map((health)=>(
            <ul><li>{health}</li></ul>
            
        ))}
      
      {fruits.map((health,index)=>(
            <ol typeof='2'><li>a</li></ol>
            
        ))}
        <br/>
        <Link to='/'><button style={{color:'white',backgroundColor:'black',padding:5,margin:20,borderRadius:5,borderColor:'blue',borderWidth:5,marginLeft:70}}>Return</button></Link>
    </div>
  )
}
