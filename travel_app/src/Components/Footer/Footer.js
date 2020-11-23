import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTwitter ,faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'


function App() {
  return (
    <div >
     

      <React.Fragment >
        <div className='footer-container'>
        <div>
      Footer Under Construction
      </div >
      <FontAwesomeIcon icon={faTwitter} />
      <FontAwesomeIcon icon={faFacebookF} />
      <FontAwesomeIcon icon={faInstagram} />  
      </div>

      </React.Fragment>
    
    </div>
  );
}

export default App;