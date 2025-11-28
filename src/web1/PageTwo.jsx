import background1 from '../assets/background1.jpg'
import static_web from '../assets/static_web1.jpg'
function PageTwo(){
    return(
        <>  
        <div className="big2" style={{backgroundImage:`url(${background1})`}}>
            <div className="title2">
                <h1>1.Introduction</h1>
            </div>
            <div className="content2">
                <div className="adr1">
                    <h1>What is Web.01</h1>
                </div>
                <div className="explain1">
                    <li>Web 1.0 (1990–2004) is the first generation of the Web, also called the Static Web.</li>
                    <li>Websites were read-only: users could view content but not interact.</li>
                    <li>Goal: publish information online.</li>
                    <li>Internet was slow (dial-up); browsers were basic (Netscape, early IE).</li>
                </div>
                <div className="photo1" style={{backgroundImage:`url(${static_web})`}}>

                </div>
            </div>
        </div>

        

        </>
    );
}

export default PageTwo ;