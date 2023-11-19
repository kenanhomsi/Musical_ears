const arrayOfNumber=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
const handleClick=(e)=>{
   const num= e.target.id;
   let elment=document.getElementById(num);
   elment.setAttribute('class','hidden');
   
}
export const Number_and_gift = () => {
  return (
    <div className='Number_and_gift'>
        <div className="header" dir='rtl'>
        <p> فقرة </p>

            <button className="btn" type="button">
                <strong>رقم واهديه</strong>
                <div id="container-stars">
                    <div id="stars"></div>
                </div>

                <div id="glow">
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>
            </button>

        </div>
        <div className="body" dir='rtl'>
            {
                arrayOfNumber.map((e)=>{
                    return<button className="Number_and_gift_button" id={`btn${e}`} key={e} onClick={handleClick}>{e}</button>
                })
              
            }
        </div>
    </div>
  )
}
