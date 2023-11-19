import './Fly_on_picture.css'
import gif1 from '../assets/ذب على الصورة/1.gif'
import gif2 from '../assets/ذب على الصورة/2.gif'
import gif3 from '../assets/ذب على الصورة/3.gif'
import gif4 from '../assets/ذب على الصورة/4.gif'
import { useState } from 'react'
export const Fly_on_picture = () => {
    const[imgNum,setimgNum]=useState(0);
  return (
    <div className='Fly_on_picture'>
        <div className="header" dir='rtl'>
        <p> فقرة </p>
            <button className="btn" type="button">
                  <strong>ذب على الصورة</strong>
                  <div id="container-stars">
                    <div id="stars"></div>
                  </div>
                  <div id="glow">
                    <div className="circle"></div>
                    <div className="circle"></div>
                  </div>
            </button>
        </div>
        <div className='images' onClick={()=>{setimgNum(pre=>pre+1)}}>
            {imgNum==1&&
            <div className="card">
            <img src={gif1} alt="" />
        </div>}
            {imgNum==2&&
              <div className="card2">
          </div>}
            {imgNum==3&&<div className="card3">
          </div>}
            {imgNum==4&&<div className="card4">
          </div>}
        </div>
    </div>
  )
}
