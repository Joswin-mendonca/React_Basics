import React from 'react'
import './Style.css'
import image from '../Images/img1.png'
export default function Testing() {
    const mystyle = {
        color:'blue',
        fontSize:'100px',
    }
  return (
    <div>
      <p style={{color:"red",fontSize:'100px',fontFamily:'monospace'}}>Hello I am Joswinn</p>
      <p style={mystyle}>hehehe</p>
      <h1 className='heading'>Helllo</h1>

      <img src={image}/>
    </div>
    
  )
}
