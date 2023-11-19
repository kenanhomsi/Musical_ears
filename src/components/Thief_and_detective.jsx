import { Thief_and_detective_data } from '../data/data'
import './Thief_and_detective.css'


export const Thief_and_detective = () => {
  return (
    <div className='Thief_and_detective'>
        <div className="header" dir='rtl'>
        <p>  فقرة </p>

            <button className="btn" type="button">
                    <strong>حرامي ومحقق</strong>
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
            <div className="left">
                {Thief_and_detective_data.data_col_1.map((e,index)=>{
                   return <button className="Btn"  key={index}>
                            <div className="sign">{index+1}</div>
                            <div className="text">{e}</div>
                 </button>
                })}
            </div>
            <div className="rigt">
            {Thief_and_detective_data.data_col_2.map((e,index)=>{
                   return <button className="Btn"  key={index}>
                   <div className="sign">{index+1}</div>
                   <div className="text">{e}</div>
                     </button>
                })}
            </div>
        </div>
    </div>
  )
}
