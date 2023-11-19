/* eslint-disable react/no-unknown-property */
import { useState } from 'react' 
import image1_1 from '../assets/الفنان و الاغنية/1_1.png'
import image1_2 from '../assets/الفنان و الاغنية/1_2.png'
import image2_1 from '../assets/الفنان و الاغنية/2_1.png'
import image2_2 from '../assets/الفنان و الاغنية/2_2.png'
import image3_1 from '../assets/الفنان و الاغنية/3_1.png'
import image3_2 from '../assets/الفنان و الاغنية/3_2.png'
import image4_1 from '../assets/الفنان و الاغنية/4_1.png'
import image4_2 from '../assets/الفنان و الاغنية/4_2.png'
import image5_1 from '../assets/الفنان و الاغنية/5_1.png'
import image5_2 from '../assets/الفنان و الاغنية/5_2.png'
import image6_1 from '../assets/الفنان و الاغنية/6_1.png'
import image6_2 from '../assets/الفنان و الاغنية/6_2.png'

import './Artist_and_songs.css'
import { artist_and_song_data } from '../data/data'
/*react-easy-emoji */
import emoji from 'react-easy-emoji'
import './Artist_and_songs.css'
// const handleClick=()=>{
//     let x=document.getElementById('text');
//     x.style.display='block';
// }
export const Artist_and_song = () => {
  const[ImageNumber,setImageNumber]=useState(1);
  return (
    <div className='Artist_and_song'>
        <div className="header" dir='rtl'>
        <p>  فقرة </p>
            <button class="btn" type="button">
                  <strong>الغنان و الاغنية</strong>
                  <div id="container-stars">
                    <div id="stars"></div>
                  </div>

                  <div id="glow">
                    <div class="circle"></div>
                    <div class="circle"></div>
                  </div>
          </button>
        </div>
        <div className="body">
            
            {ImageNumber===1&&<div className="Artist_and_song_card">
                <div className="content">
                    <div className="back">
                        <img src={image1_2} alt="" />
                        <p>{emoji('👀  🗣')}</p>
              </div>
              <div className="front">
                        <h2>{artist_and_song_data.data[0]} </h2>
                        <p>{artist_and_song_data.data[1]}</p>
                        <img src={image1_1} alt="" />
                </div>
              </div>
       </div>}

       {ImageNumber===2&&<div className="Artist_and_song_card">
                <div className="content">
                    <div className="back">
                        <img src={image2_2} alt="" />
                        <p>{emoji('👀  🗣')}</p>
              </div>
              <div className="front">
                        <h2>{artist_and_song_data.data2[0]} </h2>
                        <p>{artist_and_song_data.data2[1]}</p>
                        <img src={image2_1} alt="" />
                </div>
              </div>
       </div>}

       {ImageNumber===3&&<div className="Artist_and_song_card">
                <div className="content">
                    <div className="back">
                        <img src={image3_2} alt="" />
                        <p>{emoji('👀  🗣')}</p>
              </div>
              <div className="front">
                        <h2>{artist_and_song_data.data3[0]} </h2>
                        <p>{artist_and_song_data.data3[1]}</p>
                        <img src={image3_1} alt="" />
                </div>
              </div>
       </div>}

       {ImageNumber===4&&<div className="Artist_and_song_card">
                <div className="content">
                    <div className="back">
                        <img src={image4_2} alt="" />
                        <p>{emoji('👀  🗣')}</p>
              </div>
              <div className="front">
                        <h2>{artist_and_song_data.data4[0]} </h2>
                        <p>{artist_and_song_data.data4[1]}</p>
                        <img src={image4_1} alt="" />
                </div>
              </div>
       </div>}

       {ImageNumber===5&&<div className="Artist_and_song_card">
                <div className="content">
                    <div className="back">
                        <img src={image5_2} alt="" />
                        <p>{emoji('👀  🗣')}</p>
              </div>
              <div className="front">
                        <h2>{artist_and_song_data.data5[0]} </h2>
                        <p>{artist_and_song_data.data5[1]}</p>
                        <img src={image5_1} alt="" />
                </div>
              </div>
       </div>}

       {ImageNumber===6&&<div className="Artist_and_song_card">
                <div className="content">
                    <div className="back">
                        <img src={image6_2} alt="" />
                        <p>{emoji('👀  🗣')}</p>
              </div>
              <div className="front">
                        <h2>{artist_and_song_data.data6[0]} </h2>
                        <p>{artist_and_song_data.data6[1]}</p>
                        <img src={image6_1} alt="" />
                </div>
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
