import { useState } from "react";

function Counter(){
    const [number,setNumber] =useState(0);
    function Hendel(e){
        e.stopPropagation();
        setTimeout(()=>{
        setNumber(number+1);},2000)
        console.log(number);
    }
    return(
     <>
     <h1 style={{color:"white"}}>{number}</h1>
     <button onClick={Hendel}></button>

     </>
    );
}
export default Counter;