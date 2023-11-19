import  guess from '../assets/احزر الكلمة/guess1.jpeg'
import  guess2 from '../assets/احزر الكلمة/guess2.jpeg'
import  guess3 from '../assets/احزر الكلمة/guess3.jpeg'
import  guess4 from '../assets/احزر الكلمة/guess4.jpeg'
import  guess5 from '../assets/احزر الكلمة/guess5.jpeg'
import  guess6 from '../assets/احزر الكلمة/guess6.jpeg'
import { useState } from 'react'
import '../components/Guess_word.css'
export const Guess_word = () => {
    const[ImageNumber,setImageNumber]=useState(1);
  return (
    <div className='Guess_word'>
        <div className="header" dir='rtl'>
        <p>فقرة</p>
            <button className="btn" type="button">
                <strong>احزر الكلمة</strong>
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
            
            
            {ImageNumber===1&&<div className="Guess_word_card">
            <img src={guess} alt="" />
            </div>}
            {ImageNumber===2&&<div className="Guess_word_card2">
            <img src={guess2} alt="" />
            </div>}
            {ImageNumber===3&&<div className="Guess_word_card3">
            <img src={guess3} alt="" />
            </div>}
            {ImageNumber===4&&<div className="Guess_word_card4">
            <img src={guess4} alt="" />
            </div>}
            {ImageNumber===5&&<div className="Guess_word_card5">
            <img src={guess5} alt="" />
            </div>}
            {ImageNumber===6&&<div className="Guess_word_card6">
            <img src={guess6} alt="" />
            </div>}
        </div>
        <div className='ImageNumberBtn'>
    <button onClick={()=>{setImageNumber(1)}}>1</button>
    <button  onClick={()=>{setImageNumber(2)}}>2</button>
    <button  onClick={()=>{setImageNumber(3)}}>3</button>
    <button  onClick={()=>{setImageNumber(4)}}>4</button>
    <button  onClick={()=>{setImageNumber(5)}}>5</button>
    <button  onClick={()=>{setImageNumber(6)}}>6</button>
</div>
    </div>
  )
}
