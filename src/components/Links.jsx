import {Link}from 'react-router-dom'
import logo from '../assets/Logo.png'
import { useState,useEffect } from 'react';
import './Links.css'
export const Links = () => {
  const [mainClick,setmainClick]=useState(0);
  useEffect(()=>{
 
     setTimeout(()=>{setmainClick(1)},1400)

  },[])
  return (
     <div className='main_links'>
      {mainClick==0&&<img src={logo} alt="" />}
        {mainClick==1&&
        <div className="links">
        <Link className='links_btns'  to={'/Missing_part'}> الجزء المفقود</Link>
        <Link className='links_btns' to={'/Ice_and_water'}> ثلج وماء</Link>
        <Link className='links_btns' to={'/Wisdom_today'}>حكمتك اليوم </Link>
        <Link className='links_btns' to={'/Celebrity_eyes'}>عيون مشهورة</Link>
        <Link className='links_btns' to={'/What_listeners_ask_for'}>مايطلبه المستعمون</Link>
        <Link className='links_btns' to={'/Guess_word'}>احزر الكلمة</Link>
        <Link className='links_btns' to={'/Number_and_gift'}>رقم وهدية</Link>
        <Link className='links_btns' to={'/Musical_hearings'}>مسامع موسيقية</Link>
        <Link className='links_btns' to={'/Songs_from_memory'}>أغاني من الذاكرة</Link>
        <Link className='links_btns' to={'/Leader'}>ليدر /leader</Link>
        <Link className='links_btns' to={'/Artist_and_song'}>الفنان و الاغنية</Link>
        <Link className='links_btns' to={'/MyLanguage'}>لغتي</Link>
        <Link className='links_btns' to={'/Fly_on_picture'}>ذب على الصورة</Link>
        <Link className='links_btns'  to={'/Thief_and_detective'}>حرامي و محقق</Link>
        </div>      }
        </div>
  )
}
