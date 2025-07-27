import React from 'react'
import { Link } from 'react-router-dom'

export default function ArrayFunction() {
    //normal function
    function Arrow(){
        return(<h1>Helloo, Good Evening</h1>)
    }

    //Arrow using single line statement
    const Arrowone =() => <h1>I Said Good EVENINGG!!!</h1>

    //Arrow using  multi line statement
    const Arrowtwo =() =>{
        return(
            <h1>THANK YOU</h1>
        )
    }
    const handleclick=() =>{
        return(
            alert("Button clicked!!!!")
        )
    }
    const handleclickgreet=(name)=>{
        return(
            alert(`Hello,${name}`)
        )
    }
  return (
    <div>
      <Arrow/>
      <Arrowone/>
      <Arrowtwo/>
      <button onClick={handleclick}>CLICK ME</button>
      <button onClick={()=>alert('PITHAMBAR AHEAD!!')}>CLICK</button>
      <button onClick={()=>handleclickgreet("Joswin")}>New Button</button>
      <br/>
      <Link to='/'><button style={{color:'white',backgroundColor:'black',padding:5,margin:20,borderRadius:5,borderColor:'blue',borderWidth:5,marginLeft:70}}>Return</button></Link>
    </div>
  )
}
//export default ArrayFunction