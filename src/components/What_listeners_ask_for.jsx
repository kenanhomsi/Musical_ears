export const What_listeners_ask_for = () => {
  return (
    <div className='What_listeners_ask_for'>
        <div className="header" dir='rtl'>
        <p> فقرة </p>

            <button className="btn" type="button">
                <strong>مايطلبه المستمعون</strong>
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
                  <div className="What_listeners_ask_for_loader">
                          <div className="loader-square"></div>
                          <div className="loader-square"></div>
                          <div className="loader-square"></div>
                          <div className="loader-square"></div>
                          <div className="loader-square"></div>
                          <div className="loader-square"></div>
                          <div className="loader-square"></div>
              </div>
        </div> 
    </div>
  )
}
