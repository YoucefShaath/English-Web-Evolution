import background1 from '../assets/background1.jpg'
import google from '../assets/google-1998-04.png'
import yahoo from '../assets/yahoo_desing.jpg'
function PageFive(){
    return(
        <div className="big5" style={{backgroundImage:`url(${background1})`}}>
          <div className="title5">
            <h1>4.ExamPles</h1>
          </div>
          <div className="content5">
            <div className="half1">
                <h1 style={{color:"white"}}>Google in 1998</h1>
                <div className="google-photo" style={{backgroundImage:`url(${google})`}}>
                  
                </div>
            </div>
            <div className="half2">
                <h1 style={{color:"white"}}>Yahoo in 1998</h1>
                <div className="yahoo-photo" style={{backgroundImage:`url(${yahoo})`}}>
                  
                </div>
            </div>
          </div>

        </div>
    )
}

export default PageFive