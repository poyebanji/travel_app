import React from 'react';
import tourist from './tourist.jpg';
import './LandingNew.css';
import { Image } from 'semantic-ui-react';




//import ReactDOM from 'react-dom';

const  mainText = 'Your next adventure is just around the corner'
const mainParagraph = 'Join travel app and discover amazing adventures around you in seconds'
 

const LandingNew = () => {
  return (

    <div className="container-landing">  
    <div>
    <h1 className="h1text">{mainText}</h1>
      <h3>{mainParagraph}</h3> 
    </div>

      <Image src={tourist} size='massive' />
      {/* <img class="ui fluid image" fluid src={tourist} alt="" size='medium' ></img> */}
        
        
      </div>
    
       
     

  )
}

 export default LandingNew;