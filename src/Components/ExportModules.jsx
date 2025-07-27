//1 a)Inline named exports
export const name ="Joswin"
export const sname ="Mendonca"

//1 b)All at once in the bottom
const goat = "Messi"
const sgoat = "Lionel"
export{goat,sgoat}

const add = (a,b)=> (a+b)
const sub = (a,b)=> (a-b)
export{add,sub}
 

//2) Default
const greet=(name)=>`hello,${name}`;
export default greet

