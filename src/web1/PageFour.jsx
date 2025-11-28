import background1 from '../assets/background1.jpg'
function PageFour(){
    return(
        <div className="big4" style={{backgroundImage:`url(${background1})`}}>
           <div className="title4">
            <h1>3.Techs</h1>
           </div>

           <div className="content4">
                           <div className="adr3">
                               <h1>Technologies used in Web.01</h1>
                           </div>
                           <div className="explain3">
                               <li>HTML 1–3.2, HTTP, CGI scripts</li>
                               <li>Early JavaScript almost unused.</li>
                               <li>Browsers: Mosaic, Netscape, IE.</li>
                               <li>Hosting platforms: GeoCities, Tripod, Angelfire.</li>
                           </div>
                           
           
                           
                       </div>
        </div>
    )
}

export default PageFour ;