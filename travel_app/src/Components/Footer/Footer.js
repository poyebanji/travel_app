import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTwitter ,faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'


function App() {
  return (
    <div >
     

      <React.Fragment >
        <div className='footer-container mt-5'>
    <div className='office-container pt-3'>      
      <h5 className='pr-5'>1234, 25 Ave SW, Calagy</h5>
      <h5 className='pr-5'>Phone: 403-123-4567</h5>
      <h5>email: travel_app@gmail.com</h5>
      </div>

        <div className='social-container'>       
      <FontAwesomeIcon icon={faTwitter}  />&nbsp;
      <FontAwesomeIcon icon={faFacebookF} />&nbsp;
      <FontAwesomeIcon icon={faInstagram} />  
      </div>
      </div>

      </React.Fragment>
    
    </div>
  );
}

export default App;