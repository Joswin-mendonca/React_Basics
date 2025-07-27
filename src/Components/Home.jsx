import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
export default function Home() {
  const WebStyle = {
    color:'white',
    backgroundColor:'black',
    padding:'50 20 50 20',
    margin:20,
    borderRadius:50,
    borderColor:'blue',
    borderWidth:10,
    fontFamily:'monospace',
    fontSize:20
  }
  const navigate = useNavigate();
  const handleNavigate = ()=>{
    navigate('/Example')
  }
  return (
    <div >
      <Link to='/ArrayFunction'><button style={WebStyle}>ArrayFunction</button></Link>
      <Link to='/ArrayMethod'><button style={WebStyle}>ArrayMethod</button></Link>
      <button style={WebStyle} onClick={handleNavigate}>Example</button>
      <Link to='/DestructObject'><button style={WebStyle}>DestructObject</button></Link>
      <Link to='/Destructing'><button style={WebStyle}>Destructing</button></Link>
      <Link to='/ImportModules'><button style={WebStyle}>ImportModules</button></Link>
      <Link to='/SpreadOperator'><button style={WebStyle}>SpreadOperator</button></Link>
      <Link to='/TernaryOperator'><button style={WebStyle}>TernaryOperator</button></Link>
      <Link to='/Props'><button style={WebStyle}>Props</button></Link>
      <Link to='/UseState'><button style={WebStyle}>Use state</button></Link>
      <Link to='/UseEffect'><button style={WebStyle}>Use Effect</button></Link>
      <Link to='/Counter'><button style={WebStyle}>Counter</button></Link>
      <Link to='/BasicButton'><button style={WebStyle}>Basic Button</button></Link>
      <Link to='/BasicTable'><button style={WebStyle}>Basic Table</button></Link>
      <Link to='/NewTypo'><button style={WebStyle}>NewTypo</button></Link>
      <Link to='/RecipeReviewCard'><button style={WebStyle}>RecipeReviewCard</button></Link>
      <Link to='/Insert'><button style={WebStyle}>Insert</button></Link>
      <Link to='/View'><button style={WebStyle}>View</button></Link>
      <Link to='/Qouteapi'><button style={WebStyle}>Qouteapi</button></Link>
    </div>
  )
}