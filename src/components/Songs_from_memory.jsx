import './Songs_from_memory.css'
export const Songs_from_memory = () => {
  return (
    <div className='Songs_from_memory'> 
        <div className="header" dir='rtl'>
        <p>فقرة</p>
            <button className="btn" type="button">
                <strong>اغاني من الذاكرة</strong>
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
        <ul className="wave-menu">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>

        </div>
    </div>
  )
}
