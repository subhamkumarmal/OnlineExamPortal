import React, { useState } from 'react';
import Axios from 'axios';
import { useHistory} from 'react-router-dom';
import AllData from '../js/data';
import '../css/exam1.css';

const arr=["wrong","wrong","wrong","wrong","wrong","wrong","wrong","wrong","wrong","wrong"];

const ExamPage = () =>{
    
      
    let history=useHistory(); 
    

    const check=()=>{
        var con=0;
        for(var i=0;i<arr.length;i++){
            if(arr[i]=="right"){
                con++;
                console.log("woowo");
            }
            console.log(arr[i]);
        }
        console.log(con);
    
    }

    const getValues =(e)=>{
       
      arr[e.target.name]=e.target.value;
      console.log(arr);
    }

    const consoleValue=(e)=>{
        e.preventDefault();
        console.warn("amar ar",arr);
        var con=0;
        for(var i=0;i<arr.length;i++){
            if(arr[i]=="right"){
                con++;
                console.log("woowo");
            }
            console.log(arr[i]);
        }
        console.log(con);
        
          Axios.post("http://localhost:4004/answershit",{           
            Marks : con,
            Id : nRadio.Id,
            Name : nRadio.Name

          }).then((Data)=>{
              console.log(Data.data);
              if(Data.data==="DonePage"){
                 history.push({
                     pathname : "submit",
                     state : { message:"alreadyDone"}});
              }
              else if(Data.data==="Submit"){
                  history.push({
                      pathname : "submit",
                      state : {message : "submit"}
                  })
              }
              else if(Data.data==="Null"){
                  history.push({
                      pathname : "submit",
                      state : {message : "null"}
                  })
              }

          }).catch((err)=>{
              console.log("something went wrong while fatching data from Answersshirt");
          })
        //   console.log(nRadio.R1);
        //   console.log(nRadio.R2);
    }
    
    const [nRadio,setRadio]=useState({
        Id : 0,
        Name : " "
    });

    const InputValues =(e)=>{
        console.log(arr);
        setRadio({...nRadio,
            [e.target.name]:e.target.value
                } )
        console.warn("erorr",arr);
    }
   return(
       <>
      <div className="exam1_main container">
          <div className="exam1_inside col-12">
            <div className="headExam">
                <h3 id="headLuck">Best of Luck For Examiation</h3>
            </div>

            <form>
                  
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

         <div className="inputSubmitArea">
         <input className="inputFill" type="text" name="Name" autoComplete="off" onChange={InputValues} placeholder="Enter Name" required  autoSave="off"/><br />
         <input className="inputFill" type="number" name="Id" autoComplete="off" onChange={InputValues} placeholder="Enter Id" required/><br />
         <button className="submitButton" type="submit" onClick={consoleValue}>submit</button>
         </div> 

            </form>

            

            
        {/* <form>
        <ul>
        <br /> <div>
             <li>ভারতে কত রাজ্য আছে ?</li>
             <ol>
                 <li><span>১৩</span><input type="radio" name="R1" onChange={getValues} value="right" /></li>
                 <li><span>২২</span> <input type="radio" name="R1"  onChange={getValues}  value="w"/></li>
                 <li><span>২৯</span> <input type="radio" name="R1"  onChange={getValues}  value="w" /></li>
                 <li><span>১০</span> <input type="radio" name="R1"  onChange={getValues}  value="w"/></li>
             </ol>
             </div><br />

             <div>
             <li>পশ্চিম বেঙ্গলের রাজধানী কী ?</li>
             <ol>
                 <li><span>দিল্লী</span><input type="radio" name="R1" onChange={getValues} value="right" /></li>
                 <li><span>কাঠমান্ডু</span> <input type="radio" name="R1"  onChange={getValues}  value="w"/></li>
                 <li><span>থিম্পু</span> <input type="radio" name="R1"  onChange={getValues}  value="w" /></li>
                 <li><span>কলকাতা</span> <input type="radio" name="R1"  onChange={getValues}  value="w"/></li>
             </ol>
             </div><br />

             <div>
             <li>ভারতের রাজধানী কি?</li>
             <ol>
                 <li><span>কাঠমান্ডু</span><input type="radio" name="R1" onChange={getValues} value="right" /></li>
                 <li><span>দিল্লী</span> <input type="radio" name="R1"  onChange={getValues}  value="w"/></li>
                 <li><span>থিম্পু</span> <input type="radio" name="R1"  onChange={getValues}  value="w" /></li>
                 <li><span>কলকাতা</span> <input type="radio" name="R1"  onChange={getValues}  value="w"/></li>
             </ol>
             </div><br />

             <div>
             <li>ইংরেজীতে অলস এর অর্থ কী ?</li>
             <ol>
                 <li><span>Weak</span><input type="radio" name="R1" onChange={getValues} value="right" /></li>
                 <li><span>Energetic</span> <input type="radio" name="R1"  onChange={getValues}  value="w"/></li>
                 <li><span>Lazy</span> <input type="radio" name="R1"  onChange={getValues}  value="w" /></li>
                 <li><span>Healthy</span> <input type="radio" name="R1"  onChange={getValues}  value="w"/></li>
             </ol>
             </div><br />

             <div>
             <li>পৃথিবীর ইংরেজি অর্থ কী ?</li>
             <ol>
                 <li><span>World</span><input type="radio" name="R1" onChange={getValues} value="right" /></li>
                 <li><span>Earth</span> <input type="radio" name="R1"  onChange={getValues}  value="w"/></li>
                 <li><span>Ocean</span> <input type="radio" name="R1"  onChange={getValues}  value="w" /></li>
                 <li><span>Sky</span> <input type="radio" name="R1"  onChange={getValues}  value="w"/></li>
             </ol>
             </div><br />

             <div>
             <li>ইংরেজীতে ঝাড়ু এর অর্থ কী ?</li>
             <ol>
                 <li><span>Broom</span><input type="radio" name="R1" onChange={getValues} value="right" /></li>
                 <li><span>Sweep</span> <input type="radio" name="R1"  onChange={getValues}  value="w"/></li>
                 <li><span>wipe</span> <input type="radio" name="R1"  onChange={getValues}  value="w" /></li>
                 <li><span>Mop</span> <input type="radio" name="R1"  onChange={getValues}  value="w"/></li>
             </ol>
             </div><br />

             <div>
             <li>ইংরেজীতে ক্ষুধার্ত এর অর্থ কী ?</li>
             <ol>
                 <li><span>Like</span><input type="radio" name="R1" onChange={getValues} value="right" /></li>
                 <li><span>See</span> <input type="radio" name="R1"  onChange={getValues}  value="w"/></li>
                 <li><span>Buy</span> <input type="radio" name="R1"  onChange={getValues}  value="w" /></li>
                 <li><span>Hungry</span> <input type="radio" name="R1"  onChange={getValues}  value="w"/></li>
             </ol> 
             </div><br />
            
             <div>
             <li>বিয়োগ করুন : ৫৭৪০৪৩ - ২৫৬৯৫২ ? </li>
             <ol>
                 <li><span>২৩৫৮৯০</span><input type="radio" name="R1" onChange={getValues} value="right" /></li>
                 <li><span>৩৫৮৫৬০ </span> <input type="radio" name="R1"  onChange={getValues}  value="w"/></li>
                 <li><span>৩১৭০৯১</span> <input type="radio" name="R1"  onChange={getValues}  value="w" /></li>
                 <li><span>২৫৬৯৫২</span> <input type="radio" name="R1"  onChange={getValues}  value="w"/></li>
             </ol>
             </div><br />

             <div>
             <li>যোগ করুন : ২৫২৫৬৯ + ২৫৬৯৫৭ ?</li>
             <ol>
                 <li><span>৫০৯৫২৬ </span><input type="radio" name="R1" onChange={getValues} value="right" /></li>
                 <li><span>৯৫২৫৬৯</span> <input type="radio" name="R1"  onChange={getValues}  value="w"/></li>
                 <li><span>৫৫২৫৬৯</span> <input type="radio" name="R1"  onChange={getValues}  value="w" /></li>
                 <li><span>৫২৫৬৯২</span> <input type="radio" name="R1"  onChange={getValues}  value="w"/></li>
             </ol>
             </div><br />

             <div>
             <li>শূন্যস্থান পূরণ করুন : ১ ৩ _?_ ৭  ৯ ?</li>
             <ol>
                 <li><span> ২</span><input type="radio" name="R1" onChange={getValues} value="right" /></li>
                 <li><span> ০</span> <input type="radio" name="R1"  onChange={getValues}  value="w"/></li>
                 <li><span > ৬</span> <input type="radio" name="R1"  onChange={getValues}  value="w" /></li>
                 <li><span> ৫</span> <input type="radio" name="R1"  onChange={getValues}  value="w"/></li>
             </ol>
             </div><br />

             
         </ul>
         <div className="inputSubmitArea">
         <input className="inputFill" type="text" name="Name" autoComplete="off" onChange={InputValues} placeholder="Enter Name" required /><br />
         <input className="inputFill" type="number" name="Id" autoComplete="off" onChange={InputValues} placeholder="Enter Id" required/><br />
         <button className="submitButton" type="submit" onClick={consoleValue}>submit</button>
         </div> 
        </form> */}

  
            </div>
          </div>
     
       </>
   )
}

export default ExamPage;