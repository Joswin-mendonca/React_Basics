import React from 'react'
import { Link } from 'react-router-dom'
export default function TernaryOperator() {
  const score = 60;
  const backgroundColor =
  score>=80 ? 'green':
  score>=60 ? 'lightgreen':
  score>=50 ? 'lightyellow':'lightgrey'

  return (
    <div style={{backgroundColor}}>
      {score>=80 ? 'Grade : A' :
      score>=60 ? 'Grade : B' :
      score>=50 ? 'Grade : C' : 'Grade : F' 
      }
      <br/>
       <Link to='/'><button style={{color:'white',backgroundColor:'black',padding:5,margin:20,borderRadius:5,borderColor:'blue',borderWidth:5,marginLeft:70}}>Return</button></Link>
    </div>
  )
}
