import { MyLanguage_data } from '../data/data'
import './MyLanguage.css'


export const MyLanguage = () => {

  return (
    <div className='MyLanguage'>
        <div className="header" dir='rtl'>
        <p>فقرة </p>
        <button className="btn" type="button">
              <strong>لغتي</strong>
              <div id="container-stars">
                <div id="stars"></div>
              </div>

              <div id="glow">
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
          </button>
        </div>
        <div className='body'>
        <div className="social-links">
          <div id="twitter" className="social-btn flex-center">
            1
            <span>{MyLanguage_data.data[0]}</span>
          </div>
        
          <div id="linkedin" className="social-btn flex-center">
            2
            <span>{MyLanguage_data.data[1]}</span>
          </div>

          <div id="github" className="social-btn flex-center">
            3
            <span>{MyLanguage_data.data[2]}</span>
          </div>  
          </div>
       
        </div>
    </div>
  )
}
