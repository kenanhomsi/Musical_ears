import manpng from '../assets/ثلج وماء/man.png'
import womanpng from '../assets/ثلج وماء/woman.png'
export const Ice_and_water = () => {
  return (
    <div className='Ice_and_water'>
        <div className="header" dir='rtl'>
        <p>فقرة </p>
            <button className="btn" type="button">
                <strong>ثلج وماء</strong>
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
          <div className="man_and_woman">
              <div className="man">
                <img src={manpng} alt="" />
                 <div className="rating">
                    <input value="5" name="rate" id="star5" type="radio"/>
                    <label title="text" htmlFor="star5"></label>
                    <input value="4" name="rate" id="star4" type="radio"/>
                    <label title="text" htmlFor="star4"></label>
                    <input value="3" name="rate" id="star3" type="radio" checked=""/>
                    <label title="text" htmlFor="star3"></label>
                    <input value="2" name="rate" id="star2" type="radio"/>
                    <label title="text" htmlFor="star2"></label>
                    <input value="1" name="rate" id="star1" type="radio"/>
                    <label title="text" htmlFor="star1"></label>
                  </div> 
              </div>
              <div className="woman">
                <img src={womanpng} alt="" />
                <div className="rating">
                          <input type="radio" id="star-11" name="star-radio" value="star-1" />
                          <label htmlFor="star-11">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                          </label>
                          <input type="radio" id="star-22" name="star-radio" value="star-1"/>
                          <label htmlFor="star-22">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                          </label>
                          <input type="radio" id="star-33" name="star-radio" value="star-1"/>
                          <label htmlFor="star-33">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                          </label>
                          <input type="radio" id="star-44" name="star-radio" value="star-1"/>
                          <label htmlFor="star-44">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                          </label>
                          <input type="radio" id="star-55" name="star-radio" value="star-1"/>
                          <label htmlFor="star-55">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                          </label>
                  </div>
              </div>
          </div>
        
        <div className="loader">
            <div className="box box0">
              <div></div>
            </div>
            <div className="box box1">
              <div></div>
            </div>
            <div className="box box2">
              <div></div>
            </div>
            <div className="box box3">
              <div></div>
            </div>
            <div className="box box4">
              <div></div>
            </div>
            <div className="box box5">
              <div></div>
            </div>
            <div className="box box6">
              <div></div>
            </div>
            <div className="box box7">
              <div></div>
            </div>
            <div className="ground">
              <div></div>
            </div>
          </div>
        </div>
    </div>
  )
}
