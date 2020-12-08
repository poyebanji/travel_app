import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTwitter ,faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'


function App() {
  return (
    <div >
     

      <React.Fragment >
        <div className='footer-container'>

      <FontAwesomeIcon icon={faTwitter}  />&nbsp;
      <FontAwesomeIcon icon={faFacebookF} />&nbsp;
      <FontAwesomeIcon icon={faInstagram} />  
      </div>

      </React.Fragment>
    
    </div>
  );
}

export default App;