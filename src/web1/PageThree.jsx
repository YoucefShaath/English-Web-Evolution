import background1 from '../assets/background1.jpg'
function PageThree(){
    return(
      <div className="big3" style={{backgroundImage:`url(${background1})`}}>
        <div className="title3">
            <h1>2.Characteristics</h1>
        </div>
        <div className="content3">
                        <div className="adr2">
                            <h1>Characteristics of Web.01</h1>
                        </div>
                        <div className="explain2">
                            <li>Static Pages: HTML files, no automatic updates.</li>
                            <li>Read-Only: Users could read but not comment or upload.</li>
                            <li>Simple Design: Tables/frames, limited images, basic layouts.</li>
                            <li>Limited Communication: Email and forums, no interactive websites.</li>
                        </div>
                        
        
                        
                    </div>
      </div>
    );
}

export default PageThree ;