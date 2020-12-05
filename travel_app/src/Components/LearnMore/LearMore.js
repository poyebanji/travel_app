import React from 'react';
import travel from './travel.jpg';
import './LearnMore.css'
//import hiking from './hiking.jpg';



const LearnMore = ({onRouteChange}) =>  {
  return(
    <div>
      <div class="ui center aligned container body"> 
         <h1 className="wrap"> Welcome to Travel App</h1>
         <img class="ui fluid image" fluid src={travel} alt="" size='massive' ></img>
         
    
        </div>
     
      
      <a href='https://www.freepik.com/vectors/car'>Car vector created by pch.vector - www.freepik.com</a>
      <div class="ui center aligned container">
         <h1>Find your next experience in town</h1>
        <p>If you ever needed to experience a little 'out of house' experience  without booking a flight, you are in the right place.
         Discover fun activities around
       </p>
       <a href='./'>Explore your experiences</a>
     </div>
      
     <h2>How to get started</h2>

     <div class="ui stackable three column grid">
       <div class="column">
          <div class="ui raised segment">
           <div >
             <img class="ui fluid image" fluid src={travel} alt="" size='mini'></img>
             <button onClick = {()=>onRouteChange('signin')} ><h4>Sign up/Login</h4></button>
           </div>
         </div>
       </div>

       <div class="column">
          <div class="ui raised segment">
           <div>
             <img class="ui fluid image" fluid src={travel} alt="" size='mini'></img>
             <h4>Find your travel personality type</h4>
           </div>
         </div>
       </div>

       <div class="column">
          <div class="ui raised segment">
           <div >
             <img class="ui fluid image" fluid src={travel} alt="" size='mini'></img>
             <h4>Make a booking and enjoy your experience</h4>
           </div>
         </div>
       </div>
     </div>
    </div>
    
    

    
  )
};


export default LearnMore;