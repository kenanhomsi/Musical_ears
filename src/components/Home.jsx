import { useState ,useEffect} from 'react'
import { Link } from 'react-router-dom';
export const Home = () => {
    const [mainClick,setmainClick]=useState(0);
     useEffect(()=>{
      if(mainClick===1){
        setTimeout(()=>{setmainClick(pre=>pre+1)},1400)
      } 
     },)
   
  return (
    <div className="container">
        <div className="header" dir='rtl' onClick={()=>{setmainClick(pre=>pre+1)}}>
            <p>برنامح </p>
           <Link to={'/links'}>
            <button className="Home_btn" type="button">
                <strong>مشاعر موسيقية</strong>
                <div id="container-stars">
                  <div id="stars"></div>
                </div>
                <div id="glow">
                  <div className="circle"></div>
                  <div className="circle"></div>
                </div>
            </button>
            </Link>
            
        </div>

        
        
    </div>
  )
}
