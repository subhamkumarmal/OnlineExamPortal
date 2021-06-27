import React, { useState } from 'react';
import '../css/covid.css';
import '../js/covid';
import Axios from 'axios';
import Exam from '../img/exam.svg';
import ExamPage from '../components/ExamPage';
import {useHistory} from 'react-router-dom';
;



const Covid = ()=>{
    let history=useHistory();

    const [nfill,setFill]=useState({
        name:"",
        password:""
    })

    const changeFun=(e)=>{
      
       setFill({
           ...nfill,
           [e.target.name]:e.target.value
       }
        )
    }

    const onSubmits = (e) =>{
     e.preventDefault();
        console.log("first line of the functions");
         
        Axios.post('http://localhost:4004/getInfo',
        {
            Name: nfill.name,
            Password : nfill.password

        }
        ).then((data)=>{
         
            if(data.data.message!=null){
                if(data.data.message.Password==nfill.password){
                      setFill({name :" ",password :" "})
                     history.push('exampage');                                
                }
                else{
                    
                     setFill({name :" ",password :" "})
                    history.push("/");
                    }
                }
            else{
                history.push("/");
            }
           
        }).catch((err)=>{
            console.log(err);
        });
        
    }

    return(
        <>
        
      <div className="main_div">
     <h5 id="h5" > Welcome To The Examination Portal</h5><br />
          <div className="inside_div">
             
              <div className="col-8">
                  <div className="row ">

                      <div className="col-md-6  same">
                         <img  id="exam" src={Exam} alt="error" />
                      </div>

                      <div className="col-md-6 pt-5 same">
                            <form >
                                <input id="inputValue" type="text" name="name" placeholder="Enter Name"  onChange={changeFun} value={nfill.name} required autoComplete="off"/><br />
                                <input id="inputValue" type="password" name="password" placeholder="Enter password" onChange={changeFun} value={nfill.password}  autoComplete="off" required /><br />
                                <button type="submit" onClick={onSubmits} className="buto">submit</button>
                            </form>
                            
                      </div>

                  </div>
              </div>
          </div>
      </div>
      
        
        </>
    )
}

export default Covid;

