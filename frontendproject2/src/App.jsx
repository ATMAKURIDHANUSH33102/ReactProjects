import { useState } from 'react'
import './App.css'
import {Link} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div id="header">
            <div className='logo'>
                Welcome to FED class in klu
            </div>
    </div>
    <div id='body'>
      
      <h1>HTML-CSS-React Topic Covered Till</h1>
      <h3>Date is 06/08/2025</h3>
      <h4>A.Dhanush</h4> 
    </div>

    <div id="section">
      
            
      <div className='card'>
                <img src="images/img1.png" alt="image1"></img>
                <label><Link to="/Page1"> Go To Page1 </Link></label>
      </div>
      <div className='card'>
                <img src="images/img4.jpeg" alt="image2"></img>
                <label><Link to="/Page2"> Go To Page2 </Link></label>
                </div>
      <div className='card'>
                <img src="images/img5.jpeg" alt="image3"></img>
                <label><Link to="/Page3">Go To Page3</Link>png</label>
      </div>
      <div className='card'>
                <img src="images/img3.jpeg" alt="image4"></img>
                <label> <Link to="/Page4">Go To Page4</Link> </label>
      </div>
      <div className='card'>
                <img src="images/img6.png" alt="image5"></img>
                <label>   <Link to="/Page5">Go To Page5</Link></label>
      </div>
      {/* <br /><br /> */}
      <div className='card'>
                <img src="images/img7.webp" alt="image6"></img>
                <label>   <Link to="/Page6">Go To Page6</Link></label>
      </div>
      {/* <br /><br /> */}
      <div className='card'>
                <img src="images/img8.jpeg" alt="image7"></img>
                <label>  <Link to="/Page7">Go To Page7</Link></label>
      </div>  
      </div>
      <div id="foote">
            Copyright @ 2025 All rights reserved
        </div>


      
    </>
  )
}

export default App
