//PageOne.jsx
import background from '../assets/background.jpg'
function PageOne(){
return(
  <>
    <div className="big" style={{backgroundImage:`url(${background})`}}>
       <div className="concepts">
          <div className='title'>
            <h1>Web 1.0 - The Static Web (early 1990s – early 2000s)</h1>
          </div>
          <div className="lists">
            <h3>Sections : </h3>
            <li>Introduction to Web 1.0</li>
            <li>Characteristics of Web 1.0</li>
            <li>Technologies Behind Web 1.0</li>
            <li>Examples, Advantages & Limitations</li>
            <li>Impact and Transition to Web 2.0</li>
          </div>
       </div> 
    </div>

    <div className='small' style={{backgroundImage:`url(${background})`}}>
      <div className="smalll">
        <div className='title'>
            <h1>Web 1.0 - The Static Web (early 1990s – early 2000s)</h1>
        </div>
        <div className="lists">
            <h3>Sections : </h3>
            <li>Introduction to Web 1.0</li>
            <li>Characteristics of Web 1.0</li>
            <li>Technologies Behind Web 1.0</li>
            <li>Examples, Advantages & Limitations</li>
            <li>Impact and Transition to Web 2.0</li>
          </div>

      </div>
    </div>

  </>  
);
}
export default PageOne ;