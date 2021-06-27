import React, { useState } from 'react';
import AllData from './js/data';

const Am = ()=>{

   const arr=["wrong","wrong","wrong","wrong","wrong","wrong","wrong","wrong","wrong","wrong"];
   const [nC,setC]=useState(0);

    const getValues = (e)=>{
     
        arr[e.target.name]=e.target.value
        console.log(arr);
       

    }
     
    const submitFun = () =>{
        var con=0;
        for(var i=0;i<arr.length;i++){
            if(arr[i]=="right"){
                con++;
            }
           
        }
        console.log(con);

    }
    

    return(<>
    <h1>subham Am </h1>
    <ul>
   {AllData.map((data)=>{
       return(
           <>
           
            <div>
             <li>{data.Question}</li>
             <ol>
                 <li><span>{data.A1}</span><input type="radio" name={data.R} onChange={getValues} value={data.V1} /></li>
                 <li><span>{data.A2}</span> <input type="radio" name={data.R}  onChange={getValues}  value={data.V2}/></li>
                 <li><span>{data.A3}</span> <input type="radio" name={data.R}  onChange={getValues}  value={data.V3} /></li>
                 <li><span>{data.A4}</span> <input type="radio" name={data.R}  onChange={getValues}  value={data.V4}/></li>
             </ol>
             </div>
           </>
       )
   })}
   </ul>
   <button type="submit" onClick={submitFun}>submit</button>
    </>)
}

export default Am;