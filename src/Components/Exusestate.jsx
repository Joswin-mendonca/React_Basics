import React from 'react'
import { useState } from 'react'
export default function Exusestate() {
    //step 1
    const[state,setState] = useState("Black")
    const changeColor =()=> {
        setState('Blue')
    }

    //step 2
    const[compname,setCompname] = useState("Codelabs")
    const[comptype,setComptype] = useState("Software company")
    const[compyear,setCompyear] = useState("2013")

    //step 3(declaring using objects)
    const[company,setCompany] = useState({
        companyname:'Codelab Systems',
        companytype:'Software Company',
        year:'2013'
    })
    //name = "Ronaldo"
    const[name,setAbc]=useState("Ronaldo")
    const changeGoat= ()=>{
        setAbc('Messi')
    }
    //step 4(declaring using spread operator) 

    
    return (
    <div>
        {/* step 1 */}
        <h1 >My Favourite color is {state}</h1>
        <button onClick={changeColor}>Change</button>
        <button onClick={()=>setState('Black')}>previous</button>

        {/* step 2(multiple states) */}
        <h1>Welcome to {compname}</h1>
        <h1>{comptype} since {compyear}</h1>

        {/* step 3(declaring using objects) */}
        <h1>Welcome to {company.companyname}</h1>
        <h1>{company.companytype} since {company.year}</h1>
        

        <h1 >{name} is the GOAT</h1>
        <button onClick={changeGoat}>Change</button>
        <button onClick={()=>setAbc(name)}>previous</button>
        {/* step 4(declaring using spread operator) */}


        
        
    </div>
  )
}
