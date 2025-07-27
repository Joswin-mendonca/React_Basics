import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const ArrayObject =[
    {name:'Joswin',age:20,department:['IT','Management']},
    {name:'Messi',age:37,department:['Sports','IT']},
    {name:'John',age:25,department:['Electronics','automobile']}
]


export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>SL</TableCell>
            <TableCell align="right">NAME</TableCell>
            <TableCell align="right">AGE</TableCell>
            <TableCell align="right">DEPARTMENT</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {ArrayObject.map((arraydata,index)=>(
            <TableRow>
              <TableCell component="th" scope="row">
                {index+1}
              </TableCell>
              <TableCell align="right">{arraydata.name}</TableCell>
              <TableCell align="right">{arraydata.age}</TableCell>
              <TableCell align="right">{arraydata.department.map((data=><ul>{data}</ul>))}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
