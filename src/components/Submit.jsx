import React from 'react';
import {useLocation} from 'react-router-dom';
import '../css/comonpage.css';
import DoneImg from '../img/imgess.png';
import HaveDone from '../img/havedone.png';

const Submit = () =>{
    const location = useLocation();

    return(
        (location.state.message==="submit") ?
        <>
        <div className="comonpage">
            <div className="inside_common">
        You have submited your exam successfully 
         wait for your result 
         <img id="doneImg" src={DoneImg} alt="doneImg" />
            </div>
        </div>
        </>
        :
        (location.state.message==="alreadyDone") ?
        <>
        <div className="comonpage">
            <div className="inside_common">
                <p className="pt-4">
            You Have Already Submited Your <span id="exam">Exam </span> 
            Just Wait For Your Result.
            Your Result Will Be Decleared <span id="exam">Soon...</span>
            <img id="doneImg" src={HaveDone} alt="doneImg" />
            </p>
            </div>
        </div>
   
        </>
        :
        <>
        This page is Null..
        </>
    )
    
}

export default Submit;