import { useState } from 'react'
import './Celebrity_eyes.css'
import small1 from '../assets/عيون المشاهير/small1.jpg'
import Big1 from '../assets/عيون المشاهير/big1.jpg'
import small2 from '../assets/عيون المشاهير/small2.jpg'
import Big2 from '../assets/عيون المشاهير/big2.jpg'
import small3 from '../assets/عيون المشاهير/small3.jpg'
import Big3 from '../assets/عيون المشاهير/big3.jpg'
import small4 from '../assets/عيون المشاهير/small4.jpg'
import Big4 from '../assets/عيون المشاهير/big4.jpg'
import small5 from '../assets/عيون المشاهير/small5.jpg'
import Big5 from '../assets/عيون المشاهير/big5.jpg'
import small6 from '../assets/عيون المشاهير/small6.jpg'
import Big6 from '../assets/عيون المشاهير/big6.jpg'
export const Celebrity_eyes = () => {
    const[ImageNumber,setImageNumber]=useState(1);
  return (
    <div className='Celebrity_eyes'>
        <div className="header" dir='rtl'>
        <p> فقرة </p>
            <button className="btn" type="button">
                    <strong>عيون مشهورة</strong>
                    <div id="container-stars">
                        <div id="stars"></div>
                    </div>

                    <div id="glow">
                        <div className="circle"></div>
                        <div className="circle"></div>
                    </div>
            </button>

        </div>
        <div className='body' >
     
            {ImageNumber===1&&<div className="Celebrity_eyes_card">
                <div className="first-content">
                <img src={small1} />

                </div>
                <div className="second-content">
                <img src={Big1} />
                </div>
            </div>}
            {ImageNumber===2&&<div className="Celebrity_eyes_card">
                <div className="first-content">
                <img src={small2} />

                </div>
                <div className="second-content">
                <img src={Big2} />
                </div>
            </div>}
            {ImageNumber===3&&<div className="Celebrity_eyes_card">
                <div className="first-content">
                <img src={small3} />

                </div>
                <div className="second-content">
                <img src={Big3} />
                </div>
            </div>}
            {ImageNumber===4&&<div className="Celebrity_eyes_card">
                <div className="first-content">
                <img src={small4} />

                </div>
                <div className="second-content">
                <img src={Big4} />
                </div>
            </div>}
            {ImageNumber===5&&<div className="Celebrity_eyes_card">
                <div className="first-content">
                <img src={small5} />
                </div>
                <div className="second-content">
                <img src={Big5} />
                </div>
            </div>}
            {ImageNumber===6&&<div className="Celebrity_eyes_card">
                <div className="first-content">
                <img src={small6} />
                </div>
                <div className="second-content">
                <img src={Big6} />
                </div>
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
