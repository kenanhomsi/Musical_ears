import { useState } from 'react'
import './Missing_part.css'
import choes1 from '../assets/الجزء المفقود/option1.jpg'
import choes2 from '../assets/الجزء المفقود/option2.jpg'
import choes3 from '../assets/الجزء المفقود/option3.jpg'

export const Missing_part = () => {
  const [state,setState]=useState(false);
  return (
    <div className='Missing_part'>
        <div className="header" dir='rtl'>
        <p> فقرة </p>
            <button className="btn" type="button">
              <strong>الجزء المفقود</strong>
              <div id="container-stars">
                <div id="stars"></div>
              </div>

              <div id="glow">
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
            </button>
        </div>
        <div className="body">
        <div className='choeses'>
          <div >
            <img src={choes1} alt="" />
          </div>
          <div >
          <img src={choes2} alt="" />
          </div>
          <div >
          <img src={choes3} alt="" />
          
          </div>
          
        </div>
       
        {!state &&<div className="Missing_part_card"  onClick={()=> setState(true)}></div>}
        {state &&<div className="Missing_part_card2"></div>}
        
        </div>
    </div>
  )
}
