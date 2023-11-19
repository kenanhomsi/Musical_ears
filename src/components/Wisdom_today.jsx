import{wisdom_tody_data} from '../data/data'
import { useState } from 'react'
import './Wisdom_tody.css'
const Wisdom=({widom})=>{
    return(
        <div className='Wisdom'>
                
                <h2>{widom}</h2>
        </div>
    )
}
export const Wisdom_today = () => {
    const [wisdomNum,setWisdomNum]=useState(-1);
  return (
    <div className='Wisdom_today'>
        
        <div className="header" dir='rtl'>
            <p>  فقرة </p>
            <button className="Wisdom_today_btn" type="button">
                <strong>حكمتك اليوم</strong>
                <div id="container-stars">
                    <div id="stars"></div>
                </div>

                <div id="glow">
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>
            </button>
        </div>
      
        <div className="body2" dir='rtl'>
            {wisdom_tody_data.data.map((e,index)=>{
                return (
                    <li className="icon facebook" key={index}>
                    <span className="tooltip">{e}</span>
                    <span>{index+1}</span>
                  </li>
                )
            })}
        </div>
        <div className='footer'>
            {wisdomNum!==-1 && wisdomNum >0 && wisdomNum <= 5 && <button className='btnsInWisdom' onClick={()=>{setWisdomNum(pre=>pre-1)}}>befor</button>}
            {wisdomNum!==-1 && wisdomNum <= 4 && <button className='btnsInWisdom' onClick={()=>{setWisdomNum(pre=>pre+1)}}>next</button>}
            </div>
    </div>
  )
}
