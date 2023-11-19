import { Leader_one_to_eight_data } from '../data/data';
import { useState } from 'react';
import './Leader.css'
const liters=['أ','ب','ج','د','ه','و','ز','ح','ط','ي','ك','ل','م','ن','س','ع','ف','ص','ق','ر','ش','ت','ث','خ','ذ','ض','ظ','غ']

const handleClick2=(e)=>{
    let x=e.target.id;
    let elemnt=document.getElementById(x);
    let num=elemnt.getAttribute('class');
    elemnt.innerHTML=Leader_one_to_eight_data.date[num];
}
export const Leader = () => {
  const[LeaderState,setLeaderState]=useState(true);
    return (
    <div className='Leader'> 
    <div className="header" dir='rtl'>
    <p> فقرة </p>
        <button className="btn" type="button">
                <strong>ليدر</strong>
                <div id="container-stars">
                    <div id="stars"></div>
                </div>

                <div id="glow">
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>
        </button>

    </div>
        {LeaderState&&<div className="body" dir='rtl'>
            {liters.map((e,index)=>{
                return (
                    <li className="icon facebook" key={index}>
                    <span className="tooltip">{e}</span>
                    <span></span>
                  </li>
                )
            })}
        </div>}
        {!LeaderState&&<div className="body2" dir='rtl'>
            {Leader_one_to_eight_data.date.map((e,index)=>{
                return (
                    <button id={`btn${index}`} className={index}  key={index} onClick={handleClick2}>
                {index+1}
                    </button>
                )
            })}
        </div>}
        <div className='footer'>
        {LeaderState&&<button className='go' onClick={()=>{setLeaderState(false)}}>go</button>}
        {!LeaderState&&<button className='go' onClick={()=>{setLeaderState(true)}}>back</button>}
        </div>
    </div>
  )
}
