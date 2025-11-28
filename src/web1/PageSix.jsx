import background1 from '../assets/background1.jpg'
function PageSix(){
    return(
        <div className='big6' style={{backgroundImage:`url(${background1})`}}>
           <div className="title6">
            <h1>5.Advs&&Disadvs</h1>
           </div>
            <div className="content6">
                           <div className="adr6">
                               <h1>Advantages and Disadvantages</h1>
                           </div>
                           <div className="explain6">
                               <h1>Advantages</h1>
                               <li>Simple</li>
                               <li>Fast</li>
                               <li>Secure and easy to host</li>
                               <h1>Disadvantages</h1>
                               <li>No interactivity and poor design</li>
                               <li>Hard to update</li>
                               <li>No personalisation</li>
                               <li>No user Content</li>
                               <br /><br />
                               <div style={{width:"100%" , display:"flex" , flexDirection:"column" , alignItems:"center"}}>
                                  <h2 id='alert'>Need to go to another kind of web</h2>
                               </div>
                               
                           </div>
                           
                       </div>
        </div>
    )
}

export default PageSix ;