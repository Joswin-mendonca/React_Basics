import React from 'react'
import image from '../Images/img2.png'
import { Link } from 'react-router-dom'
export default function ArrayMethod() {
    const Array =["a","b","c"]
    const ArrayObject =[
        {name:'Joswin',age:20,department:['IT','Management']},
        {name:'Messi',age:37,department:['Sports','IT']},
        {name:'John',age:25,department:['Electronics','automobile']}
    ]
  return (
    <div>
        <img src={image}/>
        {Array.map((Arraydata =>
            <h3>{Arraydata}</h3>
        ))}
        <h1>{Array}</h1>
        <table border={3} cellPadding={20} cellSpacing={20}>
            <thead>
                <tr>
                    <th>SL.No</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Department</th>
                </tr>
            </thead>
            <tbody>
                {ArrayObject.map((arraydata,index)=>(
                    <tr>
                        <td>{index+1}</td>
                        <td>{arraydata.name}</td>
                        <td>{arraydata.age}</td>
                        <td>{arraydata.department.map((data=><ul><li>{data}</li></ul>))}</td>
                    </tr>
                ))}
                
            </tbody>
        </table>
        <br/>
        <Link to='/'><button style={{color:'white',backgroundColor:'black',padding:5,margin:20,borderRadius:5,borderColor:'blue',borderWidth:5,marginLeft:70}}>Return</button></Link>
    </div>
  )
}
